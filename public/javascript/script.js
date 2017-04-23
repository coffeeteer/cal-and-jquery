$(document).ready(function(){
	$('#calendar').fullCalendar({
        // put your options and callbacks here
        //height: 650,
        aspectRatio: 2,
        header: {
                left: ' today,prev,next,  title',
                right: 'month,agendaWeek,agendaDay '
        },
        businessHours: [ 
        	{
			    // days of week. an array of zero-based day of week integers (0=Sunday)
			    dow: [ 1, 2, 3, 4, 5], // Monday - Friday

			    start: '08:00', // a start time (8am in this example)
			    end: '16:00', // an end time (4pm in this example)
			},
			{
				dow: [6, 0],
				start: '12:00', // a start time (12pm in this example)
			    end: '00:00', // an end time (12am in this example)	
			}
		 ],
		 events: [],
    }); //calendar wrap
}); //document.ready