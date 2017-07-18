import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';
import * as ArticleAction from '../../src/js/actions/ArticleAction';
import sources from '../mockData/sourceData.json';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import SourceStore from '../../src/js/stores/SourceStore';

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
  it('tests error with async/await', async () => {
    try {
      await ArticleAction.getSources(); //If this resolves then the test will pass
    } catch (object) {
      expect(object.error).toEqual('sources array to  not be found.');
    }
  });
});
