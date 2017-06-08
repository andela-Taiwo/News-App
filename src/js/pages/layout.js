import React from 'react';
import Bootstrap from 'bootstrap-without-jquery';
import Header from './Header';
import Request from 'superagent';
class Layout extends React.Component{
  constructor(){
    super();
    this.state ={};
  }
navigate(){
//console.log(this.props);
  this.props.location.replace('/');

}
  render(){

    return(
      <div>
      <Header />
    <h1>NewsHeadlines.net</h1>
    
    {this.props.children}

    </div>
  );
  }
}

export default Layout;