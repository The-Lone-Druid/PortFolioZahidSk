const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

    if(!showMenu) {

        menuBtn.classList.add('close');
        menu.classList.add('show');

        showMenu = true;

    } else {
        
        menuBtn.classList.remove('close');
        menu.classList.remove('show');

        showMenu = false;

    }

}

function hideMenu() {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');

    showMenu = false;
}

//Function to activate theme button 

const themeBtn = document.querySelector('.switcher-btn');
const colorPalette = document.querySelector('.color-switcher');
const styleSheetAttr = document.querySelector('#styleSheetAttr');

function changeTheme(themeColor) {
    styleSheetAttr.setAttribute('href', themeColor);
    console.log(themeColor);
}

themeBtn.addEventListener('click', showTheme);

let themeView = false;

function showTheme() {

    if(!themeView) {

        colorPalette.classList.add('show');

        themeView = true;

    } else {
        
        colorPalette.classList.remove('show');

        themeView = false;

    }

}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
