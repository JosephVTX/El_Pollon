const btnMenu = document.querySelector('#btnMenu');



btnMenu.addEventListener('click', ()=>{

    let menu = document.querySelector('.nav__menu');

    console.log(menu);
    menu.classList.toggle('hide');

});