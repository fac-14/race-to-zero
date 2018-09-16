
var challengePage = document.querySelector(".challenge-page");
var url = window.location.href.split('/')[3];
var h2id = document.querySelector(".h2-id");


(function checkUrlandCreateForm(url) {
    var f = document.createElement("form");
    var s = document.createElement("input"); //input element, Submit button
    var id = document.createElement("input");
    var h1 = document.createElement("h1");

    if (url === "new-challenges") {
        f.setAttribute('method', "post");
        f.setAttribute('action', "/challenge/accepted");
        s.setAttribute('class', "acceptBtn");
        s.setAttribute('type', "submit");
        s.setAttribute('value', "accept challenge");
        id.setAttribute('name', "challenge_id");
        id.setAttribute('type', "hidden");
        id.setAttribute('value', h2id.innerHTML);
        h1.innerHTML = "Accept Challenge";
        f.appendChild(h1);
        f.appendChild(s);
        f.appendChild(id);
        challengePage.appendChild(f);
    }

    else if (url === "acc-challenges") {
        f.setAttribute('method', "post");
        f.setAttribute('action', "/challenge/completed");
        s.setAttribute('class', "complBtn");
        s.setAttribute('type', "submit");
        s.setAttribute('value', "complete challenge");
        id.setAttribute('name', "challenge_id");
        id.setAttribute('type', "hidden");
        id.setAttribute('value', h2id.innerHTML);
        h1.innerHTML = "Complete Challenge";
        f.appendChild(h1);
        f.appendChild(s);
        f.appendChild(id);
        challengePage.appendChild(f);
    }
    // statement for completed challenges to be deleted or reset

})(url)


