import React from 'react';


export default class Saved extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data:[]
    }

  }


  loadFavouritesFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.loadFavouritesFromServer();
    setInterval(this.loadArticlesFromServer, this.props.pollInterval);
  }
  handleFavouriteSubmit(favourite) {
    //this is just an example of how you would submit a form
    //you would have to implement something separately on the server
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: donation,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render (){
    return (
      <div className="card-panel">
        <h1>Save Favorite</h1>
        {/*<FavouriteList data={this.state.data} />
        <FavoritesForm onFavouriteSubmit={this.handleFavouriteSubmit} />*/}
      </div>
    );
  }

}