var challSelectBtn = document.querySelectorAll(".challenge-button");

for (var i = 0; i < challSelectBtn.length; i++) {
    challSelectBtn[i].addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/challenges/' + event.target.id;
    });
}
