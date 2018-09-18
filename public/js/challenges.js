let challengePage = document.querySelector(".challenge-page");
let url = window.location.href.split("/")[3];
let h2id = document.querySelector(".h2-id");

(function checkUrlandCreateForm(url) {
  let f = document.createElement("form");
  let s = document.createElement("input"); //input element, Submit button
  let id = document.createElement("input");
  let h2 = document.createElement("h2");

  if (url === "new-challenges") {
    f.setAttribute("method", "post");
    f.setAttribute("action", "/challenge/accepted");
    s.setAttribute("class", "acceptBtn");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "accept challenge");
    id.setAttribute("name", "challenge_id");
    id.setAttribute("type", "hidden");
    id.setAttribute("value", h2id.innerHTML);
    h2.innerHTML = "Accept Challenge";
    f.appendChild(h2);
    f.appendChild(s);
    f.appendChild(id);
    challengePage.appendChild(f);
  } else if (url === "acc-challenges") {
    f.setAttribute("method", "post");
    f.setAttribute("action", "/challenge/completed");
    s.setAttribute("class", "complBtn");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "complete challenge");
    id.setAttribute("name", "challenge_id");
    id.setAttribute("type", "hidden");
    id.setAttribute("value", h2id.innerHTML);
    h2.innerHTML = "Complete Challenge";
    f.appendChild(h2);
    f.appendChild(s);
    f.appendChild(id);
    challengePage.appendChild(f);
  }
  // statement for completed challenges to be deleted or reset
})(url);
