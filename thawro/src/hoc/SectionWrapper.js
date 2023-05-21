import { styles } from "../styles";
import React, { useEffect } from 'react'
import { Element } from "react-scroll";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from "../utils/motion";


const SectionWrapper = (Component, idName, useMotion) =>
    function HOC() {
        const controls = useAnimation();
        const [ref, inView] = useInView();

        const Variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
        }
        console.log("FADEEEEE", fadeIn())

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);
        return (
            <Element name={idName}>
                {useMotion ?
                    <motion.section
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={Variants}
                        className={`${styles.paddingX} max-w-7xl mx-auto  z-0  pb-[100px] mb-[100px]`
                        }
                    >
                        < Component />
                    </motion.section>
                    :
                    <section className={`${styles.paddingX} max-w-7xl mx-auto  z-0 mb-[100px]`}>
                        <Component />
                    </section>}
            </Element>
        )
    }


export default SectionWrapper