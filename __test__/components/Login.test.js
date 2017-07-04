import React from 'react';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from '../../src/js/components/Login.jsx';
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;
describe('Login', () => {
  beforeEach(() => {
    window.localStorage.setItem('userDetails', JSON.stringify({
      firstName: 'Taiwo',
      email: 'ME',
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
});
