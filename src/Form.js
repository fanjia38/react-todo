import * as React from 'react'
import { connect } from 'react-redux'

import { addTask, toggleFilter } from './store'

class Component extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const inputed = e.target.task.value
    if (inputed.length <= 0) return

    const newTodo = {
      id: _genUUID(),
      task: inputed,
      isDone: false
    }

    this.props.addTask(newTodo)
    e.target.task.value = ''
  }

  handleToggleFilter = e => {
    this.props.toggleFilter(!this.props.isFiltered)
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" />
          <button type="submit">
            送信
          </button>
        </form>
        <p>
          <button onClick={this.handleToggleFilter}>
            filterは{this.props.isFiltered ? 'on' : 'off'}です。
          </button>
        </p>
      </React.Fragment>
    )
  }
}

const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8)
}

const mapStateToProps = state => {
  return {
    isFiltered: state.isFiltered
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task)),
    toggleFilter: status => dispatch(toggleFilter(status))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
