import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { ThemeProvider } from "./context/ThemeContext.jsx";
import {BrowserRouter} from "react-router";
import {store} from "./app/store.js";
import App from './App.jsx'

import './styles/main.scss'
import './styles/tw.css'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider initial="light">
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
