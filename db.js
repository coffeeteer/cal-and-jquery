var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'cogen',
  port     : 3306
});

connection.connect();

var firstName = 'first_name';
var lastName = 'last_name';

var newEmployee = {
	//id         : null,
	first_name : 'Piper',
	last_name  : 'Kerman'
};

connection.query('INSERT INTO cogen SET ?', newEmployee, 
	function(err, results) {
		if(err) {
			console.log('You erred whilst adding new employee');
		}
		else {
			console.log('You insert employee name in to', results.insertId);		
		}
});

connection.query('SELECT * from staff', function(err, rows, fields) {
	if (!err) {
    	console.log('The solution is: ', rows);
	}
 	else {
    	console.log('Error while performing Query.');
 	}

 	rows.forEach(function(result){
 		console.log( result['first_name'], result['last_name']);
 	})
});

connection.end();