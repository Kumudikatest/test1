let google = require('googleapis').google;
let _auth = require('./Authorizer');
const pubsub = google.pubsub('v1');

exports.handler = function (request, response) {
    pubsub.projects.topics.subscriptions.list({
        topic: `projects/${process.env.GCP_PROJECT}/topics/SigmaOutgoing`,
        pageSize: 10
    })
        .then(response => {
            console.log(response.data);  // successful response
            /*
            response.data = {
                "subscriptions": [
                    "projects/<project>/subscriptions/<subscription-1>",
                    "projects/<project>/subscriptions/<subscription-2>",
                    ...
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    response.send({ "message": "Successfully executed" });
}