module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["ktestcognitor"] = {
            host: "ktestcognitor.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
            port: "3306",
            user: "Kumudika",
            password: process.env.Password_rdsKtestcognitor,
            database: "KTestCognito",
        };
    };