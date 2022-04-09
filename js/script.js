




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
// titik.addEventListener('click',function(){     !!!!!!!!!!!!
//     alert('berhasil ')
// })
















// ----------------------------- menu setting
let menuSetting = document.getElementById('mydiv')
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


// color navbar
let nav = document.getElementById('nav')
function navbarFunc(e){
  nav.style.setProperty('--bgNav',e)
}

let Cmain = document.getElementById('Cmain')
let hro2 = document.getElementById('hro2')
let hro3 = document.getElementById('hro3')
let bac = document.getElementById('bac')
let arr = [Cmain,hro2,hro3,bac]

function bgc(e){
  arr.forEach(function(f){
    f.style.setProperty('--bgColor',e)
  })
  // Cmain
}

let conten = document.getElementById('conten')
function contenF(e){
  conten.style.setProperty('--bgContent',e)
}




function fontColor(e){
  let semuaP = document.querySelectorAll('.fontC')
  semuaP.forEach(function(f){
    f.style.setProperty('--fontColor',e)
  })
}








// --------------------------------------------------------------- drag menu settings
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
