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

	        select: function(start, end) {
	        	$getScript('/events/new', function() {
	        		$('#event_date_range').val(moment(start).format('MM/DD/YYYY HH:mm')); //+ ' - ' + moment(end).format()
	        		date_range_picker();
	        		$('.start').val(moment(start).format('MM/DD/YYYY HH:mm'));
	        		$('.end').val(moment(end).format('MM/DD/YYYY HH:mm'));	
	        	});
	        	calendar.fullCalendar('unselect');
	        },
	        //calendar.fullCalendar( 'renderEvent', event [, stick ] )

	        // eventRender: function(start, travis, view){
	        // }
	    }); //calendar wrap function

//$(document).on('turbolinks:load', initialize_calendar);	//Event handler
}); //document.ready