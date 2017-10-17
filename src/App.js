import React, { Component } from 'react';
import Nav from '../src/layout/Nav.js';
import Main from '../src/layout/Main.js';
import Footer from '../src/layout/Footer.js';
import { ContactForm } from  './components/contactForm_validation_attempt.js';

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
            < Nav />
              < Main />
              <ContactForm  onChange={fields => this.onChange(fields)} />
              <p>{JSON.stringify(this.state.fields, null, 2)}</p>
                < Footer />
      </div>
    );
  }
}

export default App;
