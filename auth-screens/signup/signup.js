'user strict'

// SignUp

// First letter Capitalize Function
let Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// SignUp Function
let signupForm = (eve) => {
    eve.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let conPassword = document.getElementById('conPassword').value;

    // Confirm Password validation
    if (password !== conPassword) {
        swal("Error!", "Password do not match!", "error");
        return;
    }

    // Random Id Generate
    let userId = Math.floor(Math.random() * 10000);

    // User Data Object
    const userSignupData = {
        userId: userId,
        username: username,
        email: email,
        password: password,
    }


    let user = JSON.parse(localStorage.getItem('All Users'));
    if (!user) {
        user = [];
    }
    user.push(userSignupData)

    localStorage.setItem('All Users', JSON.stringify(user))
    // alert('SignUp Successfull')
    // window.location.href = `/auth-screens/login/login.html`
    swal(`Welcome ${Capitalize(username)}!`, `Your sign up was successful!`, `success`, {
        button: "Aww yiss!",
    });

    setTimeout(() => {
        redirect('signupToLogin')
    }, 3000);
}

// Form OnSubmit
const form = document.getElementById('form');
form.onsubmit = signupForm;


