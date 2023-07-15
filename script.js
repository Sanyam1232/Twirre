// DOM Selection
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginForBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header-button');
const modalFooterPlus = document.querySelector('.modal-footer-span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const inputUserInfo = document.querySelector('.user-info');
const inputPassword = document.querySelector('.password');
const loginUserInfo = document.querySelector('.login-user-info');
const loginPassword = document.querySelector('.login-password');
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const darkElements3 =document.querySelectorAll('.light-mode');
const logOut=document.querySelector('.log-out');
const homeLogin=document.querySelector('.brand');

// Utility Functions
const displayElement = (element, displayType) => {
  element.style.display = displayType;
};

const hideElement = (element) => {
  element.style.display = 'none';
};
logOut.addEventListener('click',()=>{
  mainPage.style.display='grid';
  newsFeedPage.style.display='none';
});
homeLogin.addEventListener('click',()=>{
  mainPage.style.display='grid';
  loginPage.style.display='none';
});
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const addClass = (element, className) => {
  element.classList.add(className);
};

const removeClass = (element, className) => {
  element.classList.remove(className);
};

const isInputValid = (input) => {
  return input.trim() !== '';
};

// Event Listeners
const goToLoginPage = () => {
  displayElement(mainPage, 'none');
  displayElement(loginPage, 'grid');
};

middleContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('log-in') || e.target.classList.contains('Sign-up')) {
    goToLoginPage();
  }
});

btnTop.addEventListener('click', () => {
  if (isInputValid(inputUserInfo.value) && isInputValid(inputPassword.value)) {
    hideElement(mainPage);
    displayElement(newsFeedPage, 'block');
  } else {
    goToLoginPage();
    displayElement(loginModal, 'block');
  }
});

// Login page
modalX.addEventListener('click', () => {
  hideElement(loginModal);
});

loginForBtn.addEventListener('click', () => {
  if (isInputValid(loginUserInfo.value) && isInputValid(loginPassword.value)) {
    hideElement(loginPage);
    displayElement(newsFeedPage, 'block');
  } else {
    displayElement(loginModal, 'block');
  }
});

postBtn.addEventListener('click', () => {
  displayElement(modal, 'block');
  addClass(modalWrapper, 'modal-wrapper-display');
});

const resetModal = () => {
  modalInput.value = '';
  changeOpacity(0.5);
};

const changeOpacity = (value) => {
  modalPostBtn.style.opacity = value;
  modalFooterPlus.style.opacity = value;
};

postModalX.addEventListener('click', () => {
  hideElement(modal);
  removeClass(modalWrapper, 'modal-wrapper-display');
  resetModal();
});

modalInput.addEventListener('keypress', (e) => {
  if (isInputValid(e.target.value)) {
    changeOpacity(1);
  }
});

modalInput.addEventListener('blur', (e) => {
  if (isInputValid(e.target.value)) {
    changeOpacity(0.5);
  }
});

// Sidebar
user.addEventListener('click', () => {
  addClass(sidebar, 'sidebar-display');
  addClass(sidebarWrapper, 'sidebar-wrapper-display');
});

xBtn.addEventListener('click', () => {
  removeClass(sidebar, 'sidebar-display');
  removeClass(sidebarWrapper, 'sidebar-wrapper-display');
});

// Dark Mode
toggle.addEventListener('click', () => {
  toggleClass(circle, 'move');
  Array.from(darkElements1).forEach((darkEl1) => {
    toggleClass(darkEl1, 'dark-1');
  });
  Array.from(darkElements2).forEach((darkEl2) => {
    toggleClass(darkEl2, 'dark-2');
  });
  Array.from(darkElements3).forEach((darkEl3) => {
    toggleClass(darkEl3, 'light');
  });
});
