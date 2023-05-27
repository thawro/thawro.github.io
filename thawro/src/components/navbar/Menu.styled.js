// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  opacity: ${({ open }) => open ? '1' : '0'};\
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  
  a {
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
  }
`;