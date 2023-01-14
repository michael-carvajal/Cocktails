
window.onload = () => {
    const rum = document.getElementById('rum')
    const vodka = document.getElementById('vodka');
    const gin = document.getElementById('gin');
    const tequila = document.getElementById('tequila');
    const whiskey = document.getElementById('whiskey');
    const liquors = document.getElementById('liquors');
    const random_drink = document.getElementById('random_drink');
    const reset = document.getElementById('reset');
    const ingredient_list = document.getElementById('ingredient_list');
    let drink = '';
    let ingredients = [];
    let image = '';
    let multiplier;


    reset.onclick = () => {
        while (ingredient_list.firstChild) {
            ingredient_list.removeChild(ingredient_list.firstChild);
        }
        if (liquors.value === 'rum') {
            multiplier = 11;
        } else if (liquors.value === 'tequila') {
            multiplier = 5;
        } else if (liquors.value === 'vodka') {
            multiplier = 9;
        } else if (liquors.value === 'gin') {
            multiplier = 20;
        } else if (liquors.value === 'whiskey') {
            multiplier = 1;
        }
        let random_number = Math.floor(Math.random() * multiplier)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };

        fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${liquors.value}`, options)
        .then(response => response.json())
            .then(data => {
                let i = 1;
                drink = data.drinks[random_number].strDrink;
                while (true) {
                    let ingredientKey = `strIngredient${i}` ;
                    let ingredient = data.drinks[random_number][ingredientKey];
                    if (ingredient == null) {
                        break
                    }
                    ingredients.push(ingredient);
                    i++;
                }
            })
            .then(() => {
                random_drink.value = drink;
                ingredients.forEach(element => {
                    let childDiv = document.createElement("div");
                    childDiv.innerHTML = element;
                    ingredient_list.appendChild(childDiv);
                });
            })
            .catch(err => console.error(err));

    }






}
