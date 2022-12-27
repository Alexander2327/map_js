/* eslint-disable linebreak-style */
import ErrorRepository from '../js/ErrorRepository';

test('Test ErrorRepository method add', () => {
  const er = new ErrorRepository();
  er.add(500, 'Server Error');
  expect(er.translate(500)).toBe('Server Error');
});

test('Test ErrorRepository method add 2', () => {
  const er = new ErrorRepository();
  expect(er.translate(400)).toBe('Unknown error');
});
