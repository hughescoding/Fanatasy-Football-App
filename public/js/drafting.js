$(document).ready(function () {


  var players = [];
  var draftedPlayers = [];
  var cacheFilter;
  var numberClicked = 0;
  var TeamIdChanged = 0;


  //  materialize "select" initialization
  $('#filter').formSelect();
  $("#filter").on('change', function () {
    createPlayerRow($(this).val());
  });

  $('body').on('click', '.drafted-btn', function () {

    removePlayer($(this));
    createPlayerRow(cacheFilter);

  });

  $('body').on('click', '.draft-btn', function () {

    addPlayer($(this));

    removePlayer($(this));

    createPlayerRow(cacheFilter);


  });

  $('body').on('click', '#draft-complete-btn', function () {

    updateTeamId(draftedPlayers);

  });


  removePlayer = function (clickedBtn) {

    var playerId = clickedBtn.closest('tr').attr('id');

    players = _.filter(players, function (player) {
      return player.id !== parseInt(playerId);
    });

  };

  function addPlayer(clickedBtn) {

    var playerId = clickedBtn.closest('tr').attr('id');

    draftedPlayers.push(_.filter(players, function (player) {
      return player.id === parseInt(playerId)
    })[0]);
    numberClicked++
    console.log(numberClicked);

    createDraftedPlayerRow();

  }

  // call function to populate the players
  getPlayers();

  // create function that places all players into rows/comlumns with the correct infoå
  function createPlayerRow(filterType) {
    cacheFilter = filterType;
    // empties the div each time so the player list doesn't duplicate
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

      // create the draft button
      html += "<td><a class= 'waves-effect waves-light green btn-small material-icons right draft-btn'>";
      html += "<i class='small material-icons'>cancel</i></a></td>";

      // create the draft button
      html += "<td><a class= 'waves-effect waves-light red btn-small material-icons right drafted-btn'>";
      html += "<i class='small material-icons'>check_circle</i></a></td>";

      // create info button - for future development, will call detailed stats from another api
      // html += "<td><a class= 'waves-effect waves-light blue btn-small material-icons right drafted-btn'>";
      // html += "<i class='small material-icons'>info</i></a></td>";

      html += "</tr>";
      newTr.append(html);
    }

  }

  function createDraftedPlayerRow() {
    $("#d-players").empty();

    for (var i = 0; i < draftedPlayers.length; i++) {

      var playerData = draftedPlayers[i];

      var newTr = $("#d-players");

      var html = '';
      html += "<tr id='" + playerData.id + "'>";
      html += "<td> " + playerData.rank + "</td>";
      html += "<td> " + playerData.position_rank + "</td>";
      html += "<td> " + playerData.player_name + "</td>";
      html += "<td> " + playerData.nfl_team + "</td>";
      html += "<td> " + playerData.bye_week + "</td>";
      html += "</tr>";
      newTr.append(html);
    }
  }

  // create function the gets the players
  function getPlayers() {
    $.get("/api/standardPlayers", function (data) {

      players = _.filter(data, function (player) {
        return player.TeamId === null
      });

      createPlayerRow(null);

    });
  }

  function updateTeamId(draftedPlayers) {

    console.log(draftedPlayers);

    _.each(draftedPlayers, function (draftedPlayer) {

      draftedPlayer.TeamId = 1;
      TeamIdChanged++;

      console.log('You are making an API call to update player Id ' + draftedPlayer.id);
      $.ajax({
        method: "PUT",
        url: "/api/standardPlayers",
        data: draftedPlayer,
      }).then(function () {
        if (numberClicked === TeamIdChanged) {
          window.location.href = "/locker"
        }
        console.log("complete")
      });

    })
  }

});