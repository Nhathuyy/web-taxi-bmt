let numberPhone = "0835340340"
document.querySelectorAll('.set-href-phone').forEach(function(element) {
    element.href = 'tel:' + numberPhone;
});

document.querySelectorAll('.set-value-phone').forEach(function(element) {
    element.textContent =  numberPhone;
}); 






// 

document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".toggle_menu");
    const menuMobile = document.querySelector(".menu-mobile");

    toggleMenu.addEventListener("click", () => {
        menuMobile.style.transform = menuMobile.style.transform === "translateX(0%)"
            ? "translateX(-100%)"
            : "translateX(0%)";
    });

    document.addEventListener("click", (e) => {
        if (!menuMobile.contains(e.target) && !toggleMenu.contains(e.target)) {
            menuMobile.style.transform = "translateX(-100%)";
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.querySelector('.toggle_menu');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const closeButton = document.querySelector('.close-menu');
//     const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

//     // Show the mobile menu when the menu icon is clicked
//     toggleButton.addEventListener('click', function () {
//         mobileMenu.style.left = '0'; // Slide in the mobile menu
//         mobileMenuOverlay.style.display = 'block'; // Show overlay
//     });

//     // Close the mobile menu when the close button is clicked
//     closeButton.addEventListener('click', function () {
//         mobileMenu.style.left = '-250px'; // Slide out the mobile menu
//         mobileMenuOverlay.style.display = 'none'; // Hide overlay
//     });

//     // Close the mobile menu when clicking on the overlay
//     mobileMenuOverlay.addEventListener('click', function () {
//         mobileMenu.style.left = '-250px'; // Slide out the mobile menu
//         mobileMenuOverlay.style.display = 'none'; // Hide overlay
//     });
// });



// Toggle menu open/close
// $('.side-menu-close').on('click', function () {
//     $('.mobile-menu').toggleClass('opened');
//     $('.custom-overlay').toggleClass('show');
//     $(this).toggleClass('closed');
//   });
  
//   // Close menu when clicking on overlay
//   $('.custom-overlay').on('click', function () {
//     $('.mobile-menu').removeClass('opened');
//     $(this).removeClass('show');
//     $('.side-menu-close').removeClass('closed');
//   });
  
//   // Close menu when clicking close icon
//   $('.close-menu').on('click', function () {
//     $('.mobile-menu').removeClass('opened');
//     $('.custom-overlay').removeClass('show');
//     $('.side-menu-close').removeClass('closed');
//   });
  

// Toggle Hamburger Menu
const toggleMenu = document.querySelector('.toggle_menu');  // Sử dụng toggle_menu
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.custom-overlay');
const hamburgerIcon = document.querySelector('.hamburger-icon');

// Mở menu khi nhấn vào toggle_menu
toggleMenu.addEventListener('click', () => {
    mobileMenu.classList.add('opened');
    overlay.classList.add('show');
    hamburgerIcon.classList.add('open');
});

// Đóng menu khi nhấn vào dấu "X"
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('opened');
    overlay.classList.remove('show');
    hamburgerIcon.classList.remove('open');
});

// Đóng menu khi nhấn vào overlay
overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('opened');
    overlay.classList.remove('show');
    hamburgerIcon.classList.remove('open');
});