
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
      searchInput: '',
      sortByAvailable: [],
      errorMessage: ''
    };
  }
/**
 * @memberof Sources
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
/**
 * @memberof Sources
 */
  onChange= () => {
    this.setState({
      sources: sourceStore.getSources()
    });
  }

  /**
   *
   * @parameter event
   * @memberof Sources
   */

  updateSearch = (event) => {
    this.setState({ searchInput: event.target.value.substr(0, 20) });
  }
  onSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  }
/**
 *
 *
 * @returns {Sources component}
 * @memberof Sources
 */

  render() {
    const { sources } = this.state;
    const message = 'Source not found';
    const filteredContent = sources.filter(
      (source) => {
        return source.id.indexOf(this.state.searchInput
        .toLocaleLowerCase()) !== -1;
      }
    );

    return (
      <div>
      <Header name={this.props.name} />
      <div className="container">
        <div className="row">
          <h4 className="sourceTitle"> Available News Sources</h4>
          <form className="searchBox">
            <input
              type="text"
              value={this.state.searchInput.toLocaleLowerCase()}
              onChange= {this.updateSearch}
              placeholder="Search for a source" />
            </form>
          { (filteredContent.length === 0) ?
           message : filteredContent.map((source) => {
             return (
              <div key={source.id} className="col s12 m7 card">
                <div className="source-name nav">{source.name}</div>
                <div className="col s12 sort center">
                  {source.sortBysAvailable.map((sortBy) => {
                    return (
                      <Link className="breadcrumb" key={sortBy}
                        to={{
                          pathname: `/articles/${source.id}/${sortBy}`,
                          sortBysAvailable: `${source.sortBysAvailable}`,
                        }} >
                          {sortBy} News
                      </Link>
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

