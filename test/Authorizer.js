const google = require("googleapis").google;

google.options({auth: new google.auth.Compute()});