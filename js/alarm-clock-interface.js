var Clock = require('./../js/alarm-clock.js').clockModule;


$(document).ready(function(){
  $('#time').text(moment().format('LTS'));
  setInterval(function() {
    $('#time').text(moment().format('LTS'));
  }, 1000);

  var alarmClock = new Clock();
  var array = [];

  $("form").submit(function(event) {
    event.preventDefault();
    var time = $("#alarmTime").val();
    console.log(time);
    array.push(time);
  });

  $("#snooze").submit(function(event) {
    event.preventDefault();

    var addFive = parseInt($("#alarmTime").val().slice(3, 5)) + 5;
    var backToTime = addFive.toString().padStart(2, "0");

    alert(backToTime);





  });

  setInterval(function() {
    var military = [moment().format('HH:mm')];
    // console.log(array);
    // console.log(military);
    alarmClock.alarm(military[0], array[0]);
  }, 1000);
});
