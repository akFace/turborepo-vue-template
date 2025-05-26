import {
  MaybeRef,
  RemovableRef,
  StorageLike,
  StorageOptions,
  useStorage,
} from '@vueuse/core';

/** 使用 ExpiryLocalStorage 处理缓存，主要用于给某些数据添加过期时间 */

export function useExpiryLocalStorage<T extends { expiry: number; data: any }>(
  key: string,
  initialValue: MaybeRef<T>,
  options?: StorageOptions<T>,
): { key: string; ref: RemovableRef<T> } {
  const storage = useStorage(key, initialValue, new ExpiryLocalStorage(), {
    ...options,
    writeDefaults: false,
  });
  return { key, ref: storage };
}

export type WithExpiry<T> = { expiry: number; data: T };

export interface IUseLocalStorageWithExpiryOptions<T>
  extends StorageOptions<T> {
  /** 数据有效期 */
  expiry: number;
}

class ExpiryLocalStorage implements StorageLike {
  getItem(key: string): string | null {
    const str = localStorage.getItem(key);
    if (!str && str?.startsWith('{')) return null;
    try {
      if (str) {
        const value = JSON.parse(str);
        if (value.expiry && value.expiry < Date.now()) {
          this.removeItem(key);
          return null;
        }
        return str;
      } else {
        return null;
      }
    } catch (error) {
      // 如果通过JSON格式化失败，直接返回字符串
      return str;
    }
  }
  setItem(key: string, value: string): void {
    if (!value || value === 'undefined') return;
    console.log('ExpiryLocalStorage setItem', key, value);

    localStorage.setItem(key, value);
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
