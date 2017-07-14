import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';
import * as ArticleAction from '../../src/js/actions/ArticleAction';
import sources from '../mockData/sourceData.json';

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
