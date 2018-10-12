var submit = document.getElementById('submit-btn');

submit.addEventListener('click', validateForm);

function validateForm() {
    var name = document.getElementById("name"),
        validName = /[a-zA-Z]/;
    
    if (!validName.test(name.value)) {
        name.style.borderColor = "#E27272";
        name.style.color = "#E27272";
    }
}