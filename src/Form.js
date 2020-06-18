import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTask, toggleFilter } from './store'

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
    <>
      <input type="text" name="task" value={inputText} onChange={handleChangeInput} />
      <button type="button" onClick={handleClickButton}>
        送信
      </button>
      <p>
        <button onClick={handleToggleFilter}>
          filterは{isFiltered ? 'on' : 'off'}です。
        </button>
      </p>
    </>
  )
}

const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8)
}

export default Form
