const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


function validateInputs(){
    alert("Dashboard");
    window.location.href = "dashboard.html";
   
}