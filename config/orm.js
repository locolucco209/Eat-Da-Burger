// import Mysql connection
const connection = require('../config/connection.js');

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');

    }
    return arr.toString();
};

function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
};

// Object Relational Mapping
let orm = {
    selectAll: (tableName, callback) => {
        let queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, (err, data) => {
            if (err) { throw err; }
            callback(data);
        });
    },
    insertOne: (tableName, cols, vals, callback) => {

        let queryString = "INSERT INTO " + tableName + " (" + cols.toString() + ") VALUES (?)";
        connection.query(queryString, vals, (err, data) => {
            if (err) throw err;
            callback(data);
        });
    },

    updateOne: (tableName, condition, callback) => {

        let queryString = "UPDATE " + tableName + " SET devoured = true WHERE " + condition;
        connection.query(queryString, (err, data) => {
            if (err) { throw err; }
            callback(data);
        });
    }

};

// Export orm
module.exports = orm;


