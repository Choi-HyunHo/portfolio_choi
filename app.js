let scrollTop = 0
let bar

window.onload = function () {
  bar = document.querySelector('.bar')
}

window.addEventListener('scroll', (e) => {
  scrollTop = document.documentElement.scrollTop
  let per = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
  )
  bar.style.width = per + '%'
  loop()
})

function loop() {
  window.requestAnimationFrame(loop)
}
