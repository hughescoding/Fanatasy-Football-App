$(document).ready(function () {

  var players = [];
  var news = [];
  var cacheFilter;

  console.log("You're connected");
  $('#filter').formSelect();
  $("#filter").on('change', function () {
    createPlayerRow($(this).val());
  });

  // call start function
  getPlayers();

  function createPlayerRow(filterType) {

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

      players = _.filter(data, function (player) {
        return player.TeamId === 1
      });

      createPlayerRow();

      console.log(players)
    });
  }
  $('body').on('click', '#news-btn', function () {
    var queryURL = "https://newsapi.org/v2/top-headlines?sources=fox-sports,nfl-news,espn&q=NFL&sortBy=publishedAt&excludeDomains=go.com&apiKey=d81fe369bb314647a9d2391f6765100f";

    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(response => {
      //console.log(response);
      console.log(queryURL);
      news.push(response);
      $("#newsTable").empty();
      for (var i = 0; i < news[0].articles.length; i++) {
        var headline = news[0].articles[i].description
        var newsUrl = news[0].articles[i].url
        console.log(headline);
        console.log(newsUrl);
        var newTr = $("#newsTable");

        var html = '';
        html += "<tr>";
        html += "<td> " + headline + "</td>";
        html += "</tr>";
        html += "<tr>";
        html += "<td>" + '<a href="' + newsUrl + '">Link' + "</a>" + "</td>";

        html += "</tr>";
        newTr.append(html);
      }

    });

  });

});