let clock = document.querySelector('#clock')

function start() {
  setTimeout(() => {
    clock.style.transform = "translateY(-10px)"
    setTimeout(() => {
    clock.style.transform = "translateY(0)"
    }, 250)
  }, 700)
}

setInterval(() => {
  setTimeout(() => {
    clock.style.transform = "translateY(-5px)"
    setTimeout(() => {
    clock.style.transform = "translateY(0)"
    }, 250)
  }, 0)  
}, 650) 

function change(x) {
  clock.src = `assets/images/${x}.png`
}