function openMenu() {
    document.getElementById('sideMenu').style.marginLeft = '0';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('main').style.backgroundColor = 'rgba(0,0,0,0.5)';
    document.getElementById('expandArrow').style.marginLeft = '250px'
    document.getElementById('topLogo').style.marginLeft = '250px'
    document.getElementById('counter').style.marginLeft = '250px'
}

function closeMenu() {
    document.getElementById('sideMenu').style.marginLeft = '-250px';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('main').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('expandArrow').style.marginLeft = '0'
    document.getElementById('topLogo').style.marginLeft = '0px'
    document.getElementById('counter').style.marginLeft = '0px'
}

let myLogo = document.getElementById('myLogo');
let mainDiv = document.getElementById('main');
let welcome = document.getElementById('welcome');
let toText = document.getElementById('to');
let counter = document.getElementById('counter');
let swipe = document.getElementById('swipe');

