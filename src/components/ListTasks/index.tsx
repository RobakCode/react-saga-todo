import { useSelector } from 'react-redux';
import { Composition } from 'atomic-layout';
import { AppState, TaskInterface } from '../../store/types';
import Task from './Task';

const ListTasks = () => {
  const tasks = useSelector( (state: AppState) => state.tasks );
  return (
    <Composition templateRows="1fr">
      {tasks && tasks.map((item: TaskInterface | any) => <Task key={item.id} item={item} />)}
    </Composition>
  );
}

export default ListTasks;

