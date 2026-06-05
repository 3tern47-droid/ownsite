/*   JavaScript Document

Tooplate 2146 Nexus Brew

https://www.tooplate.com/view/2146-nexus-brew

*/

// Mobile menu toggle
function toggleMenu() {
   const menuToggle = document.querySelector('.menu-toggle');
   const navLinks = document.querySelector('.nav-links');

   if (menuToggle && navLinks) {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
   }
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');

      if (menuToggle && navLinks) {
         menuToggle.classList.remove('active');
         navLinks.classList.remove('active');
      }
   });
});

// Independent Scrolling Logic
const leftSide = document.getElementById('left-side');
const rightSide = document.getElementById('right-side');

function handleScroll(e) {
    // Determine which side the cursor is on
    const isOverLeft = e.clientX < window.innerWidth / 2;
    const target = isOverLeft ? leftSide : rightSide;
    const other = isOverLeft ? rightSide : leftSide;

    // We don't need to manually scroll because the browser handles scroll on overflow elements.
    // However, we can ensure focus or prevent the other side from scrolling if needed.
    // In a split layout with overflow: auto on containers, the browser scrolls the element under the cursor by default.
}

// Smooth scrolling for navigation links targeting specific sides
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
         e.preventDefault();
         // Find which container the target is in
         const container = target.closest('.split-side');
         if (container) {
             container.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
             });
         } else {
             target.scrollIntoView({ behavior: 'smooth' });
         }
      }
   });
});

// Active navigation link detection for split containers
function updateActiveLink() {
   let current = '';
   const sections = document.querySelectorAll('.tile');
   
   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const container = section.closest('.split-side');
      if (container) {
          if (container.scrollTop >= sectionTop - 100) {
             current = section.getAttribute('id');
          }
      }
   });

   document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
         link.classList.add('active');
      }
   });
}

leftSide.addEventListener('scroll', updateActiveLink);
rightSide.addEventListener('scroll', updateActiveLink);

// Tab functionality
function showTab(tabName) {
   const tabs = document.querySelectorAll('.tab-content');
   const buttons = document.querySelectorAll('.tab-button');
   const clickedButton = event.target;

   tabs.forEach(tab => {
      tab.classList.remove('active');
   });

   buttons.forEach(button => {
      button.classList.remove('active');
   });

   const targetTab = document.getElementById(tabName);
   if (targetTab) {
      targetTab.classList.add('active');
   }

   if (clickedButton) {
      clickedButton.classList.add('active');
   }
}