import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  // This adapter defines how and where to get information from the server
  // After receiving data from the server, it converts that data so that it is usable by the app
  namespace = 'api';
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
