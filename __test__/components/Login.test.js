

// import React from 'react';
// import { render } from 'react-dom';
// import General from '../../src/app/components/General';

// import localStorageMock from '../../mocks/localStorageMock';

// window.localStorage = localStorageMock;

// describe('General', () => {
//   beforeEach(() => {
//     window.localStorage.setItem('userDetails', JSON.stringify({
//       givenName: 'Baasbank',
//       imageUrl: 'me',
//     }));
//   });
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     render(<General/>, div);
//   });
// });
import React from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Login from '../../src/js/components/Login.jsx';
import localStorageMock from '../__mocks__/localStorageMock';
import { shallow, mount} from 'enzyme';

// var localStorageMock = (function() {
//   var store = {};
//   return {
//     getItem: function(key) {
//       return store[key];
//     },
//     setItem: function(key, value) {
//       store[key] = value.toString();
//     },
//     clear: function() {
//       store = {};
//     },
//     removeItem: function(key) {
//       delete store[key];
//     }
//   };
// })();
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

window.localStorage = localStorageMock;
const props = {
  name: "User"
}
describe('Login', () => {
  beforeEach( ()=> {
    window.localStorage.setItem('user_profile',JSON.stringify({
      name: "Taiwo Memunat",
      email: "sokunbitaiwo82@gmail.com"
    }));
  });
    it('Login', () => {
     const wrapper = shallow(<Login />);
      it('Login should render without error', () => {
     mount(<Login  {...props} />)
  });  
   // const json = component.toJSON();
    // expect(wrapper.find('h1').text()).toBe("Article Hub");
  });
  //   it('Found h3', () => {
  //    const wrapper = shallow(<Login />);
  //  // const json = component.toJSON();
  //   expect(wrapper.find('h3').length).toEqual(1);
  // });

  //     it('Found div', () => {
  //    const wrapper = shallow(<Login />);
  //  // const json = component.toJSON();
  //   expect(wrapper.find('div').length).toEqual(7);
  // });
  //       it('Found a', () => {
  //    const wrapper = shallow(<Login />);
  //  // const json = component.toJSON();
  //   expect(wrapper.find('a').length).toEqual(1);
  // });
  
});
  