import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import { spy } from 'sinon';
import TestUtils from 'react-dom/test-utils';
import Sources from '../../src/js/components/Sources.jsx';
import sources from './../mockData/sourceData.json';
import localStorageMock from './../__mocks__/LocalStorageMock';

window.localStorage = localStorageMock;

const props = {
  searchInput: 'abc',
  sources: sources.sources,
  event: false,

};
describe('Source', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });

  const event = {
    target: { value: 'click this one' },
};

  describe('<Sources />', () => {
    it('should show the <Header /> component be default', () => {
      const wrapper = shallow(<Sources />);
      const source = wrapper.first('div');
      const header = wrapper.find('Header');
      assert.equal(source.length, 1);
      assert.equal(header.length, 1);
    });
  });
  it('should show the <Header /> component when it has loaded', () => {
    const wrapper = shallow(<Sources/>);
    wrapper.setState({ ...props });
    const Header = wrapper.find('Header');
    assert.equal(Header.length, 1);
  });
  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = spy(Sources.prototype, 'componentDidMount');
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    assert.ok(Sources.prototype.componentDidMount.calledOnce);
    componentDidMountSpy.restore();
  });
  it('should check that the componentDidMount method is getting called', () => {
    spyOn(Sources.prototype, 'componentDidMount').and.callThrough();
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should check that #updateSearch method is getting called',
    () => {
      let view = TestUtils.renderIntoDocument(<Sources />);
      let result = view.updateSearch(event);
    });
  it('should check that the render method is getting called', () => {
    const wrapper = shallow(<Sources />); wrapper.instance().render();
  });
});
