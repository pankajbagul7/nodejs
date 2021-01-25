'use strict';
const express = require('express');
const bodyParser = require('body-parser');

function log(logTxt) {
    console.log(logTxt);
}

const app = express();
const url = '/users';
const users = require('./users.json');

app.use(bodyParser.json());

app.get('/demo', function (req, res) {
    log('Get All Request');
    //res.status(200).json(users);
    
   res.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    }); 
    

            res.write('<!DOCTYPE html><html><body><h1 style="background-color:Blue">POC - Project "Piper": Continuous Delivery for the SAP Ecosystem</h1>'+
                      '<p>Continuous delivery is a method to develop software with short feedback cycles. It is applicable to projects both for SAP Cloud Platform and SAP on-premise platforms. SAP implements tooling for continuous delivery in project "Piper". The goal of project "Piper" is to substantially ease setting up continuous delivery in your project using SAP technologies.</p>'+
                       '</body></html>');  
            res.end(); 
});

app.get(url, function (req, res) {
    log('Get All Request');
    res.status(200).json(users);
});


app.get(url + '/:id', function (req, res) {
    // First read existing users.
    const userId = parseInt(req.params.id);
    log('Get User Request for id ' + userId);

    const foundUser = users.find(function(user) {
        return user.id === userId;
    });
    if (!foundUser) {
        res.status(404).end();
        return;
    }

    res.status(200).json(foundUser);
});

app.post(url, function (req, res) {

    var newUser = req.body;

    newUser.id = users.length;
    users.push(newUser);

    log('User added ' + newUser + ' with id: ' + newUser.id);

    res.status(201).json(newUser);
});

const PORT = process.env.PORT || 8088;

var server = app.listen(PORT, function () {

    const host = server.address().address;
    const port = server.address().port;

    log('Example app listening at http://' + host + ':' + port);

});
