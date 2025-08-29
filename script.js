let heartsInBox=document.getElementsByClassName('heart')
let numberOfHearts=document.getElementById("heart-number")
let count=0
for(let heart of heartsInBox){
    heart.addEventListener('click', function(){
        count++;
        numberOfHearts.innerText=count
    })
}

let totalNumberOfCopies=document.getElementById("copyTotal")
let copyButtons=document.getElementsByClassName("copy")
let copyCount=0



for(let btn of copyButtons){
    btn.addEventListener('click', function(){
        copyCount++
        totalNumberOfCopies.innerText=copyCount

        let parent=this.closest(".box")
        let phoneNumber=parent.querySelector(".phn_num")
        let toCopy=phoneNumber.innerText

        let input=document.createElement("input")
        input.value=toCopy
        document.body.appendChild(input)

        input.select()
        document.execCommand("copy")
        document.body.removeChild(input)
        alert("Number copied")
    })
}


