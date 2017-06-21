// src/components/Article.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ArticleAction from '../actions/ArticleAction';
import articleStore from '../stores//ArticleStore';

import Header from './Header.jsx';
import PropTypes from 'prop-types';

    // function getId(path_name){
    //   return  path_name.split('/')[2];
    // }
export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.article);
    this.state = {
      src_id: props.match.params.article,
      sortQuery: props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
  }

  componentDidMount() {
   ArticleAction.getArticles(this.state.src_id, this.state.sortQuery);
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
    const sortQuery = (this.state.sortQuery);
    const sourceName = (this.state.src_id);  
    return (
      <div>   
        <Header />
        <div >
        <br /><h5 className ="center">{sortQuery}{' ARTICLES FROM '}{sourceName}</h5>
        <br /> <br />

        <div className="article-row">
          <div className=" row"> 
            {this.state.articles.map(item => (
              <div className=" mainBg col m3" key={item.title}>
                <div className="card medium grey lighten-5">
                  <div className="card-image">
                   <a href={item.url} target={'#'}> <img
                    src={item.urlToImage} alt={item.title}
                       /> </a>
                  </div>
                  <div className="card-content">
                    <span className="card-title">{item.title}</span>
                    <a href={item.url} target={'#'}><p>{item.description}</p></a>
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

      sortQuery: PropTypes.string,
      articles: PropTypes.Object,

};

Articles.defaultProps = {
  match: {
    params: {
      sortQuery: 'top',
      src_id: 'cnn',
    },
  },
};
