//========================================================> variables declecration
const  easyBtn = document.getElementById("easyBtn")
const  hardBtn = document.getElementById("hardBtn")
const  getColorsBtn=document.getElementById("getColorsBtn")
const colorRGPCode=document.getElementById("colorRGPCode")
const colorBlocksContainer =document.getElementById("colorBlocksContainer")
//========================================================> functions
var levels = {
    easy: {
      name: "easy",
      numberOfCards: 3
    },
    hard: {
      name: "hard",
      numberOfCards: 6
    }
  }
var selectedLevel = "easy"
var correctAnswer ="";

function GenerateColor(){
var red =Math.trunc(Math.random()*256);
var green=Math.trunc(Math.random()*256);
var blue=Math.trunc(Math.random()*256);
var color=`rgb(${red}, ${green}, ${blue})`
return color

}
function DisplayColors(colors){
  var cardsHTML=""
    for(var i=0 ; i<colors.length;i++){
        cardsHTML += `<div class="color-card col-md-4">
      <div class="inner h-100 rounded" 
      style="background-color:${colors[i]}">
      </div>     
    </div>
    `
    }
    colorBlocksContainer.innerHTML=`<div class= "row g-4 py-4" >
    ${cardsHTML}
    </div>`
   var allcards =document.querySelectorAll(".color-card .inner")

   for (let index = 0; index < allcards.length; index++) {
    allcards[index].onclick=checkAns;
    
 }
   
   
}
function checkAns(e){

   
        if (e.target.style.backgroundColor === correctAnswer) {
          alert("Congratulation 🎉😘");
          getNewQuestion(selectedLevel)
        } else {
          e.target.style.display = "none"
          alert("try again 🔁🤭 ")
        }
      
    
}
function getNewQuestion(selectedLevel){
    cardsNum=levels[selectedLevel].numberOfCards
    colors =[]
     for(var i=0 ;i<cardsNum ;i++){
        colors.push(GenerateColor())
     }
     correctAnswer=colors[Math.trunc(Math.random()*cardsNum)]  ////////

     colorRGPCode.innerHTML=`${correctAnswer}`
     DisplayColors(colors)
}
easyBtn.addEventListener("click" ,function(){
    easyBtn.classList.add("active")
    hardBtn.classList.remove("active");

    selectedLevel = "easy"
    getNewQuestion(selectedLevel)
})
hardBtn.addEventListener("click" ,function(){
    easyBtn.classList.remove("active")
    hardBtn.classList.add("active");

    selectedLevel = "hard"
    getNewQuestion(selectedLevel)
})
getColorsBtn.addEventListener("click" ,function(){
  if (selectedLevel==="easy"){
    getNewQuestion("easy")
  }else{
    getNewQuestion("hard")

  }
})
getNewQuestion(selectedLevel)
