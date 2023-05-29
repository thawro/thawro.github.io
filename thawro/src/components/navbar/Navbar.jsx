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
const iconSize = 30

const ModeSwitcher = ({ isDark, toggleTheme }) => {
  const props = {
    fill: getThemeColor(isDark, "textPrimary"),
    width: iconSize,
    height: iconSize,
    className: 'pointer-events-none'
  }
  return <div onClick={toggleTheme} className='p-2'>
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
      className={`w-full flex items-center header`}
      sx={{ background: "backgroundPrimary" }}
    >
      <div className='container  w-full flex justify-between items-center mx-auto'>
        <ul className='flex flex-row py-[10px] '>
          <Link
            to="/"
            className='flex items-center cursor-pointer mr-1'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0)
            }}
          >
            <img
              src={logo}
              // alt="logo"
              style={{ width: 50, height: 50 }}
            />
            <p
              className={`text-[24px] ml-[10px] font-bold coursor-pointer flex`}
              sx={{ color: "textPrimary" }}
            >
              awro
            </p>
          </Link>
          {socials.map((url, index) => (
            <li className={`hidden md:flex ml-1 mr-0 cursor-pointer items-center`}>
              <a
                key={`social-${index}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(url.url, "_blank")
                }}
                className='p-2'
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
                    className='nav-item text-[${fontSize}] font-medium'
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
            active={active}
            socials={socials}
            setActive={setActive}
            modeSwitcher={<ModeSwitcher isDark={isDark} toggleTheme={toggleTheme} />}
            isDark={isDark}
            iconSize={iconSize}
          />
          <Burger open={open} setOpen={setOpen} isDark={isDark} iconSize={iconSize} />
        </div>
      </div>
      <style>{`
              .nav-item:hover {
                color: ${getThemeColor(isDark, "textSecondary")}
              }
      `}</style>
    </header>
  );
};

export default Navbar;