function start() {
    // Get the DOM elements
    const menuBtn = document.querySelector(".menu-btn");
    const menuLines = document.querySelector(".btn-line");
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.nav-item');

    // Menu click trigger function
    menuBtn.addEventListener('click', toggleMenu, false);
    menuLines.addEventListener('click', toggleMenu, false);
    
    // Get the menu button 'click' event
    function toggleMenu() {
    
        // Sentinel value
        let showMenu = false;

        // Menu Toggle based on sentinel value
        if(!showMenu) {
            openMenu();
        } else {
            closeMenu();
        }

        // Open the menu by adding the proper CSS classes
        function openMenu() {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            showMenu = true; // set approriate sentinel value
        };

        // Close the menu by adding the proper CSS classes
        function closeMenu() {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            showMenu = false; // set approriate sentinel value
        }

        // Listen for click outside of the open button to close the menu
        document.addEventListener('click', function(e) {
            if (showMenu === true && 
                e.target.classList[0] !== "menu-btn") {
                    closeMenu();
            }
        });
    };
}

// Wait for DOM to load then start the menu functions
document.addEventListener('load', start(), false);

