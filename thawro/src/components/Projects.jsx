import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import Markdown from './Markdown'
import { Suspense, useState, useEffect } from 'react'
import { github } from "../assets";
import PopUpWindow from './PopUpWindow'


const ProjectInfo = ({ github_name, app_url }) => {
  const markdown_url = `https://raw.githubusercontent.com/thawro/${github_name}/main/INFO.md`
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(markdown_url);
        var text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    };

    fetchData();
  }, []);
  return <div>
    <Suspense fallback={null}>
      <Markdown markdown={markdown} />
      <hr />
      <h1 className={`${styles.heroHeadText} text-white text-center`}>Demo</h1>
      <gradio-app space={`thawro/${github_name}`}></gradio-app>
    </Suspense>
  </div>
}



const ProjectCard = ({ key, index, project }) => {
  const { name, description, tags, image, github_name, app_url, app_icon } = project
  const [isOpen, setIsOpen] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  var feedbacksSection = document.getElementById("feedbacks");

  async function openModal() {
    await sleep(100);
    setIsOpen(true);
    if (feedbacksSection !== null) {
      feedbacksSection.style.animation = "closePopUpAnimation 1s ease forwards"
      feedbacksSection.style.opacity = 0
    }
  };

  function closeModal() {
    setIsOpen(false);
    if (feedbacksSection !== null) {
      feedbacksSection.style.opacity = 1
      feedbacksSection.style.animation = "openPopUpAnimation 1s ease forwards"
    }
  };

  const urls = [
    {
      url: `https://github.com/thawro/${github_name}`,
      icon: github
    },
    {
      url: app_url,
      icon: app_icon
    }
  ]
  return (
    <div id={`project-${index}`}>

      <div
        className='cursor-pointer bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        onClick={(openModal)}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={image}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {urls.map((url, index) => (
              <a
                href={url.url}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(url.url, "_blank")
                  e.stopPropagation()
                }
                }
                className='pulsating mr-2 mt-2 bg-tertiary border-2 border-indigo-300/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={url.icon}
                  alt={url.icon}
                  className='w-3/4 h-3/4 object-contain pointer-events-none'
                />
              </a>
            ))}

          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>

      </div>
      <div>
        <PopUpWindow
          isOpen={isOpen}
          onClose={closeModal}
        >
          <ProjectInfo
            key={`project-${index}`}
            github_name={project.github_name}
            app_url={project.app_url}
          />
        </PopUpWindow>
      </div>
    </div>
  )
}




const Projects = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>
          My work</p>
        <h2 className={styles.sectionHeadText}>
          Projects.</h2>
      </div>
      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The Following projects show my skills as ML engineer.
          Each project is briefly described with links to code
          repositories and live demos in it. It reflects my ability
          to solve complex problems, work with different technologies,
          and manage projects effectively. Click on the project card to see more.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7 justify-center' id='projects-cards'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects", true)