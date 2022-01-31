const { response, request } = require('express'); // didnt add this it was added by postman you can choose to leave it or take this out
const express = require('express'); 

const app = express(); 
app.use(express.json()); //you need to add this to allow the api to read the json file from postman - so express is expecting a json file

app.get('/', (request,response) => { //the '/' means root 
    response.send('Hello World!') 
});

app.post('/users', (req,res) => { // using daries method you would have to put req or res here
    const {name, age, email} = req.body; //req.body the body is always whats being sent to the body, pushing an object to the body 
                                        // location of the operation
                                        // localhost:3000/users
                                                // 3000/ is a route
                                                    // users/ is another route
                                        //the user account we decide what is there

   // const name1 = req.body.name //- this is called deconstructing - and the same thing as the one above, just longer form of doing it
   const user = {
       fullName: name,
       age: age,
       email: email
   }

    const user = { name, age, email}; //assign a value into the key pair, like a form that the user will have to complete
                                      //everything sent to the server is sent to the body
                                      

    const result = `My name is ${user.name}, I am ${user.age} years old and my email is ${user.email}`; //once completed this will output

    res.send(result); //this will console log the result of your info
})

app.listen(3000, () => {
    console.log('We be listening on 3000') //this didnt work at first because you had to go to package.json and add the "src/index.js" to the main
});
