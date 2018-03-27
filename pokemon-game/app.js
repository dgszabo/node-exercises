$(function() {
    function getPokemonData(url) {
        return $.getJSON(url, function(data) {
            // console.log(data);
        })
    }

    $('.random-pokemon').on('click', function() {
        $.getJSON('https://pokeapi.co/api/v2/pokemon/?limit=950')
            .then(function(data) {
                // console.log(data);
                let arr = [...data.results];
                let randomCounter = [];

                while (randomCounter.length < 3) {
                    let randomNum = Math.ceil(Math.random() * arr.length);
                    if (randomCounter.includes(randomNum) === false) {
                        randomCounter.push(randomNum);
                    }
                }
                return Promise.all([getPokemonData(arr[randomCounter[0]].url), getPokemonData(arr[randomCounter[1]].url), getPokemonData(arr[randomCounter[2]].url)])
            }).then(function(data) {
                for (let i = 0; i < data.length; i++) {
                    $.getJSON('https://pokeapi.co/api/v2/pokemon-species/' + data[i].name).then(function(species) {
                        let pokemonName = $('<h2>').text(data[i].name);
                        let pokemonImage = $(`<img src="${data[i].sprites.front_default}">`);
                        let pokemonDesription = $('<h5>').text(species.flavor_text_entries.find(element => element.language.name === "en").flavor_text)
                        console.log(species)
                        let profile = $('<li class="list-inline-item">').append(pokemonName).append(pokemonImage).append(pokemonDesription);
                        $('ul').append(profile);
                    })
                }
            });
    })

})