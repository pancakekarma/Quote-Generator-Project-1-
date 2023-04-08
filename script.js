const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

/*fetching data with js*/
//get quotes from API//

let apiQuotes = []; //global variable for api quotes

//show new quote function (math.random)
function newQuote() {
    //pick a random quote from API quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; // qui mancava la M maiuscola in Math.random() e lenght invece di length
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}
//check quote lenght to determine styling


async function getquotes () {
/* <- TOGLI QUESTO PALLINO ROSSO */
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{ //try catch = allow to attempt to complete a request//
        const response = await fetch(apiUrl); //set up fetch request here//
        apiQuotes = await response.json();
        //mancava la maiuscola nella Q quale q.... be fucking forreal
        newQuote(); //one quote but RANDOM (newquote function)
    } catch (error){
        alert(error)
        //in case you have an error//
    }
}
//on load (run quote funztion as soon as the page loads)
getquotes();


