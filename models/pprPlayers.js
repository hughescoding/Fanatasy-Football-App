module.exports = function(sequelize, DataTypes) {
    var PprPlayers = sequelize.define("PprPlayers", {
     
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
      drafted: {
          type: DataTypes.BOOLEAN,
          default: false,
      },
      timestamps: {
        type: DataTypes.BOOLEAN,
        default: false,
      }

      
  
    });
    // PprPlayers.associate = function(models) {
    //   // We're saying that a user has one team
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   PprPlayers.belongsTo(models.Teams, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };
    return PprPlayers;
  }