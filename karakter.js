let urlString = window.location
//console.log(urlString)
let urlObject = new URL(urlString)




console.log(urlObject.searchParams.get("hero"))


// html tags
const characterName = document.querySelector("#characterName")
const difficultyLevel = document.querySelector("#difficultyLevel")
const title = document.querySelector("#title")
const desc = document.querySelector("#desc")

let characterInfo = {
    "Sol-Badguy":{Name: "Sol Badguy", description: "Sol is a top tier character that is perfect for beginners. He rarely needs to do no more than spam 5S to win and even if that fails he have volcanic viper. All in all sol is a glue eating poster boy that is perfect for beginners.", difficulty: 5, cTitle: "The Flame of Corruption"},
    
    "Sin-Kiske": {Name: "Sin Kiske", description: "sin is a child stuck in a mans body. he believes children come from their parents eyes and is generally a moron. he likes to wave his flag around and he uses it as his primary weapon of choice. Sin is a great charater that have great potential to become great", difficulty: 3, cTitle: "Wild Boy"},

    "Ramlethal-Valentine":{Name: "Ramlethal Valentine", description: "this MF wack yo. she got 2 really big swords that she yeets around the battlefield. she also got this weird kind of floating thingy majingy that speaks to her. she is incredibly annoying to play against so, dont play her, thank you.", difficulty: 4, cTitle: "Sword Lady"},
    
    
}

let character = characterInfo[urlObject.searchParams.get("hero")]

characterName.innerHTML = character.Name
difficultyLevel.innerHTML = character.difficulty
title.innerHTML = character.cTitle
desc.innerHTML = character.description

