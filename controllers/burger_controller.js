var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.selectAll(function(data){
        res.render("index",{burgers:data})
    });
});

router.post("/api/burgers", function(req,res){
    burger.insertD("burger_name",req.body.burger_name,function(data){
        res.json(data);
    }
)
});

router.put("/api/burgers/:id",function(req,res){
    var condition= "id = "+ req.params.id;
    burger.updateD("devoured ="+req.body.devoured,condition,function(data){
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

router.delete("/api/burgers/:id",function(req,res){
    var condition= "id = " + req.params.id;
    burger.deleteD(condition,function(data){
        if (data.affectedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

module.exports = router;