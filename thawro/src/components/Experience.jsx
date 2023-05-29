import React, { useEffect } from "react";
/** @jsxImportSource theme-ui */

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import SectionHeader from "./SectionHeader";
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { useThemeUI } from "theme-ui";
import { getThemeColor } from "../theme";

const ExperienceCard = ({ experience, isDark }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: getThemeColor(isDark, "backgroundSecondary"),
        color: getThemeColor(isDark, "textPrimary"),
      }}
      contentArrowStyle={{ borderRight: `7px solid gray` }}
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
          sx={{ color: "textSecondary" }}
        >
          {experience.title}
        </h3>
        <p
          className="text-[16px] font-semibold"
          style={{ margin: 0 }}
          sx={{ color: "textPrimary" }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider "
            sx={{ color: "textPrimary" }}
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
      <SectionHeader headText={"Work Experience."} subText={"What I have done so far"} />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor={getThemeColor(isDark, "textPrimary")}
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