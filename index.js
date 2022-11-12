
document.addEventListener('DOMContentLoaded', function(){

    let btn_counter = document.querySelector('#btn-counter');
    btn_counter.addEventListener('click', count());

});
let counter = 0;

function count() {
    counter++;
    let txt_counter = document.querySelector('#txt-counter');
    //let string = 'Count is now ${counter}';
    txt_counter.innerHTML = 'Count is now ${counter}';
}