function toggleTile(element) {
    const isExpanded = element.classList.contains('expanded');
    
    // Close all other tiles in the same side
    const parentSide = element.closest('.split-side');
    const allTiles = parentSide.querySelectorAll('.cube-tile');
    
    allTiles.forEach(tile => {
        tile.classList.remove('expanded');
    });

    // If it wasn't expanded, expand it now
    if (!isExpanded) {
        element.classList.add('expanded');
        // Scroll to the tile
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Add event listener for close buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-tile')) {
        e.stopPropagation();
        e.target.closest('.cube-tile').classList.remove('expanded');
    }
});

// Mobile menu toggle (if needed, though I removed it from HTML for simplicity)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}
