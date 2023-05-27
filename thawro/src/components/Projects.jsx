import React, { Suspense, useState, useEffect } from "react";
/** @jsxImportSource theme-ui */

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import Markdown from './Markdown'
import { GitHub } from "../assets";
import PopUpWindow from './PopUpWindow'


const ProjectInfo = ({ github_name, app_url }) => {
  const markdown_url = `https://raw.githubusercontent.com/thawro/${github_name}/main/INFO.md`
  const [markdown, setMarkdown] = useState("")

  const handleLoadError = () => {
    // Handle the error when the external URL is not accessible
    console.log("Failed to load the web component.");
    // Perform any necessary actions, such as displaying an error message or taking alternative rendering steps.
  };

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
  }, [markdown_url]);
  return <div>
    <Suspense fallback={null}>
      <Markdown markdown={markdown} />
      <hr />
      <h1
        className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-center`}
        sx={{ color: "text" }}
      >
        Demo
      </h1>
      <gradio-app space={`thawro/${github_name}`} onError={handleLoadError}></gradio-app>
    </Suspense>
  </div>
}



const ProjectCard = ({ index, project }) => {
  const { name, description, tags, image, github_name, app_url, app_icon } = project
  const [isOpen, setIsOpen] = useState(false);

  async function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  const urls = [
    {
      url: `https://github.com/thawro/${github_name}`,
      icon: GitHub
    },
    {
      url: app_url,
      icon: app_icon
    }
  ]
  return (
    <div id={`project-${index}`}>

      <div
        className='cursor-pointer p-5 rounded-2xl sm:w-[360px] w-full'
        sx={{ background: "backgroundTertiary" }}
        onClick={(openModal)}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={image}
            className='w-full h-full object-cover rounded-2xl'
          />

        </div>
        <div className='mt-5'>
          <h3
            className='font-bold text-[24px]'
            sx={{ color: "text" }}
          >
            {name}
          </h3>
          <p
            className='mt-2 text-[14px]'
            sx={{ color: "textSecondary" }}
          >
            {description}
          </p>
        </div>
        <div className='w-full flex justify-between'>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
          <div className='inset-0 flex justify-end m-3'>
            {urls.map((url, index) => (
              <a
                key={`url-${index}`}
                href={url.url}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(url.url, "_blank")
                  e.stopPropagation()
                }}
                className='glass border-[1px] border-solid mx-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                sx={{ borderColor: "backgroundSecondary" }}
              >
                <url.icon
                  className='w-[70%] h-[70%] object-contain pointer-events-none'

                />
              </a>
            ))}

          </div>
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
        <p
          className={styles.sectionSubText}
          sx={{ color: "textSecondary" }}
        >
          My work
        </p>
        <h2
          className={styles.sectionHeadText}
          sx={{ color: "text" }}
        >
          Projects.
        </h2>
      </div>
      <div className='w-full flex'>
        <p
          className='mt-3 text-[17px] max-w-3xl leading-[30px]'
          sx={{ color: "textSecondary" }}
        >
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