import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import Header from '../../src/js/components/Header.jsx';

jest.unmock('../../src/js/components/Header.jsx');

describe('Header', () => {
  it('ender without crashing', () => {
    const div = document.createElement('div');
    render(<Header />, div);
  });

  it('should check #logout method is getting called',
    () => {
      let view = TestUtils.renderIntoDocument(<Header />);
      let result = view.logout();
    });
});

describe('Navigation Links', () => {
  it('Should contain five Link', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Link').length).toEqual(5);
  });

  it(' Should display Articles Hub', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it(' Should display Logout', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

