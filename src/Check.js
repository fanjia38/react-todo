import React from 'react'

const Check = ({ task, isDone, handleUpdate, id }) => (
  <li>
    <input type="checkbox" onChange={() => handleUpdate(id)} checked={isDone} />
    {task}
  </li>
)

export default Check
