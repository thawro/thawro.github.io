import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'



const TechBadge = ({ index, name, icon }) => {
  const [showText, setShowText] = useState(false)

  return <>
    <div
      className="xs:w-[250px] w-full h-full flex justify-center items-center "
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
          className="flex justify-center items-center text-center"
        >
          <img
            src={icon}
            alt={name}
            className={`${showText ? 'blur-[5px] scale-125' : ''} 
            w-28 h-28 object-contain transition duration-500`}
          />

          <span className={`absolute ${showText ? 'opacity-100 scale-125' : 'opacity-0'}  
              drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
              transition duration-500 text-white text-[18px] font-bold`}>{name}</span>
        </div>
      </motion.div>
    </div >
  </>
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Which technologies do I use?</p>
        <h2 className={styles.sectionHeadText}>
          Tech stack.</h2>
      </motion.div>
      <div className="py-5 flex flex-row flex-wrap justify-center text-center gap-10">
        {technologies.map((technology, index) => (
          <TechBadge index={index} {...technology} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Tech, "")