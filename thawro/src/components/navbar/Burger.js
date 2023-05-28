import React from 'react';
/** @jsxImportSource theme-ui */

import { StyledBurger } from './Burger.styled';


const Burger = ({ open, setOpen, iconSize }) => {
    const bg = { background: 'textPrimary' }
    return (
        <div
            className={`flex justify-center items-center mr-[8px]`}
            style={{ width: iconSize, height: iconSize }}
        >
            <StyledBurger
                onClick={() => setOpen(!open)}
                open={open}
                style={{ width: iconSize, height: iconSize }}
            >
                <span
                    className={`top-line`}
                    style={{ width: iconSize }}
                    sx={bg}
                />
                <div className='burger-middle relative'>
                    <div
                        className="middle-line-1" sx={bg}
                        style={{ width: iconSize }}
                    />
                    <div
                        className="middle-line-2" sx={bg}
                        style={{ width: iconSize }}
                    />
                </div>
                <span
                    className="bottom-line" sx={bg}
                    style={{ width: iconSize }}
                />
            </StyledBurger>
        </div>
    )
}


export default Burger;