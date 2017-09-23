var ejs = require("ejs");

function showCalculator(req,res) {

    ejs.renderFile('./views/calculator.ejs',function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
}



function calculate(req,res){
    var op=req.param("operation");
    var ip1=req.param("input1");
    var ip2=req.param("input2");
    var reg = /^-?\d*(\.\d+)?$/;

    if(ip1=="" || ip2==""){  //Either or both input is empty
        ejs.renderFile('./views/calculator.ejs',{message:"empty input"},function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }

    else if(!ip1.toString().match(reg) && !ip2.toString().match(reg)){ //Both inputs must be a number
        ejs.renderFile('./views/calculator.ejs',{message:"non-number input"},function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }

    else{
        var floatIp1=parseFloat(ip1);
        var floatIp2=parseFloat(ip2);
    }

    if(op=="add"){
        var ans=floatIp1+floatIp2;
        ejs.renderFile('./views/calculator.ejs',{message:"success",ip1:ip1,ip2:ip2,value:ans,op:op},function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }
    else if(op=="subtract"){
        var ans=floatIp1-floatIp2;
        ejs.renderFile('./views/calculator.ejs',{message:"success",ip1:ip1,ip2:ip2,value:ans,op:op},function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }
    else if(op=="multiply"){
        var ans=floatIp1*floatIp2;
        ejs.renderFile('./views/calculator.ejs',{message:"success",ip1:ip1,ip2:ip2,value:ans,op:op},function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }
    else if(op=="divide"){

        var ans=floatIp1/floatIp2;

        ejs.renderFile('./views/calculator.ejs',{message:"success",ip1:ip1,ip2:ip2,value:ans,op:op},function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }
    else if(op=="clear"){
        ejs.renderFile('./views/calculator.ejs',function(err, result) {
            // render on success
            if (!err) {
                res.end(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
    }
    else{

    }

}

exports.showCalculator=showCalculator;
exports.calculate=calculate;