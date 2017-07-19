import React from 'react';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { assert } from 'chai';
import Articles from '../../src/js/components/Article.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';
import sources from './../mockData/sourceData.json';


window.localStorage = localStorageMock;

Articles.defaultProps = {
  match: {
    params: {
      sortQuery: 'top',
      sourceId: 'cnn',
      sources: sources.sources,
      sortByAvailable: ['top', 'latest'],
      articles: [
        {
          author: 'TNW Deals',
          title: `Be a digital entrepreneur – and do it the right way 
                       for only $39`,
          description: ` Opening and running a traditional brick-and-mortar 
                          storefront works off knowledge built through 
                          literally centuries of business successes and
                           failures. But if you’re trying to make ...`,
          url: `https://thenextweb.com/offers
                /2017/07/01/digital-entrepreneur-right-way-39/`,
          urlToImage: `https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/
                      2017/07/mfOopaP.jpg`,
          publishedAt: '2017-07-01T17:33:42Z'
        },
      ]
    },
  },
  location: {
    search: '?,top,latest',
    sortByAvailable: ['top', 'latest']
  }
};


describe('Articles', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });

  const event = {
    target: 'click',
  };
  describe('<Articles />', () => {
    it('should show the <Header /> component', () => {
      const wrapper = shallow(< Articles />);
      const article = wrapper.first('div');
      const header = wrapper.find('Header');
      assert.equal(article.length, 1);
      assert.equal(header.length, 1);
    });
    it('should check that the componentDidMount method is getting called',
    () => {
      spyOn(Articles.prototype, 'componentDidMount').and.callThrough();
      const wrapper = mount(<Articles />);
      expect(wrapper).toBeDefined();
      expect(Articles.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    });

    it('should check that #updateArticles method is getting called',
    () => {
      let view = TestUtils.renderIntoDocument(<Articles />);
      let result = view.updateArticles();
    });
    it('should check that #handleChange method is getting called',
    () => {
      let view = TestUtils.renderIntoDocument(<Articles />);
      let result = view. handleChange(event);
    });
    it('should check that the render method is getting called', () => {
      const wrapper = shallow(<Articles />);
      wrapper.instance().render();
    });
  });
});
