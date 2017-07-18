import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import localStorageMock from './../__mocks__/LocalStorageMock';
import Header from '../../src/js/components/Header.jsx';


window.localStorage = localStorageMock;

describe('Header', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
    window.localStorage.removeItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com',
    }));
  });

  it('Render without crashing', () => {
    const div = document.createElement('div');
    render(<Header />, div);
  });

  it('should check that #logout method is getting called',
    () => {
      let view = TestUtils.renderIntoDocument(<Header />);
      let result = view.logout();
    });
});

describe('Header', () => {
  it('Found Link', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Link').length).toEqual(2);
  });
});

describe('Header (Snapshot)', () => {
  it('Header renders Articles Hub', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Header (Snapshot)', () => {
  it('Header render Logout', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
