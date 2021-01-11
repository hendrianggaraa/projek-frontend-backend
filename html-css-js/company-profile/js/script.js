// sideNav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slidebar
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    duration: 600,
    interval: 3000
});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// services
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});