import '../../__mocks__/dom';
import '../../__mocks__/cookie';
import '../../__mocks__/sessionStorage';
import cookieHandler from '../solution/js/cookieHandler';

const cookies = {
  viewed: '5',
  uid: '354774631237',
  ssid: 'Bx55OWbHJ0Vt_IGIF',
};

describe('cookieHandler ', () => {
  beforeEach(() => {
    document.cookie = '';
    Object.entries(cookies).forEach(([key, value]) => {
      document.cookie = `${key}=${value}`;
    });
  });

  test('getAll() should return a key-values cookies object', () => {
    expect(cookieHandler.getAll()).toMatchObject(cookies);
  });

  test('flush() should remove all cookies', () => {
    cookieHandler.flush();

    expect(document.cookie).toBe('viewed=; uid=; ssid=');
  });

  test('toSessionStorage() should save cookies to sessionStorage', () => {
    cookieHandler.toSessionStorage();

    Object.entries(cookies).forEach(([key, value]) => {
      expect(sessionStorage.getItem(key)).toBe(value);
    });
  });
});
