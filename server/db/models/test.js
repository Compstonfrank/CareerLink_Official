'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 0
     }
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};
