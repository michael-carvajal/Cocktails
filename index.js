
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
    const cocktail_image = document.getElementById('cocktail_image');
    const random_button = document.getElementById('random_button');
    let drink = '';
    let ingredients = [];
    let measures = [];
    let image = '';
    let multiplier;
    let imgUrl = [];

    function deleteChild() {

        //ingredient_list.firstElementChild can be used.
        let childIngred = ingredient_list.lastElementChild;
        while (childIngred) {
            ingredient_list.removeChild(childIngred);
            childIngred = ingredient_list.lastElementChild;
        }
        let childImg = cocktail_image.lastElementChild;
        while (childImg) {
            cocktail_image.removeChild(childImg);
            childImg = cocktail_image.lastElementChild;
        }
    }

    function createImgEle() {
        let img = document.createElement("img");
        img.setAttribute('src', imgUrl[0]);
        cocktail_image.appendChild(img)
    }

    random_button.onclick = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        console.log('hello sqeuat');
        ingredients = [];
        imgUrl = [];
        deleteChild();
        let random_number = Math.floor(Math.random() * multiplier);

        deleteChild();
        fetch('https://the-cocktail-db.p.rapidapi.com/random.php', options)
            .then(response => response.json())
            .then(data => {
                let i = 1;
                let j = 1;
                drink = data.drinks[0].strDrink;
                while (true) {
                    let ingredientKey = `strIngredient${i}`;
                    let ingredient = data.drinks[0][ingredientKey];
                    if (ingredient == null) {
                        break
                    }
                    ingredients.push(ingredient);
                    i++;
                }
                while (true) {
                    let ingredientMesKey = `strMeasure${j}`;
                    let measure = data.drinks[0][ingredientMesKey];
                    if (measure == null) {
                        break
                    }
                    measures.push(measure);
                    j++;
                }
                imgUrl.push(data.drinks[0].strDrinkThumb)
            })
            .then(() => {
                let index = 0;
                random_drink.innerHTML = drink;
                ingredients.forEach(ingred => {
                    let childDiv = document.createElement("div");
                    childDiv.innerHTML = `${measures[index]} ${ingred}`;
                    ingredient_list.appendChild(childDiv);
                    index++;
                });
                createImgEle();
            })


            .catch(err => console.error(err));
    }


    reset.onclick = () => {

        ingredients = [];
        imgUrl = [];

        deleteChild();
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
                let j = 1;
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
                while (true) {
                    let ingredientMesKey = `strMeasure${j}` ;
                    let measure = data.drinks[random_number][ingredientMesKey];
                    if (measure == null) {
                        break
                    }
                    measures.push(measure);
                    j++;
                }
                imgUrl.push(data.drinks[random_number].strDrinkThumb)
            })
            .then(() => {
                let index = 0;
                random_drink.innerHTML = drink;
                ingredients.forEach(ingred => {
                    let childDiv = document.createElement("div");
                    childDiv.innerHTML = `${measures[index]} ${ingred}`;
                    ingredient_list.appendChild(childDiv);
                    index++;
                });
                createImgEle();
            })
            .catch(err => console.error(err));


    }






}
