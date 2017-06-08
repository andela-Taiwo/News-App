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
    <h3>Articles Hub</h3>
    
    {this.props.children}

    </div>
  );
  }
}

export default Layout;