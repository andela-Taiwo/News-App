import React from 'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Search from '../../src/js/components/Search.jsx';
import { shallow } from 'enzyme';

describe('Search', () => {
  // it('Found button', () => {
  //    const wrapper = shallow(<Search />);
  //  // const json = component.toJSON();
  //   expect(wrapper.find('button').length).toEqual(1);
  // });
  //   it('Found form', () => {
  //    const wrapper = shallow(<Search />);
  //  // const json = component.toJSON();
  //   expect(wrapper.find('form').length).toEqual(1);
  // });

  //     it('Found input', () => {
  //    const wrapper = shallow(<Search />);
  //  // const json = component.toJSON();
  //   expect(wrapper.find('input').length).toEqual(1);
  // });

     it('Search', () => {
     const wrapper = shallow(<Search />);
      it('Login should render without error', () => {
     mount(<Search />)
  });  

  
});

});

