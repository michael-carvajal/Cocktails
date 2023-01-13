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
}
