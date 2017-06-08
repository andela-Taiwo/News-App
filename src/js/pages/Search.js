import React from 'react';
export default class Search extends React.Component{
  constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}
// 
// performSearch() {
//    const
//      self = this,
//      url  = googleAutoSuggestURL + this.state.inputValue;
//
//    if(this.state.inputValue !== '') {
//      JSONP(url, function(error, data) {
//        let searchResults, retrievedSearchTerms;
//
//        if(error) return error;
//
//        searchResults = data[1];
//
//        retrievedSearchTerms = searchResults.map(function(result) {
//          return result[0];
//        });
//
//        self.setState({
//          dataSource: retrievedSearchTerms
//        });
//      });
//    }
//  }
//
render() {
  return (
    <input type="text" value={this.state.value} onChange={this.handleChange} />
  );
}
}
