
import React, { Component } from 'react';
//import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
// import SourceListItem from './SourceListItem';
import Search from './Search';
import Header from './Header'

// We'll use this function to get a contact
// list item for each of the contacts in our list
/*function getSourceListItem(source) {
  return (
    <SourceListItem
      key={source.id}
      source={source}
    />
  );
}*/
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
    ArticleAction.getSources();
    sourceStore.on("change",() => {
      this.setState({
        sources: sourceStore.getSources()
      })
    })
    //sourceStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
   //
    sourceStore.removeListener('change', this.onChange);
  }

  onChange() {
    this.setState({
      sources: sourceStore.getSources()
    });
  }

  render() {
    let { sources } = this.state
    //console.log(sources);

    
    
    /*const sourceComponent = sources.map(sourceItem => <SourceListItem 
      key={sourceItem.id}{...sourceItem} />);*/
    
    // let SourceListItems;
    // if (this.state.sources) {
    //   // Map over the contacts and get an element for each of them
    //   SourceListItems = this.state.sources.map(source => getSourceListItem(source));
    // }
    return (
      <div>
      <Header />
      <div className="container">
        <div className="row">
          <h1> Articles Available </h1>
          <Search />
          {sources.map((source) => {
            return (
              <div key={source.id} className="col s12 m7 card">
                {source.name}
                {source.sortBysAvailable.map((sortBy) => {
                  return (
                    <div key={sortBy}>

                      <a href={`#/articles/${source.id}/${sortBy}`}>{sortBy}</a>
                    </div>
                  )
                })
                }
              </div>
            )
          }
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default Sources;
