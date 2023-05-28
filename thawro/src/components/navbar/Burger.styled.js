import styled from 'styled-components';

var lineHeight = 5 //px

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  span {
    height: ${lineHeight}px;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: center;
    opacity: ${({ open }) => open ? '0' : '1'};
  }

  span.top-line{
    transform: ${({ open }) => open ? 'translateY(-20px)' : 'translateY(0)'};
  }

  span.bottom-line{
    transform: ${({ open }) => open ? 'translateY(20px)' : 'translateY(0)'};
  }

  .burger-middle div {
    height: ${lineHeight}px;
    position: absolute;
    top: -${lineHeight / 2}px;
    left: 0;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: center;

  }
  .burger-middle div.middle-line-1 {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
  .burger-middle div.middle-line-2 {
      transform: ${({ open }) => open ? 'rotate(45deg) ' : 'rotate(0)'};
  }
`;