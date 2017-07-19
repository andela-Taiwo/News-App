import React from 'react';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import Layout from '../../src/js/components/Layout.jsx';

describe('Layout', () => {
  it('Should contain one  Route', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Route').length).toEqual(1);
  });
  it('Should contain one Router', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('HashRouter').length).toEqual(1);
  });

  it('Should contain one div', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Should contain one PublicRoute', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('PublicRoute').length).toEqual(1);
  });
  it('Should contain two PrivateRoute', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('PrivateRoute').length).toEqual(2);
  });
  it('should check that the componentDidMount method is getting called',
  () => {
    spyOn(Layout.prototype, 'componentDidMount').and.callThrough();
    const wrapper = mount(<Layout />);
    expect(wrapper).toBeDefined();
    expect(Layout.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should check that #updateArticles method is getting called',
  () => {
    let view = TestUtils.renderIntoDocument(<Layout />);
    let result = view.componentDidMount();
  });
});
