var connection = require("../config/connection.js");


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

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableInput, set, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " SET " + objToSql(set);

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function (tableInput, set, condition, cb) {
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

    }
}

module.exports = orm;