import React, { Suspense, useState, useEffect } from "react";
/** @jsxImportSource theme-ui */

import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import Markdown from './Markdown'
import { GitHub } from "../assets";
import PopUpWindow from './PopUpWindow'
import { useThemeUI } from "theme-ui";
import { getThemeColor } from "../theme";
import { HuggingFace } from "../assets";
import SectionHeader from './SectionHeader'


const ProjectInfo = ({ github_name, content, demo }) => {
  const markdown_main_url = `https://raw.githubusercontent.com/thawro/${github_name}/main/INFO.md`
  const markdown_master_url = `https://raw.githubusercontent.com/thawro/${github_name}/master/INFO.md`

  const [postContent, setPostContent] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = await fetch(markdown_main_url);
        if (~response.ok){
          response = await fetch(markdown_master_url);
        }
        var text = await response.text();
        setPostContent(<Markdown markdown={text} />);
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    };

    if (content) {
      setPostContent(content)
    } else {
      fetchData();
    }
  }, [markdown_main_url, markdown_master_url]);

  return <div>
    <Suspense fallback={null}>
      {postContent}
      {demo &&
        <>
          <hr />
          <h1
            className={`lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-center`}
            sx={{ color: "textPrimary" }}
          >
            Demo
          </h1>
          {demo}
        </>
      }
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
    <div id={`project-${index}`} className="rounded-3xl project-card lg:w-[30%] md:w-[45%] w-[90%]">
      <div
        className='cursor-pointer h-full rounded-3xl border-[1px] flex flex-col'
        onClick={(openModal)}
        style={{ borderColor: getThemeColor(isDark, "popupOverlayBackground") }}
        sx={{ background: "backgroundSecondary" }}
      >
        <img
          src={image}
          alt={image}
          className='object-cover rounded-t-3xl h-[50%]'
        />
        <div className="grid flex-col flex-1 p-3 ">
          <div>
            <h3
              className='font-bold text-[20px]'
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
          </div>
          <div className="pt-3 mt-auto flex-1">
            <div className='flex justify-between items-center '>
              <ul className='flex flex-wrap gap-2'>
                {tags.map((tag, index) => (
                  <li
                    key={tag}
                    className="text-[14px] rounded-lg p-[2px]"
                    sx={{ color: "textSecondary" }}
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
              <div className='inset-0 flex justify-end mt-auto'>
                {urls.map((url, index) => (
                  (url.url !== null) &&
                  <a
                    key={`url-${index}`}
                    href={url.url}
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(url.url, "_blank")
                      e.stopPropagation()
                    }}
                    className='glass mx-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(${rgb}, 0.15), rgba(${rgb}, 0.4), rgba(${rgb}, 0.15))`
                    }}
                  >
                    <url.icon
                      className='w-[70%] h-[70%] object-contain pointer-events-none'
                      fill={getThemeColor(isDark, "textPrimary")}
                    />
                  </a>

                ))}

              </div>
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
            {...project}
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


const ProjectCardIcon = ({ isDark }) => {
  return (

    <div
      className='h-[25px] w-[18px] rounded-[6px] border-[1px]'
      style={{ borderColor: getThemeColor(isDark, "popupOverlayBackground") }}
      sx={{ background: "backgroundSecondary" }}
    >
    </div>)
}



const Projects = () => {
  const context = useThemeUI()
  var isDark = context.colorMode === "dark"
  var c = isDark ? 255 : 50
  var rgb = `${c}, ${c}, ${c}`

  return (
    <>
      <SectionHeader
        headText={"Projects."}
        subText={"My work"}
      />
      <div className='w-full flex'>
        <p
          className='mt-3 text-[17px] max-w-3xl leading-[30px]'
          sx={{ color: "textPrimary" }}
        >
          The Following projects show my skills as ML engineer.
          Each project is briefly described with links to code
          repositories and live demos in it. It reflects my ability
          to solve complex problems, work with different technologies,
          and manage projects effectively.
          <br className="mb-[10px]" />
          <p className="flex items-center flex-wrap gap-x-10 gap-y-2">
            <span
              className="flex items-center cursor-default"
              title="Click on the project card to see the interactive preview with demo included"
            >
              <ProjectCardIcon isDark={isDark} />
              &nbsp; - interactive preview
            </span>
            <span
              className="flex items-center cursor-default"
              title="Click on the github icon (bottom right) to open project's github repository"
            >
              <GitHub
                id="gh"
                width={25}
                height={25}
                fill={getThemeColor(isDark, "textPrimary")}

              />
              &nbsp; - code repository
            </span>
            <span
              className="flex items-center cursor-default"
              title="Click on the app icon (bottom right) to open demo hosted by HuggingFace"
            >
              <HuggingFace
                width={25}
                height={25}
                fill={getThemeColor(isDark, "textPrimary")} />
              &nbsp; - project demo
            </span>
          </p>
          <br />
        </p>
      </div>
      <div className='mt-[30px] flex flex-wrap gap-10 justify-center' id='projects-cards'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} isDark={isDark} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects", true)