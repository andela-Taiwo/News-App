import ArticleStore from '../../src/js/stores/ArticleStore';
import dispatcher from '../../src/js/dispatch/Dispatcher';

jest.mock('../../src/js/dispatch/Dispatcher');
jest.dontMock('../../src/js/stores/ArticleStore');

describe('ArticleAction', () => {
  let dispatchMock;
  let articles;

  beforeEach(() => {
    dispatchMock = dispatcher.register.mock.calls[0][0];
    articles = [
      {
        author: 'Lauren Gilmore',
        title: 'The internet of insecure things',
        description: `In 2016, attacks against vulnerable IoT devices featured 
            prominently in the daily news headlines. Hundreds of thousands of
             IoT devices were used to build botnets and wage some of the ...`,
        url: `https://thenextweb.com/worldofbanking
              /2017/06/16/internet-insecure-things/`,
        urlToImage: `https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/
                      2017/06/TNW_Mikko.jpg`,
        publishedAt: '2017-06-16T16:32:54Z' }
    ];
  });
  afterEach(() => {
    ArticleStore.handler({ actionType: 'GET_ARTICLES', artcles: [] });
  });

  describe('ArticleStore', () => {
    it('returns an empty array before action is dispatched', () => {
      expect(ArticleStore.getArticles()).toEqual([]);
    });

    it('returns an array of arcticles when action is dispatchedsssss', () => {
      dispatchMock({ actionType: 'GET_ARTICLES', articles });
      expect(ArticleStore.getArticles()).toEqual(articles);
    });

    it('set articles to null when #setArticle is called', () => {
      ArticleStore.setArticles();
      expect(ArticleStore.setArticles()).toEqual(null);
    });
  });
});
