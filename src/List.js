import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateTaskStatus } from './store'
import Check from './Check'

const List = () => {
  const dispatch = useDispatch()
  const { todoList, isFiltered } = useSelector(store => store)

  const handleUpdateTaskStatus = id => {
    const updatedTodos = todoList.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
    dispatch(updateTaskStatus(updatedTodos))
  }

  return (
    <>
      <p>
        残りタスクは{todoList.filter(todo => !todo.isDone).length}個です。
      </p>
      <ul>
        {todoList
          .filter(todo => (isFiltered ? !todo.isDone : true))
          .map(todo => (
            <Check
              key={todo.id}
              id={todo.id}
              task={todo.task}
              isDone={todo.isDone}
              handleUpdate={handleUpdateTaskStatus}
            />
          ))}
      </ul>
    </>
  )
}

export default List
