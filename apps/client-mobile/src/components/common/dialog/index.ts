import { Dialog, DialogOptions } from 'vant';

export async function showDialog(
  content: string,
  title?: string,
  options?: DialogOptions
) {
  return new Promise<boolean>((resolve, reject) => {
    Dialog.alert({
      title: title || '',
      message: content,
      theme: 'round-button',
      ...options,
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
}

export async function showDialogConfirm(
  content: string,
  title?: string,
  options?: DialogOptions
) {
  return new Promise<boolean>((resolve, reject) => {
    Dialog.confirm({
      title: title || '',
      message: content,
      theme: 'round-button',
      ...options,
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
}
