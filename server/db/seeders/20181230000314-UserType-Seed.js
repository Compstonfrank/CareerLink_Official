'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserTypes', [
      // students below
      {
        userId: '37f59cab-be1f-4224-955c-ab93a996d695',
        email: 'colleenrisso@gmail.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'e40fd384-ed8c-4da7-8b86-3958aca1a191',
        email: 'justin.cook.dev@gmail.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'cf6be523-60e0-408b-90e3-0c78e7a49bc4',
        email: 'compstonfrank@gmail.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'df332b64-0385-45e8-bf76-3b9141751573',
        email: 'robin@google.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: '6b2b907d-b1bc-4984-a2e9-dd127630fcc5',
        email: 'johnnydope@google.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: '3ae8b19a-590f-4000-ab88-8bb7dacce879',
        email: 'vaderforcer@google.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'fa863845-14c6-43de-9efb-aa02fdf5984d',
        email: 'jagsrule@google.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: '668ff198-71b0-4b3a-a8ab-e8ab9eba1b4e',
        email: 'jmendoza@google.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: '048a20a0-e5d2-4a7a-8b59-f6be7aaf2e05',
        email: 'berenstainbear@google.com',
        type: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    // employers below
    {
      userId: 'ac4133c6-36f9-4931-9af3-a6f7dc2859a3',
      email: 'infoz@whitefoxdefense.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: 'd17d41e3-db3b-42b1-982b-2e74b43b80d5',
      email: 'infoz@socreate.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: '0dc16245-a378-42e1-8084-77779a88b71f',
      email: 'infoz@mindbody.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: '4c93f4f7-fa98-4cb6-b164-158e33e2a3da',
      email: 'infoz@itech-solutions.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: '6be07a01-a82f-4ed3-b919-9bafd59f5564',
      email: 'infoz@iqms.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: '06c12788-5ce4-4d3f-9821-3fb003e67b13',
      email: 'infoz@cleverducks.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: 'c7b038c7-4db0-4ef1-bfca-9b48092e9ac6',
      email: 'infoz@landgorilla.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: 'dce63f6a-da26-4874-b2b7-87b35bd07102',
      email: 'infoz@randomdev.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: 'abf368a7-24ab-4118-b386-2b4a9f35b5c2',
      email: 'infoz@google.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      userId: 'cff3b9f7-be70-48ea-acdd-3024534ed3bf',
      email: 'infoz@amazon.com',
      type: 'employer',
      createdAt: new Date(),
      updatedAt: new Date()
  }
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserTypes', null, {});
  }
};
