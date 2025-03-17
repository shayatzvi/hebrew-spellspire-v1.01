// Hebrew words dictionary with Passover-themed words, translations and pronunciations
const hebrewDictionary = {
    // Level 1: Basic Passover words
    beginner: [
        { hebrew: "פסח", english: "Passover", pronunciation: "pesach" },
        { hebrew: "מצה", english: "matzah", pronunciation: "matzah" },
        { hebrew: "חמץ", english: "leavened food", pronunciation: "chametz" },
        { hebrew: "סדר", english: "order/seder", pronunciation: "seder" },
        { hebrew: "הגדה", english: "Haggadah", pronunciation: "haggadah" },
        { hebrew: "כוס", english: "cup", pronunciation: "kos" },
        { hebrew: "יין", english: "wine", pronunciation: "yayin" },
        { hebrew: "מרור", english: "bitter herbs", pronunciation: "maror" },
        { hebrew: "חרוסת", english: "charoset", pronunciation: "charoset" },
        { hebrew: "כרפס", english: "vegetable/karpas", pronunciation: "karpas" },
        { hebrew: "ביצה", english: "egg", pronunciation: "beitzah" },
        { hebrew: "זרוע", english: "shankbone", pronunciation: "z'roa" },
        { hebrew: "אפיקומן", english: "afikoman", pronunciation: "afikoman" },
        { hebrew: "מצרים", english: "Egypt", pronunciation: "mitzrayim" },
        { hebrew: "משה", english: "Moses", pronunciation: "moshe" },
    ],
    
    // Level 2: Intermediate Passover words
    intermediate: [
        { hebrew: "חירות", english: "freedom", pronunciation: "cherut" },
        { hebrew: "עבדות", english: "slavery", pronunciation: "avdut" },
        { hebrew: "גאולה", english: "redemption", pronunciation: "ge'ulah" },
        { hebrew: "מכות", english: "plagues", pronunciation: "makot" },
        { hebrew: "דם", english: "blood", pronunciation: "dam" },
        { hebrew: "צפרדע", english: "frog", pronunciation: "tzfardea" },
        { hebrew: "כינים", english: "lice", pronunciation: "kinim" },
        { hebrew: "ערוב", english: "wild beasts", pronunciation: "arov" },
        { hebrew: "דבר", english: "pestilence", pronunciation: "dever" },
        { hebrew: "שחין", english: "boils", pronunciation: "sh'chin" },
        { hebrew: "ברד", english: "hail", pronunciation: "barad" },
        { hebrew: "ארבה", english: "locusts", pronunciation: "arbeh" },
        { hebrew: "חושך", english: "darkness", pronunciation: "choshech" },
        { hebrew: "בכורות", english: "firstborn", pronunciation: "bechorot" },
        { hebrew: "ים סוף", english: "Red Sea", pronunciation: "yam suf" },
        { hebrew: "מדבר", english: "desert", pronunciation: "midbar" },
        { hebrew: "הר סיני", english: "Mount Sinai", pronunciation: "har sinai" },
    ],
    
    // Level 3: Advanced Passover words and phrases
    advanced: [
        { hebrew: "והגדת לבנך", english: "And you shall tell your son", pronunciation: "v'higadta l'vincha" },
        { hebrew: "עבדים היינו", english: "We were slaves", pronunciation: "avadim hayinu" },
        { hebrew: "מה נשתנה", english: "Why is this night different", pronunciation: "mah nishtanah" },
        { hebrew: "בכל דור ודור", english: "In every generation", pronunciation: "b'chol dor vador" },
        { hebrew: "לשנה הבאה", english: "Next year", pronunciation: "l'shanah haba'ah" },
        { hebrew: "בצאת ישראל", english: "When Israel went out", pronunciation: "b'tzet yisrael" },
        { hebrew: "דיינו", english: "It would have been enough", pronunciation: "dayenu" },
        { hebrew: "חד גדיא", english: "One little goat", pronunciation: "chad gadya" },
        { hebrew: "אחד מי יודע", english: "Who knows one", pronunciation: "echad mi yodea" },
        { hebrew: "שפוך חמתך", english: "Pour out Your wrath", pronunciation: "sh'foch chamatcha" },
        { hebrew: "כורך", english: "Sandwich (Hillel's)", pronunciation: "korech" },
        { hebrew: "צפון", english: "Hidden (afikoman)", pronunciation: "tzafun" },
        { hebrew: "ברך", english: "Blessing after meal", pronunciation: "barech" },
        { hebrew: "הלל", english: "Praise", pronunciation: "hallel" },
        { hebrew: "נרצה", english: "Accepted", pronunciation: "nirtzah" },
        { hebrew: "ארבע כוסות", english: "Four cups", pronunciation: "arba kosot" },
        { hebrew: "חמש קושיות", english: "Four questions", pronunciation: "arba kushiyot" },
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
        ["א", "ב", "ג", "ד", "ה", "ו", "י", "ל", "מ", "נ", "ע", "פ", "ר", "ש", "ת", "ח", "ס", "צ", "ק"],
        ["א", "ב", "ג", "ד", "ה", "ו", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ת", "ח", "ץ", "ר", "ש"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ח", "י", "ל", "מ", "נ", "ע", "פ", "ק", "ת", "ס", "ר", "ש", "צ"]
    ],
    intermediate: [
        ["א", "ב", "ג", "ד", "ה", "ו", "י", "כ", "ל", "מ", "ם", "נ", "ס", "ע", "פ", "ר", "ש", "ת", "ח", "צ", "ק"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "י", "כ", "ל", "מ", "נ", "ן", "ס", "ע", "פ", "ש", "ת", "צ", "ר"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "צ", "ק", "ר", "ש", "ת", "ף"]
    ],
    advanced: [
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ק", "ר", "ש", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"],
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"]
    ]
};