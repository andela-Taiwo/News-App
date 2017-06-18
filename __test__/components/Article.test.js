// import React from 'react'
// import {Route, Link} from 'react-router-dom';
// import renderer from 'react-test-renderer';
// import Article from '../../src/js/components/Article';
// import * as  ArticleAction from '../../src/js/actions/ArticleAction';
// import ArticleStore from '../../src/js/stores/ArticleStore';
// import Dispatcher from '../../src/js/dispatch/Dispatcher';
// import { shallow,mount } from 'enzyme';
// import sinon from 'sinon';
// import articles from '../mockData/articleData.json'
// jest.mock('../../src/js/dispatch/Dispatcher');


  
//   describe('Article', () => {
//   it('Found div', () => {
//      const wrapper = shallow(<Sources />);
//    // const json = component.toJSON();
//     expect(wrapper.find('div').length).toEqual(7);
//   });


// test('Article should be intiated with empty array', () => {
//   const src =ArticleStore.articles;
//   expect(src).toHaveLength(0);
// });

// // test('Function "getSources" that update the isauth', () => {
// //   const sources = [
// //     {
// //       id: 'BBC',
// //       description: 'British news',
// //     },
// //     {
// //       id: 'Super sport',
// //       description: 'super sport new',
// //     },
// //   ];
// //   expect(SourceStore.getSources).toBeInstanceOf(Function);
// //   SourceStore.getSources(sources);
// //   expect(SourceStore.sources).toBe(sources);
// // });

// test('Store should listen to "GET_ARTICLES" event', () => {


//   Dispatcher.dispatch({
//     Type: GET_ARTICLES,
//     articles,
//   });
//   expect(ArticleStore.getArticles()).toBe(articles);
// });


// });

import React from 'react'
import {Route, Link} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Articles from '../../src/js/components/Article';
import ArticleAction from '../../src/js/actions/ArticleAction';
import ArticleStore from '../../src/js/stores/ArticleStore';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import { shallow,mount } from 'enzyme';
import sinon from 'sinon';

function getId(path_name){
      return  path_name.split('/')[2];
    }
const props  = {
      sourceId: getId("sources/article/abc-news/abc"),
      sortBy: "top",
      articles: [],
    };
  
describe('Article', () => {
  const wrapper = shallow(<Articles />);
  it('Articles should render without error', () => {
     mount(<Article {...props}/>)
  });  

  it('Article should render without error', () => {
     const spy = jest.spyOn(Article.prototype, 'componentDidMount');
     const wrapper = mount(<Articles {...props} />);
      expect(wrapper.instance().updateArticles()).toBeDefined();
  });



});




