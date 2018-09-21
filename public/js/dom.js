// wooooo go dom

function openCity(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//

function inventoryTab(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

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

// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     const activeTab = document.querySelector(".active");
//     const list = document.getElementsByClassName("items-container");
//     console.log(activeTab);
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].style.display === "block") {
//         // active.style;
//       }
//     }
//   },
//   false
// );

// function to tab between what and why when chall is selected
function openChallenge(evt, challengeDescr) {
  const challengeTab = document.querySelectorAll(".challenge-tab");
  for (var i = 0; i < challengeTab.length; i++) {
    challengeTab[i].style.display = "none";
  }
  const challengeTabBtn = document.querySelectorAll(".chall-select-btn");

  for (i = 0; i < challengeTabBtn.length; i++) {
    challengeTabBtn[i].className = challengeTabBtn[i].className.replace(" active", "");
  }
  document.getElementById(challengeDescr).style.display = "block";
  evt.currentTarget.className += " active";
}

function openItem(evt, itemDescr) {
  const itemTab = document.querySelectorAll(".item-tab");
  for (var i = 0; i < itemTab.length; i++) {
    itemTab[i].style.display = "none";
  }
  const itemTabBtn = document.querySelectorAll(".item-select-btn");

  for (i = 0; i < itemTabBtn.length; i++) {
    itemTabBtn[i].className = itemTabBtn[i].className.replace(" active", "");
  }

  document.getElementById(itemDescr).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

