import '../../__mocks__/dom';
import '../../__mocks__/cookie';
import { jest } from '@jest/globals';
import setCookie from '../solution/js/setCookie';

global.Date = jest.fn(() => 'Fri Jan 21 2022 21:31:27 GMT+0100 (Central European Standard Time)');
global.Date.now = jest.fn(() => 1642796187014);
global.Date.getTime = jest.fn(() => 1642796187014);
global.Date.prototype.toUTCString = jest.fn(() => 'Fri Jan 21 2022 21:16:27 GMT+0100 (Central European Standard Time)');

describe('setCookie ', () => {
  beforeEach(() => {
    document.cookie = '';
  });

  test('should set a new cookie with name: token and 15 minutes expires', () => {
    setCookie('2265DABA0872FC3AEF169D079365E590F0CBC8ED');
    const expected = 'token=2265DABA0872FC3AEF169D079365E590F0CBC8ED';

    expect(Date).toHaveBeenCalledWith(1642797087014);
    expect(document.cookie).toBe(expected);
  });

  test('should set a new cookie with name: token and 15 minutes expires', () => {
    setCookie('DE8CBC0F095E563970D961FEA3CF2780ABAD5622');
    const expected = 'token=DE8CBC0F095E563970D961FEA3CF2780ABAD5622';

    expect(Date).toHaveBeenCalledWith(1642797087014);
    expect(document.cookie).toBe(expected);
  });
});
