const menu = document.querySelector(".menu-container");
const closeBtn = document.querySelector("#close-menu");
const openBtn = document.querySelector("#open-menu");

openBtn.addEventListener("click", () => {
	menu.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove("show");
});

/*===== REMOVE MENU MOBILE =====*/
const menuLink = document.querySelectorAll(".link");
    
function linkAction(){
    menu.classList.remove("show")
}
menuLink.forEach(n => n.addEventListener("click", linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu-container a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.menu-container a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// /*SCROLL HOME*/
// sr.reveal('.title', {})
// sr.reveal('.profile-img', {origin:"left", delay: 400})
// sr.reveal('.profile-name', {origin:'right', delay: 200})
// sr.reveal('.profile-career', {origin:'right', delay: 400})
// sr.reveal('.profile-character', {origin:'right', delay: 600})
// sr.reveal('.see-work-btn', {origin:"bottom", delay: 800})
// sr.reveal('.mouse', {origin:"bottom", delay: 800})


// /*SCROLL ABOUT*/
// sr.reveal('.sub-heading', {origin: "left", delay: 400})
// sr.reveal('.about-text p', {origin: "left", delay: 300})


// /*SCROLL SKILLS*/
// sr.reveal('.skill-container', {})
// sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})

// /*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio-box', {interval: 200})

// /*SCROLL CONTACT*/
// sr.reveal('.contact-info', {origin: "left", interval: 200})
// sr.reveal('.message-box', {origin: "right", interval: 200})


