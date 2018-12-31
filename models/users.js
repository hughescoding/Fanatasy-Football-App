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

    Users.associate = function(models) {
      // We're saying that a user has one team
      // A Post can't be created without an Author due to the foreign key constraint
      Users.hasOne(models.Teams, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Users;
  }