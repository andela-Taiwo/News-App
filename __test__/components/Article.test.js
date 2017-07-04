import React from 'react';
import { shallow, mount } from 'enzyme';
import Articles from '../../src/js/components/Article.jsx';
import articles from '../mockData/articleData.json';
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;
const props = {
  src_id: ('bbc-news'),
  sortQuery: ('top'),
  articles: articles.article,
};
describe('Article', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });
  const wrapper = shallow(<Articles />);
  it('Articles should render without error', () => {
    shallow(<Articles {...props}/>);
  });
});
