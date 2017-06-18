// src/stores/ContactStore.js

import Dispatcher from '../dispatch/Dispatcher';
import Constants from '../constants/Constants';
import { EventEmitter } from 'events';


const CHANGE_EVENT = 'change';  
class SourceStoreClass extends EventEmitter {

  // emitChange() {
  //   this.emit(CHANGE_EVENT);
  // }
  constructor() {
    super();
    this.sources =[];  
  }

 

  getSources() {
    return this.sources;
  }

  setSources(){
    return this.sources =null;
  }




  // handleActions(action) {
  //   switch(action.actionType) {
  //     case "GET_SOURCES":
  //       this.sources = action.sources;
    
  //       // We need to call emitChange so the event listener
  //       // knows that a change has been made
  //       this.emit(CHANGE_EVENT);
  //       break;
   
  //     case "REMOVE_SOURCES":
  //       this.emit(CHANGE_EVENT);
  //       break;

  //     default:
  //   }
  // }

  handleActions(action) {
    if (action.actionType === 'GET_SOURCES') {
      this.sources = action.sources;
      this.emit(CHANGE_EVENT);
    }
  }

}

const SourceStore = new SourceStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
Dispatcher.register(SourceStore.handleActions.bind(SourceStore));


export default SourceStore;