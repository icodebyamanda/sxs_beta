'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Selections', [{
      mood: 'sad',
      format: 'video',
      author: 'Jain',
      url: 'https://youtu.be/JkVqeHpqIMk',
      description: 'Hope',
      note: "The most hopeful song for a sad day, Keep going",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Selections', null, {});
  }
};
