const menu = document.querySelector('.ham-menu'); 
const nav = document.querySelector('.mobile-nav');
const dashes = document.querySelectorAll('.dash');
console.log(dashes);

menu.addEventListener('click', () => {

let navOpen = menu.classList.contains('nav-open')

if (!navOpen) {
    nav.style.top = '0'
    nav.style.marginBottom = '0'
    menu.classList.remove('nav-close')
    menu.classList.add('nav-open')
    dashes[0].style.transform = 'rotate(34deg)'
    dashes[1].style.display = 'none'
    dashes[2].style.transform = 'rotate(-34deg)'

} 

if (navOpen) {
    nav.style.top = '-100px'
    nav.style.marginBottom = '-100px'
    menu.classList.add('nav-close')
    menu.classList.remove('nav-open')
    dashes[0].style.transform = 'rotate(0deg)'
    dashes[1].style.display = 'block'
    dashes[2].style.transform = 'rotate(-0deg)'

}

})


// **********************************
// ISMAIL's SHIT
// **********************************

const category__item = document.querySelectorAll('.category__item');

category__item.forEach(function(e) {
    e.addEventListener('mouseenter', showCatList, {once: true})
});

function showCatList(e) {
    let service_list = e.target.nextElementSibling;
    let category = e.target.parentElement;
    service_list.classList.add('show');
    category.addEventListener('mouseleave', (e) => {
        hideCatList(e, category)}, {once: true}
    )
}

function hideCatList(e, category) {
    category.children[0].addEventListener('mouseenter', showCatList, {once: true})
    category.children[1].classList.remove('show')
}


// *********** FAQ SECTION **************** //

let reveal_sign = document.querySelectorAll(".reveal-sign");

function revealAnswer(e) {
    let answer = e.target.parentElement.nextElementSibling;
    console.log(e.innerHTML);
    answer.classList.toggle('reveal');
    if (answer.classList.contains('reveal')) {
        e.innerHTML = "-";
    } else {
        e.innerHTML = "+";
    }
}

reveal_sign.forEach(function(e) {
    console.log(e);
    e.addEventListener('click', revealAnswer)
});











