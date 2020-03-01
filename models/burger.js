var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(set, cb){
        orm.insertOne("burgers", set, function(res){
            cb(res);
        });
    },
    updateOne: function(set, condition, cb){
        orm.updateOne("burgers", set, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        })
    }
};

module.exports = burger;