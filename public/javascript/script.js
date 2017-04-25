$(document).ready(function(){
		var calendar = $('#calendar')
		calendar.fullCalendar({
	        // put your options and callbacks here
	        header: {
	                left: ' today,prev,next,  title',
	                right: 'month,agendaWeek,agendaDay ',
	        },
	        aspectRatio: 2,
	        selectable: true,
	        selectHelper: true,
	        editable: false,

	        events: [
		        {
		            title  : 'Big ass event',
		            start  : '2017-04-01',
		            description: 'Totally fucking awesome'
		        },
		        {
		            title  : 'Bigger ass event',
		            start  : '2017-04-04',
		            end    : '2017-04-05'
		        },
		        {
		            title  : 'Totally ass Event',
		            start  : '2017-04-09T12:30:00',
		            allDay : false // will make the time show
		        }
		    ]

			
	        
	    }); //calendar wrap function


$(document).on('load', calendar.eventRender);
//$(document).on('turbolinks:load', initialize_calendar);	//Event handler
}); //document.ready