import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Header from '../../src/js/components/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('Found links', () => {
     const wrapper = shallow(<Header />);
   // const json = component.toJSON();
    expect(wrapper.find('Link').length).toEqual(4);
  });
    it('Found li', () => {
     const wrapper = shallow(<Header />);
   // const json = component.toJSON();
    expect(wrapper.find('li').length).toEqual(4);
  });

      it('Found div', () => {
     const wrapper = shallow(<Header />);
   // const json = component.toJSON();
    expect(wrapper.find('div').length).toEqual(2);
  });

  
});