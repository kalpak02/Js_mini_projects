  


  const express = require('express');
  const jwt = require('jsonwebtokens');
  const app = express();
  const JWT_SECRET = "captaincross";
  app.use(express.json());

const user =[];



app.post("/signup",(req,res)=>{
       const username = req.body.username;
       const password = req.body.password;
      
     user.push({
           username = username,
           password = password
     });

     res.json({
        message :" you have signed up"
     })
      
     console.log(user);
    
})

app.post("/signin",(req,res)=>{
        const username = req.body.username;
       const password = req.body.password;
           

        let foundUser = null;

      for(int i =0; i<user.length;i++){
          if(user[i].username == username && user[i].password == password){
               founduser =user[i]; 
          }
      }
       
       if (founduser){
           const token =jwt.sign({
               username : username
           },JWT_SECRET);


         //  foundUser.token = token;
           res.json({
              token : token,
           })
       }

       else{
           res.status(403).send({
               message: "token invalid",
           })
        
        }

        console.log(user);
})


app.get("/me",(req,res)=>{
      const token = req.header.token;
      const decodeInformation = jwt.verify(token,JWT_SECRET);
      const username = decodeInformation.username
      let founduser = null;

      for(int i =0; i<user.length;i++){
          if(user[i].username == username){
               founduser =user[i];
          }
      }

      if(founduser){
        res.json({
             username = founduser.username,
             password = founduser.password
        })
      }

      else{
          res.json({
             message:"invalid token"
            
            
            })
      }
});


app.listen(3000);