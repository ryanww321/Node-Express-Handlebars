var connection = require("../config/connection.js");

//Make sets work properly
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (tableInput, set, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " SET " + objToSql(set);
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    update: function (tableInput, set, condition, cb) {
        var queryString = "UPDATE " + tableInput;

        queryString += " SET ";
        queryString += objToSql(set);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });

    },
    delete: function (tableInput, condition, cb) {
        var queryString = "DELETE FROM " + tableInput;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;