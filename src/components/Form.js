import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

import { addTask, toggleFilter } from '../store'

const Form = () => {
  const [inputText, setInputText] = useState('')

  const dispatch = useDispatch()
  const isFiltered = useSelector(store => store.isFiltered)

  const handleClickButton = useCallback(() => {
    if (inputText.length <= 0) return

    const newTodo = {
      id: _genUUID(),
      task: inputText,
      isDone: false
    }

    dispatch(addTask(newTodo))
    setInputText('')
  }, [inputText, setInputText, addTask])

  const handleChangeInput = useCallback((e) => {
    setInputText(e.target.value)
  }, [setInputText])

  const handleToggleFilter = useCallback(() => {
    dispatch(toggleFilter(!isFiltered))
  }, [isFiltered, toggleFilter])

  return (
    <Box p={2}>
      <TextField label="new task" variant="outlined" margin="normal" fullWidth value={inputText} onChange={handleChangeInput} />
      <Button variant="contained" color="primary" fullWidth onClick={handleClickButton} >
        送信
      </Button>
      <Grid container justify="flex-end">
        <Switch
          checked={isFiltered}
          onChange={handleToggleFilter}
          color="primary"
          name="filter"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Grid>
    </Box>
  )
}

const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8)
}

export default Form
