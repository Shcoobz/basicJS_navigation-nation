/**
 * This script is designed to control the navigation animation for a responsive menu overlay.
 * It includes functionality to toggle the navigation overlay's visibility and animate menu items
 * for an engaging user experience.
 */

/**
 * DOM element representing the menu bars toggle button.
 * @type {HTMLElement}
 */
const menuBars = document.getElementById('menu-bars');

/**
 * DOM element representing the overlay for the navigation menu.
 * @type {HTMLElement}
 */
const overlay = document.getElementById('overlay');

/**
 * Individual navigation item DOM elements.
 * @type {HTMLElement[]}
 */
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

/**
 * Array of navigation item DOM elements for easier iteration.
 * @type {HTMLElement[]}
 */
const navItems = [nav1, nav2, nav3, nav4, nav5];

/**
 * Controls the animation direction for navigation items.
 *
 * @param {string} direction1 - The initial direction of the animation ('in' or 'out').
 * @param {string} direction2 - The final direction of the animation ('in' or 'out').
 */
function navAnimation(direction1, direction2) {
  navItems.forEach((navItem, i) => {
    navItem.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

/**
 * Toggles the navigation menu's visibility and animates the menu items and overlay.
 */
function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animation Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleNav);
});
