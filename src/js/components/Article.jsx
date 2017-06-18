// src/components/Article.js

import React, { Component } from 'react';
//import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
import articleStore from '../stores//ArticleStore';

import Header from './Header';
import PropTypes from 'prop-types';

    function getId(path_name){
      return  path_name.split('/')[2];
    }
export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.match.url);
    this.state = {
      src_id: getId(this.props.match.url),
      sort_query: props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
  }

  componentDidMount() {
    
    ArticleAction.getArticles(this.state.src_id, this.state.sort_query);
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
    const sort_query = (this.state.sort_query).toUpperCase();
    const sourceName = (this.state.src_id).toUpperCase();
    
    return (
      <div>   
        <Header />
        <div >
        <br /><h5  className="center">{sort_query}{' ARTICLES FROM '}{sourceName}</h5>
        <br /> <br />

        <div className="">
          <div className="row"> 
            {this.state.articles.map(item => (
              <div className="col m3" key={item.title}>
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
                    <a href={item.url} className="btn btn-small" target={'#'}>{'Read...'}</a>
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


Articles.PropTypes = {

      sort_query: PropTypes.string,
      articles: PropTypes.Object,

};

Articles.defaultProps = {
  match: {
    params: {
      sort_query: 'top',
      src_id: 'cnn',
    },
  },
};
