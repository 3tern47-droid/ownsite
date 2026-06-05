/*   JavaScript Document

Tooplate 2146 Nexus Brew

https://www.tooplate.com/view/2146-nexus-brew

*/

// Independent Scrolling Logic
const leftSide = document.getElementById('left-side');
const rightSide = document.getElementById('right-side');

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

if (leftSide) leftSide.addEventListener('scroll', updateActiveLink);
if (rightSide) rightSide.addEventListener('scroll', updateActiveLink);
