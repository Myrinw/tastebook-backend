'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        title: "Delicious sushi",
        text: "blablablabla",
        image: "sushu.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Best restaurent ever!",
        text: "Amazing mexican restaurent in amsterdam idfa kdamkvka dkfnane ",
        image: "sushu.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "My grandmothers recipe",
        text: "I share with you this amazing recipe form my granpa",
        image: "sushu.jpg",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});

  }
};
