const { User } = require('../models');

const userData = [
    {
        username: "bot4",
        twitter: "bot4",
        github: "bot4",
        email: "email4@email.com",
        password: "p@ssword1"
    },
    {
        username: "bot5",
        twitter: "bot5",
        github: "bot5",
        email: "email5@email.com",
        password: "p@ssword2"
    },
    {
        username: "bot6",
        twitter: "bot6",
        github: "bot6",
        email: "email6@email.com",
        password: "p@ssword3"
    },
    {
        username: "bot3",
        twitter: "bot3",
        github: "bot3",
        email: "email3@email.com",
        password: "p@ssword4"
    },
    {
        username: "bot1",
        twitter: "bot1",
        github: "bot1",
        email: "email1@email.com",
        password: "p@ssword5"
    },
    {
        username: "bot2",
        twitter: "bot2",
        github: "bot2",
        email: "email2@email.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;