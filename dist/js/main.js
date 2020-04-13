// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;

    }
}

// jQuery


//for footer
document.getElementById("footer").innerHTML = "<a href=#>Copyright &copy; 2020 { Web <span class=text-secondary>Brewery</span> }</a>";


//Theme Selector using jQuery.

const darkTheme = document.querySelector('#dark-theme'); // for Dark Theme
const lightTheme = document.querySelector('#light-theme'); // for Light Theme

darkTheme.addEventListener('click',changeToDark); //check if the element is clicked
lightTheme.addEventListener('click',changeToLight); //------------/---------------


//if darkTheme was clicked, call this function

function changeToDark() {

    var oldlink = document.getElementsByTagName("link").item(0);
    
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", 'dist/css/dark.css');
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

    darkTheme.style.display = "none";
    lightTheme.style.display = "block";
}


//else call this function

function changeToLight() {

    var oldlink = document.getElementsByTagName("link").item(0);
    
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", 'dist/css/light.css');

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    lightTheme.style.display = "none";
    darkTheme.style.display = "block";
}
