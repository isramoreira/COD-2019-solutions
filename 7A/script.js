// Grab access_token from redirect url
var token; 
var tokenPattern = /\#access_token=([A-Z0-9]*)/; 

if (window.location.href.match(tokenPattern)) {
    console.log('access_token: true');
    token = window.location.href.match(tokenPattern)[1];
}

// Request and log most recent 20 checkins 
$('button#load-checkins').on('click', function() {
    var url = "https://api.foursquare.com/v2/users/self/checkins"; 
    
    $.ajax({
        url: url,
        method: "GET",
        data: {
            oauth_token: token, 
            v: '20181001', //update this as necessary 
            limit: 20
        }
    })
    .done(function( data ) {
        console.log(data);
    });
});



