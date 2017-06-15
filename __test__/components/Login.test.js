import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Login from '../../src/js/components/Login';
import { shallow, mount, expect } from 'enzyme';

describe('Login', () => {
  it('Found h1', () => {
     const wrapper = shallow(<Login />);
   // const json = component.toJSON();
    expect(wrapper.find('h1').length).toEqual(1);
  });
    it('Found h3', () => {
     const wrapper = shallow(<Login />);
   // const json = component.toJSON();
    expect(wrapper.find('h3').length).toEqual(1);
  });

      it('Found div', () => {
     const wrapper = shallow(<Login />);
   // const json = component.toJSON();
    expect(wrapper.find('div').length).toEqual(7);
  });
  
});