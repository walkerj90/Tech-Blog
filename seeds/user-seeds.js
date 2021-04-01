const { User } = require("../models");

const userData = [
  {
    username: "Justin",
    password: "Password",
  },
  {
    username: "Jd",
    password: "anotherpassword",
  },
  {
    username: "Jon",
    password: "jon",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
