var toggleTheme = document.getElementById("contentThemeSelection");
var homeSlideshow = document.getElementById("homeSlides");
var homeContent = document.getElementById("content");
var sponsorSlideshow = document.getElementById("sponsorSlideshow");
var headChange = document.getElementById("headerDesktop");
var mobileLogoPopUp = document.getElementById("mobileLogo");
var quickLinks = document.getElementById("quickLinks");
var footerSite = document.getElementsByTagName("footer")[0];

const gearNavi = '<nav class="gear"><img src="/assets/images/gears/gear.png"></nav>';
const roboticsLogo = '<a href="/" class="logo"><img src="/assets/images/logos/DawsonRoboticsLogoGray.png" class="logo"></a>';
const roboticsLogoMobile = '<img src="/assets/images/logos/DawsonRoboticsLogo.png" class="homePageLogo">';
const smallRoboticsLogo = '<img class="smallLogo" src="/assets/images/logos/DawsonRoboticsSmallLogoBlueFill.png">'
const slideshowCode = '<div id="news"></div>';
const date = new Date();
year = date.getFullYear();

const slideSponsorsShow = `
    <!-- Slideshow container -->
    <div class="slideshow-container">

        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
            <div class="numbertext">1 / 2</div>
            <img src="/assets/images/logos/SpaceLogo.png" style="height:15vh;max-width:100%;">
            <div class="text"><a href="https://space.dawsoncollege.qc.ca">SPACE</a></div>
        </div>
        <div class="mySlides fade">
            <div class="numbertext">2 / 2</div>
            <img src="assets/images/logos/Dawson_En_Logo_White_RGB.svg" style="height:20vh;width:100%">
            <div class="text"><a href="https://www.dawsoncollege.qc.ca">Dawson College</a></div>
        </div>
    </div>
    <br>
`;

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

    news.innerHTML = '<img src="/assets/images/roboticsTeamFirst.jpg"><h2>Latest News</h2><h3>Dawson Robotics wins 1st place overall!</h3><ul>February 18th, 2023</ul>'
}

function mobileLogo() {
    mobileLogoPopUp.innerHTML=roboticsLogoMobile;
}

function quickLinkSection() {
    quickLinks.innerHTML='<h2>Quick Links</h2>'+'<a href="https://www.dawsoncollege.qc.ca" class="links">Dawson College</a>'+'<br></br>'+'<a href="https://space.dawsoncollege.qc.ca" class="links">SPACE</a>'+'<br></br>'+'<a href="https://robo-crc.ca" class="links">CRC</a>';
}

function footerForm() {
    footerSite.innerHTML = '<h4>Copyright '+year+' Dawson Robotics. All rights reserved.</h4><br>';
}

function sponsorShow() {
    sponsorSlideshow.innerHTML = slideSponsorsShow;
}

headering();
gearFormation();
slideshowing();
mobileLogo();
quickLinkSection();
footerForm();
sponsorShow();

/* window.addEventListener('resize', function(event) {
    if (gearNavigation.width >= 600) {
        gearNavigation
    }

} */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

