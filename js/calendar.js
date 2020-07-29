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
    
      var events = [];

      events.push({
        title: "Hello World",
        start: "2020-07-01",
        end: "2020-07-01"
      });

      successCallback(events);
    },

  });

function ShowCalendar() {
  calendar.render();
}