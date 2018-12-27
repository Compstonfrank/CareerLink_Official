'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User-Types', [{
        email: 'info@whitefoxdefense.com',
        type: 'employer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      email: 'justin.cook.dev@gmail.com',
      type: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('User-Types', null, {});
  }
};
