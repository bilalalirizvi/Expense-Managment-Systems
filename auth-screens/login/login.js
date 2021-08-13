'user strict'

// Login
let loginForm = (eve) => {
    eve.preventDefault();

    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;

    const loginData = {
        loginEmail: loginEmail,
        loginPassword: loginPassword,
    }
    console.log(loginData)




    // After Login Account
    redirect('dashboard');
}

let logForm = document.getElementById('logForm');
logForm.onsubmit = loginForm;