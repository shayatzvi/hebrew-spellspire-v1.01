// Enhanced Game Progress Manager with debugging
const GameProgress = {
    // Debug flag - set to true to see detailed console logs
    debug: true,
    
    // Log function that respects debug flag
    log: function(message, data) {
        if (this.debug) {
            if (data) {
                console.log(`[GameProgress] ${message}`, data);
            } else {
                console.log(`[GameProgress] ${message}`);
            }
        }
    },
    
    // Get the logged in user
    getUser: function() {
        try {
            const userData = localStorage.getItem('hebrewSpellTowerUser');
            this.log("Reading user data from localStorage:", userData);
            
            if (!userData) {
                this.log("No user data found");
                return null;
            }
            
            return JSON.parse(userData);
        } catch (e) {
            console.error("[GameProgress] Error getting user:", e);
            return null;
        }
    },
    
    // Check if user is logged in
    isLoggedIn: function() {
        const user = this.getUser();
        const loggedIn = !!user;
        this.log(`User logged in: ${loggedIn}`);
        return loggedIn;
    },
    
    // Get the game version from the URL path
    getGameVersion: function() {
        const path = window.location.pathname;
        this.log(`Current path: ${path}`);
        
        if (path.includes('/versions/')) {
            const parts = path.split('/');
            const versionIndex = parts.indexOf('versions') + 1;
            
            if (versionIndex < parts.length) {
                const version = parts[versionIndex];
                this.log(`Detected game version: ${version}`);
                return version;
            }
        }
        
        this.log("Could not detect game version, using 'classic'");
        return 'classic';
    },
    
    // Save game progress with explicit error tracking
    saveProgress: function(level, score, wordsLearned) {
        this.log("Attempting to save progress...");
        
        // Check if user is logged in
        const user = this.getUser();
        if (!user) {
            this.log("Cannot save progress: user not logged in");
            return false;
        }
        
        // Get game version
        const gameVersion = this.getGameVersion();
        this.log(`Saving progress for ${gameVersion}: Level ${level}, Score ${score}, Words ${wordsLearned}`);
        
        try {
            // Get existing scores
            let allScores = {};
            try {
                const existingData = localStorage.getItem('hebrewSpellTowerScores');
                this.log("Existing scores data:", existingData);
                
                if (existingData) {
                    allScores = JSON.parse(existingData);
                    this.log("Parsed existing scores:", allScores);
                }
            } catch (e) {
                console.error("[GameProgress] Error parsing existing scores:", e);
                // Continue with empty scores object
            }
            
            // Update scores for this version
            allScores[gameVersion] = {
                level: level,
                score: score,
                wordsLearned: wordsLearned,
                lastPlayed: new Date().toISOString()
            };
            
            this.log("Updated scores object:", allScores);
            
            // Convert to string for storage
            const scoresJson = JSON.stringify(allScores);
            this.log("Stringified scores:", scoresJson);
            
            // Save to localStorage
            localStorage.setItem('hebrewSpellTowerScores', scoresJson);
            this.log("Scores saved to localStorage");
            
            // Verify the save worked
            const savedData = localStorage.getItem('hebrewSpellTowerScores');
            this.log("Verification - data in localStorage:", savedData);
            
            return true;
        } catch (e) {
            console.error("[GameProgress] Error saving progress:", e);
            return false;
        }
    },
    
    // Load game progress
    loadProgress: function() {
        this.log("Attempting to load progress...");
        
        const user = this.getUser();
        if (!user) {
            this.log("Cannot load progress: user not logged in");
            return null;
        }
        
        const gameVersion = this.getGameVersion();
        this.log(`Loading progress for ${gameVersion}`);
        
        try {
            const scoresData = localStorage.getItem('hebrewSpellTowerScores');
            this.log("Scores data from localStorage:", scoresData);
            
            if (!scoresData) {
                this.log("No scores data found");
                return null;
            }
            
            const allScores = JSON.parse(scoresData);
            this.log("Parsed scores:", allScores);
            
            const versionProgress = allScores[gameVersion];
            this.log(`Progress for ${gameVersion}:`, versionProgress);
            
            return versionProgress || null;
        } catch (e) {
            console.error("[GameProgress] Error loading progress:", e);
            return null;
        }
    },
    
    // Debug function to display all saved progress
    debugAllProgress: function() {
        this.log("Debugging all saved progress...");
        
        try {
            const scoresData = localStorage.getItem('hebrewSpellTowerScores');
            this.log("Raw scores data:", scoresData);
            
            if (!scoresData) {
                this.log("No scores data found in localStorage");
                return;
            }
            
            const allScores = JSON.parse(scoresData);
            this.log("All saved progress:", allScores);
            
            // Display details for each game version
            for (const version in allScores) {
                this.log(`Details for ${version}:`, allScores[version]);
            }
        } catch (e) {
            console.error("[GameProgress] Error debugging progress:", e);
        }
    }
};

// Run debug on load
GameProgress.log("Game Progress Manager loaded");
GameProgress.debugAllProgress(); 