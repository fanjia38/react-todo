import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import type { Todo } from '../types/todo'

import { updateTaskStatus } from '../store'

const TodoList: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { todoList, isFiltered } = useSelector(store => store)

  const handleUpdate = (id: string): void => {
    const updatedTodos = todoList.map((todo: Todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
    dispatch(updateTaskStatus(updatedTodos))
  }

  const enableList = React.useMemo(() => {
    return todoList.filter((todo: Todo) => isFiltered ? !todo.isDone : true)
  }, [todoList, isFiltered])

  const disableList = React.useMemo(() => {
    return todoList.filter((todo: Todo) => isFiltered ? todo.isDone : false)
  }, [todoList, isFiltered])

  return (
    <Box>
      <Typography align="center">
        残りタスクは{todoList.filter((todo: Todo) => !todo.isDone).length}個です。
      </Typography>
      <List>
        {enableList
          .map((todo: Todo) => (
            <ListItem key={todo.id} role={undefined} dense button>
              <FormControlLabel
                control={
                  <Checkbox color="default" onChange={() => handleUpdate(todo.id)} checked={todo.isDone} />
                }
                label={todo.task}
              />
            </ListItem>
          ))
        }
        {disableList.map((todo: Todo) => (
          <ListItem key={todo.id} role={undefined} dense button>
            <FormControlLabel
              control={
                <Checkbox color="default" disabled checked />
              }
              label={todo.task}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TodoList
