import React from 'react';
/** @jsxImportSource theme-ui */

import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
    const bg = { background: 'textPrimary' }
    return (
        <div className='flex justify-center items-center w-[30px] h-[30px]'>
            <StyledBurger
                onClick={() => setOpen(!open)}
                open={open}
                className='w-[30px] h-[30px]'
            >
                <span
                    className='top-line w-[30px]'
                    sx={bg}
                />
                <div className='burger-middle relative'>
                    <div className='middle-line-1 w-[30px]' sx={bg} />
                    <div className='middle-line-2 w-[30px]' sx={bg} />
                </div>
                <span className='bottom-line w-[30px]' sx={bg} />
            </StyledBurger>
        </div>
    )
}


export default Burger;