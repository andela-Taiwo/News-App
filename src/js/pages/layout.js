import React from 'react';
import Bootstrap from 'bootstrap-without-jquery';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Request from 'superagent';
export  default class Layout extends React.Component{
  constructor(){
    super();
    this.state ={};
  }
navigate(){
  //this.props.history.pushState(null, '/');
  this.props.router.replace('/');

}
  render(){

    return(
      <div>
      <Header />
    <h1>NewsHeadlines.net</h1>
    
    {this.props.children}

    <Footer />
    </div>
  );
  }
}
