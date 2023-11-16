//========================================================================================================================================================
const registerWrapper = document.querySelector('.register__wrapper')
const registerBtnClose = document.querySelector(".register__close-btn");
const registerBtn = document.querySelector("#register-btn");
const body = document.querySelector("body");
//========================================================================================================================================================
registerBtnClose.addEventListener("click", () => {
    registerWrapper.classList.add("hidden");
    body.classList.remove('lock');
});

registerBtn.addEventListener("click", () =>{
    registerWrapper.classList.remove("hidden");
    body.classList.add('lock');
})
//========================================================================================================================================================

const loginBtn = document.querySelector('#login-btn');
const loginBtnClose = document.querySelector('.login__close-btn');
const login = document.querySelector('.login__wrapper');

loginBtnClose.addEventListener("click", (e) => {
    login.classList.add("hidden");
    body.classList.remove('lock');
});

loginBtn.addEventListener("click", () =>{
    login.classList.remove("hidden");
    body.classList.add('lock');
})
//========================================================================================================================================================

const registerLoginBtn = document.querySelector("#register-login-btn");

registerLoginBtn.addEventListener("click", () => {
    registerWrapper.classList.add('hidden');
    login.classList.remove('hidden');
});

//========================================================================================================================================================

const loginRegisterBtn = document.querySelector("#login-register-btn");

loginRegisterBtn.addEventListener("click", () => {
    login.classList.add('hidden');
    registerWrapper.classList.remove('hidden');
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    ajax('core/signup.php', 'POST', signup, data);

    function signup(result) {
        console.log(result);
        if (result == 2) {
            alert('Fill the field');
        }
        else if (result == 1) {
            alert('Succsesful! Now you can log in');
        }
        else {
            alert('ERROR! Try later');
        }
    }
}

document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass": pass,
        "email": email
    }

    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        //console.log(result);
        if (result == 2) {
            alert('Fill the field');
        }
        else if (result == 0) {
            alert('User does not exist!');
        }
        else {
            console.log(result);
            result = JSON.parse(result);
            var d = new Date();
            d.setTime(d.getTime() + (10 * 60 * 1000));
            var expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }
}

