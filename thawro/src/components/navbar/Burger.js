import React from 'react';
/** @jsxImportSource theme-ui */

import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
    const bg = { background: 'textPrimary' }
    return (
        <div className='flex justify-center items-center'>
            <StyledBurger
                onClick={() => setOpen(!open)}
                open={open}
            >
                <span
                    className='top-line'
                    sx={bg}
                />
                <div className='burger-middle relative'>
                    <div className='middle-line-1' sx={bg} />
                    <div className='middle-line-2' sx={bg} />
                </div>
                <span className='bottom-line' sx={bg} />
            </StyledBurger>
        </div>
    )
}


export default Burger;