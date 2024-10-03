const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("unable to read file ");
        
    }
    console.log(data);
    
})

//using async data 

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
    
} catch (error) {
    console.log("unable to read data !");
    
}