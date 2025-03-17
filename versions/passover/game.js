document.addEventListener('DOMContentLoaded', () => {
    // Game elements
    const lettersTray = document.getElementById('letters-tray');
    const currentWordElement = document.getElementById('current-word');
    const wordTranslationElement = document.getElementById('word-translation');
    const wordPronunciationElement = document.getElementById('word-pronunciation');
    const castSpellButton = document.getElementById('cast-spell');
    const clearWordButton = document.getElementById('clear-word');
    const enemyElement = document.getElementById('enemy');
    const enemyHealthElement = document.getElementById('enemy-health');
    const damageTextElement = document.getElementById('damage-text');
    const gameMessageElement = document.getElementById('game-message');
    const scoreElement = document.getElementById('score');
    const levelElement = document.getElementById('level');
    const hintButton = document.getElementById('show-hint');
    const hintTextElement = document.getElementById('hint-text');
    
    // Modals
    const tutorialModal = document.getElementById('tutorial');
    const levelCompleteModal = document.getElementById('level-complete');
    const wordDiscoveredModal = document.getElementById('word-discovered');
    const gameOverModal = document.getElementById('game-over');
    
    // Modal elements
    const startGameButton = document.getElementById('start-game');
    const nextLevelButton = document.getElementById('next-level');
    const continueGameButton = document.getElementById('continue-game');
    const restartGameButton = document.getElementById('restart-game');
    const wordsLearnedElement = document.getElementById('words-learned');
    const levelWordsSummaryElement = document.getElementById('level-words-summary');
    const finalScoreElement = document.getElementById('final-score');
    const totalWordsLearnedElement = document.getElementById('total-words-learned');
    const learnedWordsListElement = document.getElementById('learned-words-list');
    const discoveredWordElement = document.getElementById('discovered-word');
    const discoveredTranslationElement = document.getElementById('discovered-translation');
    const discoveredPronunciationElement = document.getElementById('discovered-pronunciation');
    
    // Add this variable at the top with other DOM elements
    const backspaceButton = document.getElementById('backspace-button');
    
    // Game state
    let gameState = {
        level: 1,
        score: 0,
        currentLetters: [],
        selectedLetters: [],
        currentWord: '',
        enemyHealth: 100,
        maxEnemyHealth: 100,
        difficulty: 'beginner',
        discoveredWords: [],
        levelWords: [],
        availableWords: [],
        currentHint: '',
        gameStarted: false
    };
    
    // Enemy types
    const enemies = [
        { name: 'Wizard', image: 'Wizard.png', health: 100 },
        { name: 'Zombie', image: 'Zombie.png', health: 150 },
        { name: 'Witch', image: 'Witch.png', health: 200 },
        { name: 'Army General', image: 'Army General.png', health: 300 },
        { name: 'Ghost', image: 'Ghost.png', health: 400 }
    ];
    
    // Initialize game
    function initGame() {
        showTutorial();
        updateUI();
    }
    
    // Show tutorial modal
    function showTutorial() {
        tutorialModal.style.display = 'flex';
    }
    
    // Start game after tutorial
    function startGame() {
        tutorialModal.style.display = 'none';
        gameState.gameStarted = true;
        startLevel(1);
    }
    
    // Start a new level
    function startLevel(level) {
        gameState.level = level;
        gameState.levelWords = [];
        
        // Set difficulty based on level
        if (level <= 3) {
            gameState.difficulty = 'beginner';
        } else if (level <= 6) {
            gameState.difficulty = 'intermediate';
        } else {
            gameState.difficulty = 'advanced';
        }
        
        // Set enemy based on level
        const enemyIndex = Math.min(level - 1, enemies.length - 1);
        const enemy = enemies[enemyIndex];
        gameState.maxEnemyHealth = enemy.health + ((level - 1) * 50);
        gameState.enemyHealth = gameState.maxEnemyHealth;
        
        // Try to set the enemy image
        try {
            const img = new Image();
            img.src = `images/${enemy.image}`;
            img.onload = () => {
                enemyElement.style.backgroundImage = `url('images/${enemy.image}')`;
            };
            img.onerror = () => {
                // Use placeholder if image doesn't exist
                const placeholder = createEnemyPlaceholder(enemy);
                enemyElement.style.backgroundImage = `url('${placeholder}')`;
            };
            
            // Set placeholder immediately while waiting for image to load
            const placeholder = createEnemyPlaceholder(enemy);
            enemyElement.style.backgroundImage = `url('${placeholder}')`;
        } catch (e) {
            // Fallback if there's an error
            const placeholder = createEnemyPlaceholder(enemy);
            enemyElement.style.backgroundImage = `url('${placeholder}')`;
        }
        
        // Generate available words for this level
        gameState.availableWords = hebrewDictionary[gameState.difficulty].slice();
        
        // Use all Hebrew letters instead of level-specific ones
        gameState.currentLetters = hebrewAlphabet.map(item => item.letter);
        
        // Reset selected letters and current word
        gameState.selectedLetters = [];
        gameState.currentWord = '';
        
        // Generate a hint
        generateHint();
        
        // Update UI
        updateUI();
        
        // Display level message
        gameMessageElement.textContent = `Level ${level}: Defeat the ${enemy.name}!`;
    }
    
    // Generate a hint for the player
    function generateHint() {
        if (gameState.availableWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * gameState.availableWords.length);
            const hintWord = gameState.availableWords[randomIndex];
            gameState.currentHint = hintWord;
        }
    }
    
    // Show hint to the player
    function showHint() {
        if (gameState.currentHint) {
            const word = gameState.currentHint;
            hintTextElement.innerHTML = `Try spelling: <strong>${word.english}</strong> (${word.pronunciation})`;
        } else {
            hintTextElement.textContent = "No hint available";
        }
    }
    
    // Update the game UI
    function updateUI() {
        // Update score and level
        scoreElement.textContent = gameState.score;
        levelElement.textContent = gameState.level;
        
        // Update enemy health
        const healthPercentage = (gameState.enemyHealth / gameState.maxEnemyHealth) * 100;
        enemyHealthElement.style.width = `${healthPercentage}%`;
        
        // Update current word
        currentWordElement.textContent = gameState.currentWord;
        
        // Clear translation and pronunciation if no word is selected
        if (gameState.currentWord === '') {
            wordTranslationElement.textContent = '';
            wordPronunciationElement.textContent = '';
        }
        
        // Update letters tray
        renderLettersTray();
        
        // Update button states
        castSpellButton.disabled = gameState.currentWord.length === 0;
        clearWordButton.disabled = gameState.currentWord.length === 0;
        backspaceButton.disabled = gameState.currentWord.length === 0;
    }
    
    // Render the letters tray
    function renderLettersTray() {
        lettersTray.innerHTML = '';
        
        // Create containers for different letter groups
        const regularContainer = document.createElement('div');
        regularContainer.classList.add('letter-group');
        
        const finalContainer = document.createElement('div');
        finalContainer.classList.add('letter-group');
        
        // Group letters by type
        const regularLetters = gameState.currentLetters.filter(letter => !letter.match(/[ךםןףץ]/));
        const finalLetters = gameState.currentLetters.filter(letter => letter.match(/[ךםןףץ]/));
        
        // Add regular letters
        regularLetters.forEach((letter, index) => {
            const letterElement = document.createElement('div');
            letterElement.classList.add('letter');
            
            // Find the letter in the Hebrew alphabet
            const alphabetInfo = hebrewAlphabet.find(item => item.letter === letter);
            
            // Add the Hebrew letter
            letterElement.textContent = letter;
            
            // Add transliteration if available
            if (alphabetInfo) {
                const translitElement = document.createElement('span');
                translitElement.classList.add('letter-transliteration');
                translitElement.textContent = alphabetInfo.sound;
                letterElement.appendChild(translitElement);
            }
            
            // Add click event
            letterElement.addEventListener('click', () => {
                addLetterToWord(letter);
            });
            
            regularContainer.appendChild(letterElement);
        });
        
        // Add final letters
        finalLetters.forEach((letter, index) => {
            const letterElement = document.createElement('div');
            letterElement.classList.add('letter');
            
            // Find the letter in the Hebrew alphabet
            const alphabetInfo = hebrewAlphabet.find(item => item.letter === letter);
            
            // Add the Hebrew letter
            letterElement.textContent = letter;
            
            // Add transliteration if available
            if (alphabetInfo) {
                const translitElement = document.createElement('span');
                translitElement.classList.add('letter-transliteration');
                translitElement.textContent = alphabetInfo.sound;
                letterElement.appendChild(translitElement);
            }
            
            // Add click event
            letterElement.addEventListener('click', () => {
                addLetterToWord(letter);
            });
            
            finalContainer.appendChild(letterElement);
        });
        
        // Add group titles
        const regularTitle = document.createElement('div');
        regularTitle.classList.add('letter-group-title');
        regularTitle.textContent = 'Regular Letters';
        regularContainer.insertBefore(regularTitle, regularContainer.firstChild);
        
        const finalTitle = document.createElement('div');
        finalTitle.classList.add('letter-group-title');
        finalTitle.textContent = 'Final Letters';
        finalContainer.insertBefore(finalTitle, finalContainer.firstChild);
        
        // Add containers to letters tray
        lettersTray.appendChild(regularContainer);
        lettersTray.appendChild(finalContainer);
    }
    
    // Add letter to word (new function)
    function addLetterToWord(letter) {
        gameState.currentWord += letter;
        
        // Check if current word is valid
        checkCurrentWord();
        
        // Update UI
        updateUI();
    }
    
    // Check if current word is valid
    function checkCurrentWord() {
        const currentWord = gameState.currentWord;
        
        // Find word in dictionary
        const wordInfo = findWordInDictionary(currentWord);
        
        if (wordInfo) {
            // Word is valid, show translation and pronunciation
            wordTranslationElement.textContent = `Meaning: ${wordInfo.english}`;
            wordPronunciationElement.textContent = `Pronunciation: ${wordInfo.pronunciation}`;
        } else {
            // Word is not valid (yet)
            wordTranslationElement.textContent = '';
            wordPronunciationElement.textContent = '';
        }
    }
    
    // Find a word in the dictionary
    function findWordInDictionary(word) {
        // Check all difficulty levels
        for (const difficulty in hebrewDictionary) {
            const wordList = hebrewDictionary[difficulty];
            const foundWord = wordList.find(item => item.hebrew === word);
            
            if (foundWord) {
                return foundWord;
            }
        }
        
        return null;
    }
    
    // Cast spell (submit word)
    function castSpell() {
        const currentWord = gameState.currentWord;
        const wordInfo = findWordInDictionary(currentWord);
        
        if (wordInfo) {
            // Valid word, calculate damage
            const damage = calculateDamage(currentWord);
            
            // Apply damage to enemy
            applyDamage(damage);
            
            // Add to discovered words if not already discovered
            if (!isWordDiscovered(wordInfo)) {
                addDiscoveredWord(wordInfo);
                showWordDiscovered(wordInfo);
            } else {
                // Word already discovered, just add points
                addPoints(damage);
                gameMessageElement.textContent = `You cast "${currentWord}" for ${damage} damage!`;
            }
            
            // Add to level words
            addLevelWord(wordInfo);
            
            // Reset current word and selected letters
            resetWord();
            
            // Generate new hint if needed
            if (Math.random() < 0.3) {
                generateHint();
            }
        } else {
            // Invalid word
            gameMessageElement.textContent = "That's not a valid Hebrew word!";
            
            // Shake the word to indicate it's invalid
            currentWordElement.classList.add('shake');
            setTimeout(() => {
                currentWordElement.classList.remove('shake');
            }, 500);
        }
        
        // Update UI
        updateUI();
    }
    
    // Calculate damage based on word
    function calculateDamage(word) {
        // Base damage is word length
        let damage = word.length * 10;
        
        // Bonus for longer words
        if (word.length >= 4) {
            damage += 10;
        }
        if (word.length >= 6) {
            damage += 20;
        }
        
        // Bonus for words not discovered before
        const wordInfo = findWordInDictionary(word);
        if (wordInfo && !isWordDiscovered(wordInfo)) {
            damage *= 1.5;
        }
        
        return Math.floor(damage);
    }
    
    // Apply damage to enemy
    function applyDamage(damage) {
        // Reduce enemy health
        gameState.enemyHealth = Math.max(0, gameState.enemyHealth - damage);
        
        // Show damage text
        showDamageText(damage);
        
        // Make enemy shake
        enemyElement.classList.add('enemy-hit');
        setTimeout(() => {
            enemyElement.classList.remove('enemy-hit');
        }, 300);
        
        // Check if enemy is defeated
        if (gameState.enemyHealth <= 0) {
            // Level complete
            setTimeout(() => {
                levelComplete();
            }, 1000);
        }
    }
    
    // Show damage text animation
    function showDamageText(damage) {
        damageTextElement.textContent = `-${damage}`;
        damageTextElement.style.opacity = '1';
        damageTextElement.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            damageTextElement.style.opacity = '0';
            damageTextElement.style.transform = 'translateY(-30px)';
        }, 1000);
    }
    
    // Check if word is already discovered
    function isWordDiscovered(wordInfo) {
        return gameState.discoveredWords.some(word => word.hebrew === wordInfo.hebrew);
    }
    
    // Add word to discovered words
    function addDiscoveredWord(wordInfo) {
        gameState.discoveredWords.push(wordInfo);
    }
    
    // Add word to level words
    function addLevelWord(wordInfo) {
        // Check if word is already in level words
        if (!gameState.levelWords.some(word => word.hebrew === wordInfo.hebrew)) {
            gameState.levelWords.push(wordInfo);
        }
    }
    
    // Show word discovered modal
    function showWordDiscovered(wordInfo) {
        discoveredWordElement.textContent = wordInfo.hebrew;
        discoveredTranslationElement.textContent = `Meaning: ${wordInfo.english}`;
        discoveredPronunciationElement.textContent = `Pronunciation: ${wordInfo.pronunciation}`;
        
        wordDiscoveredModal.style.display = 'flex';
    }
    
    // Continue game after word discovered
    function continueAfterWordDiscovered() {
        wordDiscoveredModal.style.display = 'none';
    }
    
    // Add points to score
    function addPoints(points) {
        gameState.score += points;
    }
    
    // Reset current word and selected letters
    function resetWord() {
        gameState.currentWord = '';
        gameState.selectedLetters = [];
    }
    
    // Clear current word (button action)
    function clearWord() {
        resetWord();
        updateUI();
    }
    
    // Level complete
    function levelComplete() {
        // Add bonus points for completing level
        const levelBonus = gameState.level * 100;
        gameState.score += levelBonus;
        
        // Update level complete modal
        wordsLearnedElement.textContent = gameState.levelWords.length;
        
        // Generate level words summary
        levelWordsSummaryElement.innerHTML = '';
        gameState.levelWords.forEach(word => {
            const wordItem = document.createElement('div');
            wordItem.classList.add('word-item');
            
            const hebrewWord = document.createElement('div');
            hebrewWord.classList.add('hebrew-word');
            hebrewWord.textContent = word.hebrew;
            
            const wordDetails = document.createElement('div');
            wordDetails.classList.add('word-details');
            wordDetails.textContent = `${word.english} (${word.pronunciation})`;
            
            wordItem.appendChild(hebrewWord);
            wordItem.appendChild(wordDetails);
            levelWordsSummaryElement.appendChild(wordItem);
        });
        
        // Show level complete modal
        levelCompleteModal.style.display = 'flex';
    }
    
    // Start next level
    function nextLevel() {
        levelCompleteModal.style.display = 'none';
        startLevel(gameState.level + 1);
    }
    
    // Game over
    function gameOver() {
        // Update game over modal
        finalScoreElement.textContent = gameState.score;
        totalWordsLearnedElement.textContent = gameState.discoveredWords.length;
        
        // Generate learned words list
        learnedWordsListElement.innerHTML = '';
        gameState.discoveredWords.forEach(word => {
            const wordItem = document.createElement('div');
            wordItem.classList.add('word-item');
            
            const hebrewWord = document.createElement('div');
            hebrewWord.classList.add('hebrew-word');
            hebrewWord.textContent = word.hebrew;
            
            const wordDetails = document.createElement('div');
            wordDetails.classList.add('word-details');
            wordDetails.textContent = `${word.english} (${word.pronunciation})`;
            
            wordItem.appendChild(hebrewWord);
            wordItem.appendChild(wordDetails);
            learnedWordsListElement.appendChild(wordItem);
        });
        
        // Show game over modal
        gameOverModal.style.display = 'flex';
    }
    
    // Restart game
    function restartGame() {
        // Reset game state
        gameState = {
            level: 1,
            score: 0,
            currentLetters: [],
            selectedLetters: [],
            currentWord: '',
            enemyHealth: 100,
            maxEnemyHealth: 100,
            difficulty: 'beginner',
            discoveredWords: [],
            levelWords: [],
            availableWords: [],
            currentHint: '',
            gameStarted: true
        };
        
        // Hide game over modal
        gameOverModal.style.display = 'none';
        
        // Start level 1
        startLevel(1);
    }
    
    // Utility function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Event listeners
    startGameButton.addEventListener('click', startGame);
    nextLevelButton.addEventListener('click', nextLevel);
    continueGameButton.addEventListener('click', continueAfterWordDiscovered);
    restartGameButton.addEventListener('click', restartGame);
    castSpellButton.addEventListener('click', castSpell);
    clearWordButton.addEventListener('click', clearWord);
    hintButton.addEventListener('click', showHint);
    backspaceButton.addEventListener('click', backspaceWord);
    
    // Add this function
    function backspaceWord() {
        if (gameState.currentWord.length > 0) {
            // Remove last character
            gameState.currentWord = gameState.currentWord.slice(0, -1);
            
            // Check if current word is valid
            checkCurrentWord();
            
            // Update UI
            updateUI();
        }
    }
    
    // Initialize game
    initGame();
});

// Add this function to your game.js file
function createEnemyPlaceholder(enemy) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    
    // Fill background with color based on enemy type
    const colors = {
        'Wizard': '#8bc34a',
        'Zombie': '#ff9800',
        'Witch': '#9c27b0',
        'Army General': '#f44336',
        'Ghost': '#6a1b9a'
    };
    
    ctx.fillStyle = colors[enemy.name] || '#555555';
    ctx.fillRect(0, 0, 150, 150);
    
    // Add enemy name
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(enemy.name, 75, 75);
    
    // Return data URL
    return canvas.toDataURL();
}
