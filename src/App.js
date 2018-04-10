import React, { Component } from 'react';
import Layout from '../src/layout/Layout.js';
import Blog from '../src/layout/Blog.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

            <div>
            <Route exact path="/" component={Layout} />
            <Route exact path="/blog" component={ Blog } />
            <Route exact strict path="/admin" redirect to="/public/admin/#/" />
            </div>

      </div>
    </Router>
    );
  }
}

export default App;
