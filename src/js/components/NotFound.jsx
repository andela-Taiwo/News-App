import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @export
 * @returns {any}
 */
const NotFound = () => {
  return (
    <div className="container">
      <div className="row not-found">
        <div className= "col s8 offset-s2 error_icon">
          <a href="" className="material-icons error_icon">error_outline</a>
      </div>
      </div>
      <div className="row not-found">
        <div className= "col s8 offset-s2">
          <h2 className="found">PAGE NOT FOUND!</h2>
          <div className=" col s8 offset-s2">
            <h5>
              <Link to="/#!">Go back to the news Login Page</Link>
            </h5>
          </div>

        </div>
      </div>
    </div>

  );
};

export default NotFound;
