$(document).ready(function () {

    var players = [];
    var undraftedPlayers = [];
    var cacheFilter;
    var undraftedPlayer;

    // console.log("YOure connected");
    $('#filter').formSelect();
    $("#filter").on('change', function () {
      createPlayerRow($(this).val());
    });

    $('body').on('click', '.undraft-btn', function () {

        removePlayer($(this));
        createPlayerRow(cacheFilter);
    
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

      // create the undrafted button
    //   html += "<td><a class= 'waves-effect waves-light red btn-small material-icons right undraft-btn'>";
    //   html += "<i class='small material-icons'>cancel</i></a></td>";
    //   html += "</tr>";
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

//   function removePlayer(clickedBtn) {
       
//     var playerId = clickedBtn.closest('tr').attr('id');

//     undraftedPlayer = players[playerId] 

//     undraftedPlayer.TeamId = "null";

//     undraftedPlayers.push(undraftedPlayer) 

//     updateTeamId(undraftedPlayer);

    



    // console.log("changed the TeamId to " + players[playerId].TeamId)

   
        // console.log("not complete yet ony " + TeamIdChanged)
      
    // players = _.filter(players, function (player) {
    //   return player.id !== parseInt(playerId);
      
    // }

    // function updateTeamId (undraftedPlayers) {
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/standardPlayers",
    //         data: undraftedPlayers,
    //       }).then(function() {

    //         console.log(undraftedPlayer)
    //           // console.log(TeamIdChanged === numberClicked)
    //         })

    // } 
  

});