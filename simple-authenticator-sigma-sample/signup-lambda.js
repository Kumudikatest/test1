let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

    let response;
	let inserts = [event.email, event.password, event.lastName, event.firstName, event.address]; 
	// Replace the query with the actual query
	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end the DB connection after it's used
	rds.query({
		instanceIdentifier: 'authDatabase',
		query: 'INSERT INTO users (Email, Password, LastName, FirstName, Address) VALUES (?, ?, ?, ?, ?);',
		inserts: inserts
	}, function (error, results, connection) {
		if (error) {
			response = error;
			throw error;
		} else {
			response = "Successfully added a new user with email";
			console.log(results);
		}
		connection.end();
		callback(null, response);
	});
}