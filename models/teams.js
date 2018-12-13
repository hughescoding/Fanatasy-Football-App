module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
      player_name: {
        type: DataTypes.STRING,
      },
  
    });

  
    return Teams;
  }
