import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import Players from "./components/Player/Players";
import store from './store'
import Styles from './App.styles'

const Main = styled.main`${Styles.mainContainer}`

const App = () => (
  <Provider store={store}>
    <Main>
      <h1>Team Manager</h1>
      <Players />
    </Main>
  </Provider>
)

export default App;
