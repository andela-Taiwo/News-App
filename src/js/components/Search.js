import React from 'react';
export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
      this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        this.props.onSearch(this.state.sources);
    }

    render() {
      return (
        <form>
          <input
            className=""
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          >
          </input>
          <button onClick={this.handleAdd}>Search</button>
        </form>
      );
    }
}