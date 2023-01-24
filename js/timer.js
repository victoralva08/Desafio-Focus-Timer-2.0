import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnStop,
  btnReset
}){

  let minutes = minutesDisplay.textContent
  let timerTimeOut

  function updateTextDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, 0)
    secondsDisplay.textContent = String(seconds).padStart(2, 0)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {

      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (minutes == "00" && seconds == "00") {
        btnPlay.disabled = false
        Sounds().timerFinish.play()
        return
      }

      if (seconds == 0) {
        seconds = 60
        --minutes
      }

      updateTextDisplay(minutes, (seconds - 1))
      
      //secondsDisplay.textContent = String(seconds - 1).padStart(2, 0)
      //minutesDisplay.textContent = String(minutes).padStart(2, 0)

      countdown()

    }, 1000)
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function reset(){

    Sounds().buttonPressAudio.play()

    btnPlay.disabled = false
    btnReset.disabled = true

    updateTextDisplay(minutes, '00')

  }

  return {
    countdown,
    hold,
    updateTextDisplay,
    reset
  }
}