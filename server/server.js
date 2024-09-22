const express = require('express');
const connection = require('./database')

const bodyparser = require('body-parser')


const app = express();

const cors = require('cors');
app.use(bodyparser.json())
app.use(cors())





app.get('/', (req, res, next)=>{
    res.send("i am home route !")
})


app.get('/api/getdata', (req, res, next)=>{
    connection.query('SELECT * FROM employee', (err, result)=>{
        if(err){
            console.log("error occured !", err);
            return res.status(500).json({
                error: "internal server error !"
            })
          
        }
        res.json(result);
        // console.log(result);
        
        
    })
})



//add user data !

app.get("/api/search", (req, res)=>{
    const {searchTerm} = req.body;
    if(!searchTerm){
        res.status(400).json({
            message: "message is required !"
        })
    }

    const sql = 'SELECT * FROM employee WHERE  id LIKE ? OR name LIKE ? OR email LIKE ?';
    const  values = [`%${searchTerm}% , %${searchTerm}%, %${searchTerm}%`] ;

    connection.query(sql, values ,(err, result) => {
     if(err){
        res.status(500).send(
            {
                message: "database error"
            }

        )
     }
     res.json(result);
    })

})

app.listen(4000, ()=>{
    console.log("server is running !");
    
})