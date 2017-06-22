import React from 'react'
import {Route, Link} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sources from '../../src/js/components/sources';
// import ArticleAction from '../../src/js/actions/ArticleAction';
import SourceStore from '../../src/js/stores/SourceStore';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import { shallow,mount } from 'enzyme';
import sinon from 'sinon';
import sources from '../mockData/sourceData.json'
import localStorageMock from './../__mocks__/LocalStorageMock';


window.localStorage = localStorageMock;

let event;

const props ={ 
    searchInput: "abc",
    sources: sources,
    
    event: false,

  }
  const state={
    searchInput: "abc",
    preventDefault: true,
    sources:sources

  }
    
  
describe('Source', () => {
  beforeEach( ()=> {
    window.localStorage.setItem('userProfile',JSON.stringify({
      name: "Taiwo Memunat",
      email: "sokunbitaiwo82@gmail.com"
    }));
    event = event = {
      preventDefault: () => {
        //
      },
      target: {
        value: 'sources',
      }
    }
  });
  const wrapper = shallow(<Sources />);
  it('Sources child components should render without error', () => {
     mount(<Sources {...props}/>)
  });  

  it('Sources  onchange() should render  without error', () => {
     const spy = jest.spyOn(Sources.prototype, 'componentWillMount');
     const wrapper = mount(<Sources {...props} />);
      expect(wrapper.instance().onChange()).toBeUndefined();
  });

  // it('Sources should render updateSearch without error', () => {
  //    const spy = jest.spyOn(Sources.prototype, 'componentWillMount');
  //    const wrapper = shallow(<Sources {...props} />);
  //     expect(wrapper.instance().updateSearch(event)).toBeDefined();
  // }); 
  
  //  it('Searches should render without error', () => {
  //    const spy = jest.spyOn(Sources.prototype, 'componentWillMount');
  //    const wrapper = shallow(<Sources {...props} />);
  //    console.log(wrapper.instance().onSearch(event));
  //     expect(wrapper.instance().onSearch(event)).toBe(props.sources);
  // }); 

  //   it('Sources should render without error', () => {
  //    const spy = jest.spyOn(Sources.prototype, 'componentWillMount');
  //    const wrapper = mount(<Sources {...props} />);
     
  //     expect(wrapper.instance().setState(state)).toBeDefined();
  // }); 

});




