import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.scss'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import useReducer from './reducers/useReducer.jsx'


// configuring the store using redux toolkit
const store = configureStore({
  reducer: {
    // Assigned the reducer to be used globally
    tasks: useReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Wrapping in Provider , for using the state globally  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
