'use strict';
// empty all table so validators can be removed
module.exports = {
  up: (queryInterface, Sequelize) => {
    const op = Sequelize.Op;
    return Promise.all([
      queryInterface.bulkDelete('Students', {
        createdAt: {
          [op.ne]: null
        }
      }),
      queryInterface.bulkDelete('Employers', {
        createdAt: {
          [op.ne]: null
        }
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    // nothing. I want to permanently drop all data since we have seed files and are not in production.
  }
};
