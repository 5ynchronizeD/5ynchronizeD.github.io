
document.addEventListener('DOMContentLoaded', function(){

    let btn_counter = document.querySelector('#btn-counter');
    btn_counter.addEventListener('click', function() {
        alert('Bla');
    });

});


function count() {
    let txt_counter = document.querySelector('#txt-counter');
    let counter = txt_counter.innerHTML;
    counter++;
    //let string = 'Count is now ${counter}';
    txt_counter.innerHTML = 'Count is now ' + counter;
}