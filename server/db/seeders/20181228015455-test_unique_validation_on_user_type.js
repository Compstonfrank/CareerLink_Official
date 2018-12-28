'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User-Types', [{
        email: 'test@yahoo.com',
        type: 'employer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      email: 'test@yahoo.com',
      type: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('User-Types', null, {});
  }
};
