// wooooo go dom

function openCity(evt, cityName) {
  // Declare all variables

  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// To show first tab by default //

function goBack() {
  window.history.back();
}


// function to tab between what and why when chall is selected
function openChallenge(evt, challengeDescr) {
  var challengeTab = document.querySelectorAll(".challenge-tab");
  for (var i = 0; i < challengeTab.length; i++) {
    challengeTab[i].style.display = "none";
  }
  var challengeTabBtn = document.querySelectorAll(".chall-select-btn");

  for (i = 0; i < challengeTabBtn.length; i++) {
    challengeTabBtn[i].className = challengeTabBtn[i].className.replace(" active", "");
  }

  document.getElementById(challengeDescr).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
