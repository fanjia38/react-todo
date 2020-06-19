import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

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
      <TextField id="standard-basic" label="new task" variant="outlined" value={inputText} onChange={handleChangeInput} />
      <Button variant="contained" color="primary" onClick={handleClickButton} >
        送信
      </Button>
      <p>
        <Button color={isFiltered ? 'primary' : 'default'} onClick={handleToggleFilter}>
          filterは {isFiltered ? 'on' : 'off'} です
        </Button>
      </p>
    </Box>
  )
}

const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8)
}

export default Form
