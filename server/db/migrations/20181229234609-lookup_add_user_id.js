'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('User-Types', 'userId', {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('User-Types', 'userID');
  }
};

