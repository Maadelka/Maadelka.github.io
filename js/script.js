// ------------------------------------------------------------- dropdown & burger menu
const dropd=document.getElementById('dropd')

const burger=document.getElementById('burger')
burger.addEventListener('click',function(){
    dropd.classList.toggle('muncul')
    burger.classList.toggle('putar')
})

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

// ----------------------------- menu setting
let menuSetting = document.getElementById('menuSetting')
let setting = document.getElementById('setting')
let closeSetting = document.getElementById('closeSetting')
setting.addEventListener('click',function(){
    menuSetting.classList.add('display')
})
closeSetting.addEventListener('click',function(){
    menuSetting.classList.remove('display')
})



// ---------------------------------------------- screen size 
var elem = document.documentElement;
let onS =document.getElementById('onS')
let closeS =document.getElementById('closeS')

/* Function to open fullscreen mode */
function openFullscreen() {
    closeS.classList.remove('aktifScreen')
    onS.classList.add('aktifScreen')
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { 
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem = window.top.document.body;
      elem.msRequestFullscreen();
    }
    
}
 
/* Function to close fullscreen mode */
function closeFullscreen() {
    closeS.classList.add('aktifScreen')
    onS.classList.remove('aktifScreen')
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      window.top.document.msExitFullscreen();
    }
    
}
  
if(window == onerror){
  alert(`ada yang salah`)
}
function gagal(){
  console.log(`gagal`)
}
