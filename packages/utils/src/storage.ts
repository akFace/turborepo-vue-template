export function setStorage(key: string, value: any, role?: string) {
  let storageItem = getStorage(key);
  if (
    Object.prototype.toString.call(storageItem) === '[object Object]' &&
    Object.prototype.toString.call(value) === '[object Object]'
  ) {
    storageItem = { ...storageItem, ...value };
  } else {
    storageItem = value;
  }
  if (role) {
    window.localStorage.setItem(
      `saas-live-${key}-${role}`,
      JSON.stringify(storageItem)
    );
  } else {
    window.localStorage.setItem(
      `saas-live-${key}`,
      JSON.stringify(storageItem)
    );
  }
}

export function getStorage(key: string, role?: string) {
  let itemStorage: any;
  if (role) {
    itemStorage = window.localStorage.getItem(`saas-live-${key}-${role}`);
  } else {
    itemStorage = window.localStorage.getItem(`saas-live-${key}`) || '{}';
  }
  return JSON.parse(itemStorage);
}

export function removeStorage(key: string) {
  window.localStorage.removeItem(`saas-live-${key}`);
}
