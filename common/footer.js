// Load and inject footer
(function() {
    const footerHTML = `
<footer class="footer">
    <div class="footer-content">
        <div class="footer-links">
            <a href="/pages/historia.html">Mi Historia</a>
            <a href="https://coff.ee/omopockettool" target="_blank" rel="noopener">Donaciones</a>
            <a href="https://github.com/omopockettool" target="_blank" rel="noopener">GitHub</a>
            <a href="https://instagram.com/omo" target="_blank" rel="noopener">Instagram</a>
            <a href="https://x.com/omo" target="_blank" rel="noopener">X</a>
        </div>
        <div class="footer-signature">
            Con 🤍 Dennis
        </div>
    </div>
</footer>
    `;

    // Inject footer into container
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
})();
