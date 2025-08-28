let heartsInBox=document.getElementsByClassName('heart')
let numberOfHearts=document.getElementById("heart-number")
let count=0
for(let heart of heartsInBox){
    heart.addEventListener('click', function(){
        count++;
        numberOfHearts.innerText=count
    })
}
