import React, { useState } from 'react'
/** @jsxImportSource theme-ui */

import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

import { styles } from '../styles'



const TechBadge = ({ index, name, icon }) => {
  const [showText, setShowText] = useState(false)

  return <>
    <div
      className=" xs:w-[250px] w-full h-full flex justify-center items-center "
    >
      <div>
        <div
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
          onClick={() => setShowText(~showText)}
          className="flex justify-center items-center text-center"
        >
          <img
            src={icon}
            alt={name}
            className={`${showText ? 'blur-[5px] scale-[110%]' : ''} 
            w-32 h-32 object-contain transition duration-500`}
          />

          <span
            className={`absolute cursor-default ${showText ? 'opacity-100 scale-[125%]' : 'opacity-0'}  
              drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
              transition duration-500 text-[18px] font-bold`}
            sx={{ color: "text" }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  </>
}
const Tech = () => {

  return (
    <>
      <div>
        <p
          className={styles.sectionSubText}
          sx={{ color: "textSecondary" }}
        >
          Which technologies do I use?
        </p>
        <h2
          className={styles.sectionHeadText}
          sx={{ color: "text" }}
        >
          Tech stack.
        </h2>
      </div>
      <div className="py-5 flex flex-row flex-wrap justify-center text-center gap-10">
        {technologies.map((technology, index) => (
          <TechBadge key={`tech-${index}`} index={index} {...technology} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Tech, "tech", true)