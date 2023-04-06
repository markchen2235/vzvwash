const testimonial =document.querySelector('.testimonial')
const works= document.querySelector('.works')
const left =document.querySelector('.contact .left')
const right =document.querySelector('.contact .right')
const to_Top= document.querySelector('.to')
const review = document.querySelector('.review')
window.addEventListener('scroll',function (e) {

    if ((document.documentElement.scrollTop>=40)) {
        testimonial.style.opacity='1'
        testimonial.style.transform='translateY(0)'
        to_Top.style.opacity='1'
       to_Top.style.transform='translateY(0)'
        review.style.opacity='1'
       review.style.transform='translateY(0)'
    }
    if (document.documentElement.scrollTop>=900){
       works.style.opacity='1'
        works.style.transform='translateY(0)'
    }

    if (document.documentElement.scrollTop>=1600){

        left.style.transform='translateY(0)'
        right.style.transform='translateY(0)'
    }
})

to_Top.addEventListener('click',function () {
    document.documentElement.scrollTop=0
})


