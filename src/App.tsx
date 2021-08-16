import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import './style/App.css';

const App =() => {
  return (
    <Switch>
        <Route path="/" component={Home}/>
    </Switch>
    );
}

export default App;
