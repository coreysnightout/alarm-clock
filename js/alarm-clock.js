function Clock(name) {
  this.name = name;
}
Clock.prototype.alarm = function (times, alarmTime) {

  if(times === alarmTime) {
    alert("Beeeeeeep");
  }
};
export.clockModule = Clock;
