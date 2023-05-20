import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import Markdown from './Markdown'
import { Suspense, useState, useEffect } from 'react'
import { github } from "../assets";
import { CgClose } from 'react-icons/cg'


const ProjectInfo = ({ index, name, description, tags, image, github_name, app_url, app_icon }) => {
  const markdown_url = `https://raw.githubusercontent.com/thawro/${github_name}/main/INFO.md`
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(markdown_url);
        console.log(markdown_url)
        var text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    };

    fetchData();
  }, []);
  console.log(app_url)
  return <div>
    <Suspense fallback={null}>
      <Markdown markdown={markdown} />
      <hr />
      <h1 className={`${styles.heroHeadText} text-white text-center`}>Demo</h1>
      <gradio-app space={`thawro/${github_name}`}></gradio-app>
    </Suspense>
  </div>
}


const CustomModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Clicked on the overlay (outside the content)
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    transform: `scale(${isOpen ? "1" : "0"})`,
    opacity: isOpen ? 1 : 0,
    animation: 'openAnimation 1s ease forwards',
    width: '100vw',
    height: '100vh',
    paddingTop: '3em',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 9999,
    // display: 'flex',
    alignItems: 'center',
    // borderRadius: '80px',
    justifyContent: 'center',
  };

  const contentStyle = {
    maxWidth: '90vw',
    maxHeight: '80vh', // Adjust as needed to limit the height of the modal content
    margin: '10vh 5vw',
    // position: 'relative',
    overflow: 'auto',
    padding: '15px 30px',
    backgroundColor: 'black',
    borderRadius: '15px',
  }

  return (
    <div style={overlayStyle} onClick={handleOverlayClick}>
      <div style={contentStyle}>
        <CgClose onClick={onClose} className="float-right cursor-pointer text-[50px] text-white" />
        {children}
      </div>
    </div>
  );
}


const ProjectCard = ({ index, project }) => {
  const { name, description, tags, image, github_name, app_url, app_icon } = project
  const [isOpen, setIsOpen] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };


  async function openModal() {
    window.location.href = "#projects"
    await sleep(100);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >

      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
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
                className='ulsating mr-2 mt-2 bg-tertiary border-2 border-indigo-300/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
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
        <CustomModal
          isOpen={isOpen}
          onClose={closeModal}
        >
          <ProjectInfo
            key={`project-${index}`}
            index={index}
            {...project} />
        </CustomModal>
      </div>
    </motion.div >
  )
}




const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          My work</p>
        <h2 className={styles.sectionHeadText}>
          Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects show my skills as ML engineer.
          Each project is briefly described with links to code
          repositories and live demos in it. It reflects my ability
          to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")