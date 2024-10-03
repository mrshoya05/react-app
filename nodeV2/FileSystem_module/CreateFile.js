const fs = require('fs');
 const dirPath = './mydir'

 try {
    fs.mkdirSync(dirPath)
 } catch (error) {
    if(error.code === 'EEXIST'){
        console.log("already exist data");
        
    }
    console.error("error creating dir !")
 }


 // recursive 
 const fs = require("fs")

fs.mkdir("./files/a/new-directory-name", { recursive: true }, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})