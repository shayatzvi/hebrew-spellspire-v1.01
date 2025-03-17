// Hebrew words dictionary with translations and pronunciations
const hebrewDictionary = {
    // Level 1: Basic 2-3 letter words and very common words
    beginner: [
        // Basic nouns
        { hebrew: "אב", english: "father", pronunciation: "av" },
        { hebrew: "אם", english: "mother", pronunciation: "em" },
        { hebrew: "בן", english: "son", pronunciation: "ben" },
        { hebrew: "בת", english: "daughter", pronunciation: "bat" },
        { hebrew: "יד", english: "hand", pronunciation: "yad" },
        { hebrew: "עין", english: "eye", pronunciation: "ayin" },
        { hebrew: "פה", english: "mouth", pronunciation: "peh" },
        { hebrew: "אף", english: "nose", pronunciation: "af" },
        { hebrew: "אוזן", english: "ear", pronunciation: "ozen" },
        { hebrew: "ראש", english: "head", pronunciation: "rosh" },
        { hebrew: "לב", english: "heart", pronunciation: "lev" },
        { hebrew: "דם", english: "blood", pronunciation: "dam" },
        
        // Animals
        { hebrew: "דג", english: "fish", pronunciation: "dag" },
        { hebrew: "כלב", english: "dog", pronunciation: "kelev" },
        { hebrew: "חתול", english: "cat", pronunciation: "khatul" },
        { hebrew: "ציפור", english: "bird", pronunciation: "tsipor" },
        
        // Basic objects
        { hebrew: "בית", english: "house", pronunciation: "bayit" },
        { hebrew: "דלת", english: "door", pronunciation: "delet" },
        { hebrew: "חלון", english: "window", pronunciation: "khalon" },
        { hebrew: "מים", english: "water", pronunciation: "mayim" },
        { hebrew: "אש", english: "fire", pronunciation: "esh" },
        { hebrew: "לחם", english: "bread", pronunciation: "lekhem" },
        { hebrew: "מלח", english: "salt", pronunciation: "melakh" },
        
        // Basic adjectives
        { hebrew: "טוב", english: "good", pronunciation: "tov" },
        { hebrew: "רע", english: "bad", pronunciation: "ra" },
        { hebrew: "גדול", english: "big", pronunciation: "gadol" },
        { hebrew: "קטן", english: "small", pronunciation: "katan" },
        { hebrew: "חם", english: "hot", pronunciation: "kham" },
        { hebrew: "קר", english: "cold", pronunciation: "kar" },
        
        // Basic verbs
        { hebrew: "בא", english: "come", pronunciation: "ba" },
        { hebrew: "הולך", english: "go", pronunciation: "holekh" },
        { hebrew: "רואה", english: "see", pronunciation: "ro'eh" },
        { hebrew: "שומע", english: "hear", pronunciation: "shome'a" },
        { hebrew: "אוכל", english: "eat", pronunciation: "okhel" },
        { hebrew: "שותה", english: "drink", pronunciation: "shoteh" },
        
        // Numbers
        { hebrew: "אחד", english: "one", pronunciation: "ekhad" },
        { hebrew: "שתיים", english: "two", pronunciation: "shtayim" },
        { hebrew: "שלוש", english: "three", pronunciation: "shalosh" },
        { hebrew: "ארבע", english: "four", pronunciation: "arba" },
        { hebrew: "חמש", english: "five", pronunciation: "khamesh" },
        
        // Common phrases
        { hebrew: "שלום", english: "hello/peace", pronunciation: "shalom" },
        { hebrew: "תודה", english: "thank you", pronunciation: "todah" },
        { hebrew: "כן", english: "yes", pronunciation: "ken" },
        { hebrew: "לא", english: "no", pronunciation: "lo" },
        { hebrew: "בבקשה", english: "please", pronunciation: "bevakasha" },
    ],
    
    // Level 2: Common everyday words
    intermediate: [
        // Family
        { hebrew: "אח", english: "brother", pronunciation: "akh" },
        { hebrew: "אחות", english: "sister", pronunciation: "akhot" },
        { hebrew: "סבא", english: "grandfather", pronunciation: "saba" },
        { hebrew: "סבתא", english: "grandmother", pronunciation: "savta" },
        { hebrew: "דוד", english: "uncle", pronunciation: "dod" },
        { hebrew: "דודה", english: "aunt", pronunciation: "dodah" },
        { hebrew: "משפחה", english: "family", pronunciation: "mishpakhah" },
        
        // Food
        { hebrew: "אוכל", english: "food", pronunciation: "okhel" },
        { hebrew: "ארוחה", english: "meal", pronunciation: "arukhah" },
        { hebrew: "בוקר", english: "morning", pronunciation: "boker" },
        { hebrew: "צהריים", english: "noon", pronunciation: "tsohorayim" },
        { hebrew: "ערב", english: "evening", pronunciation: "erev" },
        { hebrew: "פרי", english: "fruit", pronunciation: "pri" },
        { hebrew: "ירק", english: "vegetable", pronunciation: "yerek" },
        { hebrew: "בשר", english: "meat", pronunciation: "basar" },
        { hebrew: "עוף", english: "chicken", pronunciation: "of" },
        { hebrew: "ביצה", english: "egg", pronunciation: "beitsah" },
        { hebrew: "גבינה", english: "cheese", pronunciation: "gvinah" },
        { hebrew: "חלב", english: "milk", pronunciation: "khalav" },
        
        // Home items
        { hebrew: "שולחן", english: "table", pronunciation: "shulkhan" },
        { hebrew: "כיסא", english: "chair", pronunciation: "kiseh" },
        { hebrew: "מיטה", english: "bed", pronunciation: "mitah" },
        { hebrew: "ספה", english: "sofa", pronunciation: "safah" },
        { hebrew: "מקרר", english: "refrigerator", pronunciation: "mekarer" },
        { hebrew: "תנור", english: "oven", pronunciation: "tanur" },
        { hebrew: "טלוויזיה", english: "television", pronunciation: "televizyah" },
        
        // Clothing
        { hebrew: "בגד", english: "clothing", pronunciation: "beged" },
        { hebrew: "חולצה", english: "shirt", pronunciation: "khultsah" },
        { hebrew: "מכנסיים", english: "pants", pronunciation: "mikhnasayim" },
        { hebrew: "נעליים", english: "shoes", pronunciation: "na'alayim" },
        { hebrew: "גרביים", english: "socks", pronunciation: "garbayim" },
        { hebrew: "כובע", english: "hat", pronunciation: "kova" },
        
        // Places
        { hebrew: "עיר", english: "city", pronunciation: "ir" },
        { hebrew: "רחוב", english: "street", pronunciation: "rekhov" },
        { hebrew: "בית ספר", english: "school", pronunciation: "beit sefer" },
        { hebrew: "חנות", english: "store", pronunciation: "khanut" },
        { hebrew: "שוק", english: "market", pronunciation: "shuk" },
        { hebrew: "מסעדה", english: "restaurant", pronunciation: "mis'adah" },
        { hebrew: "בנק", english: "bank", pronunciation: "bank" },
        
        // Nature
        { hebrew: "שמש", english: "sun", pronunciation: "shemesh" },
        { hebrew: "ירח", english: "moon", pronunciation: "yareach" },
        { hebrew: "כוכב", english: "star", pronunciation: "kokhav" },
        { hebrew: "שמים", english: "sky", pronunciation: "shamayim" },
        { hebrew: "ארץ", english: "earth/land", pronunciation: "eretz" },
        { hebrew: "ים", english: "sea", pronunciation: "yam" },
        { hebrew: "הר", english: "mountain", pronunciation: "har" },
        { hebrew: "עץ", english: "tree", pronunciation: "ets" },
        { hebrew: "פרח", english: "flower", pronunciation: "perakh" },
        
        // Time
        { hebrew: "יום", english: "day", pronunciation: "yom" },
        { hebrew: "לילה", english: "night", pronunciation: "laylah" },
        { hebrew: "שבוע", english: "week", pronunciation: "shavu'a" },
        { hebrew: "חודש", english: "month", pronunciation: "khodesh" },
        { hebrew: "שנה", english: "year", pronunciation: "shanah" },
        { hebrew: "שעה", english: "hour", pronunciation: "sha'ah" },
        { hebrew: "דקה", english: "minute", pronunciation: "dakah" },
        
        // Common verbs
        { hebrew: "עושה", english: "do/make", pronunciation: "oseh" },
        { hebrew: "רוצה", english: "want", pronunciation: "rotseh" },
        { hebrew: "יכול", english: "can/able", pronunciation: "yakhol" },
        { hebrew: "צריך", english: "need", pronunciation: "tsarikh" },
        { hebrew: "אוהב", english: "love/like", pronunciation: "ohev" },
        { hebrew: "מדבר", english: "speak", pronunciation: "medaber" },
        { hebrew: "קורא", english: "read", pronunciation: "koreh" },
        { hebrew: "כותב", english: "write", pronunciation: "kotev" },
    ],
    
    // Level 3: More complex words and phrases
    advanced: [
        // Professions
        { hebrew: "מורה", english: "teacher", pronunciation: "moreh" },
        { hebrew: "רופא", english: "doctor", pronunciation: "rofeh" },
        { hebrew: "מהנדס", english: "engineer", pronunciation: "mehandess" },
        { hebrew: "עורך דין", english: "lawyer", pronunciation: "orekh din" },
        { hebrew: "שוטר", english: "police officer", pronunciation: "shoter" },
        { hebrew: "טייס", english: "pilot", pronunciation: "tayass" },
        { hebrew: "נהג", english: "driver", pronunciation: "nahag" },
        { hebrew: "מנהל", english: "manager", pronunciation: "menahel" },
        { hebrew: "סטודנט", english: "student", pronunciation: "student" },
        
        // Technology
        { hebrew: "מחשב", english: "computer", pronunciation: "makhshev" },
        { hebrew: "טלפון", english: "phone", pronunciation: "telefon" },
        { hebrew: "אינטרנט", english: "internet", pronunciation: "internet" },
        { hebrew: "אתר", english: "website", pronunciation: "atar" },
        { hebrew: "תוכנה", english: "software", pronunciation: "tokhnah" },
        { hebrew: "מסך", english: "screen", pronunciation: "masakh" },
        { hebrew: "מקלדת", english: "keyboard", pronunciation: "mikledet" },
        { hebrew: "עכבר", english: "mouse", pronunciation: "akhbar" },
        
        // Transportation
        { hebrew: "מכונית", english: "car", pronunciation: "mekhonit" },
        { hebrew: "אוטובוס", english: "bus", pronunciation: "otobus" },
        { hebrew: "רכבת", english: "train", pronunciation: "rakevet" },
        { hebrew: "מטוס", english: "airplane", pronunciation: "matos" },
        { hebrew: "אופניים", english: "bicycle", pronunciation: "ofanayim" },
        { hebrew: "תחנה", english: "station", pronunciation: "takhanah" },
        { hebrew: "נמל", english: "port", pronunciation: "namal" },
        { hebrew: "שדה תעופה", english: "airport", pronunciation: "sdeh te'ufah" },
        
        // Health
        { hebrew: "בריאות", english: "health", pronunciation: "bri'ut" },
        { hebrew: "חולה", english: "sick", pronunciation: "kholeh" },
        { hebrew: "בריא", english: "healthy", pronunciation: "bari" },
        { hebrew: "תרופה", english: "medicine", pronunciation: "trufah" },
        { hebrew: "בית חולים", english: "hospital", pronunciation: "beit kholim" },
        { hebrew: "רופא", english: "doctor", pronunciation: "rofeh" },
        { hebrew: "אחות", english: "nurse", pronunciation: "akhot" },
        { hebrew: "כאב", english: "pain", pronunciation: "ke'ev" },
        
        // Education
        { hebrew: "לימוד", english: "study", pronunciation: "limud" },
        { hebrew: "שיעור", english: "lesson", pronunciation: "shi'ur" },
        { hebrew: "מבחן", english: "test", pronunciation: "mivkhan" },
        { hebrew: "ספר", english: "book", pronunciation: "sefer" },
        { hebrew: "מחברת", english: "notebook", pronunciation: "makhberet" },
        { hebrew: "עט", english: "pen", pronunciation: "et" },
        { hebrew: "עיפרון", english: "pencil", pronunciation: "iparon" },
        { hebrew: "כיתה", english: "classroom", pronunciation: "kitah" },
        { hebrew: "אוניברסיטה", english: "university", pronunciation: "universita" },
        
        // Emotions
        { hebrew: "שמח", english: "happy", pronunciation: "sameakh" },
        { hebrew: "עצוב", english: "sad", pronunciation: "atsov" },
        { hebrew: "כועס", english: "angry", pronunciation: "ko'es" },
        { hebrew: "מפחד", english: "afraid", pronunciation: "mefakhed" },
        { hebrew: "מופתע", english: "surprised", pronunciation: "mufta" },
        { hebrew: "אהבה", english: "love", pronunciation: "ahavah" },
        { hebrew: "שנאה", english: "hate", pronunciation: "sin'ah" },
        { hebrew: "פחד", english: "fear", pronunciation: "pakhad" },
        
        // Abstract concepts
        { hebrew: "זמן", english: "time", pronunciation: "zman" },
        { hebrew: "מקום", english: "place", pronunciation: "makom" },
        { hebrew: "דרך", english: "way/path", pronunciation: "derekh" },
        { hebrew: "רעיון", english: "idea", pronunciation: "ra'ayon" },
        { hebrew: "אמת", english: "truth", pronunciation: "emet" },
        { hebrew: "שקר", english: "lie", pronunciation: "sheker" },
        { hebrew: "חיים", english: "life", pronunciation: "khayim" },
        { hebrew: "מוות", english: "death", pronunciation: "mavet" },
        { hebrew: "התחלה", english: "beginning", pronunciation: "hatkhalah" },
        { hebrew: "סוף", english: "end", pronunciation: "sof" },
        
        // Weather
        { hebrew: "גשם", english: "rain", pronunciation: "geshem" },
        { hebrew: "שלג", english: "snow", pronunciation: "sheleg" },
        { hebrew: "רוח", english: "wind", pronunciation: "ruakh" },
        { hebrew: "ענן", english: "cloud", pronunciation: "anan" },
        { hebrew: "סערה", english: "storm", pronunciation: "se'arah" },
        { hebrew: "ברק", english: "lightning", pronunciation: "barak" },
        { hebrew: "רעם", english: "thunder", pronunciation: "ra'am" },
        
        // Countries and nationalities
        { hebrew: "ישראל", english: "Israel", pronunciation: "yisra'el" },
        { hebrew: "ישראלי", english: "Israeli", pronunciation: "yisra'eli" },
        { hebrew: "אמריקה", english: "America", pronunciation: "amerikah" },
        { hebrew: "אמריקאי", english: "American", pronunciation: "amerikani" },
        { hebrew: "אנגליה", english: "England", pronunciation: "angliyah" },
        { hebrew: "אנגלי", english: "English (nationality)", pronunciation: "angli" },
        { hebrew: "צרפת", english: "France", pronunciation: "tsarfat" },
        { hebrew: "צרפתי", english: "French", pronunciation: "tsarfati" },
    ]
};

// Hebrew alphabet with transliterations for learning
const hebrewAlphabet = [
    { letter: "א", name: "Alef", sound: "silent/a" },
    { letter: "ב", name: "Bet", sound: "b/v" },
    { letter: "ג", name: "Gimel", sound: "g" },
    { letter: "ד", name: "Dalet", sound: "d" },
    { letter: "ה", name: "Hey", sound: "h" },
    { letter: "ו", name: "Vav", sound: "v/o/u" },
    { letter: "ז", name: "Zayin", sound: "z" },
    { letter: "ח", name: "Chet", sound: "ch" },
    { letter: "ט", name: "Tet", sound: "t" },
    { letter: "י", name: "Yod", sound: "y/i" },
    { letter: "כ", name: "Kaf", sound: "k" },
    { letter: "ך", name: "Final Kaf", sound: "k" },
    { letter: "ל", name: "Lamed", sound: "l" },
    { letter: "מ", name: "Mem", sound: "m" },
    { letter: "ם", name: "Final Mem", sound: "m" },
    { letter: "נ", name: "Nun", sound: "n" },
    { letter: "ן", name: "Final Nun", sound: "n" },
    { letter: "ס", name: "Samekh", sound: "s" },
    { letter: "ע", name: "Ayin", sound: "silent" },
    { letter: "פ", name: "Pe", sound: "p" },
    { letter: "ף", name: "Final Pe", sound: "f" },
    { letter: "צ", name: "Tsadi", sound: "ts" },
    { letter: "ץ", name: "Final Tsadi", sound: "ts" },
    { letter: "ק", name: "Qof", sound: "k" },
    { letter: "ר", name: "Resh", sound: "r" },
    { letter: "ש", name: "Shin/Sin", sound: "sh/s" },
    { letter: "ת", name: "Tav", sound: "t" }
];

// Common letter combinations for each level
const letterSets = {
    beginner: [
        ["א", "ב", "ג", "ד", "ה", "ו", "י", "ל", "מ", "נ", "ע", "פ", "ר", "ש", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ח", "י", "ל", "מ", "נ", "ע", "פ", "ק", "ת"]
    ],
    intermediate: [
        ["א", "ב", "ג", "ד", "ה", "ו", "י", "כ", "ל", "מ", "ם", "נ", "ס", "ע", "פ", "ר", "ש", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "י", "כ", "ל", "מ", "נ", "ן", "ס", "ע", "פ", "ש"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "צ", "ק", "ר", "ש", "ת"]
    ],
    advanced: [
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ק", "ר", "ש", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"]
    ]
};

// Days of the week
const daysOfWeek = [
    { hebrew: "יום ראשון", english: "Sunday", pronunciation: "yom rishon" },
    { hebrew: "יום שני", english: "Monday", pronunciation: "yom sheni" },
    { hebrew: "יום שלישי", english: "Tuesday", pronunciation: "yom shlishi" },
    { hebrew: "יום רביעי", english: "Wednesday", pronunciation: "yom revi'i" },
    { hebrew: "יום חמישי", english: "Thursday", pronunciation: "yom khamishi" },
    { hebrew: "יום שישי", english: "Friday", pronunciation: "yom shishi" },
    { hebrew: "יום שבת", english: "Saturday", pronunciation: "yom shabbat" }
];

// Months of the year
const monthsOfYear = [
    { hebrew: "ינואר", english: "January", pronunciation: "yanuar" },
    { hebrew: "פברואר", english: "February", pronunciation: "februar" },
    { hebrew: "מרץ", english: "March", pronunciation: "marts" },
    { hebrew: "אפריל", english: "April", pronunciation: "april" },
    { hebrew: "מאי", english: "May", pronunciation: "mai" },
    { hebrew: "יוני", english: "June", pronunciation: "yuni" },
    { hebrew: "יולי", english: "July", pronunciation: "yuli" },
    { hebrew: "אוגוסט", english: "August", pronunciation: "august" },
    { hebrew: "ספטמבר", english: "September", pronunciation: "september" },
    { hebrew: "אוקטובר", english: "October", pronunciation: "october" },
    { hebrew: "נובמבר", english: "November", pronunciation: "november" },
    { hebrew: "דצמבר", english: "December", pronunciation: "detsember" }
];

// Common phrases for travelers
const commonPhrases = [
    { hebrew: "איפה השירותים?", english: "Where is the bathroom?", pronunciation: "eifoh ha-sherutim?" },
    { hebrew: "כמה זה עולה?", english: "How much does it cost?", pronunciation: "kamah zeh oleh?" },
    { hebrew: "אני לא מבין", english: "I don't understand", pronunciation: "ani lo mevin" },
    { hebrew: "אני צריך עזרה", english: "I need help", pronunciation: "ani tsarikh ezrah" },
    { hebrew: "איפה אני יכול למצוא...?", english: "Where can I find...?", pronunciation: "eifoh ani yakhol limtso...?" },
    { hebrew: "דבר לאט, בבקשה", english: "Speak slowly, please", pronunciation: "daber le'at, bevakasha" },
    { hebrew: "אתה מדבר אנגלית?", english: "Do you speak English?", pronunciation: "atah medaber anglit?" },
    { hebrew: "נעים מאוד", english: "Nice to meet you", pronunciation: "na'im me'od" },
    { hebrew: "להתראות", english: "Goodbye", pronunciation: "lehitra'ot" },
    { hebrew: "בתיאבון", english: "Bon appetit", pronunciation: "bete'avon" }
]; 