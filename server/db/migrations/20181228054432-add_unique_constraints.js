'use strict';
  // re-implement the unique email validation. Model is already updated to reflect the state.
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('Students', ['email'], {
        type: 'Unique',
      }),
      queryInterface.addConstraint('Employers', ['email'], {
        type: 'Unique',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    // Leave blank on purpose. We don't want to go back to no validations.
  }
};
