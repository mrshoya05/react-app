const { log } = require('console');
const fs = require('fs');

fs.appendFile("./example.txt", "Hello world !", (err)=>{
    if(err){
        log("error  data appending ");

    }
    log("data appended successfully !")
} );