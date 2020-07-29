document.addEventListener('DOMContentLoaded', function() {
  SetInitialDate();
  ShowCalendar();
}, false);

function SetInitialDate() {

}

var events = [];
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: 'dayGridMonth',

    events: function(info, successCallback, failureCallback ) {
      successCallback(events);
    },

  });

function ShowCalendar() {
  calendar.render();
}

$("#addEvent").on("click", function() {
  events.push({
    title: $("#eventName").val(),
    start: $("#fromDate").val(),
    end: $("#toDate").val()
  });

  calendar.refetchEvents();
});