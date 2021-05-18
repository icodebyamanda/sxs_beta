'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Selections", // name of Source model
      "UserId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // name of Target model
          key: "id", // Key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Selections", // name of Source Model
      "UserId" // Key we want to remove
      );
  },
};

