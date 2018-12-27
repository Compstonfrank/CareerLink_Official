'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Students', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: 'Email address is already in use!'
        }
      }),
      queryInterface.changeColumn('Employers', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: 'Email address is already in use!'
        }
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Students', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }),
      queryInterface.changeColumn('Employers', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      })
    ]);
  }
};
