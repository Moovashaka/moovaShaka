import React, { Component } from 'react';
import Layout from '../src/layout/Layout.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Admin from './scenes/Admin';
import Writings from './scenes/Writings';
import Settings from './scenes/Settings';

class App extends Component {
  state = {
    fields: {}
  };
  onChange = updatedValue => {
    this.setState({  fields: {
      ...this.state.fields,
      ...updatedValue }});
  }
  render() {
    return (
      <Router>
      <div className="App">


      <Switch>
         <Route path="/" exact component={Layout} />
         <Route path="/blog/" exact component={Home} />
         <Route path="/home/" exact component={Home} />
         <Route path="/admin/" exact component={Admin} />
         <Route path="/admin/writings/" exact component={Writings} />
         <Route path="/admin/settings/" exact component={Settings} />
      </Switch>

    </div>
    </Router>
    );
  }
}

export default App;
