let urlString = window.location
//console.log(urlString)
let urlObject = new URL(urlString)




console.log(urlObject.searchParams.get("hero"))


// html tags
const characterName = document.querySelector("#characterName")
const difficultyLevel = document.querySelector("#difficultyLevel")
const title = document.querySelector("#title")
const desc = document.querySelector("#desc")
const twoTitle = document.querySelector("#secTitle")
const image = document.querySelector("#image")
const slideOne = document.querySelector("#slideOne")
const slideTwo = document.querySelector("#slideTwo")
const slideThree = document.querySelector("#slideThree")
const slideFour = document.querySelector("#slideFour")

let characterInfo = {
    "Sol-Badguy":{name: "SOL BADGUY", description: "A blunt and short-tempered man. He only speaks when required, and uses as few words as he can get away with. He's not very good at explaining things, so he prefers to express himself with his aggressive behavior and attitude. While most see him as selfish and violent, those closest to him accept him for who he is.", difficulty: 4, cTitle: "An aggressive striker who beats the the opponent down with style.",sectitle:""},

    "Ky-Kiske": {name: "KY KISKE", cTitle: "A classic all-rounder with excellent moves.", description: "A serious man who dedicates himself completely to his work, the people, and his morals. His love for justice and determination to help those less fortunate is reflected in all aspects of his life. On the other hand, this also means he can show rather extreme dislike for anything that disrupts the peace or breaks the rules. After taking his position as King, this enthusiasm shifted into a broader perspective, allowing him to see the world from a variety of viewpoints. This isn't to say, however, that he can't still come off as naïve and emotional at times.", difficulty: 5,sectitle:""},
    
    "May": {name: "MAY", cTitle: "A powerful attacker who specializes in charging at the opponent.", difficulty: 4, description: "A spunky girl who doesn't sweat the small stuff. She believes in acting before thinking too deeply. Her friends often get dragged along with her impulsive behavior. Despite this, May's positive attitude is contagious to those around her, even if they sometimes find themselves a tad exhausted.", sectitle:"", img: "img/characters/fullSizeCharacters/full-may.webp" },
    
    "Axl-Low": {name: "AXL LOW", cTitle:"A long range attacker who can take opponents down at a distance.",difficulty: 3, description: `A young man from the 20th century with the ability to manipulate time. A typical optimist who doesn't take things too seriously and just goes with the flow. He is compassionate to a fault and could never ignore somebody in trouble. He despises the very idea of "death" and would never resort to taking a life, no matter the situation.`, sectitle: ""},

    "Chipp-Zanuff": {name: "CHIPP ZANUFF", cTitle:"An incredibly fast ninja who launches attacks in the blink of an eye.", difficulty: 3, description: "President of the Eastern Chipp Kingdom. He's hot-blooded, and thinking deeply is far from his specialty. He's quick to lose his temper, and his words often come off as rude. Now that he's trying to get into politics, he's learned basic manners and social skills. He acknowledges that he has some rough edges, but accepts those parts of himself.", sectitle:"", img: "img/characters/fullSizeCharacters/full-chipp.webp"},

    "Potemkin": {name:"POTEMKIN", cTitle: "A giant walking fortress who can turn the match around with his powerful grabs.", difficulty: 3, description: "He is a soldier from the Independent Airborne State of Zepp. He's a proud man with a loyal heart. His stature makes him come off as intimidating, but he's a gentle man who loves nature. He values duty above all, and while he can tolerate his own pain, he cannot bear to see others hurt. He faces adversity head-on. He refuses to be used as a tool to hurt others for evil.",sectitle: ""},

    "Faust": {name:"FAUST", cTitle: "A bizarre underground doctor who misleads the opponent with tricky moves.", difficulty: 2, description: "An underground doctor, his past and identity are shrouded in mystery.  One moment, he'll blurt out something seemingly random, only to offer a philosophical argument for the future of humanity the next. He once suffered a mental breakdown due to a traumatic experience. Even now, he becomes unstable when something reminds him of that time. At heart, however, he's a caring and kind person with common sense.", sectitle:"", img: "img/characters/fullSizeCharacters/full-faust.webp"},

    "Millia-Rage": {name: "MILLIA RAGE", cTitle: "A wielder of the forbidden art that turns her hair into a weapon---blink and you'll miss her swift movements.", description: "She is silent and cold. However, since leaving the Guild, she no longer works only for profit as she once did. Now that she lives among ordinary people, Millia's come to feel a wider range of emotions. She may not show it in her words or actions, but she's found herself able to sympathize with others. When faced with an uncertain situation, she can even look like a normal girl her age sometimes.", difficulty:2, sectitle:""},

    "Zato-1": {name: "ZATO=1", cTitle: "A technical shadow wielder who can pressure his opponent with simultaneous attacks.", difficulty: 1, description: "The former leader of the Assassin's Guild, now revived after once experiencing death. Before his resurrection, he was a calm and thoughtful person. However, after all he went through, he ended up unable to feel an emotional response to anything. He no longer finds significance in anything in his life, be it good or bad, nor can he feel joy or anger. The closest he gets to feeling emotion would be his feelings for Millia.", sectitle: ""},

    "Ramlethal-Valentine": {name: "RAMLETHAL VALENTINE", cTitle: "A Brigadier who controls the mid-range with her two swords.", difficulty: "3", description:`She is a "Valentine," a life form created in the image of humanity. In accordance with the orders from her mother implanted in her memories, she declared war against humanity. However, through her interactions with Sol and everyone, she came to know emotion, and eventually became an ally to mankind.`, sectitle:""},

    "Leo-Whitefang": {name:"LEO WHITEFANG", difficulty: 3, cTitle: "An all-rounder who wields twin swords, turning his back to his opponent as he fights.", sectitle:"", description: "The Second King of the United Kingdoms of Illyria. He may come off as wild and arrogant, but he's a surprisingly cautious person. He hates losing and holds himself in high esteem. He spares no effort when solving problems. He's made his own personal dictionary, and makes a hobby of defining existing words with actual people and events."},

    "Nagoriyuki": {name:"NAGORIYUKI", difficulty: 2, cTitle: "A noble vampire samurai whose vampiric blade delivers devastating blows.", sectitle: "", description: "A large vampire samurai. His supernatural vampire abilities complement his substantial frame and outstanding fighting skills"},

    "Giovanna": {name: "GIOVANNA", difficulty: 4, cTitle: "Incredible rush-down that can break down any defense. A super-powered special forces officer for the President.", sectitle: "", description: "She’s an officer in the special operations unit that protects the President of the United States. She’s careful with her words, but still manages to come off as rude and irreverent due to her attitude. Deep down, though, she means well. She’s especially friendly with children and animals. During battle, she allows her wolf spirit companion “Rei” to possess her and amazes her opponent with inhuman speed."},

    "Anji-Mito": {name: "ANJI MITO", difficulty: 3, cTitle: "who dodges all with his dance.", sectitle: "An elegant martial artist", description:"He's one of the few surviving Japanese people. He can be hot-blooded, acting on his intuition rather than reason. It's easy to recognize his actions as direct and lacking foresight, but he isn't an optimist---he simply isn't very careful. Although he doesn't go out of his way to preach his sense of justice to others, he openly shows his distaste for anything he considers warped or unfair. It may seem at times as if he's making fun of others, but he means it amicably."},

    "I-no": {name: "I-NO", difficulty: 2, cTitle:"with a wild offense using her hover dash", sectitle:"A hard rock witch", description: `Her tendency to approach someone as if talking to an old friend can make I-No seem personable at first glance. She doesn't shy away from using her feminine charms to deceive men, despite not actually having it in her to work together with anyone. She sees all others as lesser beings worthy of ridicule, even "That Man."
    When faced with something or someone she finds irritating or alarming, she reveals her violent temper.`},

    "Goldlewis-Dickinson": {name: "GOLDLEWIS DICKINSON", difficulty: 3, description: "Goldlewis is the first-ever Secretary of Defense in the history of the United States who is also an active-duty military officer. With his excellent judgment and ability to lead based on his extensive combat experience, he has garnered immense popularity and earned the trust of those around him. His personal combat prowess is said to be equivalent to the entire White House Security Force, and it is no exaggeration to say that the security and authority of the United States are established due to his presence, making him the mainstay of the nation.", cTitle: "Unparalleled Brute Strength", sectitle: "THE SECRETARY OF ABSOLUTE DEFENSE", img: "img/characters/fullSizeCharacters/full-goldlewis.webp"},

    "Jack-o": {name:"Jack-O'", difficulty: 2, cTitle: "HYPER ENERGETIC MARSHAL FIGHTER", sectitle: `Dominates The Battle With An Assembly Of Servants`, description: `Jack-O' is an artificial life-form created by Asuka R. Kreutz to prevent the revival of Justice, the herald of destruction. As Justice was created using Aria, Sol's love interest in the past, as a base, Jack-O' managed to prevent Justice's awakening by fusing with Aria's soul within Justice. It was at this time Aria's soul was fully restored within Jack-O'.
    However, Aria's consciousness has yet to fully manifest, leaving jack-O' in an unstable state where her personality remains unchanged. Although she tries her best to be cool and collected in her demeanor, she tends to act child-like when her emotion gets the best of her.
    For that reason, she wears a special mask to keep her composure during battle.`, img: "img/characters/fullSizeCharacters/full-jacko.webp"},

    "Happy-Chaos": {name: "HAPPY CHAOS", difficulty: 2, cTitle: "Gunslinging Broken Messiah", sectitle: "Restorer of Humanity", description: `He is the Original, who first discovered the Backyard and taught humanity about magic.
    After absorbing half of I-No, he suddenly changed drastically.
    He now carries within himself all of humanity's hope towards living. He feels that his existence will be forgiven by a greater will when humankind loses their humanity.
    The concepts of good and evil are of equal value to him.
    He may cause major incidents, but he could also end up on the side of justice.`},

    "Baiken": {name: "BAIKEN", difficulty: 4, cTitle: "THE UNFALTERING AWAKENED SAMURAI", sectitle: "Wielding her opponent's strength as her own", description: `A swordswoman of Japanese descent.
    She gets heated easily and is quick to start a fight. She's the type to jump to action before thinking things through.
    She sticks to her principles, and doesn't back down from a disagreement until it's settled.
    However, she can still acknowledge when the other party is in the right.
    Her right arm has an attached concealed weapon as well as an artificial arm modified for offense.
    She has sworn to take revenge on That Man after suffering a serious wound and losing her friends and family in the Crusades.`, img: "img/characters/fullSizeCharacters/full-baiken.webp" },

    "Testament": {name: "TESTAMENT", difficulty: 4, cTitle: "Elegant Grim Reaper", sectitle: "Crimson scythe swaying in an enchanting dance", description: `Testament was once human, before being surgically modified into a Gear.
    Under the control of the Conclave, they worked to revive Justice.
    After the events of the Second Holy Order Selection Tournament, however, they regained their sense of self.
    Feeling guilty, they hid in the Forest of Demons, before resolving to protect the half-Gear Dizzy from the humans who pursued her.
    Although this began as a way to atone for their sins, it ended up bringing back their human sensibility.
    They now live with the elderly couple who once took care of Dizzy.
    This new life has brought them peace of mind, and they now enjoy their share of happiness.`},

    "Bridget": {name: "BRIDGET", difficulty: 4, cTitle: "Free-form Tricky Spinner", sectitle: "Flying Unrestrained With Yo-Yo Mastery", description: `Bridget was born one of two twin sons of a multi-billionaire couple and was given only the best training and tutoring as a child. However, Bridget's upbringing was what one would expect for a daughter of a high-society family instead of a son.
     Unable to swallow either of the options, the twins' parents raised Bridget as a daughter.
    While Bridget strove to put on a happy front, these efforts only seemed to cause Bridget's parents more pain. This led to the village superstition fading, but it also left Bridget without a goal.
    Bridget now works as a bounty hunter while searching for a purpose.`, img: "img/characters/fullSizeCharacters/full-bridget.webp","slideImgs": {slidevid: "img/characters/sliderkarakter/bridget/bridget.mp4", slideimg1:"img/characters/sliderkarakter/bridget/bridget1.jpg", slideimg2:"img/characters/sliderkarakter/bridget/bridget2.jpg", slideimg3: "img/characters/sliderkarakter/bridget/bridget3.jpg"}},

    "Sin-Kiske": {name: "SIN KISKE", cTitle: "Chasing down his prey with his far reaching flag", difficulty: 4, description: "He is the child of Ky Kiske, Allied King of Illyria, and Dizzy, a half-Gear, making him one-quarter Gear. Ky entrusted him to Sol as a child to avoid unwanted attention due to his incredible rate of growth caused by his Gear blood.<br><br><br> Sol’s education leaned a bit too far into survival (self-admittedly), leading to Sin now being strong but mischievous and somewhat lacking in the academic department. Despite his looks, he’s actually not even ten years old yet, and is still rather immature mentally. He’s optimistic and doesn’t think too deeply about things.<br><br> He could be called clueless at worst, and innocent at best. His simplistic thinking, however, can lead to a breakthrough in handling situations at times.", sectitle: "Ever-growing wild boy", img: "img/characters/fullSizeCharacters/full-sin.webp", "slideImgs": {slidevid: "img/characters/sliderkarakter/sin/sin.mp4", slideimg1:"img/characters/sliderkarakter/sin/sin1.jpg", slideimg2:"img/characters/sliderkarakter/sin/sin2.jpg", slideimg3: "img/characters/sliderkarakter/sin/sin3.jpg"}}
}

let character = characterInfo[urlObject.searchParams.get("hero")]

characterName.innerHTML = character.name
difficultyLevel.innerHTML = character.difficulty
twoTitle.innerHTML = character.sectitle
title.innerHTML = character.cTitle
desc.innerHTML = character.description
image.setAttribute("src", character.img)
slideOne.setAttribute("src", character.slideImgs.slidevid)
slideTwo.setAttribute("src", character.slideImgs.slideimg1)
slideThree.setAttribute("src", character.slideImgs.slideimg2)
slideFour.setAttribute("src", character.slideImgs.slideimg3)

if (difficultyLevel.innerHTML == 1) {
    difficultyLevel.innerHTML += "⭐"
}

if (difficultyLevel.innerHTML == 2) {
    difficultyLevel.innerHTML += "⭐⭐"
}

if (difficultyLevel.innerHTML == 3) {
    difficultyLevel.innerHTML += "⭐⭐⭐"
}

if (difficultyLevel.innerHTML == 4) {
    difficultyLevel.innerHTML += "⭐⭐⭐⭐"
}

if (difficultyLevel.innerHTML == 5) {
    difficultyLevel.innerHTML += "⭐⭐⭐⭐⭐"
}