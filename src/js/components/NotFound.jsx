import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @export
 * @returns {any}
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/#!">Go back to the news Login Page</Link>
      </p>
    </div>
  );
}

