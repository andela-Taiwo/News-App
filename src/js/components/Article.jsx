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
      value: 'top'
    };
  }
/*
 * @memberof Articles
 * listen for change in article store
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
  handleChange= (event) => {
    this.setState({ value: event.target.value });
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
   * @returns {}
   */
  render() {
    const sortQuery = (this.state.sortQuery);
    const sourceName = (this.state.src_id);
    return (
      <div>
        <Header />
        <div className="article">
          <div className="input-field col s12">
            <select>
              <option defaultValue={sortQuery} disabled >sortBy</option>
              <option value="Top">Top</option>
              <option value="Latest">Latest</option>
            </select>
          </div>
            <h5 className="articleTitle">{sortQuery}{' articles from '}
          {sourceName}</h5>

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
          title: 'Be a digital entrepreneur – and do it the right way \
                       for only $39',
          description: 'Opening and running a traditional brick-and-mortar \
                          storefront works off knowledge built through \
                          literally centuries of business successes and\
                           failures. But if you’re trying to make ...',
          url: 'https://thenextweb.com/offers\
                /2017/07/01/digital-entrepreneur-right-way-39/',
          urlToImage: 'https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/\
                      2017/07/mfOopaP.jpg',
          publishedAt: '2017-07-01T17:33:42Z'
        },
      ]
    },
  },
};
