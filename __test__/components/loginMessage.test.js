import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import LoginMessage from '../../src/js/components/LoginMessage.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';
import { shallow, mount, expect } from 'enzyme';

window.localStorage = localStorageMock;
const props = {
  name: "User"
}

describe('LoginMesage', () => {
  beforeEach( ()=> {
    window.localStorage.setItem('userProfile',JSON.stringify({
      name: "Taiwo Memunat",
      email: "sokunbitaiwo82@gmail.com"
    }));
  });
  //   it('Login', () => {
  //    const wrapper = shallow(<Login />);
  //     it('Login should render without error', () => {
  //    mount(<Login />)
  // });  
     it('Login Message', () => {
        shallow(<LoginMessage />);
      it('Login should render without error', () => {
     shallow(<LoginMessage  />);
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