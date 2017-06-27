var Clock = require('../js/alarm-clock.js').clockModule;

$(document).ready(function(){

  $('#time').text(moment().format('LT'));
  // var stat = $('#time').text(moment().format('LT'));
  setInterval(function() {
    $('#time').text(moment().format('LT'));
  }, 1000);



  // alert();

  $("form").submit(function(event) {
    event.preventDefault();
    var time = $("#alarmTime").val();
    alert(time);
  });
});
