import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import Layout from './components/Layout.jsx';
import '../Style/style.sass';


const app = document.getElementById('app');
ReactDOM.render((
  <HashRouter>
    <Layout />
  </HashRouter>
  ), app);
