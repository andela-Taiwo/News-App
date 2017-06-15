import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Login from '../../src/js/components/LoginMessage';
import { shallow, mount, expect } from 'enzyme';

describe('Login', () => {
  it('Found p', () => {
     const wrapper = shallow(<LoginMessage />);
   // const json = component.toJSON();
    expect(wrapper.find('p').length).toEqual(1);
  });
    it('Found Link', () => {
     const wrapper = shallow(<LoginMessage />);
   // const json = component.toJSON();
    expect(wrapper.find('Link').length).toEqual(1);
  });

      it('Found div', () => {
     const wrapper = shallow(<LoginMessage />);
   // const json = component.toJSON();
    expect(wrapper.find('div').length).toEqual(1);
  });
  
});