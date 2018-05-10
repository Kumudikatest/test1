let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.listUsers({
		UserPoolId: "us-east-1_nnX97LbM7",
		Filter: 'email="kumudika@adroitlogic.com"'
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Fail list");
			throw error;
		}
		// your logic goes within this block
		else {
			console.log("Pass list");
			console.log(data);
		}
	});
	cognito_idp.adminGetUser({
		UserPoolId: "us-east-1_nnX97LbM7", /* required */
		Username: "Kumudika" /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Fail Get");
			throw error;
		}
		// your logic goes within this block
		else {
			console.log("Pass Get");
			console.log(data);
		}
	});
	cognito_idp.adminEnableUser({
		UserPoolId: "us-east-1_nnX97LbM7", /* required */
		Username: "Kumudika" /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Fail enable");
			throw error;
		}
		// your logic goes within this block
		else {
			console.log("Pass enable");
			console.log(data);
		}
	});

	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'ktestcognitor'
	}, function (error, connection) {
		if (error) { throw err; }
	});


	callback(null, 'Successfully executed');
}