$(document).ready(function () {

    var players = [];
    var cacheFilter;

    console.log("YOure connected");
    $('#filter').formSelect();
    $("#filter").on('change', function () {
      createPlayerRow($(this).val());
    });

    // call start function
    getPlayers();

    function createPlayerRow (filterType) {

        cacheFilter = filterType;
        $("#a-players").empty()

    for (var i = 0; i < players.length; i++) {

      var playerData = players[i];
      // pass in the filterType to filter out players that do not have the specified value for playerData.player_position...example ("wr") 
      if (filterType) {

        if (filterType.toLowerCase() === 'wr' && (!playerData.player_position || playerData.player_position.toLowerCase() !== 'wr')) {
          continue;
        }

        if (filterType.toLowerCase() === 'qb' && (!playerData.player_position || playerData.player_position.toLowerCase() !== 'qb')) {
          continue;
        }

        if (filterType.toLowerCase() === 'rb' && (!playerData.player_position || playerData.player_position.toLowerCase() !== 'rb')) {
          continue;
        }

        if (filterType.toLowerCase() === 'te' && (!playerData.player_position || playerData.player_position.toLowerCase() !== 'te')) {
          continue;
        }

        if (filterType.toLowerCase() === 'ds' && (!playerData.player_position || playerData.player_position.toLowerCase() !== 'ds')) {
          continue;
        }

        if (filterType.toLowerCase() === 'k' && (!playerData.player_position || playerData.player_position.toLowerCase() !== 'k')) {
          continue;
        }

      }

      // set variable to the div id of #a-players
      var newTr = $("#a-players");

      // build the rows with specified playerData
      var html = '';
      html += "<tr id='" + playerData.id + "'>";
      html += "<td> " + playerData.rank + "</td>";
      html += "<td> " + playerData.position_rank + "</td>";
      html += "<td> " + playerData.player_name + "</td>";
      html += "<td> " + playerData.nfl_team + "</td>";
      html += "<td> " + playerData.draft_avg + "</td>";
      html += "<td> " + playerData.bye_week + "</td>";
      html += "</tr>";
      newTr.append(html);
    }
}

    // create function the gets the players
  function getPlayers() {
    $.get("/api/standardPlayers", function (data) {

      players = _.filter(data, function (player) { return player.TeamId === 1 });

      createPlayerRow();

     console.log(players)
    });
  }

});