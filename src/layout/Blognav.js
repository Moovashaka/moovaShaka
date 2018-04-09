import React from 'react';
import { Link } from 'react-router-dom';

export default class Blognav extends React.Component {
  render() {
    return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            {/*-- Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <Link to="/">
                <a className="navbar-brand" href="/">MoovaShaka</a>
              </Link>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Blog
                      </Link>
                    </li>
                </ul>
            </div>
            {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
        </nav>
    );
  }
}
