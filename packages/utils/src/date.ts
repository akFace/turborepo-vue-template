export function formatTime(secondTime: number): string {
  let time: any = secondTime;
  let newTime, hour, minite, seconds: any;
  if (time >= 3600) {
    hour =
      parseInt(String(time / 3600)) < 10
        ? '0' + parseInt(String(time / 3600))
        : parseInt(String(time / 3600));
    minite =
      parseInt(String((time % 60) / 60)) < 10
        ? '0' + parseInt(String((time % 60) / 60))
        : parseInt(String((time % 60) / 60));
    seconds = time % 3600 < 10 ? '0' + (time % 3600) : time % 3600;
    if (seconds > 60) {
      minite =
        parseInt(String(seconds / 60)) < 10
          ? '0' + parseInt(String(seconds / 60))
          : parseInt(String(seconds / 60));
      seconds = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;
    }
    newTime = hour + ':' + minite + ':' + seconds;
  } else if (time >= 60 && time < 3600) {
    minite =
      parseInt(String(time / 60)) < 10
        ? '0' + parseInt(String(time / 60))
        : parseInt(String(time / 60));
    seconds = time % 60 < 10 ? '0' + (time % 60) : time % 60;
    newTime = '00:' + minite + ':' + seconds;
  } else if (time < 60) {
    seconds = time < 10 ? '0' + time : time;
    newTime = '00:00:' + seconds;
  }
  return newTime || '';
}
