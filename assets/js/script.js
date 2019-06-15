$("#id").on({
    mouseenter: function () {
        $(".style").fadeIn();
    },
    mouseleave: function () {
        var $target = $(".style");

        //delay the fade out to see whether the mouse is moved to the second button
        var timer = setTimeout(function () {
            $target.stop(true, true).fadeOut();
        }, 200);
        $target.data('hoverTimer', timer);
    }
});
$(".style").on({
    mouseenter: function () {
        //if mouse is moved inside then clear the timer so that it will not get hidden
        clearTimeout($(this).data('hoverTimer'));
        $(this).stop(true, true).fadeIn();
    },
    mouseleave: function () {
        $(this).stop(true, true).fadeOut();
    }
});

// burger
// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of menu
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
