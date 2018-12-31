'use strict';
// remove all email validations on students and employers if they exist
// this migration may cause errors if your database didn't originally have a unique email constraint.
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint('Students', "email_unique_idx")
    ])
  },

  down: (queryInterface, Sequelize) => {}
};
