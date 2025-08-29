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


let callButtons=document.getElementsByClassName("call")
let callRecords=document.getElementById("call-records")
let numberOfCoins=document.getElementById("number_of_coins")

for(let button of callButtons){
    button.addEventListener('click', function(){
        if(parseInt(numberOfCoins.innerText)===0){
            alert("You can't call! Insufficient Coins.")
        }else{
            let parent=this.closest(".box")
            let serviceType=parent.querySelector(".gov_service_name")
            alert(`Calling "${serviceType.innerText}"`)
            numberOfCoins.innerText=parseInt(numberOfCoins.innerText)-20
        }

            const box=this.closest(".box")
            const serviceName = box.querySelector(".gov_service_name");
            const phoneNumber = box.querySelector(".phn_num");
            const now= new Date()
            const time=now.toLocaleTimeString()
    
            let entry = document.createElement("div");
            entry.classList.add("history-item", "flex", "justify-between", "items-center", "bg-gray-100", "p-3", "rounded-lg", "shadow-sm");
            entry.innerHTML = `
            <div class="history-left flex flex-col">
              <strong class="text-sm text-gray-800">${serviceName.innerText}</strong>
              <span class="text-xs text-gray-600">${phoneNumber.innerText}</span>
            </div>
            <div class="history-time text-xs text-gray-700">${time}</div>
          `;
          callRecords.appendChild(entry)
        
    })
}

const clearButton=document.getElementById("clear_btn")
const entries = document.querySelectorAll(".history-item");
clearButton.addEventListener('click', function(){
    entries.innerHTML=""
})



