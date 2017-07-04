import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';
import * as ArticleAction from '../../src/js/actions/ArticleAction';
import sources from '../mockData/sourceData.json';

const news = {
  searchInput: '',
  sources: [
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: `Australias most trusted source of local, national and 
                world news. Comprehensive, independent, in-depth analysis, the 
                  latest business, sport, weather and more.`,
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
      ]
    }
  ]

};
describe('Function \'getSources\'', () => {
  let requestMock;
  beforeEach(() => {
    requestMock = sinon.stub(axios, 'get').callsFake(() => (
          Promise.resolve({
            data: {
              sources: sources.getSources,
            }
          })
        ));
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('call recieve sources', () => (
      ArticleAction.getSources().then(() => {
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ));

  it('call remove sources', () => (
      ArticleAction.setSources().then(() => {
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ));
});
