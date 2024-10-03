const { log } = require("console");
const fs = require("fs");

fs.unlink('./example.txt', (err)=>{
    if(err){
        log("unable to delete file")
    }
    console.log("file deleted successfully !");
    
})