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
		            title: 'Work event',
		            start: '2010-04-04',
		            description: 'This is a a cool event'
		        }
		        // more events here
		    ],
		    eventRender: function(event, element) {
		        element.qtip({
		            content: event.description
		        });
		    }	

			
	        
	    }); //calendar wrap function

$(document).on('load', calendar.eventRender);
//$(document).on('turbolinks:load', initialize_calendar);	//Event handler
}); //document.ready