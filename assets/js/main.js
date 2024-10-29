(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  // window.addEventListener("load", toggleScrollTop);
  // document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();

if (JSON.parse(localStorage.getItem("userList")) === null) {
  var user = {
    full_name: "Anthony Admin",
    email: "admin@gmail.com",
    role: "Client",
    password: "admin12345",
  };
  addUserToLocalStorage(user, false, "");
  console.log("new user");
}

checkLogin();

function checkLogin() {
  var nav = document.getElementById("nav-ul");
  var userList = JSON.parse(localStorage.getItem("userList"));
  const userLogin = JSON.parse(localStorage.getItem("login"));
  if (!userLogin) {
    console.log("not exists");
    const login = document.createElement("li");
    login.innerHTML = `<a href="login.html">Login</a>`;
    const register = document.createElement("li");
    register.innerHTML = `<a href="register.html">Register</a>`;
    nav.appendChild(login);
    nav.appendChild(register);
  } else {
    const logout = document.createElement("li");
    logout.innerHTML = `
    <a href="" onclick="logout(event)">Logout</a>
    `;
    const discover = document.createElement("li");
    discover.innerHTML = `
    <a href="discover.html">Discover</a>
    `;
    nav.appendChild(discover);
    nav.appendChild(logout);
  }
}

function logout(e) {
  e.preventDefault();
  console.log("logout clicked");
  const userList = JSON.parse(localStorage.getItem("userList"));
  const email = localStorage.getItem("user");
  for (i = 0; i < userList.length; i++) {
    if (userList[i].email === email) {
      var userObject = userList[i];
    }
  }
  addUserToLocalStorage(userObject, false, email);
  window.location.href = "index.html";
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
