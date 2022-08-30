const storageMockFactory = () => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store = { ...store, [key]: value };
    },
    removeItem(key) {
      const { [key]: deleted, ...updatedStore } = store;
      store = updatedStore;
    },
    clear() {
      store = {};
    },
  };
};

export default storageMockFactory;
