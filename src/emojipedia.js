const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning: "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g., at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning: "Two hands pressed together. Represents a prayer, saying thank you, or a high five."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor Laughing",
    meaning: "A smiley face, rolling on the floor, laughing uncontrollably. Stands for 'rofl'."
  },
  {
    id: 4,
    emoji: "😂",
    name: "Face With Tears of Joy",
    meaning: "Laughing so hard that tears are streaming down your face. One of the most popular emojis."
  },
  {
    id: 5,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning: "Shows a smiling face surrounded by hearts. Expresses affection, love, and happiness."
  },
  {
    id: 6,
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning: "A face with heart-shaped eyes, expressing extreme admiration or love."
  },
  {
    id: 7,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning: "Cool, relaxed, or confident. Often used to show style or swagger."
  },
  {
    id: 8,
    emoji: "🤩",
    name: "Star-Struck",
    meaning: "A face with stars in its eyes, representing amazement or admiration."
  },
  {
    id: 9,
    emoji: "🥳",
    name: "Partying Face",
    meaning: "Celebrating something with a party hat and a noisemaker. Perfect for birthdays or special occasions."
  },
  {
    id: 10,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning: "Playful and teasing. Indicates joking or a cheeky remark."
  },
  {
    id: 11,
    emoji: "😢",
    name: "Crying Face",
    meaning: "Shows sadness or disappointment. A tear drops down the face."
  },
  {
    id: 12,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning: "A face crying loudly and uncontrollably. Represents grief, sadness, or being overwhelmed."
  },
  {
    id: 13,
    emoji: "😤",
    name: "Face with Steam From Nose",
    meaning: "Represents frustration, anger, or determination. Inspired by anime and manga."
  },
  {
    id: 14,
    emoji: "🤔",
    name: "Thinking Face",
    meaning: "A face with a hand on its chin, thinking or pondering about something."
  },
  {
    id: 15,
    emoji: "🙄",
    name: "Face with Rolling Eyes",
    meaning: "Used to convey annoyance, sarcasm, or skepticism."
  },
  {
    id: 16,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning: "Represents innocence or goodness. Often used ironically."
  },
  {
    id: 17,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning: "A face wearing a medical mask to indicate sickness, health concerns, or cleanliness."
  },
  {
    id: 18,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning: "A sick face with a thermometer. Represents being ill or having a fever."
  },
  {
    id: 19,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning: "A face with a bandage, indicating injury or pain."
  },
  {
    id: 20,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning: "Represents greed, wealth, or making money."
  },
  {
    id: 21,
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning: "A face with a cowboy hat, showing friendliness or adventure."
  },
  {
    id: 22,
    emoji: "🥴",
    name: "Woozy Face",
    meaning: "Represents dizziness, drunkenness, or a confused state."
  },
  {
    id: 23,
    emoji: "😵",
    name: "Dizzy Face",
    meaning: "A face with spirals instead of eyes. Represents confusion or dizziness."
  },
  {
    id: 24,
    emoji: "🤯",
    name: "Exploding Head",
    meaning: "A face with a head explosion, symbolizing shock, disbelief, or amazement."
  },
  {
    id: 25,
    emoji: "🥶",
    name: "Cold Face",
    meaning: "A frozen face, representing feeling very cold or frozen in shock."
  },
  {
    id: 26,
    emoji: "🥵",
    name: "Hot Face",
    meaning: "A sweating, red face, representing feeling extremely hot or embarrassed."
  },
  {
    id: 27,
    emoji: "😈",
    name: "Smiling Face with Horns",
    meaning: "A devilish grin with horns, indicating mischievousness or evil."
  },
  {
    id: 28,
    emoji: "👻",
    name: "Ghost",
    meaning: "A cute, smiling ghost. Often used for Halloween or humor."
  },
  {
    id: 29,
    emoji: "💩",
    name: "Pile of Poo",
    meaning: "A smiling pile of poo. Used for humor, jokes, or to say something stinks."
  },
  {
    id: 30,
    emoji: "🤖",
    name: "Robot Face",
    meaning: "A robot head. Represents technology, robots, or artificial intelligence."
  },
  {
    id: 31,
    emoji: "👽",
    name: "Alien",
    meaning: "A green alien face, representing extraterrestrials or something unusual."
  },
  {
    id: 32,
    emoji: "🙉",
    name: "Hear-No-Evil Monkey",
    meaning: "A monkey covering its ears, part of the 'see no evil, hear no evil, speak no evil' trio."
  },
  {
    id: 33,
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    meaning: "A monkey covering its eyes, representing 'I didn’t see that!' or embarrassment."
  },
  {
    id: 34,
    emoji: "🙊",
    name: "Speak-No-Evil Monkey",
    meaning: "A monkey covering its mouth, representing silence or a secret."
  },
  {
    id: 35,
    emoji: "💀",
    name: "Skull",
    meaning: "Represents death, danger, or something spooky. Often used humorously as 'I'm dead!'"
  },
  {
    id: 36,
    emoji: "🦄",
    name: "Unicorn Face",
    meaning: "A magical unicorn face. Represents fantasy, magic, and uniqueness."
  },
  {
    id: 37,
    emoji: "🌈",
    name: "Rainbow",
    meaning: "A colorful rainbow, representing happiness, hope, and positivity."
  },
  {
    id: 38,
    emoji: "🔥",
    name: "Fire",
    meaning: "Represents something awesome, exciting, or 'on fire'."
  },
  {
    id: 39,
    emoji: "🎉",
    name: "Party Popper",
    meaning: "A party popper bursting with confetti, representing celebration."
  },
  {
    id: 40,
    emoji: "❤️",
    name: "Red Heart",
    meaning: "Classic red heart emoji, representing love and affection."
  },
  {
    id: 41,
    emoji: "🧡",
    name: "Orange Heart",
    meaning: "Represents friendship, care, and warmth."
  },
  {
    id: 42,
    emoji: "💛",
    name: "Yellow Heart",
    meaning: "Symbolizes happiness, positivity, and friendship."
  },
  {
    id: 43,
    emoji: "💚",
    name: "Green Heart",
    meaning: "Represents growth, nature, or a platonic love for someone."
  },
  {
    id: 44,
    emoji: "💙",
    name: "Blue Heart",
    meaning: "A blue heart represents trust, loyalty, and harmony."
  },
  {
    id: 45,
    emoji: "💜",
    name: "Purple Heart",
    meaning: "Represents compassion, love, or admiration."
  },
  {
    id: 46,
    emoji: "🖤",
    name: "Black Heart",
    meaning: "Symbolizes sorrow, dark humor, or strong emotions."
  },
  {
    id: 47,
    emoji: "🤎",
    name: "Brown Heart",
    meaning: "Represents warmth, stability, and a connection to the earth."
  },
  {
    id: 48,
    emoji: "💔",
    name: "Broken Heart",
    meaning: "Represents sadness, grief, or a broken relationship."
  },
  {
    id: 49,
    emoji: "❤️‍🔥",
    name: "Heart on Fire",
    meaning: "Symbolizes intense passion, love, or infatuation."
  },
  {
    id: 50,
    emoji: "❤️‍🩹",
    name: "Mending Heart",
    meaning: "Represents healing, recovery, or trying to mend a broken heart."
  },
  {
    id: 51,
    emoji: "💋",
    name: "Kiss Mark",
    meaning: "A lipstick kiss, often used to show affection or flirtation."
  },
  {
    id: 52,
    emoji: "💘",
    name: "Heart with Arrow",
    meaning: "Symbolizes love struck by Cupid’s arrow."
  },
  {
    id: 53,
    emoji: "💝",
    name: "Heart with Ribbon",
    meaning: "Represents a gift of love or care."
  },
  {
    id: 54,
    emoji: "💖",
    name: "Sparkling Heart",
    meaning: "A heart with sparkles, symbolizing pure or special love."
  },
  {
    id: 55,
    emoji: "💗",
    name: "Growing Heart",
    meaning: "Represents a heart growing with affection or excitement."
  },
  {
    id: 56,
    emoji: "💓",
    name: "Beating Heart",
    meaning: "Represents a heart beating with love, excitement, or happiness."
  },
  {
    id: 57,
    emoji: "💞",
    name: "Revolving Hearts",
    meaning: "Two hearts revolving around each other, representing mutual love."
  },
  {
    id: 58,
    emoji: "💕",
    name: "Two Hearts",
    meaning: "Two pink hearts, symbolizing love, affection, or romantic connection."
  },
  {
    id: 59,
    emoji: "❣️",
    name: "Heart Exclamation",
    meaning: "A decorative heart-shaped exclamation, representing excitement or love."
  },
  {
    id: 60,
    emoji: "💤",
    name: "Zzz",
    meaning: "Represents sleeping, being tired, or boredom."
  },
  {
    id: 61,
    emoji: "💢",
    name: "Anger Symbol",
    meaning: "A symbol of frustration, anger, or irritation, often seen in manga."
  },
  {
    id: 62,
    emoji: "💨",
    name: "Dashing Away",
    meaning: "Represents speed, movement, or someone running away quickly."
  },
  {
    id: 63,
    emoji: "🕳️",
    name: "Hole",
    meaning: "A dark hole, representing something missing or being hidden."
  },
  {
    id: 64,
    emoji: "💫",
    name: "Dizzy Symbol",
    meaning: "Represents dizziness, stars circling one’s head, or being stunned."
  },
  {
    id: 65,
    emoji: "💬",
    name: "Speech Balloon",
    meaning: "Represents conversation, speech, or dialogue."
  },
  {
    id: 66,
    emoji: "🗨️",
    name: "Left Speech Bubble",
    meaning: "Used for dialogues, messaging, or comments in conversations."
  },
  {
    id: 67,
    emoji: "🗯️",
    name: "Anger Bubble",
    meaning: "A speech bubble representing yelling or angry speech."
  },
  {
    id: 68,
    emoji: "💭",
    name: "Thought Balloon",
    meaning: "Represents thinking, daydreaming, or internal thoughts."
  },
  {
    id: 69,
    emoji: "🫧",
    name: "Bubbles",
    meaning: "Represents soap bubbles, playfulness, or cleanliness."
  },
  {
    id: 70,
    emoji: "❤️‍💻",
    name: "Techie Heart",
    meaning: "A playful emoji showing love for technology."
  },
  {
    id: 71,
    emoji: "💍",
    name: "Ring",
    meaning: "Represents marriage, engagement, or a promise."
  },
  {
    id: 72,
    emoji: "🧧",
    name: "Red Envelope",
    meaning: "Represents Chinese New Year and monetary gifts."
  },
  {
    id: 73,
    emoji: "🎁",
    name: "Wrapped Gift",
    meaning: "A gift box, often used for birthdays or celebrations."
  },
  {
    id: 74,
    emoji: "🎈",
    name: "Balloon",
    meaning: "Symbolizes celebration, parties, and happiness."
  },
  {
    id: 75,
    emoji: "🎉",
    name: "Party Popper",
    meaning: "Used for celebrations and happy occasions."
  },
  {
    id: 76,
    emoji: "🎂",
    name: "Birthday Cake",
    meaning: "A cake with candles to celebrate someone’s birthday."
  },
  {
    id: 77,
    emoji: "🪅",
    name: "Piñata",
    meaning: "A colorful piñata representing parties and fun."
  },
  {
    id: 78,
    emoji: "🍰",
    name: "Shortcake",
    meaning: "A slice of cake with cream and strawberries, representing desserts."
  },
  {
    id: 79,
    emoji: "🍾",
    name: "Bottle with Popping Cork",
    meaning: "A champagne bottle popping open, representing celebrations."
  },
  {
    id: 80,
    emoji: "🥂",
    name: "Clinking Glasses",
    meaning: "Represents toasting during celebrations and festive occasions."
  },
  {
    id: 81,
    emoji: "🍻",
    name: "Clinking Beer Mugs",
    meaning: "Two beer mugs clinking together, symbolizing friendship and good times."
  },
  {
    id: 82,
    emoji: "🍷",
    name: "Wine Glass",
    meaning: "Represents wine, sophistication, or relaxing with a drink."
  },
  {
    id: 83,
    emoji: "🥤",
    name: "Cup with Straw",
    meaning: "Represents a soft drink, milkshake, or beverage."
  },
  {
    id: 84,
    emoji: "🍿",
    name: "Popcorn",
    meaning: "Represents movies, snacks, or watching something entertaining."
  },
  {
    id: 85,
    emoji: "🧃",
    name: "Juice Box",
    meaning: "Represents a healthy or casual drink."
  },
  {
    id: 86,
    emoji: "🍪",
    name: "Cookie",
    meaning: "Represents sweetness, cookies, or snacks."
  },
  {
    id: 87,
    emoji: "🍩",
    name: "Doughnut",
    meaning: "A sweet donut, representing indulgence or snacks."
  },
  {
    id: 88,
    emoji: "🎶",
    name: "Musical Notes",
    meaning: "Represents music, singing, or dancing."
  },
  {
    id: 89,
    emoji: "🎵",
    name: "Musical Note",
    meaning: "A single note, symbolizing music or sound."
  },
  {
    id: 90,
    emoji: "🥁",
    name: "Drum",
    meaning: "Represents drumming, rhythm, or music."
  },
  {
    id: 91,
    emoji: "🎷",
    name: "Saxophone",
    meaning: "Represents jazz music or playing the saxophone."
  },
  {
    id: 92,
    emoji: "🎸",
    name: "Guitar",
    meaning: "Represents rock music, concerts, or playing the guitar."
  },
  {
    id: 93,
    emoji: "🎻",
    name: "Violin",
    meaning: "Represents classical music, elegance, or playing the violin."
  },
  {
    id: 94,
    emoji: "🎤",
    name: "Microphone",
    meaning: "Represents singing, karaoke, or speaking."
  },
  {
    id: 95,
    emoji: "🏆",
    name: "Trophy",
    meaning: "Represents achievement, victory, or success."
  },
  {
    id: 96,
    emoji: "🎮",
    name: "Video Game",
    meaning: "Represents gaming, fun, or playing video games."
  },
  {
    id: 97,
    emoji: "🕹️",
    name: "Joystick",
    meaning: "Represents arcade games, gaming, or nostalgia."
  },
  {
    id: 98,
    emoji: "⚽",
    name: "Soccer Ball",
    meaning: "Represents soccer, sports, or games."
  },
  {
    id: 99,
    emoji: "🏀",
    name: "Basketball",
    meaning: "Represents basketball, sports, or competition."
  },
  {
    id: 100,
    emoji: "🎱",
    name: "Billiards",
    meaning: "Represents pool, billiards, or luck."
  }
];

export default emojipedia;