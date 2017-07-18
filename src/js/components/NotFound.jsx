import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @export
 * @returns {any}
 */
export default function NotFound() {
  return (
    <div className="container">
      <div className="row not-found">
        <div className= "col s6 offset-s4">
          <h2 className="found">PAGE NOT FOUND!</h2>
          <div className=" col s7 offset">
            <h4>404 Error</h4>
            <p>
              <Link to="/#!">Go back to the news Login Page</Link>
            </p>
          </div>

        </div>
      </div>
    </div>

  );
}

