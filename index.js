let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = 'Count is now ${counter}';
}