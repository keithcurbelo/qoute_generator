//Get quote from api
const getQuote = async () => {
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const data = await response.json();
    console.log(JSON.parse(data.contents));
  } catch (error) {
    // getQuote();
    console.log("No quote", error);
  }
};

//On load
getQuote();
