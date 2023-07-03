import React, { useEffect } from "react";
/** @jsxImportSource theme-ui */

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { FaQuoteRight } from "react-icons/fa";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedinURL
}) => (
  <div
    className='p-7 rounded-3xl w-[40%]'
    style={{ flex: '0 0 auto' }}
    sx={{ background: "backgroundPrimary" }}
  >
    <FaQuoteRight sx={{ color: "textPrimary" }} />
    <div className='mt-[10px]'>
      <div className="pr-[10px] overflow-y-auto ">
        <p sx={{ color: "textPrimary" }} className='tracking-wider text-[16px] text-justify'>{testimonial}</p>
      </div>
      <div className='mt-[10px] flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p sx={{ color: "textPrimary" }} className='font-medium text-[18px]'>
            <a href={linkedinURL} target="_blank">
              <span
                sx={{ color: "textTertiary" }}
              >
                @
              </span><span sx={{ color: "textPrimary" }}> {name}</span></a>
          </p>
          <p
            className='mt-1 text-[14px]'
            sx={{ color: "textSecondary" }}
          >
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-[60px] h-[60px] rounded-full object-cover'
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {

  useEffect(() => {
    const testimonialsElement = document.getElementById("testimonials")
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      testimonialsElement.style.cursor = 'grabbing';
      testimonialsElement.style.userSelect = 'none';

      pos = {
        // The current scroll
        left: testimonialsElement.scrollLeft,
        top: testimonialsElement.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };
    }

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      // Scroll the element
      testimonialsElement.scrollTop = pos.top - dy;
      testimonialsElement.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      testimonialsElement.removeEventListener('mousemove', mouseMoveHandler);
      testimonialsElement.removeEventListener('mouseup', mouseUpHandler);
      testimonialsElement.style.cursor = 'grab';
      testimonialsElement.style.removeProperty('user-select');
    };
    testimonialsElement.addEventListener("mousedown", mouseDownHandler)
    testimonialsElement.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    return () => {
      testimonialsElement.removeEventListener('mousemove', mouseMoveHandler);
      testimonialsElement.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };


  }, [])

  return (
    <>
      <div>
        <p
          className={styles.sectionSubText}
          sx={{ color: "textPrimary" }}
        >
          What others say
        </p>
        <h2
          className={styles.sectionHeadText}
          sx={{ color: "textTertiary" }}
        >
          Testimonials.
        </h2>
      </div>

      <div
        className={`${styles.padding} rounded-2xl xl:mt-12 max-h-[650px] w-[100%]`}
        sx={{ background: "backgroundSecondary" }}
      >
        <div
          id="testimonials" className={`flex gap-7 overflow-auto`}
        // style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>

      </div>
    </>

  );
};

export default SectionWrapper(Feedbacks, "feedbacks", true);