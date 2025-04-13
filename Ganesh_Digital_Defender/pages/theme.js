// Theme Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('themeSelector');
    const navbar = document.querySelector('.navbar');
    
    // Load saved theme if exists
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
        themeSelector.value = savedTheme;
    }

    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        applyTheme(selectedTheme);
        
        // Save theme preference
        localStorage.setItem('selectedTheme', selectedTheme);
    });

    function applyTheme(theme) {
        // Remove all theme classes
        navbar.classList.remove(
            'default-theme',
            'dark-theme',
            'nature-theme',
            'pastel-theme',
            'modern-theme'
        );
        
        // Add selected theme class
        navbar.classList.add(`${theme}-theme`);
    }
});