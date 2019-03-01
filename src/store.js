import * as redux from 'redux'

const initialState = {
  todoList: [],
  isFiltered: false
}

export const addTask = task => {
  return { type: 'ADD_TASK', payload: task }
}
export const updateTaskStatus = todoList => {
  return { type: 'UPDATE_TASK_STATUS', payload: todoList }
}
export const toggleFilter = status => {
  return { type: 'UPDATE_FILTER_STATUS', payload: status }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, todoList: [...state.todoList, action.payload] }
    case 'UPDATE_TASK_STATUS':
      return { ...state, todoList: action.payload }
    case 'UPDATE_FILTER_STATUS':
      return { ...state, isFiltered: action.payload }
    default:
      return state
  }
}

const store = redux.createStore(reducer)
export default store
