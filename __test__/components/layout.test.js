import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../src/js/components/Layout.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';

window.localStorage = localStorageMock;
describe('Layout', () => {
   beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });
  it('Found Routes', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Route').length).toEqual(4);
  });
  it('Found Router', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('HashRouter').length).toEqual(1);
  });

  it('Found div', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Found Routes', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Route').length).toEqual(4);
  });
});
