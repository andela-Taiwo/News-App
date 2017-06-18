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

const news ={ 
    searchInput: "",
    sources: [
      {
        "id": "abc-news-au",
        "name": "ABC News (AU)",
        "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url": "http://www.abc.net.au/news",
        "category": "general",
        "language": "en",
        "country": "au",
        "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
      }

    ]

  }
 
  describe('Function \'getSources\'', () => {
   let requestMock;
    beforeEach(()=> {
        requestMock = sinon.stub(axios, 'get').callsFake(()=>(
          Promise.resolve({
            data: {
              sources: sources,
              
            }
          })
        ));
    });

    afterEach(()=>{
      axios.get.restore();
    });

    it('call recieve sources', ()=>(
      ArticleAction.getSources().then(()=>{
        expect(requestMock.calledOnce).toBeTruthy();
      })
    ))


     it('call remove sources', ()=>(
      ArticleAction.setSources().then(()=>{
        expect(requestMock.calledOnce).toBeTruthy();
      })      
    ))

    
  })




