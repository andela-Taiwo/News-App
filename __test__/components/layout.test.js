import React from 'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Layout from '../../src/js/components/layout';
import { shallow } from 'enzyme';


describe('Layout', () => {
  it('Found Routes', () => {
     const wrapper = shallow(<Layout />);
    expect(wrapper.find('Route').length).toEqual(7);
  });
    it('Found Router', () => {
     const wrapper = shallow(<Layout />);
    expect(wrapper.find('Router').length).toEqual(1);
  });

      it('Found div', () => {
     const wrapper = shallow(<Layout />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  
});