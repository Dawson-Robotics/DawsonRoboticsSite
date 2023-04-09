// Gathering
var lang = document.getElementsByTagName("html")[0].lang;
var toggletheme = document.getElementById("contentThemeSelection");
var homeSlideshow = document.getElementById("homeSlides");
var homeContent = document.getElementById("content");
var headChange = document.getElementById("headerDesktop");
var mobileLogoPopUp = document.getElementById("mobileLogo");
var quickLinks = document.getElementById("quickLinks");
var footerSite = document.getElementsByTagName("footer")[0];
var linking = document.getElementsByClassName("links");
var loading = document.getElementById("loadingCover");
var date = new Date();
var year = date.getFullYear();

// Assets

var gearNavi = '<nav class="gear"><img src="'+baseurl+'assets/images/gears/gear.png"></nav>';
var dropdown1 = '<div class="dropdown"><a href="/fr/">Français</a><div>';
var spinnieGear = '<img src="'+baseurl+'assets/images/gears/gear.png">';
var roboticsLogo = '<a href="'+baseurl+'" class="logo"><img src="'+baseurl+'assets/images/logos/DawsonRoboticsLogoGray.png" class="logo"></a>';
var roboticsLogoMobile = '<img src="'+baseurl+'assets/images/logos/DawsonRoboticsLogo.png" class="homePageLogo">';
var smallRoboticsLogo = '<img class="smallLogo" src="'+baseurl+'assets/images/logos/DawsonRoboticsSmallLogoBlueFill.png">'+dropdown1;
var slideshowCode = '<div id="news"></div>';

if (lang=="fr") {
    gearNavi = '<nav class="gear"><img src="../../assets/images/gears/gear.png"></nav>';
    dropdown1 = '<div class="dropdown"><a href="../../">English</a><div>';
    spinnieGear = '<img src="../../assets/images/gears/gear.png">';
    roboticsLogo = '<a href="/fr/" class="logo"><img src="../../assets/images/logos/DawsonRoboticsLogoGray.png" class="logo"></a>';
    roboticsLogoMobile = '<img src="../../assets/images/logos/DawsonRoboticsLogo.png" class="homePageLogo">';
    smallRoboticsLogo = '<img class="smallLogo" src="../assets/images/logos/DawsonRoboticsSmallLogoBlueFill.png">'+dropdown1;
    slideshowCode = '<div id="news"></div>';
}

// Functions

function headering() {
    headChange.innerHTML = '<header class="desktopHeader">'+roboticsLogo+'<div id="gearNav"></div>'+'<a id="settings">'+smallRoboticsLogo+'</a></header>';
}

function gearFormation() {
    var gearNavigation = document.getElementById("gearNav");

    gearNavigation.innerHTML = gearNavi;
}

function slideshowing() {
    homeSlideshow.innerHTML = slideshowCode;
    
    var news = document.getElementById("news");

    if (lang=="en") {
        news.innerHTML = 
        '<img src="'+baseurl+'assets/images/roboticsTeamFirst.jpg">'+
        '<h2>Latest News</h2>'+
        '<h3>Dawson Robotics wins 1st place overall!</h3>'+
        '<ul>February 18th, 2023</ul>';
    }
    else {
        news.innerHTML = 
        '<img src="../assets/images/roboticsTeamFirst.jpg">'+
        '<h2>Nouvelles</h2>'+
        '<h3>Robotiques Dawson gagne en premier du tout!</h3>'+
        '<ul>18 février, 2023</ul>';
    }
}

function mobileLogo() {
    mobileLogoPopUp.innerHTML=roboticsLogoMobile;
}

function quickLinkSection() {
    if (lang=="en") {
        quickLinks.innerHTML='<h2>Quick Links</h2>'+
        '<a href="https://www.dawsoncollege.qc.ca" class="links">Dawson College</a>'+'<br></br>'+
        '<a href="https://space.dawsoncollege.qc.ca" class="links">SPACE</a>'+'<br></br>'+
        '<a href="https://robo-crc.ca" class="links">CRC</a><br>';
    }
    else {
        quickLinks.innerHTML='<h2>Liens importants</h2>'+
        '<a href="https://www.dawsoncollege.qc.ca" class="links">Dawson College (anglais seulement)</a>'+'<br></br>'+
        '<a href="https://space.dawsoncollege.qc.ca" class="links">SPACE (anglais seulement)</a>'+'<br></br>'+
        '<a href="https://robo-crc.ca/fr/" class="links">CRC</a><br>';
    }
}

function footerForm() {
    if (lang=="en") {
        footerSite.innerHTML = '<h4>©'+year+' Dawson Robotics. All rights reserved.</h4><br>';
    }
    else {
        footerSite.innerHTML = '<h4>©'+year+' Robotiques Dawson. Tous droits réservés.</h4><br>';
    }
}

function loaderScreen() {
    loading.innerHTML = '<div class="spinning">'+spinnieGear+'</div>';
    loading.style.display = "block";
}

headering();
gearFormation();
slideshowing();
mobileLogo();
quickLinkSection();
footerForm();

// Language Settings

var setUp = document.getElementById("settings");
var droppy = document.getElementsByClassName("dropdown")[0];
var i = 0;

setUp.onclick = function() {
    if (i<1) {
        droppy.style.display = "block";
        i++
    }
    else {
        droppy.style.display = "none";
        i=0;
    }
}

// Loading gear link click

console.log(linking.length);

for (var i = 0; i < linking.length; i++) {
    linking[i].addEventListener("click", function() {
        loaderScreen();
    });
  }
