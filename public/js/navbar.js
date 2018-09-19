
var getPoints = document.querySelector(".getPoints");
var xpBar = document.querySelector("#xp-bar");

// code for the dropdown menu
(() => {
    const menuBtn = document.querySelector('.menu-button');
    const popoutMenu = document.querySelector('.popout-menu');
    menuBtn.addEventListener('click', () =>
        toggleMenu(popoutMenu, menuBtn)
    );
})();

function toggleMenu(menu) {
    menu.classList.toggle('popout-menu--visible');
}

function render(number) {
    getPoints.innerHTML = (number + "/50");
    xpBar.setAttribute("value", number);
}

fetch("http://localhost:3000/userpoints/")
    .then(function (res) {
        return res.json();
    }).then(function (myjson) {
        render(myjson.user_points.points);
    })
