'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Students', 'password', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('Employers', 'password', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Students', 'password'),
      queryInterface.removeColumn('Employers', 'password')
    ]);
  }
};
