// ------------------------------------------------------------- dropdown & burger menu
const dropd=document.getElementById('dropd')

const burger=document.getElementById('burger')
burger.addEventListener('click',function(){
    dropd.classList.toggle('muncul')
    burger.classList.toggle('putar')
})
// --



// --------------------------------------------------------------- img slide (hero img)
let heroImg = document.getElementById('heroImg')
let back = document.getElementById('back')
let next = document.getElementById('next')
let titik = document.querySelectorAll('.titik')
let nameImg = [
    `0.jpg`,
    `1.jpg`,
    `2.jpg`,
    `3.jpg`,
    `4.jpg`
]
let urutanImg = 0
setInterval(function(){
    titik[urutanImg].classList.remove('bg')
    if(urutanImg >= 4){
        urutanImg = 0
    }else{
        urutanImg++
    }
    heroImg.src= `assets/hero-img/${nameImg[urutanImg]}`
    titik[urutanImg].classList.add('bg')
},3000)

// ---------back
back.addEventListener('click',function(){
    titik[urutanImg].classList.remove('bg')
    if(urutanImg <= 0){
        urutanImg = 4
    }else{
        urutanImg--
    }
    titik[urutanImg].classList.add('bg')
    heroImg.src= `assets/hero-img/${nameImg[urutanImg]}`
})

// ---------next
next.addEventListener('click',function(){
    titik[urutanImg].classList.remove('bg')
    if(urutanImg >= 4){
        urutanImg = 0
    }else{
        urutanImg++
    }
    titik[urutanImg].classList.add('bg')
    heroImg.src= `assets/hero-img/${nameImg[urutanImg]}`
})

// --------- titik
titik.addEventListener('click',function(){
    alert('berhasil   ')
})