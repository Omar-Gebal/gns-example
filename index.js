import googleNewsScraper from 'google-news-scraper';

(async () => {
  const articles = await googleNewsScraper({ 
    searchTerm: "The Oscars", 
    logLevel: "verbose"
  }); 
  console.log({articles});
  return;
})();