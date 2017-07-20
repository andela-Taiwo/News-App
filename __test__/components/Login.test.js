import React from 'react';
import { shallow, render } from 'enzyme';
import Login from '../../src/js/components/Login.jsx';

describe('Login', () => {
  it('Should check that Login component renders without crashing', () => {
    const div = document.createElement('div');
    render(<Login/>, div);
  });
  it('Should contain ten div', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div').length).toEqual(10);
  });
  it('Should contain one h2', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('Should check h2 render Articles Hub ', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h2').text()).toEqual('Articles Hub');
  });

  it('Should contain two h2', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('span').length).toEqual(2);
  });

  it('should check that #render is getting called', () => {
    const wrapper = shallow(<Login />); wrapper.instance().render();
  });
});
