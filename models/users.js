module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user_password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      fantasy_team: {
        type: DataTypes.STRING,
        allowNUll: false,
      }
  
    });
    return Users;
  }