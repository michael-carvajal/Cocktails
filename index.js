window.onload = () => {
    const rum = document.getElementById('rum')
    const vodka = document.getElementById('vodka');
    const gin = document.getElementById('gin');
    const tequila = document.getElementById('tequila');
    const whiskey = document.getElementById('whiskey');
    const liquors = document.getElementById('liquors');
    const random_drink = document.getElementById('random_drink');
    const reset = document.getElementById('reset');
    let drink = '';
    let multiplier;


    reset.onclick = () => {
        if (liquors.value = 'rum') {
            multiplier = 11;
        } else if (liquors.value = 'tequila') {
            multiplier = 5;
        } else if (liquors.value = 'vodka') {
            multiplier = 9;
        } else if (liquors.value = 'gin') {
            multiplier = 20;
        } else if (liquors.value = 'whiskey') {
            multiplier = 1;
        }
        let random_number = Math.floor(Math.random() * 11)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };

        fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${liquors.value}`, options)
        .then(response => response.json())
            .then(response => {
                console.log(response.drinks[random_drink])
            })
        .catch(err => console.error(err));
    }






}
