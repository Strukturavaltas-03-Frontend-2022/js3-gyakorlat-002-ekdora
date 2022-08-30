let cookies = {};
Object.defineProperty(document, 'cookie', {
  get() {
    return Object.entries(cookies).map(([key, value]) => `${key}=${value}`).join('; ');
  },

  set(cookieStr = '') {
    if (!cookieStr) {
      cookies = {};
      return;
    }
    const name = cookieStr.split('=')[0];
    const value = cookieStr.split('=')[1].split(';')[0];
    cookies[name] = value;
  },
});
