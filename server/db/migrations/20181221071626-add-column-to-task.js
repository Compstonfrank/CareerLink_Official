'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Tests', 'age', {
    type: Sequelize.INTEGER,
    defaultValue: 0
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tests', 'age');
  }
};
