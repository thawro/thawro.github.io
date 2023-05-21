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
            hidden: { opacity: 0, marginTop: 0 },
            visible: { opacity: 1, marginTop: -100, transition: { type: "spring", duration: 1 } },
        };

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);
        return (
            useMotion ?
                <Element name={idName}>
                    <motion.section
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={Variants}
                        // id={idName}
                        className={`${styles.paddingX} max-w-7xl mx-auto  z-0  pb-[100px] mb-[100px]`
                        }
                    >
                        {/* <span className='hash-span' id={idName}>
                            &nbsp;
                        </span> */}
                        < Component />
                    </motion.section>
                </Element>
                :
                <section
                    // id={idName}
                    className={`${styles.paddingX} max-w-7xl mx-auto  z-0 mb-[100px]`}
                >
                    <span className='hash-span' id={idName}>
                        &nbsp;
                    </span>
                    <Component />
                </section>
        )
    }


export default SectionWrapper