import React from 'react';
import { Link, } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import localStorageMock from './../__mocks__/LocalStorageMock';
import Header from '../../src/js/components/Header.jsx';


window.localStorage = localStorageMock;

describe('Header', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });
  it('Render without crashing', () => {
    const div = document.createElement('div');
    render(<Header />, div);
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
