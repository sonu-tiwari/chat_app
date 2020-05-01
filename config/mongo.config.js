const mongoose = require('mongoose');

const dbConnection = mongoose.connect('mongodb://localhost:27017/chitchat'
                                      , { 
                                          useUnifiedTopology: true,
                                          useNewUrlParser   : true
                                        }
                            );
dbConnection.then((success, reject)=>{
    if (reject) console.log(reject);
    else console.log("Successfully connected to mongodb colection ChitChat");
});

module.exports = dbConnection;
