import React from 'react';
import PropTypes from 'prop-types';
import * as ArticleAction from '../actions/ArticleAction';
import articleStore from '../stores//ArticleStore';
import Header from './Header.jsx';

/**
 * @param {any} available
 * @returns {any} sortArray
 */
function getSortsAvailable(available) {
  const sorts = available.split('/');
  const sorting = sorts.pop();
  const sortArray = sorting.split(',');
  return (sortArray);
 }

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src_id: (props.match.params.article),
      sortQuery: (props.match.params.sortBy),
      sortByAvailable: getSortsAvailable(props.location.pathname),
      articles: [],
    };
  }
/*
 * @memberof Articles
 * @return {none}
 * @params{none}
 */
  componentDidMount() {
    ArticleAction.getArticles(this.state.src_id, this.state.sortQuery);
    articleStore.on('change', this.updateArticles);
  }

/*
 * @
 * @memberof Articles
 * Unbind change listener
 */
  componentWillUnmount() {
    articleStore.removeListener('change', this.updateArticles);
  }

  /**
   *  @params{none}
   * @memberof Articles
   */
  handleChange= (event) => {
    const value = event.target.value;
    ArticleAction.getArticles(this.state.src_id, value);
    this.setState({ articles: this.state.articles,
      sortQuery: event.target.value,
      value
    });
  }
/*
 * @memberof Articles
 */
  updateArticles= () => {
    this.setState({
      articles: articleStore.getArticles(),
    });
  }

  /*
   * @returns {article component}
   * @memberof Articles
   * @returns {anay}
   */
  render() {
    const sortQuery = (this.state.sortQuery);
    const sourceName = (this.state.src_id);
    const articles = this.state.articles;
    return (
      <div>
        <Header />
        <div className="article">
          <nav className="row"
            style={{
              boxShadow: 'none',
              color: '#000'
            }}
          >
            <div className="col l8"> <h5 className="articleTitle">{sortQuery}{' articles from '}
                  {sourceName}</h5>
            </div>
          <div className="col l4">
            <div className="row">
              {this.state.sortByAvailable.map(sortBy => (
              <ul className="right" key={sortBy}>
                <li>
                  <button
                  className="sortBy btn waves-effect waves-light"
                  style ={{
                    color: '',
                    borderColor: 'purple',
                    backgroundColor: '#6D29C5',
                    fontSize: '12px'
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
                    <span className="card-title">{item.title}</span>
                  </div>
                  <div className="card-action">
                    <a href={item.url}
                  className="btn waves-effect waves-light purple" target={'#'}>
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
      src_id: PropTypes.string,
    }
  }
};

Articles.defaultProps = {
  match: {
    params: {
      sortQuery: 'top',
      src_id: 'cnn',
      articles: [
        {
          author: 'TNW Deals',
          title: `Be a digital entrepreneur – and do it the right way 
                       for only $39`,
          description: ` Opening and running a traditional brick-and-mortar 
                          storefront works off knowledge built through 
                          literally centuries of business successes and
                           failures. But if you’re trying to make ...`,
          url: `https://thenextweb.com/offers
                /2017/07/01/digital-entrepreneur-right-way-39/`,
          urlToImage: `https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/
                      2017/07/mfOopaP.jpg`,
          publishedAt: '2017-07-01T17:33:42Z'
        },
      ]
    },
  },
  location: {
    pathname: '/articles/ars-technica/latest/top,latest'
  }
};
