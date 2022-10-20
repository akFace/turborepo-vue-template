export function isUrl(url: string) {
  return /^(((https?|ftp|news):\/\/|\w+(\.\w+)+)(:\w+)?).*/.test(url);
}
