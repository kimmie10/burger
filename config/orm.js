const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableInput, colToSearch, valOfCol, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function () {
        const queryString = "SELECT ??";
        console.log(queryString);
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function () {
        const queryString = "SELECT ??";

        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

};



module.exports = orm;