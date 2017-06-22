
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
import Header from './Header.jsx';


export default class Sources extends Component {

  constructor() {
    super();

    this.state = {
      sources: sourceStore.getSources(),
      searchInput: ''
    };
    /**
     * We need to bind this to onChange so we can have
     * the proper this reference inside the method
     */
    this.onChange = this.onChange.bind(this);
  }
/**
 * @memberof Sources
 */
  componentWillMount() {
    ArticleAction.getSources();
    sourceStore.on('change', () => {
      this.setState({
        sources: sourceStore.getSources()
      });
    });
  }
/**
 * @memberof Sources
 */
  componentWillUnmount() {
   //
    sourceStore.removeListener('change', this.onChange);
  }
/**
 * Set the source state to content of the SourceStore when the store emit
 * 'change' event
 * @memberof Sources
 */
  onChange() {
    this.setState({
      sources: sourceStore.getSources()
    });
  }
  /*
  *
   * set the sources based on user search input
   */
  updateSearch(event) {
    event.preventDefault();
    this.setState({ searchInput: event.target.value.substr(0,20) });
  }
  onSearch(event) {
    this.setState({ searchInput: event.target.value });
  }

/*
*
 * @returns {sources component}
 * @memberof Sources
 */
  render() {
    let { sources } = this.state;
    let filteredContent = sources.filter(
      (source) => {
        return source.id.indexOf(this.state.searchInput
        .toLocaleLowerCase()) !== -1;
      }
    );
    return (
      <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <h1> News Sources Available </h1>
          <form>
            <input
              className=""
              type="text"
              value={this.state.searchInput.toLocaleLowerCase()}
              onChange= {this.updateSearch.bind(this)}
              placeholder="Search for a source" >
            </input>
            </form>
          {filteredContent.map((source) => {
            return (
              <div key={source.id} className="col s12 m7 card">
                {source.name}
                <div className='row sort'>
                  {source.sortBysAvailable.map((sortBy) => {
                    return (
                    <div key={sortBy}>

                      <a className="col s3 center"
                        href={`#/articles/${source.id}/${sortBy}`}>{sortBy}
                      </a>
                    </div>
                    );
                  })
                }
              </div>
            </div>

            );
          }
          )}
        </div>
      </div>
      </div>
    );
  }
}

Sources.PropTypes = {
  searchInput: PropTypes.string,
  sources: PropTypes.Object,

};

Sources.defaultProps = {
  match: {
    params: {
      searchInput: 'bbc-news',
      sources: [
        {
          id: 'abc-news-au',
          name: 'ABC News (AU)',
          description: 'Australia\'s most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.',
          url: 'http://www.abc.net.au/news',
          category: 'general',
          language: 'en',
          country: 'au',
          urlsToLogos: {
            small: '',
            medium: '',
            large: ''
          },
          sortBysAvailable: [
            'top'
          ],
        }
      ],
    },
  }
};
