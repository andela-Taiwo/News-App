import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';
import * as ArticleAction from '../../src/js/actions/ArticleAction';
import articles from '../mockData/articleData.json';

describe('Article Action', () => {
  let requestMock;
  beforeEach(() => {
    requestMock = sinon.stub(axios, 'get').callsFake(() => (
        Promise.resolve({
          data: {
            articles: articles.getArticles,
          }
        })
        ));
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('#getArticles', () => (
      ArticleAction.getArticles().then(() => {
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ));
});
