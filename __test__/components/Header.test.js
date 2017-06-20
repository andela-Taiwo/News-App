import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import localStorageMock from '../__mocks__/localStorageMock';
import Header from '../../src/js/components/Header.jsx';
import { shallow, mount } from 'enzyme';

window.localStorage = localStorageMock;

describe('Header', () => {
  beforeEach( ()=> {
    window.localStorage.setItem('userProfile',JSON.stringify({
      name: "Taiwo Memunat",
      email: "sokunbitaiwo82@gmail.com"
    }));
  });
  it('Render without crashing', () => {
     shallow(<Header />);
   // const json = component.toJSON();
   
  });


  
});

