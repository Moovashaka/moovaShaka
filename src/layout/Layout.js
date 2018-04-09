import React from 'react';
import Nav from '../layout/Nav.js';
import Main from '../layout/Main.js';
import Footer from '../layout/Footer.js';

export default class Layout extends React.Component {

  render() {

  return (
    <div>
      < Nav />
      < Main />
      < Footer />
    </div>
  );
}
}
