import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import { spy } from 'sinon';
import Articles from '../../src/js/components/Article.jsx';
import articles from '../mockData/articleData.json';
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;
const props = {
  src_id: ('bbc-news'),
  sortQuery: ('top'),
  articles: articles.articles,
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
  describe('<Articles />', () => {
    it('should show the <Header /> component be default', () => {
      const article = wrapper.first('div');
      const header = wrapper.find('Header');
      assert.equal(article.length, 1);
      assert.equal(header.length, 1);
    });
  });
  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = spy(Articles.prototype, 'componentDidMount');
    const component = mount(<Articles />);
    assert.ok(Articles.prototype.componentDidMount.calledOnce);
    componentDidMountSpy.restore();
  });
  it('should check that the componentDidMount method is getting called', () => {
    spyOn(Articles.prototype, 'componentDidMount').and.callThrough();
    const wrapper = mount(<Articles />);
    expect(wrapper).toBeDefined();
    expect(Articles.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });
  it('should check that the render method is getting called', () => {
    const wrapper = shallow(<Articles />); wrapper.instance().render();
  });
});
