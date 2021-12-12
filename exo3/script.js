const btnoperand = document.querySelectorAll(".operand")
const disp = document.querySelector("#display")
const AC = document.querySelector(".clear")
const operator = [...document.querySelectorAll(".operator")]
const equal = document.querySelector(".equals")
const o = operator.map(touche => touche.dataset.key)
let a = 0
let b = 0
const add = (a,b) => {
    disp.innerText = parseInt(a+b)   
}
const subtract = (a,b) => {
    disp.innerText = parseInt(a-b)
}
const multiply = (a,b) => {
    disp.innerText = parseInt(a*b)

}
const divide = (a,b) => {
    disp.innerText = parseInt(a/b)
    
}
const calcul = () => {
    if (disp.innerText.includes("+")) {
        add(a,b)
    }else if(disp.innerText.includes("*")){
        multiply(a,b)
    }else if(disp.innerText.includes("/")){
        divide(a,b)
    }else if(disp.innerText.includes("-")){
        subtract(a,b)
    }
}
const run = (event) => { 
    if (event.target.innerText === "0") {
        disp.innerText = "0"
    }else if(!disp.innerText.includes("+" || "-" || "*" || "/")){
        disp.innerText += event.target.innerText
        a = parseInt(disp.innerText)
        console.log(a);
    }else if(disp.innerText.includes("+" || "-" || "*" || "/")){
        if (disp.innerText.includes("+")) {
            disp.innerText = "+"
            disp.innerText += event.target.innerText
            b = parseInt(disp.innerText)
            console.log(b);
        }else if(disp.innerText.includes("*")){
            disp.innerText = "*"
            disp.innerText += event.target.innerText
            b = parseInt(disp.innerText)
            console.log(b);
        }else if(disp.innerText.includes("/")){
            disp.innerText = "/"
            disp.innerText += event.target.innerText
            b = parseInt(disp.innerText)
        }else if(disp.innerText.includes("-")){
            disp.innerText = "-"
            disp.innerText += event.target.innerText
            b = parseInt(disp.innerText)
        }
    }
    }

function forclear() {
    disp.innerText = "";
}
AC.addEventListener("click", forclear)
equal.addEventListener("click", calcul)

const number = () => {
    disp.innerText = ""
    btnoperand.forEach(element => {
        element.addEventListener("click",run)
    })
}

const operat = () => {
    operator.forEach(element => {
        element.addEventListener("click",run)
    })
}
number()
operat()
