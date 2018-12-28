'use strict';

module.exports = {
  // seed file to test the unique validation.
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employers', [{
      id: '39d342a0-dee0-432b-a9cb-a10a63e530e7',
      name: 'John',
      email: 'jeff@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'e24fc976-bfe3-41df-9fdc-3298a1e94ec8',
      name: 'John',
      email: 'jeff8@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Employers', {
    name: 'John'
  })
}
};
