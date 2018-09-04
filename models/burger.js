
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers",function(res){
            callback(res);
        })
    },

    insertD: function(colNames,values,callback){
        orm.insertD("burgers", colNames,values,function(res){
            callback(res);
        })
    },

    updateD: function(newObj,condition,callback){
        orm.updateD("burgers",newObj,condition,function(res){
            callback(res)
        })
    },

    deleteD: function(condition,callback){
        orm.deleteD("burgers",condition,function(res){
            callback(res)
        })
    }
};

module.exports = burger;