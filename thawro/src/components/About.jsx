import React from "react";
/** @jsxImportSource theme-ui */

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc';
import { useThemeUI } from "theme-ui";


const ServiceCard = ({ index, title, icon }) => {
  const context = useThemeUI()
  var isDark = context.colorMode === "dark"

  return (
    <div className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-lg shadowed-card">
      <div
        className='rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        sx={{ backgroundColor: "backgroundSecondary" }}
      >
        <img src={icon} alt={title} className='w-[120px] h-[120px] object-containt' />
        <h3
          className='text-[24px] font-bold text-center'
          sx={{ color: "textPrimary" }}
        >
          {title}
        </h3>
      </div>
      <style>{`
      .shadowed-card {
        --tw-shadow: 0px 15px 40px -15px ${isDark ? "#444" : '#444'};
        --tw-shadow-colored: 0px 35px 120px -15px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
      `}</style>
    </div>
  )
}

const About = () => {

  return (
    <div id="about">
      <p
        className="sm:text-[18px] text-[14px] uppercase tracking-wider"
        sx={{ color: "textPrimary" }}
      >
        Introduction</p>
      <h2
        className={styles.sectionHeadText}
        sx={{ color: "textTertiary" }}
      >
        Overview.</h2>
      <div
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
        sx={{ color: "textPrimary" }}
      >
        I finished Bachelor's degree in Biomedical Engineering and
        Master's degree in Artificial Intelligence both with 5.5 grade (A+).
        With two years of experience as a Machine Learning Engineer,
        I possess a solid knowledge of Neural Networks algorithms.
        I specialize in implementing Deep Learning algorithms for
        image and medical signal tasks. Currently, I am enhancing my
        knowledge of computer vision models for continued professional growth.
        I feel most comfortable in the role of ML Engineer,
        where I can contribute to both the research involved in model training
        and the subsequent productisation process.
      </div>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>

  )
}

export default SectionWrapper(About, "about", true)