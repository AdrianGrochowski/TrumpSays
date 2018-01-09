$(function() {


  function askDonald()
  {
    $
    .ajax({
      url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
    })
    .done(function(response){
      console.log(response);

      var h2 = $('<h2>');
      h2.text(response.message);

      $('div').prepend(h2);

      console.log(response.nlp_attributes.quote_structure[0]);


    })
    .fail(function(r){
      console.log(r);
      var h1 = $('<h1>');
      h1.text("Sorry, coś poszło nie tak");

      $('div').prepend(h1)

    })
  }


  $('.askTrump').on("click", function(){
    $('h3').text('');
    askDonald();
    $('.askTrump').html('<img src="images/trumpsays.png" alt="trump face" height="120" width="100">')
    setTimeout(() => {
            $('.askTrump').html('<img src="images/trump.png" alt="trump face" height="120" width="120">')
          }, 800);

  })



});
