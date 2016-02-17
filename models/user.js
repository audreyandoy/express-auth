'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: { //runs before validation and will throw an error about no pw. 
      beforeCreate: function(user, options, callback) {
        if (user.password) {
          bcrypt.hash(user.password, 10, function(err, hash) {
             if (err) return callback(err);
             user.password = hash;
             callback(null, user);
          });            
        } else {
          callback(null, user);
        }
      }
    }
  });
  return user;
};