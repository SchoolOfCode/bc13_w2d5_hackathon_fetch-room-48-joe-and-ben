console.log ("working")


// thoughts thus far - 
// investigate the APIs, see what kind of information they're giving us
// use what we had for the Kanye West task to test out the various APIs and check that they work
// check they work by console logging their output, if that's possible

//once that's done, we decide

async function getQuote(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    let data = await response.json();
     console.log(data);

   // let h1 = document.querySelector("#kanye-quote");
    //h1.textContent = data.quote;

    
}

getQuote()