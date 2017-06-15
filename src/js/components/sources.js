
import React, { Component } from 'react';
//import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
// import SourceListItem from './SourceListItem';
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
      sources: sourceStore.getSources(),
      searchInput: ""
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

  updateSearch(event) {
        event.preventDefault();
        this.setState({searchInput: event.target.value.substr(0,20)});
    }
   onSearch(){
     this.setState({searchInput: event.target.value});
   }

  render() {
    let { sources } = this.state
    let filteredContent = sources.filter(
      (source) => {
        return source.id.indexOf(this.state.searchInput.toLocaleLowerCase()) !== -1 ;

      }
    );
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
          <h1> News Sources Available </h1>
          <form>
            <input
              className=""
              type="text"
              value={this.state.searchInput.toLocaleLowerCase()}
              onChange={this.updateSearch.bind(this)}
              placeholder="Search for a source"
            >
            </input>
            {/*<button onClick={this.handleSearch}>Search</button>*/}
        </form>
          {filteredContent.map((source) => {
            return (
              <div key={source.id} className="col s12 m7 card">
                {source.name}
                <div className="row sort">
                  {source.sortBysAvailable.map((sortBy) => {
                  return (
                    <div key={sortBy}>

                      <a className="col s3 center" href={`#/articles/${source.id}/${sortBy}`}>{sortBy}</a>
                    </div>
                  )
                })
                }
              </div>
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
