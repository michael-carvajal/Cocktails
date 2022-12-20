const hello = 'hello cheeks'


window.onload = () => {

    const image = document.querySelector('.image');
    const reset = document.getElementById('reset');
    const body = document.querySelector('body');


    reset.onclick = () => {
        if (body.classList.contains('btn-click')) {
            body.classList.remove('btn-click')
        } else {
            body.classList.add('btn-click')

        }
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

let api = document.querySelector('.api')
