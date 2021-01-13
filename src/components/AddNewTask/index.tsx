import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/types';
import { ButtonStyled, ModalStyled, ModalBodyStyled, ModalTitleStyled, ModalInputStyled, ModalButtonStyled } from './styled';

const AddNewTask = () => {
  const count = useSelector((state: AppState) => state.tasks.length);
  const dispatch = useDispatch();

  const [ open, setOpen ] = useState(false);
  const [ input, setInput ] = useState('');

  const addNewTask = () => {
    setOpen(false);
    setInput('');
    dispatch({ type: 'ADD_NEW_TASK', payload: { userId: 1, title: input, completed: false } });
  }

  return (
    <Fragment>
    {count && count < 9 && <ButtonStyled onClick={() => setOpen(true)}>Add new task</ButtonStyled> }
    <ModalStyled open={open}>
      <ModalBodyStyled>
        <ModalTitleStyled>Add task</ModalTitleStyled>
        <ModalInputStyled value={input} onChange={(event: any) => setInput(event.target.value)} />
        <ModalButtonStyled onClick={() => addNewTask()}>Save</ModalButtonStyled>
      </ModalBodyStyled>
    </ModalStyled>
    </Fragment>
  );
}

export default AddNewTask;