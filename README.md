# Hebrew Spell Tower

## How to Play

### Basic Gameplay

#### Start the Game
- Click the **"Start Learning!"** button on the welcome screen.

#### Form Hebrew Words
- Click on Hebrew letters to form words.
- The letters are organized into **regular** and **final** forms.
- As you select letters, they appear in the **word display area**.

#### Cast Spells
- Once you've formed a valid Hebrew word, click **"Cast Spell"**.
- **Valid words** will damage the enemy.
- **Longer words** and **newly discovered words** deal more damage.

#### Word Management
- Use the **"Clear Word"** button to start over.
- Use the **"⌫" (backspace)** button to remove the last letter.

#### Get Hints
- Click **"Show Hint"** if you're stuck.
- The hint shows an **English word** you can try to spell in Hebrew.

#### Complete Levels
- **Defeat the enemy** to complete the level.
- Each level introduces **new enemies** and potentially **new words**.
- Your **score increases** with each successful spell and level completion.

---

## Controls

| Action            | Control |
|------------------|---------|
| **Select Letters** | Left Mouse Click |
| **Cast Spells** | Click "Cast Spell" |
| **Clear Words** | Click "Clear Word" |
| **Backspace** | Click "⌫" |
| **Get Hint** | Click "Show Hint" |

---

## Game Features

### Levels and Progression
- **Multiple Levels**: Progress through increasingly difficult levels.
- **Various Enemies**: Face different monsters with unique appearances and health points.
- **Difficulty Scaling**: Enemies get stronger as you advance.
- **Score System**: Earn points based on word length and discovery.

### Word Discovery
- **New Word Celebration**: Special notification when you discover a new word.
- **Word Collection**: Track all the Hebrew words you've learned.
- **Level Summary**: Review words learned in each level.

### Visual Feedback
- **Enemy Reactions**: Enemies visually react when hit by spells.
- **Health Bar**: Monitor enemy health with a **visual health bar**.
- **Damage Numbers**: See how much damage each word deals.
- **Word Validation**: Visual indication when words are **valid** or **invalid**.

---

## Learning Features

### Hebrew Language Elements
- **Complete Alphabet**: All **Hebrew letters**, including final forms.
- **Transliterations**: Each letter shows its **pronunciation in English**.
- **Word Translations**: Each valid word displays its **English meaning**.
- **Pronunciation Guides**: Learn how to pronounce each word.

### Learning Progression
- **Beginner**: Simple **2-3 letter words** _(Levels 1-3)_.
- **Intermediate**: Common **everyday words** _(Levels 4-6)_.
- **Advanced**: More **complex words and phrases** _(Levels 7+)_.

### Educational Design
- **Spaced Repetition**: Words appear multiple times across levels.
- **Context Learning**: Words are grouped by **themes and difficulty**.
- **Visual Association**: Connect **Hebrew letters** with their sounds and meanings.
- **Gamified Learning**: Learn through **play** rather than rote memorization.

---

## Customization

### Adding Custom Words
- Open `hebrew-words.js` in a **text editor**.
- Find the `hebrewDictionary` object.
- Add new words to the appropriate difficulty level.

### Adding Custom Enemy Images
- **Create image files** (PNG format recommended).
- Name them according to the enemy types:  
  - `goblin.png`, `orc.png`, etc.
- Place them in the `images/` directory.

---

## Troubleshooting

### Common Issues
| Problem | Solution |
|---------|----------|
| **Game doesn't start** | Make sure all files are in the **correct directory structure**. |
| **Letters not appearing** | Check if `hebrew-words.js` is **properly loaded**. |
| **Enemy images missing** | The game will generate **placeholder images automatically**. |
| **Words not recognized** | Verify the **spelling matches** exactly what's in the dictionary. |

### Browser Compatibility
- **Recommended Browsers**: Chrome, Firefox, Safari, Edge _(latest versions)_.
- **Mobile Support**: The game works on **mobile browsers** but is optimized for **desktop**.

---



---



---

## Contact

For **questions, suggestions, or bug reports**, please do so on the Issues section on this repo.


💻 **GitHub**: [My Github](https://github.com/shayatzvi)

Enjoy learning Hebrew with **Hebrew Spell Tower!** 🎮✨
