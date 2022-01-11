// BUILD YOUR SERVER HERE
//PSEUD 'DATA SECTION'
const express = require('express');
const Users = require('./users/model');

// INSTANCE OF EXPRESS APP
const server=express(); //invoked

// GLOBAL MIDDLEWARE
server.use(express.json()); //express is a framework of sorts that will build a server

//PSEUD 'LOGIC SECTIONR'

//NOTE all USERS have an id, a name, and a bio -- all of which are required
//// GET endpoint : /api/users --  get all users
server.get('/api/users',async(req,res)=>{
    try {
      const allUsers = await Users.find();
      res.json(allUsers);
    } catch(err) {
        res.status(500).json({message:err.message});
    }
});
// TEST THIS ENDPOINT !

//// GET by id endpoint : /api/users/:id -- get single user by id

//// POST endpoint : /api/users -- create a user (use DATA from request body !)

//// PUT endpoint : /api/users/:id -- update a user by id

//// DELETE endpoint : /api/users/:id -- deletes user by id


module.exports = server;