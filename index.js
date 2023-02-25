const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
let arr = [];
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length < 2) {
        setError(username, 'Password must be at least 8 character.')
    } else {
        setSuccess(username);
        arr['name'] = usernameValue;
        localStorage.setItem("name", usernameValue);
        var checkname = "done";
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        arr['email'] = emailValue;
        var checkemail = "done";
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        var checkpass = "done";
        setSuccess(password2);
        arr['password'] = password2Value;
        localStorage.setItem("password", password2Value);
        console.log(arr);

    }
    if ((checkpass == "done" && checkname == "done")) {
        alert("Teacher Registered");
        let obj = { usernameValue, emailValue, password2Value }
    
            let temp = JSON.parse(localStorage.getItem("data"));
            console.log(temp);
            if (temp) {
                arr = [...temp]
            }
            arr.push(obj)
            localStorage.setItem("data", JSON.stringify(arr));
            window.location.href = "login.html";
    }


};


