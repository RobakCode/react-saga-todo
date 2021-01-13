import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: rgba(255, 241, 226, 1);
  border: none;
  padding: 8px 24px;
  font-family: 'Regular';
  text-transform: lowercase;
  color: #000;
  fontt-size: 16px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: rgba(255, 241, 226, 0.7);
    transition: .3s;
  }
`;

export const ModalStyled = styled.div`
  pointer-events: ${({ open })  => open ? 'auto' : 'none' };
  display: ${({ open })  => open ? 'flex' : 'none' };
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
`;

export const ModalBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  padding: 32px;
  background: #fff;
`;

export const ModalTitleStyled = styled.h3`
  font-family: 'Bold';
  font-size: 24px;
  color: #000;
`;

export const ModalInputStyled = styled.input`
  font-family: 'Regular';
  font-size: 18px;
  color: #000;
  border: 1px solid #000;
  margin-top: 12px;
  padding: 8px;
  outline: none;
`;


export const ModalButtonStyled = styled.button`
  font-family: 'Regular';
  font-size: 18px;
  color: #fff;
  background: #A3080B;
  border: none;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  outline: none;
  cursor: pointer;
`;