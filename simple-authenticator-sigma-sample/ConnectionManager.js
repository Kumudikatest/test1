module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["authDatabase"] = {
        host: process.env.EndPoint_rdsAuthDatabase,
        port: process.env.Port_rdsAuthDatabase,
        user: process.env.User_rdsAuthDatabase,
        password: process.env.Password_rdsAuthDatabase,
        database: "authDatabase"
    };
};