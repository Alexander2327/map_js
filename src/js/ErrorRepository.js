/* eslint-disable linebreak-style */

export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  add(code, text) {
    this.map.set(code, text);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
