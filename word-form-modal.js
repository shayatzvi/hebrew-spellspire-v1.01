// Word Form Modal Component for Hebrew Spell Tower
// This creates a modal form that submits to Netlify Forms

function createWordFormModal() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'word-form-modal';
    modalContainer.className = 'word-form-modal';
    modalContainer.style.display = 'none';
    
    // Create modal content
    modalContainer.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Add a Hebrew Word</h2>
            <p>Contribute to the Hebrew Spell Tower dictionary</p>
            
            <form name="hebrew-word-contribution" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="hebrew-word-contribution">
                
                <div class="form-group">
                    <label for="hebrewWord">Hebrew Word*</label>
                    <input type="text" id="hebrewWord" name="hebrewWord" required>
                    <p class="input-hint">Enter the Hebrew word without vowel points</p>
                </div>
                
                <div class="form-group">
                    <label for="englishTranslation">English Translation*</label>
                    <input type="text" id="englishTranslation" name="englishTranslation" required>
                </div>
                
                <div class="form-group">
                    <label for="pronunciation">Pronunciation Guide</label>
                    <input type="text" id="pronunciation" name="pronunciation">
                    <p class="input-hint">How to pronounce the word using English letters</p>
                </div>
                
                <div class="form-group">
                    <label for="category">Category</label>
                    <input type="text" id="category" name="category">
                    <p class="input-hint">E.g. food, animals, holidays, etc.</p>
                </div>
                
                <div class="form-group">
                    <label for="gameVersion">Game Version*</label>
                    <select id="gameVersion" name="gameVersion" required>
                        <option value="all">All Versions</option>
                        <option value="classic">Classic</option>
                        <option value="passover">Passover</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="notes">Additional Notes</label>
                    <textarea id="notes" name="notes" rows="3"></textarea>
                </div>
                
                <button type="submit" class="submit-button">Submit Word</button>
            </form>
            
            <div class="form-success-message" style="display: none;">
                Thank you for your contribution! Your word has been submitted.
            </div>
        </div>
    `;
    
    // Add modal to document
    document.body.appendChild(modalContainer);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .word-form-modal {
            display: none;
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.7);
            font-family: Arial, sans-serif;
        }
        
        .modal-content {
            background-color: #0d1b2a;
            color: white;
            margin: 10% auto;
            padding: 25px;
            border-radius: 10px;
            width: 80%;
            max-width: 600px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            position: relative;
            animation: modalFadeIn 0.3s ease-in-out;
        }
        
        @keyframes modalFadeIn {
            from {opacity: 0; transform: translateY(-30px);}
            to {opacity: 1; transform: translateY(0);}
        }
        
        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            line-height: 0.8;
        }
        
        .close-button:hover {
            color: #fff;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .modal-content h2 {
            color: #ffd700;
            margin-top: 10px;
        }
        
        .modal-content label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #ffd700;
        }
        
        .modal-content input[type="text"],
        .modal-content select,
        .modal-content textarea {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #1f3a5f;
            background-color: #1f3a5f;
            color: white;
            font-size: 16px;
        }
        
        .input-hint {
            margin-top: 5px;
            font-size: 12px;
            color: #8ab4f8;
            margin-bottom: 0;
        }
        
        .submit-button {
            background-color: #ffd700;
            color: #0d1b2a;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .submit-button:hover {
            background-color: #ffec80;
        }
        
        .form-success-message {
            background-color: rgba(0, 255, 0, 0.1);
            border: 1px solid #00ff00;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .modal-content {
                width: 90%;
                margin: 20% auto;
                padding: 15px;
            }
        }
    `;
    document.head.appendChild(modalStyle);
    
    // Set up event listeners
    const modal = document.getElementById('word-form-modal');
    const closeButton = modal.querySelector('.close-button');
    const form = modal.querySelector('form');
    const successMessage = modal.querySelector('.form-success-message');
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        // Let Netlify handle the form submission
        
        // Show success message after a short delay (to allow form submission)
        setTimeout(function() {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Close modal after 3 seconds
            setTimeout(function() {
                modal.style.display = 'none';
                
                // Reset for next opening
                setTimeout(function() {
                    form.reset();
                    form.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 500);
            }, 3000);
        }, 500);
    });
    
    // Return a function to open the modal
    return function openWordFormModal() {
        modal.style.display = 'block';
    };
} 