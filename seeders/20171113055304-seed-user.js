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
            updatedAt: new Date()
        }, {
            first_name: 'Reza',
            last_name: 'Adit',
            email: 'rezaadit@test.com',
            username: "rezaadit",
            password: "rezaadit9876",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
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