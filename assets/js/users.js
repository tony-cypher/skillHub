if (JSON.parse(localStorage.getItem("userList")) === null) {
  var user = {
    full_name: "Anthony Admin",
    email: "admin@gmail.com",
    role: "Client",
    password: "admin12345",
  };
  addUserToLocalStorage(user);
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

  if (emailExists && passwordExists) {
    window.location.href = "index.html";
  } else {
    document.getElementById("invalid").innerHTML = `
           <div class="alert alert-danger text-center role=" alert">
               Invalid Credentials
           </div>
           `;
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
      addUserToLocalStorage(newData);
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

function addUserToLocalStorage(newUser) {
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList));
}