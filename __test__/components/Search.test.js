import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../src/js/components/Search.jsx';


describe('Search', () => {
  it('Found button', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('button').length).toEqual(1);
  });
  it('Found form', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('Found input', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('Search', () => {
    const wrapper = shallow(<Search />);
    it('Login should render without error', () => {
      mount(<Search />);
    });
  });
});

