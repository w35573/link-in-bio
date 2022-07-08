window.addEventListener('DOMContentLoaded', function () {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundAlpha: 0.0,
        color2: 0xff00f0,
        wingSpan: 40.00,
        separation: 100.00,
        alignment: 77.00,
        cohesion: 5.00,
        quantity: 3.00
    })
});

setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)';
}, 1000);


