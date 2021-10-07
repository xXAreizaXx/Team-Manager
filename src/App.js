import React from "react";
import { Provider } from "react-redux";
import Players from "./components/Player/Players";
import store from './store'
import './App.css'

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Team Manager</h1>
      <Players />
    </main>
  </Provider>
)

export default App;
