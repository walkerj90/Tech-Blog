const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

User.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      allowNull: false,
      //this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    // define username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // define password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //password must be at least four characters long
        len: [4],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    //user underscore name format
    underscored: true,
    // model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
