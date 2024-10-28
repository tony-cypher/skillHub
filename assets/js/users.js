if (JSON.parse(localStorage.getItem("userList")) === null) {
  var user = {
    full_name: "Anthony Admin",
    email: "admin@gmail.com",
    role: "Client",
    password: "admin12345",
  };
  addUserToLocalStorage(user, false, "");
}
const loginForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submit = document.getElementById("btn-submit");
  if (submit.innerText === "Login") {
    loginValidate();
  } else {
    registerValidate();
  }
});

function loginValidate() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  var userList = JSON.parse(localStorage.getItem("userList"));

  var emailExists = userList.some(
    (existingUser) => existingUser.email === email
  );
  var passwordExists = userList.some(
    (existingUser) => existingUser.password === password
  );
  console.log(emailExists, passwordExists);

  if (!emailExists) {
    document.getElementById("invalid").innerHTML = `
           <div class="alert alert-danger text-center role=" alert">
               Email does not exist, Register
           </div>
           `;
  } else if (!passwordExists) {
    document.getElementById("invalid").innerHTML = `
           <div class="alert alert-danger text-center role=" alert">
               Incorrect Password !
           </div>
           `;
  } else {
    addUserToLocalStorage({}, true, email);
    window.location.href = "index.html";
  }
}

function registerValidate() {
  console.log("register");
  const password1 = document.getElementById("password").value;
  const password2 = document.getElementById("confirm_password").value;
  const email = document.getElementById("email").value;
  var userList = JSON.parse(localStorage.getItem("userList"));
  var emailExists = userList.some(
    (existingUser) => existingUser.email === email
  );

  if (!emailExists) {
    if (password1 === password2) {
      var newData = {
        full_name: document.getElementById("full_name").value,
        email: email,
        role: document.getElementById("work").value,
        password: password1,
      };
      addUserToLocalStorage(newData, true, newData.email);
      window.location.href = "index.html";
    } else {
      document.getElementById("invalid").innerHTML = `
        <div class="alert alert-danger text-center role=" alert">
            Two passwords does not match
        </div>
        `;
    }
  } else {
    document.getElementById("invalid").innerHTML = `
        <div class="alert alert-danger text-center role=" alert">
            User already exists, Login
        </div>
        `;
  }
}

function addUserToLocalStorage(newUser, login, email) {
  // gets the list of users
  var userList = JSON.parse(localStorage.getItem("userList")) || [];

  // checks if email exists in the userList
  var emailExists = userList.some(
    (existingUser) => existingUser.email === email
  );
  if (!emailExists) {
    userList.push(newUser);
  }
  localStorage.setItem("userList", JSON.stringify(userList));
  localStorage.setItem("user", email);
  localStorage.setItem("login", JSON.stringify(login));
}

function confirmPasswordToggle() {
  const confirmPasswordInput = document.getElementById("confirm_password");
  const confirmToggleIcon = document.getElementById(
    "toggleConfirmPasswordIcon"
  );
  togglePassword(confirmPasswordInput, confirmToggleIcon);
}

function passwordToggle() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("togglePasswordIcon");
  togglePassword(passwordInput, toggleIcon);
}

function togglePassword(input, icon) {
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
  }
}
