let google = require('googleapis').google;
let _auth = require('./Authorizer');
const datastore = google.datastore('v1');

exports.handler = function (request, response) {

    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "transaction": "<transaction ID>"
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    response.send({ "message": "Successfully executed" });
}