import React from 'react';
import { HashRouter as Router ,Link, Route } from 'react-router-dom'
import renderer from 'react-test-renderer';
import Layout from '../../src/js/components/layout.jsx';
import { shallow } from 'enzyme';
import sources from '../mockData/sourceData.json'


var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
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