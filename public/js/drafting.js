$(document).ready(function () {

  var playerContainer = $(".player-container");
  var playerList = $("tbody");
  var players = [];
 
//  materialize "select" initialization
  $('#filter').formSelect();
  $("#filter").on('change', function() {
    createPlayerRow($(this).val());
}); 


  // call function to populate the players
  getPlayers();


  // create function that places all players into rows/comlumns with the correct info
  
  function createPlayerRow(filterType) {
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
      newTr.append("<tr>");
      newTr.append("<td> " + playerData.rank + "</td>");
      newTr.append("<td> " + playerData.position_rank + "</td>");
      newTr.append("<td> " + playerData.player_name + "</td>");
      newTr.append("<td> " + playerData.nfl_team + "</td>");
      newTr.append("<td> " + playerData.draft_avg + "</td>");
      newTr.append("<td> " + playerData.bye_week + "</td>");
      newTr.append("</tr>");

      // create the draft and drafted buttons
      var draftButton = $("<a>");
      draftButton.addClass("waves-effect waves-light green btn");
      draftButton.addClass("material-icons right")
      draftButton.html("<i class='small material-icons'>check_circle</i>");
      var draftedButton = $("<a>");
      draftedButton.addClass("waves-effect waves-light red btn");
      draftedButton.addClass("material-icons right")
      draftedButton.html("<i class='small material-icons'>cancel</i>");

      newTr.append(draftButton, draftedButton);

    }



  }

  // create function the gets the players
  function getPlayers() {
    $.get("/api/standardPlayers", function (data) {

      for (var i = 0; i < data.length; i++) {
        // if the players are not drafted...
        if (data[i].drafted === false) {
          // push data[i] to players array
        players.push(data[i]);
        }
      }

      // calls function that creates the players rows in the div
      // pass in null filter to display all undrafted players
      createPlayerRow(null);

    });
  }


  // // A function for rendering the list of players to the page
  // function renderPlayerList(rows) {
  //   playerList.children().not(":last").remove();
  //   playerContainer.children(".alert").remove();
  //   if (rows.length) {
  //     // console.log(rows);
  //     playerList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // // Function for handling what to render when there are no players
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.text("You must create an Author before you can create a Post.");
  //   playerContainer.append(alertDiv);
  // }

});

