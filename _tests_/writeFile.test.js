jest.mock('../writeFile', () => {
  return (() => Promise.resolve('source contents'));
 });

 const writeFile = require('../writeFile');

describe('testing file reader function', () => {
  const source = './source.txt';

  it('reads a file', () => {

    return writeFile(source)
      .then(contents => {
        expect(contents).toBe('source contents');
      });
  });
});