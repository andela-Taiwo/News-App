import React from 'react';
import ReactDOM from 'react-dom';
// import Bootstrap from 'bootstrap-without-jquery';
import Layout from './components/layout.jsx';

require('../sass/style.sass');

const app = document.getElementById('app');



ReactDOM.render(<Layout />, app);
