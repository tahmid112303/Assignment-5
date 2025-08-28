let heartsInBox=document.getElementsByClassName('heart')
for(let heart of heartsInBox){
    heart.addEventListener('click', function(){
        alert("clicked")
    })
}
