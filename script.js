// OMO Landing Page Interactive Script

// Configuration for each app status
const appStatus = {
    // money: 'disabled',
    money: 'disabled',
    crea: 'disabled',
    control: 'disabled',
    genius: 'disabled',
    express: 'disabled',
    totem: 'disabled',
    dreams: 'disabled'
};

// Initialize app status on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAppStatus();
    addInteractivity();
    addNavbarScrollBehavior();
});

// Initialize app status
function initializeAppStatus() {
    const appCircles = document.querySelectorAll('.app-circle');
    
    appCircles.forEach(circle => {
        const appName = circle.getAttribute('data-app');
        const status = appStatus[appName] || 'disabled';
        
        // Set status attribute
        circle.setAttribute('data-status', status);
    });
    
    // Update section status
    updateSectionStatus();
}

// Add interactive functionality
function addInteractivity() {
    const appCircles = document.querySelectorAll('.app-circle');
    const centralCircle = document.querySelector('.central-circle');
    
    appCircles.forEach(circle => {
        const appName = circle.getAttribute('data-app');
        
        // Add click event to scroll to section
        circle.addEventListener('click', function() {
            scrollToSection(appName);
        });
    });
    
    // Add click event to central circle to scroll to OMO section
    centralCircle.addEventListener('click', function() {
        scrollToSection('omo');
    });
}

// Get app information
function getAppInfo(appName) {
    const appInfo = {
        money: {
            name: 'OMO Money',
            description: 'Gestión financiera personal y estabilidad económica'
        },
        crea: {
            name: 'OMO Crea',
            description: 'Potencia tu creatividad y expresión artística'
        },
        control: {
            name: 'OMO Control',
            description: 'Manejo del control personal y disciplina'
        },
        genius: {
            name: 'OMO Genius Bridge',
            description: 'Desarrollo intelectual y conexión emocional'
        },
        express: {
            name: 'OMO Express',
            description: 'Expresión personal y comunicación'
        },
        totem: {
            name: 'OMO Totem',
            description: 'Centro espiritual e intuición'
        },
        dreams: {
            name: 'OMO Dreams',
            description: 'Seguimiento de sueños y metas'
        }
    };
    
    return appInfo[appName] || { name: appName, description: 'Descripción no disponible' };
}

// Scroll to section function
function scrollToSection(sectionName) {
    const section = document.getElementById(sectionName);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Go to App Store function
function goToAppStore(appName) {
    const appStoreUrls = {
        money: 'https://apps.apple.com/app/omo-money/id123456789',
        crea: 'https://apps.apple.com/app/omo-crea/id123456790',
        control: 'https://apps.apple.com/app/omo-control/id123456791',
        genius: 'https://apps.apple.com/app/omo-genius/id123456792',
        express: 'https://apps.apple.com/app/omo-express/id123456793',
        totem: 'https://apps.apple.com/app/omo-totem/id123456794',
        dreams: 'https://apps.apple.com/app/omo-dreams/id123456795'
    };
    
    const url = appStoreUrls[appName];
    if (url) {
        window.open(url, '_blank');
    } else {
        console.log(`App Store URL not found for ${appName}`);
    }
}

// Navbar scroll behavior
function addNavbarScrollBehavior() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide navbar based on scroll position
        if (scrollTop <= 50) {
            // At the top - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolled down - show navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Function to update app status (for future use)
function updateAppStatus(appName, newStatus) {
    if (appStatus.hasOwnProperty(appName)) {
        appStatus[appName] = newStatus;
        
        // Update visual status
        const appElement = document.querySelector(`[data-app="${appName}"]`);
        if (appElement) {
            appElement.setAttribute('data-status', newStatus);
        }
        
        // Update section status
        updateSectionStatus();
        
        console.log(`Updated ${appName} status to ${newStatus}`);
    }
}

// Update section status based on app status
function updateSectionStatus() {
    Object.keys(appStatus).forEach(appName => {
        const status = appStatus[appName];
        const section = document.getElementById(appName);
        
        if (section) {
            const statusChip = section.querySelector('.status-chip');
            const isDisabled = status === 'disabled';
            
            // Update section class
            if (isDisabled) {
                section.classList.add('disabled');
            } else {
                section.classList.remove('disabled');
            }
            
            // Update status chip
            if (statusChip) {
                if (isDisabled) {
                    statusChip.textContent = 'Próximamente';
                    statusChip.className = 'status-chip disabled';
                } else {
                    statusChip.textContent = 'Available';
                    statusChip.className = 'status-chip available';
                    statusChip.onclick = () => goToAppStore(appName);
                    statusChip.href = '#';
                }
            }
        }
    });
}



// Function to get current status (for debugging/management)
function getCurrentStatus() {
    return { ...appStatus };
}



// Export functions for external use (if needed)
window.OMO = {
    updateStatus: updateAppStatus,
    getStatus: getCurrentStatus,
    apps: Object.keys(appStatus)
};

// Console welcome message
console.log('🚀 OMO Landing Page loaded successfully!');
console.log('Available apps:', Object.keys(appStatus));
console.log('Use OMO.updateStatus("appName", "live") to make app live');
console.log('Use OMO.getStatus() to see current status'); 