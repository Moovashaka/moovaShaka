import React, { Component } from 'react';
import Layout from '../src/layout/Layout.js';
import Blog from '../src/layout/Blog.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <div className="App">
          <Router>
            <div>
            <Route exact path="/" component={Layout} />
            <Route exact path="/blog" component={ Blog } />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
