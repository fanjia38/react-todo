import * as React from 'react'
import { connect } from 'react-redux'

import { updateTaskStatus } from '../store'
import Check from './Check'
import { Card, List } from 'antd'

class Component extends React.Component {
  handleUpdateTaskStatus = id => {
    const updatedTodos = this.props.todoList.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
    this.props.updateTaskStatus(updatedTodos)
  }

  render() {
    return (
      <>
        <p>
          残りタスクは{this.props.todoList.filter(todo => !todo.isDone).length}
          個です。
        </p>
        <Card bordered={false} style={{ maxWidth: 400 }}>
          <List bordered={false}>
            {this.props.todoList
              .filter(todo => (this.props.isFiltered ? !todo.isDone : true))
              .map(todo => (
                <Check
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  isDone={todo.isDone}
                  handleUpdate={this.handleUpdateTaskStatus}
                />
              ))}
          </List>
        </Card>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    isFiltered: state.isFiltered
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTaskStatus: todoList => dispatch(updateTaskStatus(todoList))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
