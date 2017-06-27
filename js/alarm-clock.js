function Clock(name) {
  this.name = name;
}
Clock.prototype.alarm = function(pageClock, alarmTime) {

  if(pageClock === alarmTime) {
    alert("Beeeeeeep boooooop beeeeeeep");
  }
}
exports.clockModule = Clock;
