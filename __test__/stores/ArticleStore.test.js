import ArticleStore from '../../src/js/stores/ArticleStore';
import dispatcher from '../../src/js/dispatch/Dispatcher';
// import * as ArticleAction from '../../src/js/actions/ArticleAction';
jest.mock('../../src/js/dispatch/Dispatcher');
jest.dontMock('../../src/js/stores/ArticleStore');

describe('ArticleAction', () => {
  let articles;
  let dispatchMock;
  beforeEach(() => {
    dispatchMock = dispatcher.register.mock.calls[0][0];
    articles: [
        {
        "author": "Veselina Gerova",
        "title": "The best digests about VR, AI and AR",
        "description": "AI, VR and AR are trending topics these days and there’s plenty happening in the tech world when it comes to either one. Daily updates can get overwhelming if you’ve set yourself ...",
        "url": "https://thenextweb.com/artificial-intelligence/2017/06/15/best-digests-vr-ai-ar/",
        "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/06/Screen-Shot-2017-06-15-at-13.40.58.png",
        "publishedAt": "2017-06-15T13:45:58Z"
        }]
  });
  afterEach(() => {
    ArticleStore.handleActions({ actionType: 'GET_ARTICLES', artcles: [] });
  });
  
  describe('ArticleStore', () => {
    it('returns an empty array before action is dispatched', () => {
      expect(ArticleStore.getArticles()).toEqual([]);
    });

    it('List Sources out', () => {
      dispatchMock({ actionType: 'GET_ARTICLES', articles }) ;   
      expect(ArticleStore.getArticles()).toEqual(articles);
    });

    //   it('Remove sources', () => {
    //   dispatcher.dispatch({
    //     type: 'REMOVE_SOURCES',
    //     query: 'abc',
    //   });
    //   expect(SourceStore.setSources()).toBe(null);
    // });

    it('set article to null when setArticle is called', () => {
      ArticleStore.setArticles();
      expect(ArticleStore.setArticles()).toEqual(null);
    })
  });
});


// import ArticleStore from '../../src/js/stores/ArticleStore';
// import Dispatcher from '../../src/js/dispatch/Dispatcher';
// import * as ArticleAction from '../../src/js/actions/ArticleAction';

// describe('ArticleAction', () => {
//   describe('ArticleStore', () => {
//     it('initilizes', () => {
//       expect(typeof ArticleStore.getArticles('bbc')).equal("object");
//     });

//     it('List articles out', () => {
//       Dispatcher.dispatch({
//         type: 'GET_ARTICLES',
//         query: 'abc',
//       });
//       expect(typeof ArticleStore.getArticles()).toBe("object");
//     });

//       it('Remove artcles', () => {
//       Dispatcher.dispatch({
//         type: 'REMOVE_ARTICLES',
//         query: 'abc',
//       });
//       expect(ArticleStore.setArticles()).toBe(null);
//     });
//   });
// });