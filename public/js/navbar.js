/* eslint-disable */
var getPointsEntry = document.querySelectorAll(".getPoints");
var completedChallengesEntry = document.querySelectorAll(
  ".completedChallenges"
);
var pointsLeftEntry = document.querySelectorAll(".pointsLeft");
var currentLevel = document.querySelectorAll(".myLevel");
var xpBar = document.querySelector("#xp-bar");

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
  getPointsEntry.forEach(function(points) {
    points.innerHTML = userPoints;
  });
  xpBar.setAttribute("value", userPoints);
  completedChallengesEntry.forEach(function(challenges) {
    challenges.innerHTML = challengesCompleted;
  });
  pointsLeftEntry.forEach(function(remainingPoints) {
    remainingPoints.innerHTML = pointsLeft;
  });

  currentLevel.forEach(function(level) {
    if (myLevel > 0) {
      level.innerHTML = myLevel;
    } else {
      level.innerHTML = 1;
    }
  });
}

fetch("http://localhost:3000/send-stats/")
  .then(function(res) {
    return res.json();
  })
  .then(function(myjson) {
    var challengesCompleted = myjson.challengesCompleted;
    var pointsLeft = myjson.pointsLeft;
    var userPoints = myjson.userPoints;
    var myLevel = Math.floor(userPoints / 50);
    render(challengesCompleted, pointsLeft, userPoints, myLevel);

    // render(myjson.user_points.points);
  });
