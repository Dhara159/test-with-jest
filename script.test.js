const googleSearch = require('./script');

dbmock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

describe('googleSearch', () => {
  it('this is a test', () => {
    expect('hello').toBe('hello');
  });

  it('is searching google', () => {
    expect(googleSearch('testtest', dbmock)).toEqual([]);
    expect(googleSearch('dog', dbmock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbmock)).toEqual([]);
    expect(googleSearch(null, dbmock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbmock).length).toEqual(3);
  });
});