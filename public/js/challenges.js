let challengePage = document.querySelector(".challenge-page");
let url = window.location.href.split("/")[3];
let h3id = document.querySelector(".accept-challenge-section");

(function checkUrlandCreateForm(url) {
  let f = document.createElement("form");
  let s = document.createElement("input"); //input element, Submit button
  let id = document.createElement("input");
  let h3 = document.createElement("h3");

  if (url === "new-challenges") {
    f.setAttribute("method", "post");
    f.setAttribute("action", "/challenge/accepted");
    f.classList.add("action-section");
    s.classList.add("single-page-button", "acceptBtn");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Yes I am! Accept that Challenge!!");
    id.setAttribute("name", "challenge_id");
    id.setAttribute("type", "hidden");
    id.classList.add("id-hidden");
    id.setAttribute("value", h3id.innerHTML);
    h3.innerHTML = "Are you brave enough to accept this challenge?";
    f.appendChild(h3);
    f.appendChild(s);
    f.appendChild(id);
    challengePage.appendChild(f);
  } else if (url === "acc-challenges") {
    f.setAttribute("method", "post");
    f.setAttribute("action", "/challenge/completed");
    f.classList.add("action-section");
    s.classList.add("single-page-button", "complBtn");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "You bet! Woop!");
    id.setAttribute("name", "challenge_id");
    id.setAttribute("type", "hidden");
    id.setAttribute("value", h3id.innerHTML);
    h3.innerHTML = "Have you completed this challenge?";
    f.appendChild(h3);
    f.appendChild(s);
    f.appendChild(id);
    challengePage.appendChild(f);
  }
  // statement for completed challenges to be deleted or reset
})(url);
