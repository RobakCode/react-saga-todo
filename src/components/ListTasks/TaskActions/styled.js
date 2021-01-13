import styled from 'styled-components';

export const WrapStyled = styled.div`
  position: relative;
`;

export const ButtonStyled = styled.button`
  background: unset;
  color: ${({ color })  => color === 'done' ? 'rgba(245, 212, 183, 1)' : 'rgba(255, 241, 226, 1)' };
  border: none;
  padding: 8px;
  transform: rotate(-90deg);
  text-transform: lowercase;
  fontt-size: 16px;
  cursor: pointer;
  outline: none;
  transition: .3s;

  &:hover {
    color: ${({ color })  => color === 'done' ? 'rgba(245, 212, 183, .7)' : 'rgba(255, 241, 226, .7)' };
    transition: .3s;
  }

  span {
    font-size: 32px;
  }
`;

export const MenuWrapStyled = styled.nav`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: ${({ color })  => color === 'done' ? 'rgba(245, 212, 183, 1)' : 'rgba(255, 241, 226, 1)' };
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 2;

  pointer-eventts: ${({ open })  => open ? 'auto' : 'none' };
  display: ${({ open })  => open ? 'block' : 'none' };
`;

export const MenuStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 2;
`;

export const MenuItemStyled = styled.li`
  font-family: 'Thin';
  font-size: 16px;
  padding: 8px 16px;
  margin-bottom: 8px;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MenuUnactive = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: ${({ open })  => open ? 'auto' : 'none' };
  display: ${({ open })  => open ? 'block' : 'none' };
`;