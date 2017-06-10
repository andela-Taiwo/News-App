import React from 'react';
import Header from './Header';
import Request from 'superagent';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';

class Layout extends React.Component{
  constructor(){
    super();
    this.state ={};
 
  }
getName(){
  ArticleAction.getSources();
}
navigate(){
  this.props.location.replace('/');

}


render(){

    return(
      
      <div className="navbar-fixed">
        <Header />
        <h3>Articles Hub</h3>
    
        {this.props.children}

    </div>
  );
  }
}

export default Layout;