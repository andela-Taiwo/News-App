import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../src/js/components/Footer.jsx';


describe('Footer', () => {
  it('Found footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});

describe('Footer', () => {
  it('Found div', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').text()).toBe('Sokunbi Memunat ©2017.');
  });
});

describe('Footer (Snapshot)', () => {
  it('Footer renders Sokunbi Memunat ©2017', () => {
    const component = renderer.create(<Footer />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

