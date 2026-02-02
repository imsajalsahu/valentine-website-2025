// Update CSS variables from configuration
function applyTheme() {
    const config = window.VALENTINE_CONFIG;
    const root = document.documentElement;

    // Apply colors
    root.style.setProperty('--background-color-1', config.colors.backgroundStart);
    root.style.setProperty('--background-color-2', config.colors.backgroundEnd);
    root.style.setProperty('--button-color', config.colors.buttonBackground);
    root.style.setProperty('--button-hover', config.colors.buttonHover);
    root.style.setProperty('--text-color', config.colors.textColor);
    
    // Apply accent colors if available
    if (config.colors.accentColor) {
        root.style.setProperty('--accent-color', config.colors.accentColor);
    }
    if (config.colors.secondaryAccent) {
        root.style.setProperty('--secondary-accent', config.colors.secondaryAccent);
    }

    // Apply animation settings
    root.style.setProperty('--float-duration', config.animations.floatDuration);
    root.style.setProperty('--float-distance', config.animations.floatDistance);
    root.style.setProperty('--bounce-speed', config.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize);
}

// Apply theme when the page loads
window.addEventListener('DOMContentLoaded', applyTheme); 