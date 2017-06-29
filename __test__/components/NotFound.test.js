import React from 'react';
import {HashRouter as router , Link , Route} from 'react-router-dom'
import renderer from 'react-test-renderer';
import NotFound from '../../src/js/components/NotFound.jsx';
import { shallow, mount  } from 'enzyme';

const props ={
  state: {}
}

describe('NotFound', () => {
  it('Should render without crashing', () => {
     shallow(<NotFound {...props}/>);
  });
  
});