import { MessageOptions, ElMessage } from 'element-plus';
export interface IMessageOptions extends MessageOptions {
  closeAll: boolean;
}
export function showMessage(options: Partial<IMessageOptions>) {
  options = Object.assign(
    {
      closeAll: true,
    },
    options
  );
  if (options.closeAll) ElMessage.closeAll();
  ElMessage(options);
}
