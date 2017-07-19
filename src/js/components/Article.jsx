import React from 'react';
import PropTypes from 'prop-types';
import * as ArticleAction from '../actions/ArticleAction';
import articleStore from '../stores//ArticleStore';
import sourceStore from '../stores/SourceStore';
import Header from './Header.jsx';

/**
 * @param {any} sources
 * @param {any} sourceName
 * @returns {array}
 */
function getArray(sources, sourceName) {
  let sortByAvailable = [];
  const sortByArray = (sources.map((source) => {
    if (sourceName === source.id) {
      sortByAvailable = source.sortBysAvailable;
      return sortByAvailable;
    }
  }));
  const sorts = sortByArray.filter(e => typeof (e) !== 'undefined');
  return sorts[0];
}

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      sourceId: (props.match.params.article),
      sortQuery: (props.match.params.sortBy),
      sortByAvailable: [],
      articles: [],
    };
  }
/**
 * @memberof Articles
 */
  componentDidMount() {
    ArticleAction.getArticles(this.state.sourceId, this.state.sortQuery);
    ArticleAction.getSources();
    articleStore.on('change', this.updateArticles);
    ArticleAction.getSources();
    sourceStore.on('change', () => {
      this.setState({
        sources: sourceStore.getSources(),
        sortByAvailable: getArray(sourceStore.getSources(), this.state.sourceId)
      });
    });
  }

/**
 * @memberof Articles
 */
  componentWillUnmount() {
    articleStore.removeListener('change', this.updateArticles);
  }
  /**
   *
   * @parameter {event}
   * @memberof Articles
   */
  handleChange= (event) => {
    const value = event.target.value;
    ArticleAction.getArticles(this.state.sourceId, value);
    this.setState({ articles: this.state.articles,
      sortQuery: event.target.value,
      value
    });
  }
/**
 *  update the state of the articles variaable
 * @memberof Articles
 */
  updateArticles= () => {
    this.setState({
      articles: articleStore.getArticles(),
    });
  }
  /**
   *
   *
   * @returns {Article component}
   * @memberof Articles
   */
/**
 * @memberof Articles
 * @returns {article component}
 * @memberof Articles
 */
  render() {
    const sortQuery = (this.state.sortQuery);
    const sourceName = (this.state.sourceId);
    const articles = this.state.articles;
    const sortByAvailable = this.state.sortByAvailable;
    return (
      <div>
        <Header name={this.props.name}/>
        <div className="article">
          <nav className="row"
            style={{
              boxShadow: 'none',
              color: '#000'
            }}
          >
            <div className="col l6">
              <h5 className="articleTitle">{sortQuery}{' articles from '}
                  {sourceName}
              </h5>
            </div>
          <div className="col l6">
            <div className="row">
              {sortByAvailable.map(sortBy => (
              <ul className="right" key={sortBy} >
                <li>
                  <button
                  className="sortBy btn waves-effect waves-light"
                  style ={{
                    color: '',
                    borderColor: 'purple',
                    backgroundColor: '#6D29C5',
                    fontSize: '10px',
                    marginLeft: '3px',
                    padding: '3px 5px',
                  }}
                  onClick={this.handleChange}
                  value={sortBy}>View {sortBy} News
                  </button>
                </li>
              </ul>
              ))}
            </div>
          </div>
           </nav>
          <div className="article-row">
            <div className=" row">
              {articles.map(item => (
              <div className=" mainBg col m3" key={item.title}>
                <div className="card medium grey lighten-5">
                  <div className="card-image">
                    <a href={item.url} target={'#'}> <img
                    src={item.urlToImage} alt={item.title}
                       /> </a>
                  </div>
                  <div className="card-content">
                    <span className="card-title">{item.title}  ...</span>
                  </div>
                  <div className="card-action">
                    <a href={item.url}
                  className="btn waves-effect waves-light purple"
                    target="_blank">
                      {'Read...'}</a>
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
      articles: PropTypes.arrayOf(PropTypes.object),
      sourceId: PropTypes.string,
      sources: PropTypes.arrayOf(PropTypes.object),
    }
  },
  location: {
    sortByAvailable: PropTypes.arrayOf(PropTypes.object),
    search: PropTypes.string,
  }
};

