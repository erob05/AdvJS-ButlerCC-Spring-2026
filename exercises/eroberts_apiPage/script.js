$(document).ready(()=>{
    //https://pokeapi.co/api/v2/pokemon/
    //domains
    const domain = "https://pokeapi.co/api/v2/pokemon/";
    const secdomain = "https://pokeapi.co/api/v2/pokemon-species/";
    const thirddomain = "https://pokeapi.co/api/v2/ability/";
    //Globals
    var htmi = "";
    var abil01 = "";
    var abil02 = "";

    //function to capitalize the first letter
            function capit(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

    $('#poke01').click(()=>{
        //remove hide class from #content
        $('#content').removeClass("hide");
        //assign the value of the button to poke
        let poke = $('#poke01').val();
        fetch(`${domain}${poke}`).then(response => {
        return response.json()}).then(path => {
            //pokeSprite
            let pokeSprite = path.sprites.front_default;
            //pokeName
            let pokeName = capit(path.name);

            //Charmander moves 14, 3, 16, and 29
            //Unordered List for htmi
            htmi = `<ul><li>${capit(path.moves[14].move.name)}</li>`;
            htmi += `<li>${capit(path.moves[3].move.name)}</li>`;
            htmi += `<li>${capit(path.moves[16].move.name)}</li>`;
            htmi += `<li>${capit(path.moves[29].move.name)}</li></ul>`;

            //<h3 class="m-min">Ability Name for 1 and 2</h3><p id="abilEx01"></p>`
            abil01 = `<h3 class="m-min">${capit(path.abilities[0].ability.name)}</h3><p id="abilEx01"></p>`
            abil02 = `<h3 class="m-min">${capit(path.abilities[1].ability.name)}</h3><p id="abilEx02"></p>`

            // #pokeTitle.text
            $('#pokeTitle').text(pokeName);
            // .poke.attr alt and src
            $('.poke').attr("src", pokeSprite);
            $('.poke').attr("alt", pokeName);
            // #types.text
            $('#types').text(`${capit(path.types[0].type.name)}`);
            // #abil01.html
            $('#abil01').html(abil01);
            // #abil02.html
            $('#abil02').html(abil02);
            // #moves.html
            $('#moves').html(htmi);
        })

            //Specific Listing for english description
            const listing1 = "4/";

        //second domain fetch
        fetch(`${secdomain}${listing1}`).then(response => {
        return response.json()}).then(path => {
            let moveDes = path.flavor_text_entries[0].flavor_text;
            let strip = moveDes.replace("\f", " ");
            $('#pokedesc').text(strip);
        });
            //Specific listing for pokemon's 1st ability
            const listing2 = "66/";

        //third domain fetch
        fetch(`${thirddomain}${listing2}`).then(response => {
        return response.json()}).then(path => {
            let abilEx01 = path.effect_entries[2].effect;
            $('#abilEx01').text(abilEx01);
        });
            //Specific listing for pokemon's 2nd ability
            const listing3 = "94/";
        
        //fourth domain fetch
        fetch(`${thirddomain}${listing3}`).then(response => {
        return response.json()}).then(path => {
            let abilEx02 = path.effect_entries[2].effect;
            $('#abilEx02').text(abilEx02);
        });

    }); //Charmander

    $('#poke02').click(() => {
        $('#content').removeClass("hide");
        let poke = $('#poke02').val();

        fetch (`${domain}${poke}`).then(response => {
        return response.json()}).then(path => {
            let pokeSprite = path.sprites.front_default;
            let pokeName = capit(path.name);

            // bulbasaur moves 6, 10, 13, 4
            htmi = `<ul><li>${capit(path.moves[6].move.name)}</li>`;
            htmi += `<li>${capit(path.moves[10].move.name)}</li>`;
            htmi += `<li>${capit(path.moves[13].move.name)}</li>`;
            htmi += `<li>${capit(path.moves[4].move.name)}</li></ul>`;

            abil01 = `<h3 class="m-min">${capit(path.abilities[0].ability.name)}</h3><p id="abilEx01"></p>`
            abil02 = `<h3 class="m-min">${capit(path.abilities[1].ability.name)}</h3><p id="abilEx02"></p>`

            $('#pokeTitle').text(pokeName);
            $('.poke').attr("src", pokeSprite);
            $('.poke').attr("alt", pokeName);
            $('#types').text(`${capit(path.types[0].type.name)}`);
            $('#abil01').html(abil01);
            $('#abil02').html(abil02);
            $('#moves').html(htmi);
            });
            

            //bulbasaur listing1 = 1, listing2 = 65, listing3 = 34
            const listing1 = "1/";
            fetch(`${secdomain}${listing1}`).then(response => {
                return response.json()}).then(path => {
                    let moveDes = path.flavor_text_entries[0].flavor_text;
                    let strip = moveDes.replace("\f", " ");
                    $('#pokedesc').text(strip);
                });

            const listing2 = "65/";
            fetch(`${thirddomain}${listing2}`).then(response => {
                return response.json()}).then(path => {
                    let abilEx01 = path.effect_entries[2].effect;
                    $('#abilEx01').text(abilEx01);
                });

            const listing3 = "34/";
            fetch(`${thirddomain}${listing3}`).then(response => {
                return response.json()}).then(path => {
                    let abilEx02 = path.effect_entries[2].effect;
                    $('#abilEx02').text(abilEx02);
                })
        }); // Bulbasaur

        $('#poke03').click(() => {
            $('#content').removeClass("hide");
            let poke = $('#poke03').val();
            
            fetch (`${domain}${poke}`).then(response => {
                return response.json()}).then(path => {
                    let pokeSprite = path.sprites.front_default;
                    let pokeName = capit(path.name);

                    // squirtle moves 4, 8, 34, 27
                    htmi = `<ul><li>${capit(path.moves[4].move.name)}</li>`;
                    htmi += `<li>${capit(path.moves[8].move.name)}</li>`;
                    htmi += `<li>${capit(path.moves[34].move.name)}</li>`;
                    htmi += `<li>${capit(path.moves[27].move.name)}</li></ul>`;
                    
                    abil01 = `<h3 class="m-min">${capit(path.abilities[0].ability.name)}</h3><p id="abilEx01"></p>`
                    abil02 = `<h3 class="m-min">${capit(path.abilities[1].ability.name)}</h3><p id="abilEx02"></p>`

                    $('#pokeTitle').text(pokeName);
                    $('.poke').attr("src", pokeSprite);
                    $('.poke').attr("alt", pokeName);
                    $('#types').text(`${capit(path.types[0].type.name)}`);
                    $('#abil01').html(abil01);
                    $('#abil02').html(abil02);
                    $('#moves').html(htmi);
                    });

                    //squirtle listing1 = 7, listing2 = 67, listing3 = 44
                    const listing1 = "7/";
                    fetch(`${secdomain}${listing1}`).then(response => {
                        return response.json()}).then(path => {
                            let moveDes = path.flavor_text_entries[0].flavor_text;
                            let strip = moveDes.replace("\f", " ");
                            $('#pokedesc').text(strip);
                        });

                    const listing2 = "67/";
                    fetch(`${thirddomain}${listing2}`).then(response => {
                        return response.json()}).then(path => {
                            let abilEx01 = path.effect_entries[2].effect;
                            $('#abilEx01').text(abilEx01);
                        });

                    const listing3 = "44/";
                    fetch (`${thirddomain}${listing3}`).then(response => {
                        return response.json()}).then(path => {
                            let abilEx02 = path.effect_entries[2].effect;
                            $('#abilEx02').text(abilEx02);
                        });
        });
});