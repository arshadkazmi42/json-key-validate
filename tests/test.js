const expect = require('chai').expect;

const jkValidate = require('../index');


const DUMMY_JSON = {
  'name': 'arr-contains',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/arr-contains',
    'language': 'js'
  }
};


describe('validates json contains required values', () => {
  it('should return true', () => {
    const isEqual = jkValidate(DUMMY_JSON, ['name', 'author']);
    expect(isEqual).to.equal(true);
  });
  it('should return false for not having required values', () => {
    const isEqual = jkValidate(DUMMY_JSON, ['url', 'author']);
    expect(isEqual).to.equal(false);
  });
  it('should return false for string input', () => {
    const isEqual = jkValidate('DUMMY_JSON', ['url', 'author']);
    expect(isEqual).to.equal(false);
  });
});
