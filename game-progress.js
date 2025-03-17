// Simple game progress manager
const GameProgress = {
    // Get the logged in user
    getUser: function() {
        try {
            return JSON.parse(localStorage.getItem('hebrewSpellTowerUser'));
        } catch (e) {
            console.error("Error getting user:", e);
            return null;
        }
    },
    
    // Check if user is logged in
    isLoggedIn: function() {
        return !!this.getUser();
    },
    
    // Get the game version from the URL path
    getGameVersion: function() {
        const path = window.location.pathname;
        
        if (path.includes('/versions/')) {
            const parts = path.split('/');
            const versionIndex = parts.indexOf('versions') + 1;
            
            if (versionIndex < parts.length) {
                return parts[versionIndex];
            }
        }
        
        return 'classic';
    },
    
    // Save game progress
    saveProgress: function(level, score, wordsLearned) {
        const user = this.getUser();
        if (!user) return false;
        
        const gameVersion = this.getGameVersion();
        console.log(`Saving progress for ${gameVersion}: Level ${level}, Score ${score}`);
        
        try {
            // Get existing scores
            let allScores = {};
            try {
                const existingData = localStorage.getItem('hebrewSpellTowerScores');
                if (existingData) {
                    allScores = JSON.parse(existingData);
                }
            } catch (e) {
                console.error("Error parsing existing scores:", e);
            }
            
            // Update scores for this version
            allScores[gameVersion] = {
                level: level,
                score: score,
                wordsLearned: wordsLearned,
                lastPlayed: new Date().toISOString()
            };
            
            // Save to localStorage
            localStorage.setItem('hebrewSpellTowerScores', JSON.stringify(allScores));
            return true;
        } catch (e) {
            console.error("Error saving progress:", e);
            return false;
        }
    },
    
    // Load game progress
    loadProgress: function() {
        const user = this.getUser();
        if (!user) return null;
        
        const gameVersion = this.getGameVersion();
        console.log(`Loading progress for ${gameVersion}`);
        
        try {
            const allScores = JSON.parse(localStorage.getItem('hebrewSpellTowerScores') || '{}');
            return allScores[gameVersion] || null;
        } catch (e) {
            console.error("Error loading progress:", e);
            return null;
        }
    },
    
    // Display progress in console (for debugging)
    debugProgress: function() {
        try {
            const allScores = JSON.parse(localStorage.getItem('hebrewSpellTowerScores') || '{}');
            console.log("All saved progress:", allScores);
        } catch (e) {
            console.error("Error debugging progress:", e);
        }
    }
};

// Debug on load
console.log("Game Progress Manager loaded");
GameProgress.debugProgress(); 