let input = document.getElementById("Allow");
let Btn = document.getElementById("myBtn");
let labss = document.getElementById("myLabel");
let labss1 = document.getElementById("myMain");
let img =  document.getElementById("onePiece");
let img1 = document.getElementById("blackClovevr")
let img2 = document.getElementById("danDan")
let img3 = document.getElementById("demOms")
Btn.addEventListener("click",() => {
  setTimeout(() =>{
    if(input.value){
    labss.textContent = `You are now officially a ${input.value} fan`;
    }else{
      labss.textContent = "Please fill something.."
    }
  },3000)
  setTimeout(() => {
      if(input.value == "onePiece" || input.value == "One Piece" || input.value == "OnePiece" || input.value == "Onepiece" || input.value == "onepiece"){
      img.style.display = "block"
    }else{
      img.style.display = "none"   }
     if(input.value == "Black clover" || input.value == "black clover" || input.value == "blackclover" || input.value == "Blackclover"){
      img1.style.display = "block"
    }else{
      img1.style.display = "none"}
      if(input.value == "Dandandan" || input.value == "dandandan"){
        img2.style.display = "block"
      }else{
        img2.style.display = "none"
      }if(input.value == "demon slayer" || input.value == "Demon slayer" || input.value == "Demonslayer" ||  input.value == "DemonSlayer"){
        img3.style.display = "block"
      }else{
        img3.style.display = "none"
      }
    
  },4000)
})
let Btns = document.getElementById("myBtns");
let head = document.getElementById("myHead");
let lab = document.getElementById("myLabel1")
Btns.addEventListener("click",() => {
   document.body.style.backgroundColor = "black"
  head.style.color = "white"
  lab.style.color = "white"
  labss.style.color = "white"
}) 
  // const wrap = document.getElementById("divClass")
  // wrap.classList.toggle("dark"
// var number = 19
// var string = "asdfghj"

// var age = 18

// document.write(string)

// if (age >= 20){
//     document.write("You are an adult.")
// }
// else{
//     document.write("You are a child")
// }

// for(i = 0; i < 100; i+=1 ){
//     document.write("I love you ")
// }
// let num = 9
// let length = num.toString().padStart(2,9)
// let length = num.toString().padEnd(2,"c")
// console.log(length)