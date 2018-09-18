var getPoints = document.querySelector(".getPoints");

function render(number) {
    getPoints.innerHTML = number
}

fetch("http://localhost:3000/test/")
    .then(function (res) {
        return res.json();
    }).then(function (myjson) {
        render(myjson.user_points.points);
    })


