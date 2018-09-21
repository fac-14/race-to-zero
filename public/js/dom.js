// wooooo go dom

function openCity(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;
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
document.getElementById("defaultOpen").click();

//

function goBack() {
  window.history.back();
}

/* If Accepted challenge contains an item, it's the first thing to load
   otherwise all challenges will load first */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const contentChecker = document.querySelector("#challenge-content");
    const accepted = document.querySelector("#accepted-challenge");
    const all = document.querySelector("#new-challenge");

    if (contentChecker) {
      accepted.style.display = "block";
      all.style.display = "none";
    }
  },
  false
);

//

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const activeTab = document.querySelector(".active");
    const list = document.getElementsByClassName("items-container");
    console.log(activeTab);
    for (let i = 0; i < list.length; i++) {
      if (list[i].style.display === "block") {
        // active.style;
      }
    }
  },
  false
);
