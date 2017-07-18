import React from 'react';
import { shallow, render } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import Login from '../../src/js/components/Login.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;
describe('Login', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo',
      email: 'ME',
      idToken: '12313104144949444'
    }));

    Login.defaultProps = {
      userInfo: {
        name: 'Taiwo',
        email: 'taiwo@gmail.com',
        idToken: 'dfjf1j3b1j4b4b4b4j44'
      },
      getBasicProfile: {
        name: 'Taiwo',
        email: 'taiwo@gmail.com',
        idToken: 'dfjf1j3b1j4b4b4b4j44'
      }
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Login/>, div);
  });
  it('Found div', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div').length).toEqual(10);
  });
  it('Found h2', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('Found h2 text ', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h2').text()).toEqual('Articles Hub');
  });

  it('Found a', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('a').length).toEqual(1);
  });
  it('Found span', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('span').length).toEqual(2);
  });

  it('should check that the render method is getting called', () => {
    const wrapper = shallow(<Login />); wrapper.instance().render();
  });
});
