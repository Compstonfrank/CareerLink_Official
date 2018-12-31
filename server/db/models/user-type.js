'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['student', 'employer']]
      }
    }
  }, {});
  UserType.associate = function(models) {
    // associations can be defined here
  };
  return UserType;
};
