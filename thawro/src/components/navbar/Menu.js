import React, { useEffect } from 'react';
/** @jsxImportSource theme-ui */

import { Link as ScrollLink } from "react-scroll";
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen, active, setActive, navLinks, modeSwitcher }) => {
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
        >
            <ul className='list-none flex justify-center items-center flex-col'>
                {navLinks.map((link) => (
                    <li key={link.id}
                        className=' cursor-pointer justify-center py-6'
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
                                className="text-[2rem] font-bold"
                                sx={{ color: `${active === link.title ? "textSecondary" : "textPrimary"}` }}
                            >
                                {link.title}
                            </span>

                        </ScrollLink>
                    </li>
                ))}
                <li className='w-full flex items-center justify-center px-6 py-4 cursor-pointer '>
                    <div
                        className='w-[2rem] h-[2rem]'

                    >
                        {modeSwitcher}
                    </div>
                </li>
            </ul>

        </StyledMenu>
    )
}

export default Menu;