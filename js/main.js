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


