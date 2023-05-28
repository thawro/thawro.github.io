import React, { useState } from 'react'
/** @jsxImportSource theme-ui */

import { navLinks, socials } from '../../constants'
import { logo } from '../../assets'
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
import { Sun, Moon } from "../../assets";
import { useThemeUI } from "theme-ui";
import Burger from './Burger';
import Menu from './Menu';
import { getThemeColor } from '../../theme';

var iconSize = "36px"

const ModeSwitcher = ({ isDark, toggleTheme }) => {
  const props = {
    fill: getThemeColor(isDark, "textPrimary"),
    width: iconSize,
    height: iconSize,
    className: 'pointer-events-none'
  }
  return <div onClick={toggleTheme}>
    {isDark ?
      <Sun
        title="Switch to light theme"
        {...props}
      /> :
      <Moon
        className='pointer-events-none'
        title="Switch to dark theme"
        {...props}
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
    <header
      className={`px-[15px] py-[10px] w-full flex items-center fixed top-0 z-20`}
      sx={{ background: "backgroundPrimary" }}
    >
      <div className='w-full flex justify-between items-center mx-auto'>
        <ul className='flex flex-row'>
          <Link
            to="/"
            className='flex items-center cursor-pointer'
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
              className={`text-[24px] ml-[10px] font-bold coursor-pointer flex`}
              sx={{ color: "textPrimary" }}
            >
              Tomasz Hawro
            </p>
          </Link>
          {socials.map((url, index) => (

            <li className={`ml-[${index === 0 ? '10' : '10'}px] mr-[${index === socials.length - 1 ? '0' : '10'}px] cursor-pointer flex items-center`}>
              <a
                key={`social-${index}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(url.url, "_blank")
                }}
              >
                <url.icon
                  className="cursor-pointer"
                  fill={getThemeColor(isDark, "textPrimary")}
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </li>
          ))}
        </ul>

        <nav className='main-nav'>
          <ul className='list-none hidden md:flex flex-row '>
            <li
              className="ml-[0px] mr-[10px] list-none flex-row cursor-pointer"
            >
              <ModeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </li>
            {navLinks.map((link, index) =>
              <li
                key={link.id}
                className={`ml-[20px] mr-[${index === navLinks.length - 1 ? '0' : '20'}px] cursor-pointer flex items-center`}
              >
                <ScrollLink
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100} // Adjust this offset based on your layout
                  duration={100}
                  onClick={() => setActive(link.title)}
                >
                  <span
                    sx={{ color: `${active === link.title ? "textSecondary" : "textPrimary"}` }}
                    className='text-[${fontSize}] font-medium'
                  >
                    {link.title}
                  </span>
                </ScrollLink>
              </li>
            )}

          </ul>

        </nav>
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
    </header>
  );
};

export default Navbar;