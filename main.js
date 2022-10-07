console.log ("working")
let randomNumber = 0;
let fetchRandom = 0;


console.log("Pokedex");
const quoteButton = document.querySelector("#new-quote-button");
let h1 = document.querySelector("#kanye-quote");
h1.textContent = 
quoteButton.addEventListener("click", getQuote, );


mainImage = document.querySelector ("img")
//^^ selects the image on the page
mainImage.src ="https://1000marken.net/wp-content/uploads/2021/01/Pokemon-logo.svg"


function randomNumberGenerator(){
    randomNumber = Math.floor(Math.random() * 150) + 1;
    fetchRandom = "https://pokeapi.co/api/v2/pokemon/" + (randomNumber + "/");
}


//puts the number into a string and adds the closing string

async function getQuote(){
    randomNumberGenerator();
    let response = await fetch(fetchRandom);
    let data = await response.json();
   // logQuote=console.log(data);
    let h1 = document.querySelector("#kanye-quote");
    mainImage.src = data.sprites.front_default;
    h1.textContent = data.name;

    let newLi4 = document.createElement ('h1')
    newLi4.textContent = "Pokedex number: "+ data.id;
    h1.appendChild(newLi4);

    let newLi = document.createElement ('h1')
newLi.textContent = data.height*10+ "cm";
h1.appendChild(newLi);
console.log(data);

let newLi1 = document.createElement ('h1')
newLi1.textContent = data.weight/10+ " KG";
h1.appendChild(newLi1);

let newLi2 = document.createElement ('h1')
newLi2.textContent = "Main type: "+ data.types[0].type.name;
h1.appendChild(newLi2);

let newLi3 = document.createElement ('h1')
newLi3.textContent = "Secondary type: "+ data.types[1].type.name;
h1.appendChild(newLi3);
 //document.body.h1.appendchild(document.createElement('p'));
}


//^^ choose a random number for the API fetch



//getPokemon()

//async function getQuestions(){
//  let response = await fetch("https://opentdb.com/api.php?amount=10");
//  let data = await response.json();
//   console.log(data);
  
//}

//getQuestions()

//async function getJoke(){
//  let response = await fetch("https://icanhazdadjoke.com/", {
//    headers: { accept: "application/json" },
//  });
//  let data = await response.json();
//   console.log(data);


  
//}

//getJoke()


//async function getHello(){
//    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello`);
//    let data = await response.json();
//     console.log(data);


    
//}

//getHello()


// next step - get fetch code to randomly change, then test 
// after this, getting the DOM to work
// pick out the data from the API to put into the DOM
// test again
//
// thoughts thus far - 
// investigate the APIs, see what kind of information they're giving us
// use what we had for the Kanye West task to test out the various APIs and check that they work
// check they work by console logging their output, if that's possible

//once that's done, we decide