let thelabel = document.querySelector("#myLabel")
setInterval(dates,1000)
function dates(){
  let date = new Date()
  thelabel.innerHTML = into(date)
  function into(date){
    let hour = date.getHours()
    let miniute = date.getMinutes()
    let second = date.getSeconds()
    let time = (hour >= 12) ? "pm" : "am"
     hour = (hour % 12) || 12 
    hour = times(hour)
    miniute = times(miniute)
    second = times(second)
    return `${hour}:${miniute}:${second} ${time}`
  }
  function times(timer){
    timer = timer.toString()
    return timer.length < 2 ? "0" + timer : timer; 
  }
}

let images = ["nighttime-view.avif","mushokutensei.jpg","land.webp","main.webp","back.webp","artwork-440x440.jpg","arifureta-season-3-new-visual.png.jpg"]
let hex = 0;
setInterval(() => {
  hex = (hex + 1) % images.length;
  document.querySelector("#myImage").src = images[hex]
},2000)

let holder = document.querySelector("#myLabel")
let color = ["black","black","white","red"];
let indes = 0
setInterval(() => {
  indes = (indes + 1) % color.length;
  holder.style.color = color[indes]
},2000)