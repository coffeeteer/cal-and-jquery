$(document).ready(function() {
	
	

	//Month JavaScript
	var date  = new Date();
	var month = date.getMonth();
	var day = date.getDay();

	var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

	
	// Test results
	// console.log(date);
	// console.log(month, 'This Month');
	// console.log(month_name, 'The Month Names');
	// console.log(day, 'The day');
	// console.log(day_name, 'Day Names');
	console.log(month_name[month], 'This Month');

	// $('#calendar-header').append(date).append(day);

	// Iterate throught Months
	
	

});