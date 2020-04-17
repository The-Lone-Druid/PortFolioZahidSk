//  Script for Menu Button
const menuBtn = document.querySelector('.menuBtn');
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

const colorSwitcher = document.querySelector('.switcher-btn');
const colorPanel = document.querySelector('.color-switcher');

let showColor = false;

colorSwitcher.addEventListener('click', togglePalate);


function togglePalate() {

    if(!showColor){

        colorPanel.classList.add('show');

        showColor = true;

    } else {
        
        colorPanel.classList.remove('show');

        showColor = false;

    }

}

//Theme Changer Function

let styleSheetTheme = document.querySelector("#styleSheetTheme");

function toggleTheme(theme) {
    console.log("clicked");
    console.log(theme);
    styleSheetTheme.setAttribute("href","css/"+theme+".css");
}

    // change style for sidebar-menu button when scroll after hero section ====================
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var screen = $(window).height();
        if( scroll >= screen ) {
            $('.btnLine').css("background","rgba(0,0,0,0.8)");
        }
        else {
            $('.btnLine').css("background","white");
        }
    });

