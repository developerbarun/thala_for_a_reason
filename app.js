const submitBtn = document.querySelector("#sub");
let text = document.querySelector("#input");
const container = document.querySelector(".container")
const result = document.querySelector(".result");
const para = document.querySelector("p");
const thala = document.querySelector(".thala");
const noThala = document.querySelector(".nothala");
const audio = document.querySelector("#audio");

const sumOfDigit = (num) => { 
    let numStr = num.toString(); 
    let sum = 0; 
    for (let digit of numStr) { 
        sum += parseInt(digit); 
    } 
    return sum; 
} 

const showThala = () => {
    let textValue = text.value.replace(/\s+/g, "");

    if(textValue === "7" || textValue.length === 7) {
        para.innerText = "THALA FOR A REASON"
        container.classList.add("no");
        thala.classList.remove("hide")
        audio.play();

    }else if(sumOfDigit(textValue) == 7){
        // para.innerText = "NO THALA FOR YOU"
        para.innerText = "THALA FOR A REASON"
        container.classList.add("no");
        result.classList.remove("hide")
        audio.play();

    }else if(textValue.length === 0){
        para.innerText = "";

    }
    else{
        para.innerText = "NO THALA FOR YOU"
        noThala.classList.remove("hide")
    }
}

submitBtn.addEventListener("click",showThala)