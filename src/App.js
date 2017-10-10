import React, { Component } from 'react';
import Nav from '../src/layout/Nav.js';
import Main from '../src/layout/Main.js';
import Footer from '../src/layout/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
            < Nav />
              < Main />
                < Footer />
      </div>
    );
  }
}

export default App;
