// src/components/Contacts.js

import React, { Component } from 'react';
//import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
import SourceListItem from './SourceListItem';


// We'll use this function to get a contact
// list item for each of the contacts in our list
function getSourceListItem(source) {
  return (
    <SourceListItem
      key={source.id}
      source={source}
    />
  );
}
class Sources extends Component {

  constructor() {
    super();
    // For our initial state, we just want
    // an empty array of contacts
    this.state = {
      sources: sourceStore.getSources()
    }
    // We need to bind this to onChange so we can have
    // the proper this reference inside the method
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    console.log("Mount");
    ArticleAction.getSources();
    sourceStore.on("change",()=>{
      console.log("Hi Maly");
      this.setState({
        sources:sourceStore.getSources()
      })
    })
    //sourceStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
   //
    sourceStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      sources: sourceStore.getSources()
    });
  }

  render() {
    let {sources} = this.state
    
    const sourceComponent = sources.map(sourceItem => <SourceListItem 
      key={sourceItem.id}{...sourceItem} />);
    
    // let SourceListItems;
    // if (this.state.sources) {
    //   // Map over the contacts and get an element for each of them
    //   SourceListItems = this.state.sources.map(source => getSourceListItem(source));
    // }
    return (
      <div>
          {sourceComponent} 
      </div>
    );
  }
}

export default Sources;