import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

export function* setTask(action: types.GetTaskByIdAction) {
  try {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${action.payload}`);
    const data = yield response.json();
    yield put(actions.setTask(data));
  } catch (e) {
    yield console.log('error', e);
  }
}

export function* addTask(action: types.AddTaskAction) {
  try {
    yield put(actions.addTask(action.payload));
  } catch (e) {
    yield console.log('error', e);
  }
}

export function* removeTask(action: types.RemoveTaskByIdAction) {
  try {
    yield put(actions.removeTask(action.payload));
  } catch (e) {
    yield console.log('error', e);
  }
}

export function* changeTaskStatus(action: types.ChangeTaskStatusAction) {
  try {
    yield put(actions.changeTaskStatus(action.payload));
  } catch (e) {
    yield console.log('error', e);
  }
}

export function* addNewTask() {
  yield takeEvery('ADD_NEW_TASK', addTask);
}

export function* getTaskById() {
  yield takeEvery('GET_TASK_BY_ID', setTask);
}

export function* removeTaskById() {
  yield takeEvery('REMOVE_TASK_BY_ID', removeTask);
}

export function* changeTaskStatusById() {
  yield takeEvery('CHANGE_TASK_STATUS_BY_ID', changeTaskStatus);
}

export function* rootSaga() {
  yield all([
    addNewTask(),
    getTaskById(),
    removeTaskById(),
    changeTaskStatusById()
  ])
}