// Importações default
import Sounds from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'

// Variáveis
import {
  btnPlay,
  btnStop,
  btnReset,
  btnAddTime,
  btnReduceTime,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const forestSound = document.querySelector('.forest')
const rainSound = document.querySelector(".rain")
const commerceSound = document.querySelector(".commerce")
const bonfireSound = document.querySelector(".bonfire")

const svgForest = document.querySelector(".svgForest")
const svgRain = document.querySelector(".svgRain")
const svgCommerce = document.querySelector(".svgCommerce")
const svgBonfire = document.querySelector(".svgBonfire")


// Funções

const sound = Sounds()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnStop,
  btnReset
})

const controls = Controls({
  btnPlay,
  btnStop,
  btnReset,
  minutesDisplay
})

function togglePlay (audio){
  return audio.paused ? audio.play() : audio.pause()
}


// Eventos
btnPlay.addEventListener('click', () => {

  controls.play()
  timer.countdown()
  
})

btnStop.addEventListener('click', () =>{

  timer.hold()
  controls.pause()

})

btnReset.addEventListener('click', () => { timer.reset() })

btnAddTime.addEventListener('click', () => { controls.addTime() })

btnReduceTime.addEventListener('click', () => { controls.reduceTime() })

forestSound.addEventListener('click', () => {
  togglePlay(sound.forestAudio)
  forestSound.classList.toggle('selected')
  svgForest.classList.toggle('color')
})

rainSound.addEventListener("click", () => {
  togglePlay(sound.rainAudio)
  rainSound.classList.toggle("selected")
  svgRain.classList.toggle("color")
})

commerceSound.addEventListener("click", () => {
  togglePlay(sound.commerceAudio)
  commerceSound.classList.toggle("selected")
  svgCommerce.classList.toggle("color")
})

bonfireSound.addEventListener("click", () => {
  togglePlay(sound.bonfireAudio)
  bonfireSound.classList.toggle("selected")
  svgBonfire.classList.toggle("color")
})
