import React from 'react';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: sourceStore.getSources(),
      searchInput: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
/**
 * @param {any} e
 * @memberof Search
 */
  handleSearch(e) {
    e.preventDefault();
    this.props.onSearch(this.state.sources);
  }
/**
 * @memberof Search
 */
  onSearch() {
    this.setState({ searchInput: event.target.value });
  }
/*
*
 * @returns{<Search/>}
 * @memberof Search
 */
  render() {
    let filteredContent = this.state;
    return (
        <form>
          <input
            className=""
            type="text"
            name="name"
            value={this.state.searchInput}
            onChange={this.onSearch.bind(this)}
          >
          </input>
          <button onClick={this.handleAdd}>Search</button>
        </form>
    );
  }
}
