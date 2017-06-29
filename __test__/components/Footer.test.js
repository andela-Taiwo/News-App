import React from 'react';
import Footer from '../../src/js/components/Footer.jsx';
import { shallow } from 'enzyme';

describe('Footer', () => {
  it('Found footer', () => {
     const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toEqual(1);
  });

})

