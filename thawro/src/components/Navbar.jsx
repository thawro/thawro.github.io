import React, { useEffect, useState, useRef } from 'react'
import { styles } from '../styles'
import { navLinks, socials } from '../constants'
import { logo, menu, close } from '../assets'
import { scrollToElement } from '../utils/motion'
import { Link, animateScroll as scroll } from "react-scroll";

const CloseOnOutsideClick = ({ children, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return <div className='sm:hidden' ref={ref}>{children}</div>;
};


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#080d1c]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold coursor-pointer flex'>
            Tomasz &nbsp;
            <span className='sm:block hidden'>
              | ML Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) =>
            <li
              key={link.id}
              className={`${active == link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-100} // Adjust this offset based on your layout
                duration={100}
              >{link.title}</Link>
            </li>
          )}
        </ul>
        <CloseOnOutsideClick onClose={() => { setToggle(false) }}>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-[60px] right-0  min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <Link
                      activeClass="active"
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-200} // Adjust this offset based on your layout
                      duration={100}
                    >{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CloseOnOutsideClick>
      </div>
    </nav>
  );
};

export default Navbar;