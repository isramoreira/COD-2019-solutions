// Solution requires jQuery

// set apiKey to your api-key from OBDb, e.g. var apiKey = "abcd1234";

var apiKey; 

// endpoint; alternatively: `https://www.omdbapi.com/?apikey=${apiKey}&s=`;

var endpoint = 'https://www.omdbapi.com/?apikey=' + apiKey + '&s='; 

$('button').on('click', function() {
  
  var yearSince = $('#year').val() || 0; 
  var searchTerm = $('#search-term').val();
  
  $('#search-results').empty(); 

  $.ajax(endpoint + searchTerm)
    .done(function(data) {
      data.Search.forEach(function(movie) {
        if (movie.Year >= yearSince) {
          $('#search-results').append(`<p>${movie.Title}</p><p>${movie.Year}</p>`);
        }
        
      });
    });
  
});
