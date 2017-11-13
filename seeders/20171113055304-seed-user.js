'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            first_name: 'John',
            last_name: 'Doe',
            email: 'johnDoe@test.com',
            username: "johndoe",
            password: "123JD678",
            createdAt: new Date(),
            updatedAt: new Date(),
            role : "user"
        },{
            first_name: 'Reza',
            last_name: 'Adit',
            email: 'rezaadit@test.com',
            username: "rezaadit",
            password: "$2a$10$hKVtYbgXUc1RpZ85P3ZJvO8ACXUMqCMqGvSNLIJ0IExWwyPam5.7u",
            createdAt: new Date(),
            updatedAt: new Date(),
            role: "admin"
        }]);
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
