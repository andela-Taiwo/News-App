import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';

require('../sass/style.sass');

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
