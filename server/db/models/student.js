'use strict';

const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      nunique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg',
      validate: {
        isUrl: true
      }
    },
    LinkedInUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    githubUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    youtubeUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    projectUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      validate: {
        len: [0, 3]
      }
    }
  },
  {
    hooks: {
      beforeValidate: function (user) {
        if (user.id === null || !user.id) {
          user.id = uuidv4();
        }
        if(user.githubUrl === ''){
          user.githubUrl = null
        }

        if(user.LinkedInUrl === ''){
          user.LinkedInUrl = null
        }

        if(user.youtubeUrl === ''){
          user.youtubeUrl = null
        }

      },
    }
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
