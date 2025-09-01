const work1 = document.querySelector("#myWork1");
work1.addEventListener("click", event => {
  const auth =  confirm("Are you sure you want to go to timer? ")
      if(!auth){
        event.preventDefault()
  }
})
const work2 = document.querySelector("#myWork2");
work2.addEventListener("click", event => {
  const auths =  confirm("Are you sure you want to go to Anime-fandom? ")
      if(!auths){
        event.preventDefault()
  }
})

const date = new Date()
const date1 = date.getDay().toString().padStart(2,0)
const date2 = date.getMonth().toString().padStart(2,0)
const date3 = date.getFullYear()
const dates = document.querySelector("#myDates")
dates.textContent = `${date1}/${date2}/${date3}`

const sections = document.querySelectorAll(".section")
function scrolling(){
sections.forEach(scrollers => {
  const all = scrollers.getBoundingClientRect()
  if(all.top < window.innerHeight - 100){
    scrollers.classList.add('show')
  } 
})}
window.addEventListener("scroll",scrolling)
scrolling()
// const box = document.getElementById("myDivs")
// window.addEventListener('scroll', () => {
//   const scopes = box.getBoundingClientRect()
//   console.log(scopes.top)
//   if(scopes.top < window.innerHeight - 100){
//     box.classList.add('show')
//   }else{
//     box.classList.remove('show')
//   }
// })
// const box1 = document.getElementById("myDivs1")
// window.addEventListener('scroll', () => {
//   const scopes1 = box.getBoundingClientRect()
//   console.log(scopes1.top)
//   if(scopes1.top < window.innerHeight - 200){
//     box.classList.add('show')
//   }
// })
// #myDivs{
//   opacity: 0;
//   transform: translateY(50px);
//   transition: all 0.6s ease;
// }
// #myDivs.show{
//   opacity: 1;
//   transform: translateY(0);
// }

