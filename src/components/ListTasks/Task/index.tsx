import { TaskInterface } from '../../../store/types';
import TaskActions from '../TaskActions';
import { TaskStyled, TaskBody, TaskTitle, ActionsStyled } from './styled';

const Task = ({item}: { item: TaskInterface }) => (
  <TaskStyled color={ item.completed ? 'done' : 'new' }>
    <TaskBody>
      <TaskTitle>{ item.title }</TaskTitle>
    </TaskBody>
    <ActionsStyled>
      <TaskActions id={item.id} status={ item.completed ? 'done' : 'new' }></TaskActions>
    </ActionsStyled>
  </TaskStyled>
);

export default Task;