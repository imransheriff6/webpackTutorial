import React, { useEffect, useState } from 'react';
import ExampleOne from "./components/Example1";
import ReduxHook from './components/ReduxHook';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { UserContext } from './contexts/userContext';
import ContextExample from './components/ContextEx1';
import ContextClass from './components/ContextCls'
import axios from 'axios';
function App() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
             .then((res)=>{
                setData(res.data)
             })
        return ()=>{
            console.log("component removed.....")
        }
    },[])
    return (
        <>
            <Router>
                <UserContext.Provider value={data}>
                    <Route exact path='/context'> <ContextExample /> </Route>
                    <Route exact path='/context-cls'><ContextClass/></Route>
                </UserContext.Provider>
                <Switch>
                    <Provider store={store}>
                        <Route exact path='/'><ExampleOne /></Route>
                        <Route exact path='/about'><ReduxHook /></Route>
                    </Provider>
                    <Route ><h1>Page not found</h1></Route>
                </Switch>
            </Router>
        </>
    )
}
export default App