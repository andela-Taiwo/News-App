import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/js/components/Footer.jsx';


describe('Footer', () => {
  it('Found footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});

