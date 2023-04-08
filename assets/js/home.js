var toggleTheme = document.getElementById("contentThemeSelection");
var homeSlideshow = document.getElementById("homeSlides");
var homeContent = document.getElementById("content");
var headChange = document.getElementById("headerDesktop");
var mobileLogoPopUp = document.getElementById("mobileLogo");
var quickLinks = document.getElementById("quickLinks");
var footerSite = document.getElementsByTagName("footer")[0];
var linking = document.getElementsByClassName("links");
var loading = document.getElementById("loadingCover");

const gearNavi = '<nav class="gear"><img src="'+baseurl+'assets/images/gears/gear.png"></nav>';
const spinnieGear = '<img src="'+baseurl+'assets/images/gears/gear.png">';
const roboticsLogo = '<a href="'+baseurl+'" class="logo"><img src="'+baseurl+'assets/images/logos/DawsonRoboticsLogoGray.png" class="logo"></a>';
const roboticsLogoMobile = '<img src="'+baseurl+'assets/images/logos/DawsonRoboticsLogo.png" class="homePageLogo">';
const smallRoboticsLogo = '<img class="smallLogo" src="'+baseurl+'assets/images/logos/DawsonRoboticsSmallLogoBlueFill.png">'
const slideshowCode = '<div id="news"></div>';
const date = new Date();

var year = date.getFullYear();

function headering() {
    headChange.innerHTML = '<header class="desktopHeader">'+roboticsLogo+'<div id="gearNav"></div>'+smallRoboticsLogo+'</header>';
}

function gearFormation() {
    var gearNavigation = document.getElementById("gearNav");

    gearNavigation.innerHTML = gearNavi;
}

function slideshowing() {
    homeSlideshow.innerHTML = slideshowCode;
    
    var news = document.getElementById("news");

    news.innerHTML = '<img src="'+baseurl+'assets/images/roboticsTeamFirst.jpg"><h2>Latest News</h2><h3>Dawson Robotics wins 1st place overall!</h3><ul>February 18th, 2023</ul>'
}

function mobileLogo() {
    mobileLogoPopUp.innerHTML=roboticsLogoMobile;
}

function quickLinkSection() {
    quickLinks.innerHTML='<h2>Quick Links</h2>'+
    '<a href="https://www.dawsoncollege.qc.ca" class="links">Dawson College</a>'+
    '<br></br>'+'<a href="https://space.dawsoncollege.qc.ca" class="links">SPACE</a>'+
    '<br></br>'+'<a href="https://robo-crc.ca" class="links">CRC</a>';
}

function footerForm() {
    footerSite.innerHTML = '<h4>Copyright '+year+' Dawson Robotics. All rights reserved.</h4><br>';
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

console.log(linking.length);

for (var i = 0; i < linking.length; i++) {
    linking[i].addEventListener("click", function() {
        loaderScreen();
    });
  }
