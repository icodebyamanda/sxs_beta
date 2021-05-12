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
     }], [{
      mood: 'sad',
      format: 'video',
      author: 'Jain',
      url: 'https://youtu.be/JkVqeHpqIMk',
      description: 'Hope',
      note: "The most hopeful song for a sad day, Keep going",
      createdAt: new Date(),
      updatedAt: new Date()
     }], [{
      mood: 'fidgety',
      format: 'video',
      author: 'Harry Belafonte',
      url: 'https://youtu.be/lewrnLwCtok',
      description: 'Jump In the Line - BeetleJuice Song',
      note: "Shake! Shake! Shake! And Jump in the Line!",
      createdAt: new Date(),
      updatedAt: new Date()
     }], [{
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
