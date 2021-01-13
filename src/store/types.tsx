export const SET_TASK = 'SET_TASK';
export const ADD_TASK = 'ADD_TASK';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_TASK_BY_ID = 'REMOVE_TASK_BY_ID';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const CHANGE_TASK_STATUS_BY_ID = 'CHANGE_TASK_STATUS_BY_ID';

export interface TaskInterface {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface NewTaskInterface {
  userId: number,
  title: string,
  completed: boolean
}

export interface ChangeStatusInterface {
  id: number,
  completed: boolean
}

export interface SetTaskAction {
  type: typeof SET_TASK
  payload: any
}

export interface AddTaskAction {
  type: typeof ADD_TASK
  payload: NewTaskInterface
}

export interface AddNewTaskAction {
  type: typeof ADD_NEW_TASK
  payload: NewTaskInterface
}

export interface GetTaskByIdAction {
  type: typeof GET_TASK_BY_ID,
  payload: number
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK,
  payload: number
}

export interface RemoveTaskByIdAction {
  type: typeof REMOVE_TASK_BY_ID,
  payload: number
}

export interface ChangeTaskStatusAction {
  type: typeof CHANGE_TASK_STATUS,
  payload: ChangeStatusInterface
}

export interface ChangeTaskStatusByIdAction {
  type: typeof CHANGE_TASK_STATUS_BY_ID,
  payload: ChangeStatusInterface
}

export interface AppState {
  tasks: object[]
}