import React, { useEffect } from "react";
/** @jsxImportSource theme-ui */

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { useThemeUI } from "theme-ui";


const ExperienceCard = ({ experience, isDark }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: `${isDark ? "#151030" : "#baaac3"}`,
        color: `${isDark ? "white" : "black"}`,
      }}
      contentArrowStyle={{ borderRight: `7px solid ${isDark ? "grey" : "grey"}` }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: '0px' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3
          className="text-[24px] font-bold"
          sx={{ color: "text" }}
        >
          {experience.title}
        </h3>
        <p
          className="text-[16px] font-semibold"
          style={{ margin: 0 }}
          sx={{ color: "textSecondary" }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider "
            sx={{ color: "textTertiary" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


const Experience = () => {
  const context = useThemeUI()
  var isDark = context.colorMode === "dark"

  return (
    <>
      <div>
        <p
          className={styles.sectionSubText}
          sx={{ color: "textSecondary" }}
        >
          What I have done so far
        </p>
        <h2
          className={styles.sectionHeadText}
          sx={{ color: "text" }}
        >
          Work Experience.
        </h2>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor={`${isDark ? "white" : "black"}`}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} isDark={isDark} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work", true)