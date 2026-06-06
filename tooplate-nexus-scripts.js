/**
 * License Matrix Core Logic
 * - Secure tile toggling
 * - Context menu prevention
 * - Mobile optimization support
 */

document.addEventListener('DOMContentLoaded', () => {
    // Disable right-click as requested
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    }, false);

    // Disable common copy/view-source shortcuts
    document.addEventListener('keydown', (e) => {
        if (
            (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c' || e.key === 'v')) ||
            (e.metaKey && (e.key === 'u' || e.key === 's' || e.key === 'c' || e.key === 'v')) ||
            e.key === 'F12'
        ) {
            e.preventDefault();
            return false;
        }
    });
});

/**
 * Toggles the expanded state of a license tile
 * @param {HTMLElement} element - The tile element clicked
 */
function toggleTile(element) {
    if (!element) return;

    const isExpanded = element.classList.contains('expanded');
    
    // Select all tiles in the current side to close them
    const parentSide = element.closest('.split-side');
    if (!parentSide) return;

    const allTiles = parentSide.querySelectorAll('.cube-tile');
    
    allTiles.forEach(tile => {
        if (tile !== element) {
            tile.classList.remove('expanded');
        }
    });

    // Toggle the clicked tile
    element.classList.toggle('expanded');

    // Scroll into view if expanded
    if (!isExpanded) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}
