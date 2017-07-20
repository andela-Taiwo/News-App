import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';
import * as ArticleAction from '../../src/js/actions/ArticleAction';
import sources from '../mockData/sourceData.json';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import SourceStore from '../../src/js/stores/SourceStore';

describe('Source Action', () => {
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

  it('#getSources', () => (
      ArticleAction.getSources().then(() => {
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ));

  it('#setSources', () => (
      ArticleAction.setSources().then(() => {
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ));
  it('Should check error', async () => {
    try {
      await ArticleAction.getSources();
    } catch (object) {
      expect(object.error).toEqual('sources array to  not be found.');
    }
  });
});
