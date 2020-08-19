const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

//Get quote from api
const getQuote = async () => {
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const dataEncoded = await response.json();
    const data = JSON.parse(dataEncoded.contents);
    //Author isn't always known
    authorText.innerText =
      data.quoteAuthor === "" ? "Unknown" : data.quoteAuthor;
    //Reduce font size for long quote
    if (data.quoteText.length > 120) quoteText.classList.add("long-quote");
    else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data.quoteText;
  } catch (error) {
    // getQuote();
    console.log("No quote", error);
  }
};

//Tweet the Quote
const tweetQuote = () => {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
};

//Event Listener
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);
//On load
getQuote();
