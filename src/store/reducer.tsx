import * as types from './types';

const initialState: types.AppState = {
  tasks: []
}

const reducer = (state = initialState, action: types.SetTaskAction | types.RemoveTaskAction | types.ChangeTaskStatusAction | types.AddTaskAction) => {
  switch (action.type) {
    case types.SET_TASK:
      return {
        ...state,
        tasks: [ ...state.tasks, action.payload ]
      };
    case types.ADD_TASK:
      let find = false;
      const ids: any = [];
      let NewId = 1;
      state.tasks.map( (item: types.TaskInterface | any) => ids.push(item.id) );
      /**
       * Find new Id
       */
      while ( !find ) {
        const random = Math.floor(Math.random() * 200) + 1;
        if ( !ids.find( (x: number) => x === random ) ) {
          NewId = random;
          find = true;
        }
      }
      /**
       * Create new Tasks array
       */
      const createTasks = [ ...state.tasks ];
      createTasks.push({ ...action.payload, id: NewId });
      return {
        ...state,
        tasks: createTasks
      };
    case types.REMOVE_TASK:
      const newTasks = state.tasks.filter((item: types.TaskInterface | any) => item.id !== action.payload);
      return {
        ...state,
        tasks: newTasks
      };
    case types.CHANGE_TASK_STATUS:
      const id = action.payload.id;
      const status = action.payload.completed;
      const changeTask = state.tasks.findIndex((item: types.TaskInterface | any) => item.id === id);
      const tasks: types.TaskInterface[] | any = [...state.tasks];
      tasks[changeTask].completed = status;
      return {
        ...state,
        tasks: tasks
      };
    default:
      return state
  }
}

export default reducer;