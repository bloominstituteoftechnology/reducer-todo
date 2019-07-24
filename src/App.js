import React from 'react';
import './App.css';
import {mainReducer} from './reducers/mainReducer'
import {StateProvider, initialState} from './state/StateProvider'
import {AddForm} from './components/AddForm'
import {ToDoList} from './components/ToDoList'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import * as reset from './styles/reset.css'
import * as global from './styles/global.css'

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`

function App() {
    return (
        <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <StateProvider initialState={initialState} reducer={mainReducer}>
                <AddForm />
                <ToDoList />
            </StateProvider>
        </ThemeProvider>
        </>
    );
}

export default App;


const theme = {
    primaryColor: 'palevioletred',
    secondaryColor: 'papayawhip',
    largeFont: '3.5rem',
    mediumFont: '2.8rem',
    smallFont: '2.0rem',
    tinyFont: '1.5rem',
    fontColor: 'aquamarine'
}