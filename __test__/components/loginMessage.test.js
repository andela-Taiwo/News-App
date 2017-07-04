import React from 'react';
import { shallow } from 'enzyme';
import LoginMessage from '../../src/js/components/LoginMessage.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;

describe('LoginMesage', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });
  it('Login Message', () => {
    shallow(<LoginMessage />);
    it('Login should render without error', () => {
      shallow(<LoginMessage />);
    });
    it('Found Link', () => {
      const wrapper = shallow(<LoginMessage />);
      expect(wrapper.find('Link').length).toEqual(5);
    });

    it('Found div', () => {
      const wrapper = shallow(<LoginMessage />);
      expect(wrapper.find('div').length).toEqual(3);
    });
  });
});
