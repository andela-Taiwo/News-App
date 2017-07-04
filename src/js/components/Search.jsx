import React from 'react';
import sourceStore from '../stores/SourceStore';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: sourceStore.getSources(),
      searchInput: ''
    };
  }
/**
 * @param {any} e
 * @memberof Search
 */
  handleSearch= (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.sources);
  }
/**
 * @memberof Search
 */
  onSearch = () => {
    this.setState({ searchInput: event.target.value });
  }
/*
*
 * @returns{<Search/>}
 * @memberof Search that render the UI for the Search component
 */
  render() {
    return (
        <form>
          <input
            className=""
            type="text"
            name="name"
            value={this.state.searchInput}
            onChange={this.onSearch}
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
    );
  }
}
