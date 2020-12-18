import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage';
import Article from './pages/article';
import Art from './pages/article';


function App() {
  return (
    <Switch>
      <Route default path='/' component={Homepage}/>
      <Route path='/article' component={Article}/>
      <Route path='/writeArticle' component={Art}/>

  </Switch>

  );
}

export default App;
