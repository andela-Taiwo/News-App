// import React from 'react'
// import Sources from '../../src/js/components/sources';
import * as ArticleAction from '../../src/js/actions/ArticleAction';
import axios from 'axios';
import expect from 'expect';
// import SourceStore from '../../src/js/stores/SourceStore';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import NewsAPI from '../../src/js/utils/NewsAPI';
import sources from '../mockData/sourceData.json'
import articles from '../mockData/articleData.json'
import sinon from 'sinon';


 
  describe('Function \'get articles\'', () => {
   let requestMock;
    beforeEach(()=> {
        requestMock = sinon.stub(axios, 'get').callsFake(()=>(
          Promise.resolve({
            data: {
              
              articles: articles,
            }
          })
        ));
    });

    afterEach(()=>{
      axios.get.restore();
    });

    it('call recieve articles', ()=>(
      ArticleAction.getArticles().then(()=>{
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ))
    
  })




