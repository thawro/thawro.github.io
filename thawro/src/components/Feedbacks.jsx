import React from "react";
/** @jsxImportSource theme-ui */

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='p-10 rounded-3xl xs:w-[320px] w-full'
    sg={{ background: "feedbackCardBackground" }}
  >
    <p sx={{ color: "text" }} className='font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p sx={{ color: "text" }} className='tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p sx={{ color: "text" }} className='font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p
            className='mt-1  text-[12px]'
            sx={{ color: "textSecondary" }}
          >
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div
      className={`mt-12 rounded-[20px]`}
      sg={{ background: "feedbacksBackground" }}
    >
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
        sg={{ background: "iconBackground" }}
      >
        <div variants={textVariant()}>
          <p
            className={styles.sectionSubText}
            sx={{ color: "textSecondary" }}
          >
            What others say
          </p>
          <h2
            className={styles.sectionHeadText}
            sx={{ color: "text" }}
          >
            Testimonials.
          </h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks", true);