// src/stores/ContactStore.js

import Dispatcher from '../dispatch/Dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change'; 

class SourceStoreClass extends EventEmitter {

/**
 *  initialize source array
 */
  constructor() {
    super();
    this.sources = [];  
  }

 /**
  * Get the souces from the dispatcher
  */

  getSources() {
    return this.sources;
  }

/**
 * Reset the  source object to an empty array
 */
  setSources() {
    this.sources = null;
    return this.sources;
  }

/**
 * @param {*} action GET_SOURCES
 * listening to the dispather to get action look GET_SOURCES action types */

  handleActions(action) {
    if (action.actionType === 'GET_SOURCES') {
      this.sources = action.sources;
      this.emit(CHANGE_EVENT);
    }
  }

}

const SourceStore = new SourceStoreClass();

/* SouceStore register a callback for the dispatcher
*/
Dispatcher.register(SourceStore.handleActions.bind(SourceStore));

export default SourceStore;
