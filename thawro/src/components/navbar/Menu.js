import React, { useEffect } from 'react';
/** @jsxImportSource theme-ui */

import { Link as ScrollLink } from "react-scroll";
import { StyledMenu } from './Menu.styled';
import { getThemeColor } from '../../theme';

const Menu = ({ open, setOpen, active, setActive, navLinks, socials, modeSwitcher, isDark, iconSize }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);
    return (
        <StyledMenu
            open={open}
            sx={{ background: "backgroundPrimary" }}
            className='flex items-center'
            onClick={() => {
                setOpen(!open);
            }}
        >
            <ul className='list-none flex justify-center items-center flex-col'>
                {navLinks.map((link) => (
                    <li key={link.id}
                        className='cursor-pointer justify-center p-6'
                    >
                        <ScrollLink
                            activeClass="active"
                            to={link.id}
                            spy={true}
                            smooth={true}
                            offset={-200} // Adjust this offset based on your layout
                            duration={100}
                            onClick={() => {
                                setOpen(!open);
                                setActive(link.title);
                            }}
                        >
                            <span
                                className="nav-item text-[2rem] font-bold"
                                sx={{ color: `${active === link.title ? "textSecondary" : "textPrimary"}` }}
                            >
                                {link.title}
                            </span>

                        </ScrollLink>
                    </li>
                ))}
                <li>
                    <ul className='flex flex-row'>
                        {socials.map((url, index) => (
                            <li
                                className="justify-center m-4 p-2 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.open(url.url, "_blank")
                                    e.stopPropagation()
                                }}
                            >
                                <a
                                    key={`social-${index}`}

                                >
                                    <url.icon
                                        className="cursor-pointer nav-item"
                                        fill={getThemeColor(isDark, "textPrimary")}
                                        width={iconSize}
                                        height={iconSize}
                                    />
                                </a>
                            </li>
                        ))}
                        <li className='justify-center m-4 cursor-pointer'>
                            {modeSwitcher}
                        </li>
                    </ul>
                </li>

            </ul>
            <style>{`
              .nav-item:hover {
                color: ${getThemeColor(isDark, "textSecondary")}
              }
      `}</style>

        </StyledMenu>
    )
}

export default Menu;