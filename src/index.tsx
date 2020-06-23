import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { PersistGate } from 'redux-persist/integration/react'

import MyApp from './components/MyApp'
import { store, persistor } from './store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CssBaseline />
      <MyApp />
    </PersistGate>
  </Provider>,
  rootElement
)
