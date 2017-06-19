import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import LoginMessage from '../../src/js/components/LoginMessage.jsx';
import localStorageMock from '../__mocks__/localStorageMock';
import { shallow, mount, expect } from 'enzyme';

window.localStorage = localStorageMock;
const props = {
  name: "User"
}

describe('LoginMesage', () => {
  //   it('Login', () => {
  //    const wrapper = shallow(<Login />);
  //     it('Login should render without error', () => {
  //    mount(<Login />)
  // });  
     it('Login Message', () => {
     const wrapper = mount(<LoginMessage />);
      it('Login should render without error', () => {
     shallow(<LoginMessage {...window.localStorage} />);
  });  
  //   it('Found Link', () => {
  //    const wrapper = shallow(<LoginMessage />);
  //   expect(wrapper.find('Link').length).toEqual(1);
  // });

  //     it('Found div', () => {
  //    const wrapper = shallow(<LoginMessage />);
  //   expect(wrapper.find('div').length).toEqual(1);
  });
  
});