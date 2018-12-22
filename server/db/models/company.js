'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define('Employer', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    logoUrl: {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    industry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {});
  Employer.associate = function(models) {
    // associations can be defined here
  };
  return Employer;
};
