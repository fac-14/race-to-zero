/* eslint-disable */
var getPointsEntry = document.querySelectorAll(".getPoints");
var completedChallengesEntry = document.querySelectorAll(
  ".completedChallenges"
);
var pointsLeftEntry = document.querySelectorAll(".pointsLeft");
var currentLevel = document.querySelectorAll(".myLevel");
var xpBar = document.querySelector("#xp-bar");
var pointsDisp = document.querySelector("#pointsDisp");
var rank = document.querySelector(".level");
var avatarPic = document.querySelector("#profile-pic");


// code for the dropdown menu
(() => {
  const menuBtn = document.querySelector(".menu-button");
  const popoutMenu = document.querySelector(".popout-menu");
  menuBtn.addEventListener("click", () => toggleMenu(popoutMenu, menuBtn));
})();

function toggleMenu(menu) {
  menu.classList.toggle("popout-menu--visible");
}

function render(challengesCompleted, pointsLeft, userPoints, myLevel) {
  getPointsEntry.forEach(function (points) {
    points.innerHTML = userPoints;
  });
  xpBar.setAttribute("value", userPoints);
  completedChallengesEntry.forEach(function (challenges) {
    challenges.innerHTML = challengesCompleted;
  });
  pointsLeftEntry.forEach(function (remainingPoints) {
    remainingPoints.innerHTML = pointsLeft;
  });

  currentLevel.forEach(function (level) {
    if (myLevel > 0) {
      level.innerHTML = myLevel;
    } else {
      level.innerHTML = 1;
    }
  });
}

var apiRequest1 = fetch("http://localhost:3000/send-stats/").then(function (
  response
) {
  return response.json();
});

var apiRequest2 = fetch("http://localhost:3000/rank/").then(function (
  response
) {
  return response.json();
});

var combinedData = {
  apiRequest1: {},
  apiRequest2: {}
};

Promise.all([apiRequest1, apiRequest2])
  .then(function (values) {
    combinedData['apiRequest1'] = values[0];
    combinedData['apiRequest2'] = values[1];
    return Object.values(combinedData)
  })
  .then(function (combinedData) {
    var userStatsArr = combinedData[0];
    var generalStatsArr = combinedData[1];

    var challengesCompleted = userStatsArr.challengesCompleted;
    var pointsLeft = userStatsArr.pointsLeft;
    var userPoints = userStatsArr.userPoints;
    var myLevel = Math.floor(userPoints / 50);
    rank.innerHTML = generalStatsArr[userPoints / 10].rank;
    avatarPic.src = generalStatsArr[challengesCompleted].avater_url;
    render(challengesCompleted, pointsLeft, userPoints, myLevel);

  })


// fetch("http://localhost:3000/send-stats/")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (myjson) {
//     var challengesCompleted = myjson.challengesCompleted;
//     var pointsLeft = myjson.pointsLeft;
//     var userPoints = myjson.userPoints;
//     var myLevel = Math.floor(userPoints / 50);
//     render(challengesCompleted, pointsLeft, userPoints, myLevel);

//     // render(myjson.user_points.points);
//   });


// fetch("http://localhost:3000/rank/")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (myjson) {
//     var statsArr = myjson;
//     pointsEarned = pointsDisp.innerHTML;
//     // console.log(pointsEarned);
//     rank.innerHTML = statsArr[5].rank;
//     avatarPic.src = statsArr[5].avater_url;
//   })