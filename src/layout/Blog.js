import React from 'react';
import Blognav from './Blognav.js';
import Footer from './Footer.js';

export default class Blog extends React.Component {

  render() {
  return (
<div className="text-center">
< Blognav />
<h1>Blog</h1>
< Footer />
</div>
    );
  }
}
