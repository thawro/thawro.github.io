import React, { useState } from 'react'
/** @jsxImportSource theme-ui */

import { styles } from '../../styles'
import { navLinks, socials } from '../../constants'
import { logo } from '../../assets'
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
import { Sun, Moon } from "../../assets";
import { useThemeUI } from "theme-ui";
import Burger from './Burger';
import Menu from './Menu';


const ModeSwitcher = ({ isDark, toggleTheme }) => {

  return <div onClick={toggleTheme}>
    {isDark ?
      <Sun
        fill="white"
        className='pointer-events-none'
        title="Switch to light theme"
      /> :
      <Moon
        fill="black"
        className='pointer-events-none'
        title="Switch to dark theme"
      />
    }
  </div>
}


const Navbar = ({ toggleTheme }) => {
  const context = useThemeUI()
  var isDark = context.colorMode === "dark"

  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center h-[90px] py-5 fixed top-0 z-20`}
      sx={{ background: "backgroundSecondary" }}
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
          <img
            src={logo}
            alt="logo"
            className='sm:w-[50px] sm:h-50[px] w-[40px] h-40[px] object-contain'
          />
          <p
            className='text-[22px] font-bold coursor-pointer flex'
            sx={{ color: "text" }}
          >
            Tomasz Hawro
          </p>
        </Link>
        <ul className='list-none hidden md:flex flex-row '>
          {navLinks.map((link, index) =>
            <li
              key={link.id}
              className="mx-4 hover:text-white text-[18px] font-medium cursor-pointer"
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
        <ul className='list-none flex flex-row '>
          {socials.map((url, index) => (
            <li
              className="mx-2 font-medium cursor-pointer"
            >
              <a
                key={`social-${index}`}
                className='object-contain cursor-pointer'
                // sx={{ background: "backgroundPrimary" }}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(url.url, "_blank")
                }}

              >
                <url.icon
                  className='w-[30px] h-[30px] object-contain cursor-pointer'
                  fill={`${isDark ? 'white' : 'black'}`}

                />
              </a>
            </li>
          ))}
          <li
            className='mx-2 hidden md:block cursor-pointer w-[30px] h-[30px]'
          >
            <ModeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </li>
        </ul>
        <div className='md:hidden'>
          <Menu
            open={open}
            setOpen={setOpen}
            navLinks={navLinks}
            socials={socials}
            active={active}
            setActive={setActive}
            modeSwitcher={<ModeSwitcher isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Burger open={open} setOpen={setOpen} isDark={isDark} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;