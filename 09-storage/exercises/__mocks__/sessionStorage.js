import storageMockFactory from './storageMockFactory';

Object.defineProperty(global, 'sessionStorage', {
  writable: true,
  value: storageMockFactory(),
});
