import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../src/js/components/layout.jsx';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => {
      return store[key];
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Layout', () => {
  it('Found Routes', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Route').length).toEqual(5);
  });
  it('Found Router', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('HashRouter').length).toEqual(1);
  });

  it('Found div', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
