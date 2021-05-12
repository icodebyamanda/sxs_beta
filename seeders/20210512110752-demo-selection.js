'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Selections', [{
      mood: 'blessed',
      format: 'video',
      author: 'Van Morrison',
      url: 'https://youtu.be/3UUWkr4FUlo',
      description: 'Days Like This',
      note: "When everything falls into place, There'll be days like this",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Selections', null, {});
  }
};
