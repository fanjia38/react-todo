import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Form from './Form'
import List from './List'
import store from './store'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        <Form />
        <List />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
