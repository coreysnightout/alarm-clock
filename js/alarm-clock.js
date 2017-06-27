function Clock(name) {
  this.name = name;
}
Clock.prototype.alarm = function(pageClock, alarmTime){
  if(pageClock === alarmTime) {
    console.log("Beeeeeeep boooooop beeeeeeep");
  }
};
exports.clockModule = Clock;
