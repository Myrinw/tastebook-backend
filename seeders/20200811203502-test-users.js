'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        email: "me@me.com",
        password: "test123",
        username: "sarah",
        bio: "Hello guys, my name is sarah and i love cooking!",
        picture: "https://cdn.shopify.com/s/files/1/1369/1403/files/IMG_20180606_085859_864_2048x2048.jpg?v=1530809423",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "pete@peter.com",
        password: "test1234",
        username: "pete",
        bio: "I love traveling the world and tasting all cuisines",
        picture: "https://www.thenorthernecho.co.uk/resources/images/10851581?type=responsive-gallery-fullscreen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "gandalf@thegreat.com",
        password: "test1234",
        username: "beardman",
        picture: "https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/top-crop/width/360/height/450?cb=20121110131754",
        bio: "Blueberry muffins are delicious",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('users', null, {});

  }
};
