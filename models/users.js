module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {

      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNUll: false,
      },

  
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