'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Selections', [{
      mood: 'determined',
      format: 'video',
      author: 'Chuck Berry',
      url: 'https://youtu.be/aKCt8ssC7cs',
      description: 'Johnny B. Goode',
      note: "Someday your name will be in lights, Saying: Johnny B. Goode tonight",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Selections', null, {});
  }
};
