'use strict';

//const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'picture',
      {
        type: Sequelize.STRING
      },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('users', 'picture', {});

  }
};
