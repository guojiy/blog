import * as React from 'react';
import '../assets/css/global.scss';
import {
    BrowserRouter
  } from "react-router-dom";
import MyRouter from '../router/index'
import Header from './Header'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <MyRouter />
            </BrowserRouter>
        </div>
    )
}
export default App;