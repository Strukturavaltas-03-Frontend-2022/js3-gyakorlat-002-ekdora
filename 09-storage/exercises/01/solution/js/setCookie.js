/* 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár! */

const setCookie = (value) => {
    const now = new Date(Date.now() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `token=${value};expires=${expires}`;
};

export default setCookie;
