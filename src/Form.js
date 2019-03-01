import * as React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Switch } from 'antd'

import { addTask, toggleFilter } from '../store'

class Component extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const inputed = e.target['task'].value
    if (inputed.length <= 0) return

    const newTodo = {
      id: _genUUID(),
      task: inputed,
      isDone: false
    }

    this.props.addTask(newTodo)
    e.target['task'].value = ''
  }

  handleToggleFilter = e => {
    this.props.toggleFilter(!this.props.isFiltered)
  }

  render() {
    return (
      <>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input name="task" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => this.handleSubmit()}
            >
              送信
            </Button>
          </Form.Item>
        </Form>
        <p>
          filterは{this.props.isFiltered ? 'on' : 'off'}です。
          <Switch defaultChecked={false} onChange={this.handleToggleFilter} />
        </p>
      </>
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
