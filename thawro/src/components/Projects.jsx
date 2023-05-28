import React, { Suspense, useState, useEffect } from "react";
/** @jsxImportSource theme-ui */

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import Markdown from './Markdown'
import { GitHub } from "../assets";
import PopUpWindow from './PopUpWindow'
import { useThemeUI } from "theme-ui";
import { getThemeColor } from "../theme";

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
        className={`lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-center`}
        sx={{ color: "textPrimary" }}
      >
        Demo
      </h1>
      <gradio-app space={`thawro/${github_name}`} onError={handleLoadError}></gradio-app>
    </Suspense>
  </div>
}



const ProjectCard = ({ index, project, isDark }) => {
  const { name, description, tags, image, github_name, app_url, app_icon } = project
  const [isOpen, setIsOpen] = useState(false);

  var c = isDark ? 255 : 50
  var rgb = `${c}, ${c}, ${c}`

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
    <div id={`project-${index}`} className=" rounded-3xl project-card lg:w-[30%] md:w-[45%]">
      <div
        className='cursor-pointer rounded-3xl border-[1px]'
        onClick={(openModal)}
        style={{ borderColor: getThemeColor(isDark, "popupOverlayBackground") }}
        sx={{ background: "backgroundSecondary" }}
      >
        <img
          src={image}
          alt={image}
          className='object-cover rounded-t-3xl'
        />

        <div className={`p-3`}>
          <h3
            className='font-bold text-[24px]'
            sx={{ color: "textPrimary" }}
          >
            {name}
          </h3>
          <p
            className='mt-2 text-[14px]'
            sx={{ color: "textPrimary" }}
          >
            {description}
          </p>
          <div className='flex justify-between'>
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <p
                  key={tag.name}
                  className="text-[14px]"
                  sx={{ color: "textSecondary" }}
                >
                  #{tag.name}
                </p>
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
                  className='glass mx-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  // sx={{ borderColor: "backgroundPrimary" }}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(${rgb}, 0.15), rgba(${rgb}, 0.4), rgba(${rgb}, 0.15))`
                  }}
                >
                  <url.icon
                    className='w-[70%] h-[70%] object-contain pointer-events-none'

                  />
                </a>
              ))}

            </div>
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
      <style>
        {`
        .glass:hover {
          box-shadow: 0 0 0.75rem rgba(${rgb}, 0.7);
        }
        `}
      </style>
    </div>
  )
}




const Projects = () => {
  const context = useThemeUI()
  var isDark = context.colorMode === "dark"

  return (
    <>
      <div>
        <p
          className={styles.sectionSubText}
          sx={{ color: "textPrimary" }}
        >
          My work
        </p>
        <h2
          className={styles.sectionHeadText}
          sx={{ color: "textTertiary" }}
        >
          Projects.
        </h2>
      </div>
      <div className='w-full flex'>
        <p
          className='mt-3 text-[17px] max-w-3xl leading-[30px]'
          sx={{ color: "textPrimary" }}
        >
          The Following projects show my skills as ML engineer.
          Each project is briefly described with links to code
          repositories and live demos in it. It reflects my ability
          to solve complex problems, work with different technologies,
          and manage projects effectively. Click on the project card to see more.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-10 justify-center' id='projects-cards'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} isDark={isDark} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects", true)