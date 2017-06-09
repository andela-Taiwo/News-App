import React, { Component } from 'react';
//import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';
import sourceStore from '../stores/SourceStore';

class SourceListItem extends Component {

  render() {
    console.log(this.props);
    const { sources } = sourceStore;
    return (
      <div className="sources card-panel">
        <ul className="collection">
          <li className="collection-item text-center"><a href="">{this.props.name}</a></li>
          <li className="collection-item"><a>{this.props.id}</a></li>
          <li className="collection-item"><a>{this.props.url}</a></li>
       </ul>   
      </div>
    );
  }
}

export default SourceListItem;

/*
      <Link to={`/source/${sources.id}`}>          
          
        </Link>
        */