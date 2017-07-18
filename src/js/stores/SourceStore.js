import BaseStore from './BaseStore';

class SourceStoreClass extends BaseStore {
  constructor() {
    super();
    this.sources = [];
    this.subscribe(() => this.handler.bind(this));
  }

/**
 * Register callback to handle all updates
 * @param  {Object} action
 */
  handler(action) {
    if (action.actionType === 'GET_SOURCES') {
      this.sources = action.sources;
      this.emitChange();
    }
  }
/**
 * @returns{array} Get the sources for the calling components
 * @memberof sourceStore
 */
  getSources() {
    return this.sources;
  }
/**
 * @returns {null}
 * @memberof SourceStoreClass
 */
  setSources() {
    return null;
  }

}
const SourceStore = new SourceStoreClass();

export default SourceStore;

