import { Dialog, DialogOptions } from 'vant';
const showDialog = async (
  content: string,
  title?: string,
  options?: DialogOptions
) => {
  return new Promise<void>((resolve, reject) => {
    Dialog.alert({
      title: title || '',
      message: content,
      theme: 'round-button',
      ...options,
    }).then(() => {
      resolve(true);
    });
  });
};
export default showDialog;
