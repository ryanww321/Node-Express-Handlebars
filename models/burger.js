var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(set, cb){
        orm.create("burgers", set, function(res){
            cb(res);
        });
    },
    update: function(set, condition, cb){
        orm.update("burgers", set, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        })
    }
};

module.exports = burger;