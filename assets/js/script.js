const mobileNavBar = () =>{
    let nav = document.querySelector('.nav__links')
    nav.classList.toggle('open')
    let btn = document.querySelector('.mobile__menu')
    btn.classList.toggle('open')
    document.querySelector('.hero__section .nav__container').classList.add('fixed__nav')
}

window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.hero__section .nav__container').classList.add('fixed__nav')
    }else{
        document.querySelector('.hero__section .nav__container').classList.remove('fixed__nav')
    }
}