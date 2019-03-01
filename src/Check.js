import React from 'react'

class Check extends React.Component {
  render() {
    const { task, isDone, handleUpdate, id } = this.props
    return (
      <li>
        <input type="checkbox" onChange={() => handleUpdate(id)} checked={isDone} />
        {task}
      </li>
    )
  }
}

export default Check
