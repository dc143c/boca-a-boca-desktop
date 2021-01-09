import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

export default function App(){

    return(
        <>
        <Router>
        <Sidebar />
            <Switch>
                <Route path='/Home' exact component={Home}/>
            </Switch>
        </Router>
        </>
    );
}