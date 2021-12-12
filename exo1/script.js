while(true){
    const sentence = prompt("Poser une questoin")
    sArray = sentence.split('')
    const lengthArray = (sArray.length-1)
    if (sArray[lengthArray] === "?") {
        console.log("c'est pas faux");
    }else if (sentence === sentence.toUpperCase() && sentence !== "") {
        console.log("Vas-y, calme-toi wesh !");

    } else if(sentence.includes("Javascript")){
        console.log("oula ça à l'air dur ton truc... flemme");
    }else if (sentence.length === 0) {
        console.log("tes en PLS ?");
    }else{
        console.log("balek");
    }
}
