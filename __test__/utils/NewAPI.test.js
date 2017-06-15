import jest from 'jest'

jest.dontmock('../../src/utils/NewsAPI', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticles: () => Promise.resolve('getPromise'),

}));
