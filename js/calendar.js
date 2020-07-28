document.addEventListener('DOMContentLoaded', function() {
  SetInitialDate();
  ShowCalendar();

}, false);

function SetInitialDate() {
  var dateControl = document.querySelector('input[type="date"]');
  dateControl.value = moment().format("L");
}

var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: 'dayGridMonth',

    events: function(info, successCallback, failureCallback ) {
      info.start = "2020-07-01";
      info.end = "2020-07-01";

      var events = [];

      events.push({
        description: 'here you go',
        title: 'hello world',
        start: info.start,
        end: info.end
      });

      successCallback(events);
    },

  });

function ShowCalendar() {
  calendar.render();
}


