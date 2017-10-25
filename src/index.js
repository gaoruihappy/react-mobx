import React from 'react'
import mobx from 'mobx'
import mobxReact from 'mobx-react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { Shared } from './store/index.js'
import App from './App/index.js'
import { observable, useStrict, action, runInAction } from 'mobx'

const shared = new Shared()
const colors = observable({
   foreground: '#000',
   background: '#fff'
});
render(
  <Provider shared={shared} colors={colors}>
    <App />
  </Provider>, document.getElementById('root'))