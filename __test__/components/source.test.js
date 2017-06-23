import React from 'react';
import { shallow, mount } from 'enzyme';
import Sources from '../../src/js/components/sources.jsx';
import sources from '../mockData/sourceData.json';
import localStorageMock from './../__mocks__/LocalStorageMock';

window.localStorage = localStorageMock;

let event;

const props = {
  searchInput: 'abc',
  sources: sources.sources,
  event: false,

};
describe('Source', () => {
  beforeEach(() => {
    window.localStorage.setItem('userProfile', JSON.stringify({
      name: 'Taiwo Memunat',
      email: 'sokunbitaiwo82@gmail.com'
    }));
    event = {
      preventDefault: () => {
        //
      },
      target: {
        value: 'sources',
      }
    };
  });
  const wrapper = shallow(<Sources />);
  it('Sources child components should render without error', () => {
    mount(<Sources {...props}/>);
  });

  it('Sources  onchange() should render  without error', () => {
     const spy = jest.spyOn(Sources.prototype, 'componentDidMount');
     const wrapper = mount(<Sources {...props} />);
      expect(wrapper.instance().onChange()).toBeUndefined();
  });
});
