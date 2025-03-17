// Progress Integration for Hebrew Spell Tower Games
(function() {
    // Debug flag
    const debug = true;
    
    // Logging function
    function log(message, data) {
        if (debug) {
            if (data) {
                console.log(`[Progress Integration] ${message}`, data);
            } else {
                console.log(`[Progress Integration] ${message}`);
            }
        }
    }
    
    // Wait for DOM and game state to be ready
    document.addEventListener('DOMContentLoaded', function() {
        log("DOM loaded, waiting for game state...");
        
        // Check repeatedly for game state to be initialized
        const checkInterval = setInterval(function() {
            if (typeof gameState !== 'undefined') {
                log("Game state found:", gameState);
                clearInterval(checkInterval);
                initializeProgressTracking();
            }
        }, 500); // Check every 500ms
        
        // Stop checking after 10 seconds to avoid infinite loop
        setTimeout(function() {
            clearInterval(checkInterval);
            log("Timed out waiting for game state");
        }, 10000);
    });
    
    // Initialize progress tracking
    function initializeProgressTracking() {
        log("Initializing progress tracking...");
        
        // Load saved progress if logged in
        if (GameProgress.isLoggedIn()) {
            log("User is logged in, checking for saved progress...");
            const savedProgress = GameProgress.loadProgress();
            
            if (savedProgress) {
                log("Found saved progress:", savedProgress);
                
                // Ask user if they want to load saved progress
                if (confirm(`Welcome back! Would you like to continue from Level ${savedProgress.level}?`)) {
                    log("Loading saved progress...");
                    
                    // Apply saved progress to game state
                    gameState.level = savedProgress.level;
                    gameState.score = savedProgress.score;
                    
                    // Update UI to reflect loaded progress
                    if (document.getElementById('level')) {
                        document.getElementById('level').textContent = gameState.level;
                    }
                    
                    if (document.getElementById('score')) {
                        document.getElementById('score').textContent = gameState.score;
                    }
                    
                    // Start the game at saved level
                    if (typeof startLevel === 'function') {
                        log("Starting at level:", gameState.level);
                        startLevel(gameState.level);
                    } else {
                        log("startLevel function not found");
                    }
                }
            }
        }
        
        // Override game functions to save progress
        overrideGameFunctions();
        
        // Set up periodic saving
        setInterval(saveGameProgress, 60000); // Save every minute
        
        log("Progress tracking initialized");
    }
    
    // Override key game functions to save progress
    function overrideGameFunctions() {
        log("Overriding game functions...");
        
        // 1. Override levelComplete function
        if (typeof levelComplete === 'function') {
            log("Overriding levelComplete function");
            const originalLevelComplete = levelComplete;
            
            window.levelComplete = function() {
                log("Level complete triggered");
                // Call original function
                originalLevelComplete.apply(this, arguments);
                // Save progress
                saveGameProgress();
            };
        } else {
            log("levelComplete function not found");
        }
        
        // 2. Override gameOver function
        if (typeof gameOver === 'function') {
            log("Overriding gameOver function");
            const originalGameOver = gameOver;
            
            window.gameOver = function() {
                log("Game over triggered");
                // Call original function
                originalGameOver.apply(this, arguments);
                // Save progress
                saveGameProgress();
            };
        } else {
            log("gameOver function not found");
        }
        
        // 3. Override addDiscoveredWord function (if it exists)
        if (typeof addDiscoveredWord === 'function') {
            log("Overriding addDiscoveredWord function");
            const originalAddDiscoveredWord = addDiscoveredWord;
            
            window.addDiscoveredWord = function(wordInfo) {
                log("New word discovered");
                // Call original function
                originalAddDiscoveredWord.apply(this, arguments);
                // Save progress
                saveGameProgress();
            };
        } else {
            log("addDiscoveredWord function not found");
        }
        
        log("Game functions overridden");
    }
    
    // Save game progress directly
    function saveGameProgress() {
        if (!GameProgress.isLoggedIn() || !gameState || !gameState.gameStarted) {
            log("Not saving progress: user not logged in or game not started");
            return;
        }
        
        log("Saving game progress...");
        log("Current game state:", gameState);
        
        // Get number of discovered words
        const wordsLearned = gameState.discoveredWords ? gameState.discoveredWords.length : 0;
        
        // Save progress
        const saved = GameProgress.saveProgress(
            gameState.level, 
            gameState.score, 
            wordsLearned
        );
        
        log(`Progress ${saved ? 'saved successfully' : 'save failed'}`);
        
        // Debug all saved progress
        GameProgress.debugAllProgress();
    }
    
    // Add a visual indicator for logged in state
    function addLoginIndicator() {
        log("Adding login indicator");
        
        const indicator = document.createElement('div');
        indicator.className = 'login-indicator';
        
        // Set content based on login state
        if (GameProgress.isLoggedIn()) {
            const user = GameProgress.getUser();
            indicator.innerHTML = `<span class="logged-in">✓ Progress saving for: ${user.name || user.email}</span>`;
            indicator.className += ' is-logged-in';
        } else {
            indicator.innerHTML = '<span class="not-logged-in">Not logged in - progress will not be saved</span>';
        }
        
        // Style the indicator
        indicator.style.position = 'fixed';
        indicator.style.top = '10px';
        indicator.style.right = '10px';
        indicator.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        indicator.style.padding = '8px 12px';
        indicator.style.borderRadius = '4px';
        indicator.style.fontSize = '14px';
        indicator.style.zIndex = '9999';
        
        // Add indicator to page
        document.body.appendChild(indicator);
        
        log("Login indicator added");
    }
    
    // Call this function to add the indicator
    setTimeout(addLoginIndicator, 1000);
})(); 