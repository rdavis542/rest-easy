const express = require('express');
const math = express.Router();

math.get('/add', function (req, res) {

    let total = {};
    try{
        var n1 = parseFloat(req.query.num1,10);
        var n2 = parseFloat(req.query.num2,10);
        if (isNaN(n1) || isNaN(n2)){
            throw new Error("num1 or num2 is not valid");
        }
    total = n1 + n2;
    }
    catch(error){
     total = {error: "Invalid Request: num1, num2 must be provided as integers"};
    }
    
    res.send(JSON.stringify(total));
})

math.get('/sub', function (req, res){

    let total = {};
    try{
        var n1 = parseFloat(req.query.num1,10);
        var n2 = parseFloat(req.query.num2,10);
        if (isNaN(n1) || isNaN(n2)){
            throw new Error("num1 or num2 is not valid");
        }
    total = n1 - n2;
    }
    catch(error){
     total = {error: "Invalid Request: num1, num2 must be provided as integers"};
    }
    
    res.send(JSON.stringify(total));

})

math.get('/mult', function (req, res){

    let total = {};
    try{
        var n1 = parseFloat(req.query.num1,10);
        var n2 = parseFloat(req.query.num2,10);
        if (isNaN(n1) || isNaN(n2)){
            throw new Error("num1 or num2 is not valid");
        }
    total = n1 * n2;
    }
    catch(error){
     total = {error: "Invalid Request: num1, num2 must be provided as integers"};
    }
    
    res.send(JSON.stringify(total));

})

math.get('/div', function (req, res){

    let total = {};
    try{
        var n1 = parseFloat(req.query.num1,10);
        var n2 = parseFloat(req.query.num2,10);
        if (isNaN(n1) || isNaN(n2)){
            throw new Error("num1 or num2 is not valid");
        }
    total = n1 / n2;
    }
    catch(error){
     total = {error: "Invalid Request: num1, num2 must be provided as integers"};
    }
    
    res.send(JSON.stringify(total));

})

module.exports = math;