const characters = [
    { name: "Sol Badguy", linkName: "Sol-Badguy"},
    {name:"Ky kiske", linkName: "Ky-Kiske"},
    {name:"May", linkName: "May"},
    {name:"Axl Low", linkName: "Axl-Low"},
    {name:"Chipp Zanuff", linkName: "Chipp-Zanuff"},
    {name:"Potemkin", linkName: "Potemkin"},
    {name:"Faust", linkName: "Faust"},
    {name:"Millia Rage", linkName: "Millia-Rage"},
    {name:"Zato-1", linkName: "Zato-1"},
    {name:"Ramlethal Valentine", linkName: "Ramlethal-Valentine"},
    {name:"Leo Whitefang", linkName: "Leo-Whitefang"},
    {name:"Nagoriyuki", linkName: "Nagoriyuki"},
    {name:"Giovanna", linkName: "Giovanna"},
    {name:"Anji Mito", linkName: "Anji-Mito"},
    {name:"I-no", linkName: "I-no"},
    {name:"Goldlewis Dickinson", linkName: "Goldlewis-Dickinson"},
    {name:"Jack-o", linkName: "Jack-o"},
    {name:"Happy Chaos", linkName: "Happy-Chaos"},
    {name:"Baiken", linkName: "Baiken"},
    {name:"Testament", linkName: "Testament"},
    {name:"Bridget", linkName: "Bridget"},
    {name:"Sin Kiske", linkName: "Sin-Kiske"}
]

let KS = document.querySelector("#KS")

characters.forEach((character)=>{
  let div = document.createElement("div")
  let a = document.createElement("a")
  a.setAttribute("href",`karakter.html?hero=${character.linkName}`)
  let img = document.createElement("img")
  img.setAttribute("src", `img/characters/${character.linkName}.jpg`)
  let p = document.createElement("p")
p.innerHTML = character.name
  a.appendChild(img)
  a.appendChild(p)
  div.appendChild(a)

  KS.appendChild(div)
})