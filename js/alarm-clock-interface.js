var Clock = require('./../js/alarm-clock.js').clockModule;


$(document).ready(function(){
  $('#time').text(moment().format('LTS'));
  setInterval(function() {
    $('#time').text(moment().format('LTS'));
  }, 1000);



  // alert("test");

  var alarmClock = new Clock();
  var array = [];
  $("form").submit(function(event) {
    event.preventDefault();
    var time = $("#alarmTime").val();
    array.push(time);
    // alert(array);
  });

  setInterval(function() {
    var military = [moment().format('HH:mm')];
    console.log(array);
    console.log(military);
    alarmClock.alarm(military[0], array[0]);
  }, 1000);
});
