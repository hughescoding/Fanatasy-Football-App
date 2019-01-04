module.exports = function(sequelize, DataTypes) {
    var StandardPlayers = sequelize.define("StandardPlayers", {
      
      rank: {
        type: DataTypes.INTEGER,
      },
      player_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nfl_team: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      position_rank: {
        type: DataTypes.STRING,
      },
      player_position: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      bye_week: {
          type: DataTypes.INTEGER,
      },
      draft_avg: {
          type: DataTypes.DECIMAL(4,1),
      },

    
      
    
      
  
    });


    return StandardPlayers;
  }