const orm = require("../config/orm.js");

// Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the`burger.js` file.

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    }
};

module.exports = burger;