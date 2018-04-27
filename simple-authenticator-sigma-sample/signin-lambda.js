let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

    let successfullyLoggedIn = false;
	let inserts = [event.email, event.password];
	// Replace the query with the actual query
	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end the DB connection after it's used
	rds.query({
		instanceIdentifier: 'authDatabase',
		query: 'SELECT * FROM users WHERE Email = ? AND Password = ?',
		inserts: inserts
	}, function (error, results, connection) {
		if (error) {
			throw error;
		} else {
			successfullyLoggedIn = results.length > 0;
		}

		connection.end();
		callback(null, successfullyLoggedIn);
	});
}