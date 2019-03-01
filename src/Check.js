import React from 'react'
import { List, Checkbox } from 'antd'

class Check extends React.Component {
  render() {
    const { task, isDone, handleUpdate, id } = this.props
    return (
      <List.Item>
        <Checkbox onChange={() => handleUpdate(id)} checked={isDone}>
          {task}
        </Checkbox>
      </List.Item>
    )
  }
}

export default Check
