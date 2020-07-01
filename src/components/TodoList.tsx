import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../store'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear';
import type { Todo } from '../types/todo'
import type {Store} from '../types/store'

import { deleteTask, updateTaskStatus } from '../store'

const TodoList: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { todoList, isFiltered } = useSelector<State, Store>(store => store)

  const handleUpdate = (id: string): void => {
    const updatedTodos = todoList.map((todo: Todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
    dispatch(updateTaskStatus(updatedTodos))
  }

  const handleDelete = React.useCallback((id: string) => {
    dispatch(deleteTask(id))
  }, [deleteTask])

  return (
    <Box>
      <Typography align="center">
        残りタスクは{todoList.filter((todo: Todo) => !todo.isDone).length}個です。
      </Typography>
      <List>
        {todoList.filter((todo) => !isFiltered || !todo.isDone)
          .map((todo: Todo) => (
            <ListItem key={todo.id} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox color="default" onChange={() => handleUpdate(todo.id)} checked={todo.isDone} />
              </ListItemIcon>
              <ListItemText id={todo.id} primary={todo.task} onClick={() => handleUpdate(todo.id)} />
              <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default TodoList
