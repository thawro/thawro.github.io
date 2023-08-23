import React from "react";
/** @jsxImportSource theme-ui */

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <div className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div
            className='w-5 h-5 rounded-full'
            sx={{ background: "textTertiary" }}
          />
          <div
            className='w-1 sm:h-80 h-40'
            sx={{ background: "heroLine" }}
          />
        </div>

        <div>
          <h1
            className={styles.heroHeadText}
            sx={{ color: "textPrimary" }}
          >
            Hi, I'm <span sx={{ color: "textTertiary" }}>Tomasz</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2`}
            sx={{ color: "textPrimary" }}
          >
            I like to implement DL architectures from scratch <br/> and develop clean, efficient and reproducible code <br/>for Machine Learning projects.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100} // Adjust this offset based on your layout
          duration={100}
          className='z-1 cursor-pointer w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2'
          sx={{ borderColor: "textPrimary" }}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full mb-1'
            sx={{ background: "textPrimary" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero", false);