import Sounds from './sounds.js'

export default function Controls({
  btnPlay,
  btnStop,
  btnReset,
  minutesDisplay
}){

  function play (){

    Sounds().buttonPressAudio.play()
    btnPlay.disabled = true

    btnStop.classList.remove("hide")
    btnReset.classList.add("hide")

    if (btnStop.classList.contains("hide")) {
      btnStop.classList.remove("hide")
      btnReset.classList.add("hide")
    }

  }

  function pause (){

    Sounds().buttonPressAudio.play()
    
    btnPlay.disabled = false
    btnReset.disabled = false

    btnStop.classList.add("hide")
    btnReset.classList.remove("hide")


  }

  function addTime(){
    Sounds().buttonPressAudio.play()
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, 0)
  }

  function reduceTime(){
    Sounds().buttonPressAudio.play()
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5  
    
    if (minutesDisplay.textContent < 0){
      minutesDisplay.textContent = '00'
    } else {
      minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, 0) 
    }
  }

  return{
    play,
    pause,
    addTime,
    reduceTime
  }
}
