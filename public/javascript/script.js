$(document).ready(function(){
	//var initialize_calendar;
	//initialize_calendar = function() {
		var calendar = $('#calendar')
		calendar.fullCalendar({
	        // put your options and callbacks here
	        header: {
	                left: ' today,prev,next,  title',
	                right: 'month,agendaWeek,agendaDay '
	        },
	        aspectRatio: 2,
	        businessHours: true,
	        selectable: true,
	        selectHelper: true,
	        editable: false,

	        select: function(start, end) {
	        	$getScript('/events/new', function() {
	        		$('#event_date_range').val(moment(start).format('MM/DD/YYYY HH:mm')); //+ ' - ' + moment(end).format()
	        		date_range_picker();
	        		$('.start_hidden').val(moment(start).format('MM/DD/YYYY HH:mm'));
	        		$('.end_hidden').val(moment(end).format('MM/DD/YYYY HH:mm'));	
	        	});
	        	calendar.fullCalendar('unselect');
	        }
	    }); //calendar wrap function
	//};// initialize_calendar function

//$(document).on('turbolinks:load', initialize_calendar);	


	
}); //document.ready