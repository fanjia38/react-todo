import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'

import MyApp from './components/MyApp'
import store from './store'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <CssBaseline />
        <MyApp />
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
