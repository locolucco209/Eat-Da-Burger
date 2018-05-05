const orm = require('../config/orm.js');

let burger = {
    all: (callback) => {
        orm.selectAll('burgers', (res) => {
            callback(res);
        });
    },
    create: (vals, callback) => {
        orm.insertOne('burgers', 'burger_name', vals, (res) => {
            callback(res);
        });
    },
    update: (condition, callback) => {
        orm.updateOne('burgers', condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;
