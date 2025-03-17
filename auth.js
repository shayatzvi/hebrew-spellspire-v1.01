document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const loginSection = document.getElementById('login-section');
    const userSection = document.getElementById('user-section');
    const userName = document.getElementById('user-name');
    const userButton = document.getElementById('user-button');
    const userMenu = document.getElementById('user-menu');
    const showScores = document.getElementById('show-scores');
    const scoresModal = document.getElementById('scores-modal');
    const closeModal = document.querySelector('.close-modal');
    const userScoresContainer = document.getElementById('user-scores-container');
    
    // Initialize Netlify Identity
    netlifyIdentity.on('init', user => {
        if (user) {
            handleUserLogin(user);
        }
    });
    
    // Handle login event
    netlifyIdentity.on('login', user => {
        handleUserLogin(user);
        netlifyIdentity.close();
        
        // Save user in localStorage for game.js to access
        localStorage.setItem('hebrewSpellTowerUser', JSON.stringify({
            id: user.id,
            email: user.email,
            fullName: user.user_metadata.full_name || user.email.split('@')[0]
        }));
    });
    
    // Handle logout event
    netlifyIdentity.on('logout', () => {
        loginSection.style.display = 'block';
        userSection.style.display = 'none';
        
        // Remove user from localStorage
        localStorage.removeItem('hebrewSpellTowerUser');
    });
    
    // Toggle user menu
    userButton.addEventListener('click', () => {
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!userButton.contains(event.target) && !userMenu.contains(event.target)) {
            userMenu.style.display = 'none';
        }
    });
    
    // Show scores modal
    showScores.addEventListener('click', () => {
        scoresModal.style.display = 'flex';
        loadUserScores();
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        scoresModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    scoresModal.addEventListener('click', (event) => {
        if (event.target === scoresModal) {
            scoresModal.style.display = 'none';
        }
    });
    
    // Handle user login display
    function handleUserLogin(user) {
        loginSection.style.display = 'none';
        userSection.style.display = 'block';
        
        // Display user name
        const displayName = user.user_metadata.full_name || user.email.split('@')[0];
        userName.textContent = displayName;
    }
    
    // Load user scores from Netlify Function or localStorage
    async function loadUserScores() {
        userScoresContainer.innerHTML = '<div class="loading">Loading your progress...</div>';
        
        const user = netlifyIdentity.currentUser();
        
        if (!user) {
            userScoresContainer.innerHTML = '<p>Please log in to view your progress.</p>';
            return;
        }
        
        try {
            // Get scores from localStorage
            const localScores = JSON.parse(localStorage.getItem('hebrewSpellTowerScores') || '{}');
            
            // Here you would normally also check a database via Netlify Functions
            // This is a placeholder for that functionality
            
            if (Object.keys(localScores).length === 0) {
                userScoresContainer.innerHTML = '<p>You haven\'t played any games yet. Start playing to track your progress!</p>';
                return;
            }
            
            // Format the data for display
            const formattedScores = [];
            
            for (const version in localScores) {
                const versionData = localScores[version];
                
                // Format version name for display
                let displayVersion = version.charAt(0).toUpperCase() + version.slice(1);
                
                // Add game data to the array
                formattedScores.push({
                    version: displayVersion,
                    level: versionData.level,
                    score: versionData.score,
                    wordsLearned: versionData.wordsLearned,
                    lastPlayed: new Date(versionData.lastPlayed).toLocaleDateString()
                });
            }
            
            // Sort by last played date (most recent first)
            formattedScores.sort((a, b) => {
                return new Date(b.lastPlayed) - new Date(a.lastPlayed);
            });
            
            // Render scores table
            let html = `
                <table class="progress-table">
                    <thead>
                        <tr>
                            <th>Game Version</th>
                            <th>Level</th>
                            <th>Score</th>
                            <th>Words Learned</th>
                            <th>Last Played</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            formattedScores.forEach(score => {
                html += `
                    <tr>
                        <td>${score.version}</td>
                        <td>${score.level}</td>
                        <td class="highlight">${score.score}</td>
                        <td>${score.wordsLearned} words</td>
                        <td>${score.lastPlayed}</td>
                    </tr>
                `;
            });
            
            html += `
                    </tbody>
                </table>
            `;
            
            userScoresContainer.innerHTML = html;
            
        } catch (error) {
            console.error('Error loading scores:', error);
            userScoresContainer.innerHTML = '<p>Error loading your progress. Please try again later.</p>';
        }
    }
}); 