/* ====================================================================================================================
================================   NAVBAR TOGGLER ||| NAVBAR   ================================================================
==================================================================================================================== */
//Toggle Navbar
var NAV_TOGGLER = document.querySelector(".NAV_TOGGLER");
NAV_TOGGLER.addEventListener("click", () => {
    if(document.querySelector(".NAV_TOGGLER_MENU").classList.contains("NAV_TOGGLER_CLOSE"))
    {
        document.querySelector(".NAV_TOGGLER_MENU").classList.remove("NAV_TOGGLER_CLOSE");
    }
    else
    {
        document.querySelector(".NAV_TOGGLER_MENU").classList.add("NAV_TOGGLER_CLOSE");
    }
})
//hide NAV BAR on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".NAV_TOGGLER_MENU").classList.contains("NAV_TOGGLER_CLOSE"))
    {
        document.querySelector(".NAV_TOGGLER_MENU").classList.add("NAV_TOGGLER_CLOSE");
    }
})
/* ====================================================================================================================
  ================================   LIGHT | DARK MODE ||| RESUSABLE CODE   ==============================================================
  ==================================================================================================================== */

/*============================== Light|Dark Mode Toggle =====================================*/
const LightDarkToggle = document.querySelector(".DL_ICON");
const DAY_NIGHT = document.querySelector(".DAY_NIGHT");

var DARK_MODE;

if(localStorage.getItem('DARK_MODE')){
    DARK_MODE = localStorage.getItem('DARK_MODE');
}
else
{
    DARK_MODE = 'LIGHT';
}

localStorage.setItem('DARK_MODE', DARK_MODE);//local storage is for storing state of website in this case the DARK/LIGHT mode state

if(localStorage.getItem('DARK_MODE') == 'DARK')
{
    document.body.classList.add("DARK")

    DAY_NIGHT.querySelector("i").classList.remove("fa-moon");//to switch the icons
        
    DAY_NIGHT.querySelector("i").classList.add("fa-sun");
}


LightDarkToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("DARK");
    if(document.body.classList.contains("DARK"))
    {
        DAY_NIGHT.querySelector("i").classList.remove("fa-moon");
        
        DAY_NIGHT.querySelector("i").classList.add("fa-sun");

        localStorage.setItem('DARK_MODE','DARK');//storing state of website in local storage
    }
    else
    {
        DAY_NIGHT.querySelector("i").classList.remove("fa-sun");
        
        DAY_NIGHT.querySelector("i").classList.add("fa-moon");

        localStorage.setItem('DARK_MODE','LIGHT');
    }
})
/* ====================================================================================================================
================================   GO TO TOP BUTTON ||| RESUSABLE CODE   ================================================================
==================================================================================================================== */
//function to go to the top the page when button is clicked || its appears only after scrolling for some distance from the top of the screen
var toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("to-top-active");
    }else {
        toTop.classList.remove("to-top-active");
    }
})
/* ====================================================================================================================
================================   LINK ACTIVE IMAGE ||| HOME SECTION   ================================================================
==================================================================================================================== */
//function to view selected image in full screen
function FullView(ImgLink){
    document.getElementById("full_image").src = ImgLink;
    document.getElementById("full_image_view").style.display = "block";
}
//function to minimize full image when you click on exit button
function ExitFullView(){
    document.getElementById("full_image_view").style.display = "none";
}
//function to download image selected image
function Download(ImgSource){
    document.getElementById("download").href = ImgSource;
}
/* ====================================================================================================================
================================   SWIPER JS ||| ABOUT SECTION   ================================================================
==================================================================================================================== */
//swiper js on REVIEWS SECTION
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
