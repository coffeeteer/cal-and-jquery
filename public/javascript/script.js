$(document).ready(function(){
		var calendar = $('#calendar')
		calendar.fullCalendar({
	        // put your options and callbacks here
	        header: {
	                left: ' today,prev,next,title',
	                right: 'month,agendaWeek,agendaDay ',
	        },
	        aspectRatio: 2,
	        selectable: true,
	        selectHelper: true,
	        editable: false,
	        // textColor: black ,// an option!

	        events: [
		        {
		            title          : 'Day Shift',
		            start          : '08:00',
		            end            :  '16:00',
		            //rendering      : 'background',
		            textColor      : 'black' ,// an option!
		            backgroundColor: 'orange',
		            description    : 'Day Shift',
		            allDay : false
		            
		        },
		        {   
		            title          : 'Afternoon Shift',
		            start          : '16:00',
		            end            :  '00:00',
		            //rendering      : 'background',
		            textColor      : 'black' ,// an option!
		            backgroundColor: 'red',
		            description    : 'Afternoon Shift',
		            allDay : false
		        },
		        {
		         	title          : 'Midnight Shift',
		            start          : '00:00',
		            end            :  '08:00',
		            //rendering      : 'background',
		            textColor      : 'black' ,// an option!
		            backgroundColor: 'blue',
		            description    : 'Midnight Shift',   
		            allDay : false // will make the time show
		        }
		    ]

			
	        
	    }); //calendar wrap function


$(document).on('load', calendar.eventRender);
//$(document).on('turbolinks:load', initialize_calendar);	//Event handler
}); //document.ready