import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/js/components/Login.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';

window.localStorage = localStorageMock;
const props = {
  name: 'User'
};
describe('Login', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });
  it('Login', () => {
    const wrapper = shallow(<Login />);
    it('Login should render without error', () => {
      mount(<Login {...props} />);
    });
  });
});
