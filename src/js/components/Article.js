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

  /**
   * This function mounts the getNewsHeadlines action function when it is about
   *to be rendered on the DOM. Props are passed to the action method and an
   API call is made.
   * @return {void} sets the current state
   * @memberof Headlines
   */
  componentDidMount() {
    console.log("Hello");
    ArticleAction.getArticles(this.state.sourceId, this.state.sortBy);
    articleStore.on('change', this.updateArticles);
  }

  /**
   *This function unmounts the rendered component using the removeListener
   method and updates the
   *state of articles.
   * @return {void} sets the updated state
   * @memberof Headlines
   */
  componentWillUnmount() {
    articleStore.removeListener('change', this.updateArticles);
  }

  /**
   *This function is reponsible for updating the state of the article prop when
   the component is rendered.
   * @return {object} updated state of articles
   * @memberof Headlines
   */
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
      <div >
        {/*<Signout />*/}
        <div id="loginHeader">
        <br /><h4 id="headerStyle">{sortBy}{' News from '}{newsName}</h4>
        <br /> <br />
        <div className="container">
          <div className="row">
            <div className="col m4">
              {/*<Previous />*/}
              </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.articles.map(item => (
              <div className="col m6" key={item.title}>
                <div className="card large grey lighten-4">
                  <div className="card-image">
                    <img
src={item.urlToImage} alt={item.title}
                      id="cardStyle" />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                  <div className="card-action">
                    <a href={item.url} target={'#'}>{'Read More'}</a>
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
      sourceId: 'abc',
    },
  },
};