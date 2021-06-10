const balloon = document.getElementById('airballoon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const sun= document.getElementById('sun')



function move() {
  const incrementer = window.scrollY
// the base numbers refers to the location of the objects. 

  cloudOne.style.bottom = 40 + incrementer * 0.0712 + '%'
  cloudOne.style.left = 75 + incrementer * 0.071 + '%'
  cloudTwo.style.bottom = 80 + incrementer * 0.0714 + '%'
  cloudTwo.style.right = 32 + incrementer * 0.0715 + '%'
  cloudThree.style.bottom = 60 + incrementer * 0.071 + '%'
  cloudThree.style.left = 70 + incrementer * -0.0712 + '%'
  cloudFour.style.bottom = 70 + incrementer * 0.0716 + '%'
  cloudFour.style.right = 12 + incrementer * 0.0715 + '%'
  cloudFive.style.bottom = 50 + incrementer * 0.072 + '%'
  cloudFive.style.right = 55 + incrementer * 0.0726 + '%'
  
  sun.style.top = 100 + incrementer * -0.072 + '%'  
}

window.addEventListener('scroll', move)
