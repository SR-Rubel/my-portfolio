import '../scss/style.scss';
import './base';
import { elements } from './base';

// =======menu show========

const showMenu=(menubar,nav)=>{
    if(menubar && nav){
        menubar.addEventListener('click',()=>{
            nav.classList.toggle('show');
        })
    }
}

showMenu(elements.menubar,elements.nav);

// ==============active link===========


function likeAction(){
    elements.navLinks.forEach(el=>el.classList.remove('active'));
    this.classList.add('active');
    elements.nav.classList.remove('show');
}

elements.navLinks.forEach(el=>el.addEventListener('click',likeAction));

// ==========scroll reveal Animation=======

const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})
// =======scroll home=========
sr.reveal('.home__title',{});
sr.reveal('.button',{delay:200});
sr.reveal('.home__img',{delay:400});
sr.reveal('.home__social-icon',{interval:200});
// =======scroll about=====

sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay:200});
sr.reveal('.about__text',{interval:200});

// =======scroll skills=====
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{delay:200});
sr.reveal('.skills__data',{interval:200});
sr.reveal('.skills__img',{delay:400}); 

// =======scroll works=====
sr.reveal('.work__img',{interval:200});
// =======scroll contacts=====
sr.reveal('.contact__input',{interval:200});