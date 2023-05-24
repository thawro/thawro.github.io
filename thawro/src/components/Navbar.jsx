import React, { useEffect, useState, useRef } from 'react'
/** @jsxImportSource theme-ui */

import { styles } from '../styles'
import { navLinks, socials } from '../constants'
import { logo, menu, close } from '../assets'
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
import { Switch, useColorMode } from "theme-ui";

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

  return <div className='md:hidden' ref={ref}>{children}</div>;
};


const Navbar = ({ toggleTheme }) => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
      sx={{ background: "backgroundPrimary" }}
    >
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
          <p
            className='text-[18px] font-bold coursor-pointer flex'
            sx={{ color: "text" }}
          >
            Tomasz &nbsp;
            <span className='sm:block hidden'>
              | ML Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((link, index) =>
            <li
              key={link.id}
              className="mx-5 hover:text-white text-[18px] font-medium cursor-pointer"
              sx={{ color: `${active === link.title ? "text" : "textSecondary"}` }}
              onClick={() => setActive(link.title)}
            >
              <ScrollLink
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-100} // Adjust this offset based on your layout
                duration={100}
              >{link.title}</ScrollLink>
            </li>
          )}
        </ul>
        <div className='flex '>
          {socials.map((url, index) => (
            <a
              key={`social-${index}`}
              className='
                w-9 h-9 object-contain mx-2
                cursor-pointer'
              sx={{ background: "backgroundPrimary", color: "text" }}
              onClick={(e) => {
                e.preventDefault()
                window.open(url.url, "_blank")
              }}

            >
              <img
                src={url.icon}
                alt={url.icon}
                className='w-9 h-9 object-contain cursor-pointer'
                sx={{ background: "backgroundPrimary" }}
              />
            </a>
          ))}

        </div>
        <div>
          <Switch
            onClick={toggleTheme}
          />
        </div>
        <CloseOnOutsideClick onClose={() => { setToggle(false) }}>
          <div className='md:hidden flex flex-1 justify-end items-center'>
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
                  <li key={link.id}>
                    <ScrollLink
                      activeClass="active"
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-200} // Adjust this offset based on your layout
                      duration={100}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}

                    >
                      <span
                        className="font-poppins font-medium cursor-pointer text-[16px]"
                        sx={{ color: `${active === link.title ? "text" : "textSecondary"}` }}
                      >
                        {link.title}
                      </span>

                    </ScrollLink>
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