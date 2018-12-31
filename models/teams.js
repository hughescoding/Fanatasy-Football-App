module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
      
      player_name: {
        type: DataTypes.STRING,
      }

    });
    Teams.associate = function(models) {
      // We're saying that a user has one team
      // A Post can't be created without an Author due to the foreign key constraint
      Teams.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      
      });
    }
    return Teams;
  }
