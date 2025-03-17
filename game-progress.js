// Game Progress Manager for Hebrew Spell Tower
const GameProgressManager = {
    // Check if user is logged in
    isUserLoggedIn: function() {
        const currentUser = JSON.parse(localStorage.getItem('hebrewSpellTowerUser'));
        return !!currentUser;
    },
    
    // Get current user info
    getCurrentUser: function() {
        return JSON.parse(localStorage.getItem('hebrewSpellTowerUser'));
    },
    
    // Determine the game version from the path
    getGameVersion: function() {
        const path = window.location.pathname;
        
        // Extract version from path
        if (path.includes('/versions/')) {
            const versionMatch = path.match(/\/versions\/([^/]+)/);
            if (versionMatch && versionMatch[1]) {
                return versionMatch[1].toLowerCase();
            }
        }
        
        // Fallback to 'classic' if version can't be determined
        return 'classic';
    },
    
    // Save game progress
    saveProgress: function(gameState) {
        if (!this.isUserLoggedIn()) return;
        
        const gameVersion = this.getGameVersion();
        const userId = this.getCurrentUser().id;
        
        // Get existing scores
        const savedScores = JSON.parse(localStorage.getItem('hebrewSpellTowerScores') || '{}');
        
        // Update with current game progress
        savedScores[gameVersion] = {
            level: gameState.level,
            score: gameState.score,
            wordsLearned: gameState.discoveredWords.length,
            lastPlayed: new Date().toISOString()
        };
        
        // Save back to localStorage
        localStorage.setItem('hebrewSpellTowerScores', JSON.stringify(savedScores));
        
        // In a real implementation, you would also save to a database via Netlify Functions
        this.syncWithServer(userId, gameVersion, savedScores[gameVersion]);
    },
    
    // Load game progress for the current version
    loadProgress: function() {
        if (!this.isUserLoggedIn()) return false;
        
        const gameVersion = this.getGameVersion();
        
        // Get existing scores
        const savedScores = JSON.parse(localStorage.getItem('hebrewSpellTowerScores') || '{}');
        
        if (savedScores[gameVersion]) {
            // Found saved progress for this game version
            return savedScores[gameVersion];
        }
        
        return false;
    },
    
    // Sync with server via Netlify Function
    syncWithServer: function(userId, gameVersion, progress) {
        // This is a placeholder for the server sync functionality
        // In a real implementation, you would call a Netlify Function here
        
        // Example:
        /*
        fetch('/.netlify/functions/save-progress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                gameVersion: gameVersion,
                progress: progress
            })
        })
        .then(response => response.json())
        .then(data => console.log('Progress synced with server:', data))
        .catch(error => console.error('Error syncing progress:', error));
        */
    }
}; 