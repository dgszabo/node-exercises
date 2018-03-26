# Asynchronous Code in JavaScript

Let's have some fun working with AJAX!

Here are some exercises for you to work on in class. For all of them, do the exercises first using callbacks. Then, refactor to use promises. If you're interested, you can then try to refactor them using `async` / `await`.

### Part 1 - Number Facts

1.  Make a request to the [Numbers API](http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON!)
<!-- $.getJSON('http://numbersapi.com/17?json', function(data) {
       console.log(data);
}) -->

2.  Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
<!-- $.getJSON('http://numbersapi.com/7,17,61?json', function(data) {
       console.log(data);
}) -->

3.  Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page (you'll need to make multiple requests for this.)
<!-- var arr = [];

$.getJSON('http://numbersapi.com/61?json', function(data) {
   arr.push(data.text);
   $.getJSON('http://numbersapi.com/61?json', function(data) {
       arr.push(data.text);
       $.getJSON('http://numbersapi.com/61?json', function(data) {
           arr.push(data.text);
           $.getJSON('http://numbersapi.com/61?json', function(data) {
               arr.push(data.text);
               console.log(arr);
            });
        });
    });
}); -->

<!-- $.getJSON('http://numbersapi.com/17?json', function(data) {
   console.log(data.text);
   $.getJSON('http://numbersapi.com/17?json', function(data) {
       console.log(data.text);
       $.getJSON('http://numbersapi.com/17?json', function(data) {
           console.log(data.text);
           $.getJSON('http://numbersapi.com/17?json', function(data) {
               console.log(data.text);
            });
        });
    });
}); -->

### Part 2 - Deck of Cards

1.  Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, console log the value and the suit (e.g. "5 of spades", "queen of diamonds").
<!-- $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`, function(data) {
    console.log('you drew the ' + data.cards[0].value + ' of ' + data.cards[0].suit + '!');
}); -->

2.  Make a request to the deck of cards API to request a singly card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck. Once you have both cards, console log the values and suits of both cards.
<!-- var deck_id;

$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', function(response) {
    deck_id = response.deck_id;
    console.log(response);
});

var draw = function(){
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`, function(data) {
        console.log(data);
    });
} -->


3.  Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck. Here's how this could look:

![Deck of cards GIF](./images/cards.gif)

### Part 3 (BONUS) - Gotta Catch 'Em All!

1.  Figure out how to make a single request to the [Pokemon API](https://pokeapi.co/) to get names and URLs for every pokemon in the database.

2.  Once you have names and URLs of all the pokemon, pick three at random and make requests to their URLs. Once those requests are complete, console log the data for each pokemon.

3.  Build an HTML page that lets you click on a button to generate data from three randomly chosen pokemon. Include the name of the pokemon, an image of the pokemon, and a description of its species (you'll need to make another request for this data!) Here's how this could look:

![Pokemon GIF](./images/pokemon.gif)

### Part 4 - Promises Exercise

Write a function called `promiseMe` which takes two arguments: a `time` and a `willResolve` boolean. The function should return a promise, which will either resolve with the value `"resolved! :)"` or be rejected with the value `"rejected :("` depending on whether `willResolve` is `true` or `false`. The length of time the promise takes to resolve should be determined by `time`.
