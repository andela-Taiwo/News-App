import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/js/components/NotFound.jsx';

const props = {
  state: {}
};

describe('NotFound', () => {
  it('Should render without crashing', () => {
    shallow(<NotFound {...props}/>);
  });
});
