export default function (){

  const forestAudio = new Audio('../audio/Floresta.wav')
  const rainAudio = new Audio("../audio/Chuva.wav")
  const commerceAudio = new Audio("../audio/Cafeteria.wav")
  const bonfireAudio = new Audio("../audio/Lareira.wav")

  const buttonPressAudio = new Audio(
     "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
   )

  const timerFinish = new Audio(
     "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
   )

  forestAudio.loop = true
  rainAudio.loop = true
  commerceAudio.loop = true
  bonfireAudio.loop = true

  return {
    forestAudio,
    rainAudio,
    commerceAudio,
    bonfireAudio,
    buttonPressAudio,
    timerFinish
  }

}