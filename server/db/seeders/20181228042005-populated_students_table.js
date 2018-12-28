'use strict';

module.exports = {
  // this file works as is. But it breaks when the e-mails are the same. Good! test file.
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Students', [{
        id: '39d342a0-dee0-432b-a9cb-a10a63e530e7',
        firstName: 'John',
        lastName: 'smith',
        email: 'jeff@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e24fc976-bfe3-41df-9fdc-3298a1e94ec8',
        firstName: 'John',
        lastName: 'Jones',
        email: 'jeff8@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', {
      firstName: 'John'
    })
  }
};
