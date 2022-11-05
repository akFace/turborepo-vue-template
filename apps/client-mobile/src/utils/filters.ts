import { MACHINE_STAUS } from './constant';

export function getMachineStatusName(status: number) {
  if (status === MACHINE_STAUS.ONLINE) {
    return '空閒';
  }
  if (status === MACHINE_STAUS.USED) {
    return '佔用';
  }
  if (status === MACHINE_STAUS.REPAIRS) {
    return '維修中';
  }
  if (status === MACHINE_STAUS.OFFLINE) {
    return '已下架';
  }
}
