import React from 'react'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-20 h-20 object-containt' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </div>
    </div>
  )
}

const About = () => {

  return (
    <div id="about">
      <p className={styles.sectionSubText}>
        Introduction</p>
      <h2 className={styles.sectionHeadText}>
        Overview.</h2>
      <p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I finished Bachelor's degree in Biomedical Engineering and
        Master's degree in Artificial Intelligence both with 5.5 grade.
        With two years of experience as a Machine Learning Engineer,
        I possess a solid knowledge of Neural Networks algorithms.
        My tech stack includes Python, PyTorch Lightning, WandB,
        MLflow, Docker, and more. I excel in implementing Deep Learning
        algorithms for image and medical signal tasks. Currently,
        I am enhancing my knowledge of computer vision models for
        continued professional growth.
      </p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>

  )
}

export default SectionWrapper(About, "about", true)