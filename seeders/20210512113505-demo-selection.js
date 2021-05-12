'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Selections', [{
      mood: 'fidgety',
      format: 'video',
      author: 'Harry Belafonte',
      url: 'https://youtu.be/lewrnLwCtok',
      description: 'Jump In the Line - BeetleJuice Song',
      note: "Shake! Shake! Shake! And Jump in the Line!",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Selections', null, {});
  }
};
