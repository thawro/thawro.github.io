import { styles } from "../styles";
import React, { useEffect } from 'react'
import { Element } from "react-scroll";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const SectionWrapper = (Component, idName, useMotion) =>
    function HOC() {
        const controls = useAnimation();
        const [ref, inView] = useInView();

        const Variants = {
            hidden: {
                opacity: 0,
                y: 100
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: { ease: "easeOut", delay: 0.1, duration: 1.0 }
            },
        }

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
                        className={`container z-0 section`
                        }
                    >
                        < Component />
                    </motion.section>
                    :
                    <section className={`container z-0 section`}>
                        <Component />
                    </section>}
            </Element>
        )
    }


export default SectionWrapper