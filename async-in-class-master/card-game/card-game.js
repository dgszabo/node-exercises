$(document).ready(function() {
    var deck_id;
    var cardsLeft = true;

    $('#shuffle').click(function(){
        $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', function(response) {
            deck_id = response.deck_id;
            $('#message').text('');
            $('img').fadeOut();
        });
    });
    
    $('#draw_new').click(function(){
        if(!deck_id) {
            $('#message').text('you need to shuffle a new deck first!');
        } else if(cardsLeft) {
            $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`, function(data) {
            // $('#card').text(data.cards[0].value + ' of ' + data.cards[0].suit);
            var $card = $(`<img class="m-1" src="cards/${data.cards[0].value.toLowerCase()}_of_${data.cards[0].suit.toLowerCase()}.png">`);
            $('#card-space').append($card);
            
            if(data.remaining === 0) {
                cardsLeft = false;
                deck_id = undefined;
            }
        });
        }
    });

});