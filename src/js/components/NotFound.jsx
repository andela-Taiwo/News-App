// src/components/NotFound.jsx

import React from 'react';
import {Link}  from 'react-router-dom';
import { ContextTypes, PropTypes } from 'prop-types';

export default class NotFound extends React.Component {
    constructor(props){
      super(props);
      this.state = {}
    }


  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back to the news sources page</Link>
        </p>
      </div>
    );
  }
}

contextTypes: {
    router: PropTypes.object
  }