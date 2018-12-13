$(document).ready(function() {

var playerContainer = $(".player-container");
var playerList = $("tbody");

// call function to populate the players
getPlayers();

// create function that places all players into rows/comlumns with the correct info
function createPlayerRow(playerData) {
    var newTr = $("<tr>");
    newTr.data("pprPLayer", playerData);
    newTr.append("<td>" + playerData.player_name + "</td>");
    // newTr.append("<td> " + playerData.Posts.length + "</td>");
    // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    // newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

// create function the gets the players
function getPlayers() {
    $.get("/api/pprPlayers", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createPlayerRow(data[i]));
      }
      renderPlayerList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderPlayerList(rows) {
    playerList.children().not(":last").remove();
    playerContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      playerList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    playerContainer.append(alertDiv);
  }


});

