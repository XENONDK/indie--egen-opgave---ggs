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
    "Sol-Badguy":{Name: "Sol Badguy", description: "Sol is a top tier character that is perfect for beginners. He rarely needs to do no more than spam 5S to win and even if that fails he have volcanic viper. All in all sol is a glue eating poster boy that is perfect for beginners.", difficulty: 5, Title: "The Flame of Corruption"},
    
    "Ramlethal-Valentine":{Name: "Ramlethal Valentine", description: "this MF wack yo", difficulty: 3},
    
}

let character = characterInfo[urlObject.searchParams.get("hero")]

characterName.innerHTML = character.Name
difficultyLevel.innerHTML = character.difficulty
title.innerHTML = character.Title
desc.innerHTML = character.description

