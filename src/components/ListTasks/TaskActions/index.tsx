import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WrapStyled, ButtonStyled, MenuWrapStyled, MenuStyled, MenuItemStyled, MenuUnactive } from './styled';

const TaskActions = ({ id, status }: { id: number, status: string }) => {
  const [ open, setOpen ] = useState(false);
  const dispatch = useDispatch();

  const changeStatusFunction = (status: boolean) => {
    setOpen( false );
    dispatch({ type: 'CHANGE_TASK_STATUS_BY_ID', payload: { id: id, completed: status } });
  }

  return (
    <WrapStyled>
      <ButtonStyled color={status} onClick={() => setOpen( !open )}><span className="material-icons">pending</span></ButtonStyled>
      <MenuWrapStyled color={status} open={open}>
        <MenuStyled>
          { status === 'done' && <MenuItemStyled onClick={() => dispatch({ type: 'REMOVE_TASK_BY_ID', payload: id })}>Remove</MenuItemStyled> }
          { status === 'new' && <MenuItemStyled onClick={() => changeStatusFunction(true)}>Done</MenuItemStyled> }
          { status === 'done' && <MenuItemStyled onClick={() => changeStatusFunction(false)}>Todo</MenuItemStyled> }
        </MenuStyled>
      </MenuWrapStyled>
      <MenuUnactive open={open} onClick={() => setOpen( false )}></MenuUnactive>
    </WrapStyled>
  );
}

export default TaskActions;