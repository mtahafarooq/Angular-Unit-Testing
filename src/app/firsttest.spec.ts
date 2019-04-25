
// you can put x before describe to ignore test and put f to forcefully run the specific test and ignore all app test

describe('firsttest', () => {
  let expected = '';
  let expectMatch = null;

  beforeEach(() => {

  expected = 'firstTest';
  expectMatch = new RegExp(/^first/);
});
  it('checks if firstTest is firsttest', () => expect('firstTest').toBe(expected));
  it('checks if firstTest match', () => expect('firstTest').toMatch(expectMatch));

});
