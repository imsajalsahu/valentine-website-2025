// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Popup messages for cute interactions
const popupMessages = [
    { title: "That's Sweet! 😊", message: "You're making my heart happy!" },
    { title: "I Love You! 💕", message: "You mean everything to me!" },
    { title: "You're The Best! ⭐", message: "I'm so lucky to have you!" },
    { title: "Smile! 😄", message: "Your smile makes me smile!" },
    { title: "Forever Yours 💕", message: "I want to spend forever with you!" },
    { title: "You Light Up My Life! ✨", message: "Every moment with you is a blessing!" },
    { title: "My Heart is Yours! 💝", message: "You complete me perfectly!" },
    { title: "Beautiful Soul 🌟", message: "Inside and out, you're amazing!" },
    { title: "Absolutely! 🎉", message: "I couldn't imagine life without you!" },
    { title: "Definitely Yes! 💖", message: "You're my greatest treasure!" },
];

// Show cute popup
function showPopup(title, message) {
    const popup = document.getElementById('cutePopup');
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupMessage').textContent = message;
    popup.classList.remove('hidden');
}

// Close popup
function closePopup() {
    document.getElementById('cutePopup').classList.add('hidden');
}

// Handle Yes button click with popup
function handleYesClick(questionNumber) {
    const randomPopup = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    showPopup(randomPopup.title, randomPopup.message);
    
    // After popup, show next question
    setTimeout(() => {
        closePopup();
        const nextQuestion = questionNumber + 1;
        if (nextQuestion <= 6) {
            if (nextQuestion === 4) {
                showNextQuestion(4);
            } else {
                showNextQuestion(nextQuestion);
            }
        }
    }, 2000);
}
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('yesBtn2').textContent = config.questions.second.yesBtn;
    document.getElementById('noBtn2').textContent = config.questions.second.noBtn;
    
    // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;
    
    // Set fourth question texts (love meter)
    document.getElementById('question4Text').textContent = config.questions.fourth.text;
    document.getElementById('startText').textContent = config.questions.fourth.startText;
    document.getElementById('nextBtn').textContent = config.questions.fourth.nextBtn;
    
    // Set fifth question texts
    document.getElementById('question5Text').textContent = config.questions.fifth.text;
    document.getElementById('yesBtn5').textContent = config.questions.fifth.yesBtn;
    document.getElementById('noBtn5').textContent = config.questions.fifth.noBtn;
    
    // Set sixth question texts
    document.getElementById('question6Text').textContent = config.questions.sixth.text;
    document.getElementById('yesBtn6').textContent = config.questions.sixth.yesBtn;
    document.getElementById('noBtn6').textContent = config.questions.sixth.noBtn;

    // Setup cursor tracking for No buttons
    setupNoButtonTracking();

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();
});

// Cursor-aware No button tracking
function setupNoButtonTracking() {
    const noButtons = document.querySelectorAll('.no-btn');
    const escapeDistance = 150; // Start fleeing when cursor is 150px away
    const fleeDistance = 200; // Flee this far away from cursor
    
    document.addEventListener('mousemove', (e) => {
        noButtons.forEach(btn => {
            if (!btn.classList.contains('hidden') && btn.parentElement.parentElement.style.display !== 'none') {
                const rect = btn.getBoundingClientRect();
                const btnCenterX = rect.left + rect.width / 2;
                const btnCenterY = rect.top + rect.height / 2;
                
                // Distance from cursor to button center
                const distance = Math.sqrt(
                    Math.pow(e.clientX - btnCenterX, 2) +
                    Math.pow(e.clientY - btnCenterY, 2)
                );
                
                // If cursor is within escape distance, move button away aggressively
                if (distance < escapeDistance) {
                    // Calculate angle away from cursor
                    const angle = Math.atan2(btnCenterY - e.clientY, btnCenterX - e.clientX);
                    
                    // Add random unpredictability (random angle offset)
                    const randomAngle = (Math.random() - 0.5) * Math.PI / 3;
                    const finalAngle = angle + randomAngle;
                    
                    // Calculate new position further away
                    const newX = e.clientX + Math.cos(finalAngle) * fleeDistance;
                    const newY = e.clientY + Math.sin(finalAngle) * fleeDistance;
                    
                    // Ensure button stays within viewport with padding
                    const padding = 20;
                    const finalX = Math.max(padding, Math.min(newX, window.innerWidth - rect.width - padding));
                    const finalY = Math.max(padding, Math.min(newY, window.innerHeight - rect.height - padding));
                    
                    btn.style.position = 'fixed';
                    btn.style.left = finalX + 'px';
                    btn.style.top = finalY + 'px';
                    btn.style.zIndex = '10';
                    btn.style.transition = 'all 0.15s ease-out'; // Fast, snappy movement
                }
            }
        });
    });
}

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

// Function to move the "No" button when clicked
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';
        
        // Show different messages based on the value
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value >= 2000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.veryHigh;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Initialize love meter
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
function celebrate() {
    // Show celebration popup first
    showPopup("🎉 YES! YESHU SAID YES! 🎉", "I'm the happiest person alive right now! 💕✨");
    
    // Create sparkles immediately
    createSparkles();
    
    setTimeout(() => {
        closePopup();
        document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
        const celebration = document.getElementById('celebration');
        celebration.classList.remove('hidden');
        
        // Set celebration messages
        document.getElementById('celebrationTitle').textContent = config.celebration.title;
        document.getElementById('celebrationMessage').textContent = config.celebration.message;
        document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
        
        // Create heart explosion effect
        createHeartExplosion();
        
        // Create more sparkles
        setInterval(() => {
            createSparkles();
        }, 800);
    }, 2500);
}

// Create sparkle particles
function createSparkles() {
    const container = document.querySelector('.floating-elements');
    const sparkles = ['✨', '⭐', '💫', '🌟', '💥', '✨'];
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        const randomSparkle = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.innerHTML = randomSparkle;
        sparkle.className = 'heart';
        sparkle.style.fontSize = Math.random() * 1.5 + 0.8 + 'rem';
        sparkle.style.animation = `float ${Math.random() * 3 + 2}s ease-out forwards`;
        sparkle.style.opacity = '0.8';
        container.appendChild(sparkle);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        setTimeout(() => sparkle.remove(), 5000);
    }
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 80; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        heart.style.fontSize = Math.random() * 2 + 1 + 'rem';
        heart.style.animation = `float ${Math.random() * 5 + 3}s ease-out forwards`;
        document.querySelector('.floating-elements').appendChild(heart);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        setTimeout(() => heart.remove(), 8000);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
} 