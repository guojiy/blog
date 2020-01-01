import * as React from 'react'
import Article from '../components/Article'
import Home from '../components/Home'
import List from '../components/List'
import {
    Switch,
    Route
  } from "react-router-dom";
const route = [
    {
        path: '/article',
        component: Article
    }
]
const routes = route.map(item => {
    <Route path={item.path}>
        <item.component />
    </Route>
})
class MyRouter extends React.Component {
     render() {
         return (
             <Switch>
                <Route path="/article">
                    <Article />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
             </Switch>
         )
     }
}

export default MyRouter;