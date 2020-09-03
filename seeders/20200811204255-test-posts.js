'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        title: "Delicious sushi",
        text: "Hello everyone, I recently found out how you can make super delicious sushi by yourself. all you have to do is follow this recipe:",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/17/5b/c8/d0/shinsen.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Best restaurent ever!",
        text: "Last week i went to this restaurent in amsterdam. It was underground, and it felt like you were in a cave. The food was delicious and it was an amazing experience",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/11/55/16/ac/our-cosy-bar.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "My grandmothers recipe",
        text: "I share with you this amazing recipe form my grandmother. These are the best biscuits in the world!",
        image: "https://motherwouldknow.com/wp-content/uploads/2017/05/2017-05-26-Collyn-biscuits-recipe-w-1.jpg",
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
