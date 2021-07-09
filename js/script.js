

const wrapper = document.querySelector('.wrapper')
const title = document.querySelector('.title')
const images = wrapper.querySelectorAll('.img')
console.log(images);

wrapper.addEventListener('mousemove', function(hodisa) {
    console.log("clientX",hodisa.clientX);
    console.log("clientY",hodisa.clientY);
    const posX = hodisa.clientX
    const posY = hodisa.clientY


    title.style.transform = `translate(${posX / -25}px, ${posY / -15}px)`
    images[0].style.transform = `translate(${posX / -10}px, ${posY / -30}px)`
    images[1].style.transform = `translate(${posX / -20}px, ${posY / -50}px) scale(1.3)`
    images[2].style.transform = `translate(${posX / -30}px, ${posY / -30}px)`
    images[3].style.transform = `translate(${posX / -13}px, ${posY / -13}px)`
    images[4].style.transform = `translate(${posX / -50}px, ${posY / -50}px)`
    images[5].style.transform = `translate(${posX / -50}px, ${posY / -50}px)`

})