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
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '37f59cab-be1f-4224-955c-ab93a996d695',
          firstName: 'Justin',
          lastName: 'Cook',
          email: 'justin.cook.dev@gmail.com',
          photoUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-bad-werewolf.png',
          LinkedInUrl: 'https://www.linkedin.com/in/justin/',
          githubUrl: 'https://github.com/justin-cook-developer',
          youtubeUrl: 'https://youtu.be/N16HXP9oYEA',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '8152a6f3-f3e0-416e-870f-4a75da260512',
          firstName: 'Frank',
          lastName: 'Compston',
          email: 'compstonfrank@gmail.com',
          photoUrl: 'https://definedictionarymeaning.com/assets/uploads/system/default-avatar-ponsy-deer.png',
          LinkedInUrl: 'https://www.linkedin.com/in/frankie-compston-9676b4169/',
          githubUrl: 'https://github.com/Compstonfrank',
          youtubeUrl: 'https://www.youtube.com/watch?v=cj51uBq2cXA',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '8152a6f3-f3e0-416e-870f-4a75da260512',
          firstName: 'Robin',
          lastName: 'Lee',
          email: 'robin@google.com',
          photoUrl: 'http://profilepicturesdp.com/wp-content/uploads/2018/06/best-profile-avatar-pictures-6.png',
          LinkedInUrl: 'https://www.linkedin.com/in/robin/',
          githubUrl: 'https://github.com/HamonOverdrive',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '8152a6f3-f3e0-416e-870f-4a75da260512',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johnnydope@google.com',
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-d0BaRz6vzGTDnpuJKwHazSr3Nlq0z1rUeLfnCDk1xwhXPyft',
          LinkedInUrl: 'https://www.linkedin.com/in/JohnDoe/',
          githubUrl: 'https://github.com/JohnDoe',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: 'f4d70e9e-9ab0-4cee-bde3-7fbde5d7d1a0',
          firstName: 'Ella',
          lastName: 'Vader',
          email: 'vaderforcer@google.com',
          photoUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-long-hair-girl.png',
          LinkedInUrl: 'https://www.linkedin.com/in/Ella/',
          githubUrl: 'https://github.com/Ella',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '004f7724-a17f-4910-9ade-8f2c9b01ea40',
          firstName: 'Blake',
          lastName: 'Bortles',
          email: 'jagsrule@google.com',
          photoUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rapper-guy.png',
          LinkedInUrl: 'https://www.linkedin.com/in/Blake/',
          githubUrl: 'https://github.com/Blake',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '004f7724-a17f-4910-9ade-8f2c9b01ea40',
          firstName: 'Jake',
          lastName: 'Jortles',
          email: 'jmendoza@google.com',
          photoUrl: 'http://www.prichal.in.ua/wp-content/uploads/2015/10/default-avatar-4-l.jpg',
          LinkedInUrl: 'https://www.linkedin.com/in/Jake/',
          githubUrl: 'https://github.com/Jake',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      },
      {
          id: '1c91d8af-bfed-4dcb-b488-bb4bad6c5524',
          firstName: 'Bearson',
          lastName: 'Berenstain',
          email: 'berenstainbear@google.com',
          photoUrl: 'https://www.coachfederation.it/wp/wp-content/uploads/2017/09/default-avatar-business-bear.png',
          LinkedInUrl: 'https://www.linkedin.com/in/Berenstain/',
          githubUrl: 'https://github.com/Berenstaine',
          youtubeUrl: 'https://www.youtube.com/watch?v=sIhQMyBsSVE',
          phoneNumber: '805-123-4567',
          description: 'words, words, words',
          projectUrls: ['https://project1@project.com', 'https://project2@project.com', 'https://project3@project.com'],
          createdAt: '2018-12-21',
          updatedAt: '2018-12-21'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
