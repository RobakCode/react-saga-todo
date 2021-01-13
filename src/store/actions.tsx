import * as types from './types'

export function getTaskById(id: number): types.GetTaskByIdAction {
  return {
    type: types.GET_TASK_BY_ID,
    payload: id
  }
}

export function setTask(item: types.NewTaskInterface): types.SetTaskAction {
  return {
    type: types.SET_TASK,
    payload: item
  }
}

export function addTask(item: types.NewTaskInterface): types.AddTaskAction {
  return {
    type: types.ADD_TASK,
    payload: item
  }
}

export function addNewTask(item: types.NewTaskInterface): types.AddNewTaskAction {
  return {
    type: types.ADD_NEW_TASK,
    payload: item
  }
}

export function removeTask(id:number): types.RemoveTaskAction {
  return {
    type: types.REMOVE_TASK,
    payload: id
  }
}

export function removeTaskById(id:number): types.RemoveTaskByIdAction {
  return {
    type: types.REMOVE_TASK_BY_ID,
    payload: id
  }
}

export function changeTaskStatus(data: types.ChangeStatusInterface): types.ChangeTaskStatusAction {
  return {
    type: types.CHANGE_TASK_STATUS,
    payload: data
  }
}

export function changeTaskStatusById(data: types.ChangeStatusInterface): types.ChangeTaskStatusByIdAction {
  return {
    type: types.CHANGE_TASK_STATUS_BY_ID,
    payload: data
  }
}