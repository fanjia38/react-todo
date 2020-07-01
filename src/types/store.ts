import type { Todo } from './todo'

export interface Store {
  todoList: Todo[],
  isFiltered: boolean
}

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS'
export const UPDATE_FILTER_STATUS = 'UPDATE_FILTER_STATUS'

interface AddTaskAction {
  type: typeof ADD_TASK
  payload: Todo
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK
  payload: string
}

interface UpdateTaskStatusAction {
  type: typeof UPDATE_TASK_STATUS
  payload: Todo[]
}

interface UpdateFilterStatus {
  type: typeof UPDATE_FILTER_STATUS
  payload: boolean
}

export type ActionType = AddTaskAction | DeleteTaskAction | UpdateTaskStatusAction | UpdateFilterStatus
