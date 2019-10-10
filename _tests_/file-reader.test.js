jest.mock('../file-reader', () => {
  return (() => Promise.resolve('source contents'));
 });

 const fileReader = require('../file-reader');

describe('testing file reader function', () => {
  const source = './source.txt';

  it('reads a file', () => {

    return fileReader(source)
      .then(contents => {
        expect(contents).toBe('source contents');
      });
  });
});