/* eslint-disable */
var getPointsEntry = document.querySelectorAll(".getPoints");
var completedChallengesEntry = document.querySelectorAll(".completedChallenges");
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
// render function to render user stats in navbar
function render(challengesCompleted, pointsLeft, userPoints, myLevel) {
  getPointsEntry.forEach(function (points) {
    points.innerHTML = userPoints;
  });
  xpBar.setAttribute("value", userPoints % 50);
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
// 2 api request to get use specific stats and general user object
var apiRequest1 = fetch("/send-stats/").then(function (
  response
) {
  return response.json();
});

var apiRequest2 = fetch("/total-stats-object/").then(function (
  response
) {
  return response.json();
});

var combinedData = {
  apiRequest1: {},
  apiRequest2: {}
};
// get data from both urls, asign them to an object as values and return an array of objects
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
    // rendering starts here
    // avatar and rank relates to user points / 10 as each challenge has 10 points
    rank.innerHTML = generalStatsArr[userPoints / 10].rank;
    avatarPic.src = generalStatsArr[userPoints / 10].avater_url;
    render(challengesCompleted, pointsLeft, userPoints, myLevel);
  })
