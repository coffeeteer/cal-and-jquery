$(document).ready(function(){
	$('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
                left: ' today,prev,next,  title',
                center: '',
                right: 'month,agendaWeek,agendaDay '
            }
    }); //calendar wrap
}); //document.ready