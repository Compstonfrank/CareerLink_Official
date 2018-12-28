'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addIndex('Students', ['email'], {
        indexName: 'studentEmailIndex',
        indicesType: 'UNIQUE'
      }),
      queryInterface.addIndex('Employers', ['email'], {
        indexName: 'employerEmailIndex',
        indicesType: 'UNIQUE'
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeIndex('Students', 'studentEmailIndex'),
      queryInterface.removeIndex('Employers', 'employerEmailIndex')
    ]);
  }
};
