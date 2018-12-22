'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
          id: '37f59cab-be1f-4224-955c-ab93a996d695',
          firstName: 'Colleen',
          lastName: 'Risso',
          email: 'colleenrisso@gmail.com',
          photoUrl: 'http://www.slbc.lk/ta/images/services/thendral/announcers/default-avatar-short-hair-girl.png',
          LinkedInUrl: 'https://www.linkedin.com/in/colleenbroomell/',
          githubUrl: 'https://github.com/ColleenRisso',
          youtubeUrl: 'https://youtu.be/828MwqXqPGs',
          phoneNumber: '805-305-5324',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 'e40fd384-ed8c-4da7-8b86-3958aca1a191',
          firstName: 'Justin',
          lastName: 'Cook',
          email: 'justin.cook.dev@gmail.com',
          photoUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-bad-werewolf.png',
          LinkedInUrl: 'https://www.linkedin.com/in/justin/',
          githubUrl: 'https://github.com/justin-cook-developer',
          youtubeUrl: 'https://youtu.be/N16HXP9oYEA',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 'cf6be523-60e0-408b-90e3-0c78e7a49bc4',
          firstName: 'Frank',
          lastName: 'Compston',
          email: 'compstonfrank@gmail.com',
          photoUrl: 'https://definedictionarymeaning.com/assets/uploads/system/default-avatar-ponsy-deer.png',
          LinkedInUrl: 'https://www.linkedin.com/in/frankie-compston-9676b4169/',
          githubUrl: 'https://github.com/Compstonfrank',
          youtubeUrl: 'https://www.youtube.com/watch?v=cj51uBq2cXA',
          phoneNumber: '805-123-4567',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 'df332b64-0385-45e8-bf76-3b9141751573',
          firstName: 'Robin',
          lastName: 'Lee',
          email: 'robin@google.com',
          photoUrl: 'http://profilepicturesdp.com/wp-content/uploads/2018/06/best-profile-avatar-pictures-6.png',
          LinkedInUrl: 'https://www.linkedin.com/',
          githubUrl: 'https://github.com/HamonOverdrive',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: '6b2b907d-b1bc-4984-a2e9-dd127630fcc5',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johnnydope@google.com',
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-d0BaRz6vzGTDnpuJKwHazSr3Nlq0z1rUeLfnCDk1xwhXPyft',
          LinkedInUrl: 'https://www.linkedin.com/in/JohnDoe/',
          githubUrl: 'https://github.com/JohnDoe',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: '3ae8b19a-590f-4000-ab88-8bb7dacce879',
          firstName: 'Ella',
          lastName: 'Vader',
          email: 'vaderforcer@google.com',
          photoUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-long-hair-girl.png',
          LinkedInUrl: 'https://www.linkedin.com/in/Ella/',
          githubUrl: 'https://github.com/Ella',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 'fa863845-14c6-43de-9efb-aa02fdf5984d',
          firstName: 'Blake',
          lastName: 'Bortles',
          email: 'jagsrule@google.com',
          photoUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rapper-guy.png',
          LinkedInUrl: 'https://www.linkedin.com/in/Blake/',
          githubUrl: 'https://github.com/Blake',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: '668ff198-71b0-4b3a-a8ab-e8ab9eba1b4e',
          firstName: 'Jake',
          lastName: 'Jortles',
          email: 'jmendoza@google.com',
          photoUrl: 'http://www.prichal.in.ua/wp-content/uploads/2015/10/default-avatar-4-l.jpg',
          LinkedInUrl: 'https://www.linkedin.com/in/Jake/',
          githubUrl: 'https://github.com/Jake',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: '048a20a0-e5d2-4a7a-8b59-f6be7aaf2e05',
          firstName: 'Bearson',
          lastName: 'Berenstain',
          email: 'berenstainbear@google.com',
          photoUrl: 'https://www.coachfederation.it/wp/wp-content/uploads/2017/09/default-avatar-business-bear.png',
          LinkedInUrl: 'https://www.linkedin.com/in/Berenstain/',
          githubUrl: 'https://github.com/Berenstaine',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};