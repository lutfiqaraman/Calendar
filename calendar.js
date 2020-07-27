document.addEventListener('DOMContentLoaded', function() {
  ShowCalendar();
}, false);

var start = "2020-07-21";
var end = "2020-07-21";

var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: 'dayGridMonth',

    events: function(info, successCallback, failureCallback ) {
      
      info.start = start;
      info.end = end;

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


