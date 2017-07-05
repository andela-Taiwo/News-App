
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
import Header from './Header.jsx';


export default class Sources extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sources: [],
      searchInput: ''
    };
  }
/**
 * @memberof Sources notifies the component when the store emit change an event
 */
  componentDidMount() {
    ArticleAction.getSources();
    sourceStore.on('change', () => {
      this.setState({
        sources: sourceStore.getSources()
      });
    });
  }
/**
 * @memberof Sources
 */
  componentWillUnmount() {
    sourceStore.removeListener('change', this.onChange);
  }
/**
 * Set the source state to content of the SourceStore when the store emit
 * 'change' event
 * @memberof Sources
 */
  onChange= () => {
    this.setState({
      sources: sourceStore.getSources()
    });
  }
  /*
  *
   * set the sources based on user search input
   */
  updateSearch = (event) => {
    event.preventDefault();
    this.setState({ searchInput: event.target.value.substr(0, 20) });
  }
  onSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  }

/*
*
 * @returns {sources component}
 * @memberof Sources  renders the UI for the sources component
 */
  render() {
    const { sources } = this.state;
/*
*
 * @returns {sources component}
 * @memberof Sources render sources based on search query or the default sources
 */
    const filteredContent = sources.filter(
      (source) => {
        return source.id.indexOf(this.state.searchInput
        .toLocaleLowerCase()) !== -1;
      }
    );
    if (filteredContent === false) {
      return (<h1>Hello</h1>);
    }
    return (
      <div>
      <Header />
      <div className="container">
        <div className="row">
          <h4 className="sourceTitle"> News Sources Available </h4>
          <form className="searchBox">
            <input
              type="text"
              value={this.state.searchInput.toLocaleLowerCase()}
              onChange= {this.updateSearch}
              placeholder="Search for a source" />
            </form>
          {filteredContent.map((source) => {
            return (
              <div key={source.id} className="col s12 m7 card">
                <div className="source-name nav">{source.name}</div>
                <div className="col s12 sort center">
                  {source.sortBysAvailable.map((sortBy) => {
                    return (
                      <a className="breadcrumb" key={sortBy}
                        href={`#/articles/${source.id}/${sortBy}`} >
                          {sortBy} News
                      </a>
                    
                    );
                  })
                }
              </div>
            </div>

            );
          }
          )}
        </div>
      </div>
      </div>
    );
  }
}

Sources.PropTypes = {
  searchInput: PropTypes.string,
  sources: PropTypes.arrayOf(PropTypes.object),

};

Sources.defaultProps = {
  searchInput: 'bbc-news',
  sources: [
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: 'Australia\'s most trusted source of local, national',
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: [
        'top'
      ],
    }
  ],
};

