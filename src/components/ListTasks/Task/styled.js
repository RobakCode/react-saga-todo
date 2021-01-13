import styled from 'styled-components';

const TaskStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 24px 16px;
  margin-bottom: 24px;
  background-color: ${({ color })  => color === 'done' ? '#FFF1E2' : '#F5D4B7' };
`;

const TaskBody = styled.article`
  display: flex;
  flex-direction: column;
`;

const TaskTitle = styled.h2`
  font-family: 'Bold';
  font-size: 24px;
  line-height: 1;
  margin-bottom: 8px;
  color: #000;
`;

const ActionsStyled = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export {
  TaskStyled,
  TaskBody,
  TaskTitle,
  ActionsStyled
}