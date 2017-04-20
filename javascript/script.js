$(document).ready(function() {
	//Month JavaScript
	var date  = new Date();
	var month = date.getMonth();
	var day = date.getDay();

	// var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// var day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

	// console.log(month_name[month], 'This Month');
	// $('#present-month-year').append(month_name[month] + ' ' + new Date().getFullYear());

	// requirejs.config({
	//   packages: [{
	//     name: 'moment',
	//     // This location is relative to baseUrl. Choose bower_components
	//     // or node_modules, depending on how moment was installed.
	//     location: '[bower_components|node_modules]/moment'
	//     main: 'moment'
	//   }]
	// });

	$('#calendar').fullCalendar({
		console.log('fullCalendar loaded');
    });
	

});