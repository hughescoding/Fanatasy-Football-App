module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
      
      name: {
        type: DataTypes.STRING,
      }

    });
    Teams.associate = function(models) {
      // We're saying that a user has one team
     
      Teams.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false,
          default: 1
        }
      
      });

      Teams.hasMany(models.StandardPlayers, {
        foreignKey: {
          allowNull: true
        }
      });
    }
    return Teams;
  }
