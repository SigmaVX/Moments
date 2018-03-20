function buildQueryURL() {
    // define the variable that includes movie search
    var queryURL = "https://api.themoviedb.org/3/discover/movie";
  
    // add the api key parameter 
    queryURL += "?api_key=cfa5e4068ccc1d88d711e2257e1e0ec5";
    // add the page limit to the parameter
    queryURL += "&page=1";
    // for some reason the search wont work without excluding videos.
    queryURL += "&include_video=false"
    // Let's make this safe for the kids.
    queryURL += "&include_adult=false"
    // We're going to sort this all by most popular.
    queryURL += "&sort_by=popularity.desc"
    // Finally, lets exclude foreign films.
    queryURL += "&language=en-US"
  
  
    // adds the year and month to the query via user input.
    var startYear = $("#start-year");
    var startMonth = $("#start-month");
  
    if (parseInt(startYear)) {
      // The search will come up with invalid results unless we search both <= & >= 
      // i assume this is because the greater than and less than cancel each other out
      // and we are in turn left with === , although this makes little sense to me.
      queryURL += "&primary_release_date.lte=" + startYear + "-" + startMonth;
      queryURL += "&primary_release_date.gte=" + startYear + "-" + startMonth;
    }
  
  
  
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
  
    return queryURL;
  }
  

  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });