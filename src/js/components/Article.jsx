// src/components/Article.js

import React from 'react';
import PropTypes from 'prop-types';
import * as ArticleAction from '../actions/ArticleAction';
import articleStore from '../stores//ArticleStore';
import Header from './Header.jsx';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src_id: (props.match.params.article),
      sortQuery: (props.match.params.sortBy),
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
  }
/**
 * @return {array}
 * @memberof Articles
 */
  componentDidMount() {
    ArticleAction.getArticles(this.state.src_id, this.state.sortQuery);
    articleStore.on('change', this.updateArticles);
  }

/**
 * @
 * @memberof Articles
 */
  componentWillUnmount() {
    articleStore.removeListener('change', this.updateArticles);
  }

/**
 * @return {array}
 * @memberof Articles
 */
  updateArticles() {
    this.setState({
      articles: articleStore.getArticles(),
    });
  }
  /**
   * @returns {article component}
   * @memberof Articles
   */
  render() {
    const sortQuery = (this.state.sortQuery);
    const sourceName = (this.state.src_id);
    
    return (
      <div>
        <Header />
        <div >
        <br/><h5 className="articleTitle">{sortQuery}{' articles from '}{sourceName}</h5>
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
  match: {
    params: {
      sortQuery: PropTypes.string,
      articles: PropTypes.array,
      src_id: PropTypes.string,
    }
  }
};

Articles.defaultProps = {
  match: {
    params: {
      sortQuery: 'top',
      src_id: 'cnn',
    },
  },
};
