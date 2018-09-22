// wooooo go dom

function goBack() {
  window.history.back();
}

// function to tab between selected elements (challenges, items, menus)

function tabCreator(tabElement, tabElementBtn, evt, elementDescr) {
  var tabElement = document.querySelectorAll("." + tabElement);
  var tabElementBtn = document.querySelectorAll("." + tabElementBtn);
  var elementDescr = document.getElementById(elementDescr);

  for (var i = 0; i < tabElement.length; i++) {
    tabElement[i].style.display = "none";
  }
  for (i = 0; i < tabElementBtn.length; i++) {
    tabElementBtn[i].className = tabElementBtn[i].className.replace(" active", "");
  }
  elementDescr.style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

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