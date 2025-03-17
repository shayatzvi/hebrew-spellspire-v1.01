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
            // First, try to get scores from localStorage
            const localScores = JSON.parse(localStorage.getItem('hebrewSpellTowerScores') || '{}');
            
            // Here you would normally also check a database via Netlify Functions
            // This is a placeholder for that functionality
            
            if (Object.keys(localScores).length === 0) {
                userScoresContainer.innerHTML = '<p>You haven\'t played any games yet. Start playing to track your progress!</p>';
                return;
            }
            
            // Render scores table
            let html = `
                <table class="progress-table">
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Level</th>
                            <th>Score</th>
                            <th>Words Learned</th>
                            <th>Last Played</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            for (const topic in localScores) {
                const gameData = localScores[topic];
                html += `
                    <tr>
                        <td>${topic}</td>
                        <td>${gameData.level}</td>
                        <td class="highlight">${gameData.score}</td>
                        <td>${gameData.wordsLearned} words</td>
                        <td>${new Date(gameData.lastPlayed).toLocaleDateString()}</td>
                    </tr>
                `;
            }
            
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