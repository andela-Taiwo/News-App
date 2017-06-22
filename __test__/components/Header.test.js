import React from 'react';
import localStorageMock from './../__mocks__/LocalStorageMock';
import Header from '../../src/js/components/Header.jsx';
import { shallow } from 'enzyme';

window.localStorage = localStorageMock;

describe('Header', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
  });
  it('Render without crashing', () => {
     shallow(<Header />); 
     });
});

