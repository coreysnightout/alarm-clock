var Clock = require('./../js/alarm-clock.js').clockModule;


$(document).ready(function(){



  $('#time').text(moment().format('HH:mm'));

  setInterval(function() {
    $('#time').text(moment().format('HH:mm'));
  }, 1000);




alert("test");

var alarmClock = new Clock();
var array = [];
  $("form").submit(function(event) {
    event.preventDefault();
    var time = $("#alarmTime").val();
    array.push(time);
    alert(array);
  });

  setInterval(function() {
    var timeOnPage = $('#time').html();
    console.log(array);
    alarmClock.alarm(timeOnPage, array[0]);

  }, 1000);

});
