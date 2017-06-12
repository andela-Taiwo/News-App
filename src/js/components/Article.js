// src/components/Contacts.js

import React, { Component } from 'react';
//import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
import articleStore from '../stores//ArticleStore';
import SourceListItem from './SourceListItem';
import PropTypes from 'prop-types';

    function getId(path_name){
      return  path_name.split('/')[2];
    }
export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.url);
    this.state = {
      sourceId: getId(this.props.match.url),
      sortBy: props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
  }

  componentDidMount() {
    console.log("Hello");
    ArticleAction.getArticles(this.state.sourceId, this.state.sortBy);
    articleStore.on('change', this.updateArticles);
  }


  componentWillUnmount() {
    articleStore.removeListener('change', this.updateArticles);
  }


  updateArticles() {
    this.setState({
      articles: articleStore.getArticles(),
    });
  }

  render() {
    const sortBy = this.state.sortBy;
    const sourceName = this.state.sourceId;
    const newsName = sourceName;

    return (
      <div>
       
        <div >
        <br /><h5 >{sortBy}{' articles from '}{newsName}</h5>
        <br /> <br />


            




        {/*<div className="container">
          <div className="row">
            <div className="col m4">
           
              </div>
          </div>
        </div>*/}


        

        <div className="container">
          <div className="row">
            {this.state.articles.map( item => (
              <div className="col m4" key={item.title}>
                <div className="card medium grey lighten-5">
                  <div className="card-image">
                    <img
src={item.urlToImage} alt={item.title}
                       />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                  <div className="card-action">
                    <a href={item.url} target={'#'}>{'Read...'}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    );
  }
}


Articles.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sortBy: PropTypes.string,
      source: PropTypes.string,
    }),
  }),
};

Articles.defaultProps = {
  match: {
    params: {
      sortBy: 'top',
      sourceId: 'cnn',
    },
  },
};