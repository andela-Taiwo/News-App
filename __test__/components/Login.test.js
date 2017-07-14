import React from 'react';
import { shallow, render } from 'enzyme';
import Login from '../../src/js/components/Login.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;
const response = {
  getBasicProfile: {
    givenName: 'Taiow',
    email: 'raha@gmail.com',
    idToken: '123i4i4j44jj4'
  }
};
describe('Login', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo',
      email: 'ME',
      idToken: '12313104144949444'
    }));
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

  it('Found h2', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h2').text()).toEqual('Articles Hub');
  });

  it('Found a', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('a').length).toEqual(1);
  });
  it('Found span', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('should check that the responseGoogle method is getting called', () => {
    const wrapper = shallow(<Login />); wrapper.instance().render();
  });

});
