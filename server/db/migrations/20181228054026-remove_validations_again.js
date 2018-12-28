'use strict';
// remove all email validations on students and employers if they exist
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint('Students', "email_unique_idx")
    ])
  },

  down: (queryInterface, Sequelize) => {}
};
