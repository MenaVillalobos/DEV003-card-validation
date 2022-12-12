
const validator = {
  validateCard:function(){
    let cardArray=document.getElementById("cardNumber").value;
    cardArray=cardArray.split("");
    let cardArrayReverse=cardArray.reverse();
    console.log(cardArrayReverse);
    cardArrayReverse=cardArrayReverse.map(function (digits,numbers) {
      if (numbers %2 === 1){ //En lugar de buscar la diferencia con 0 buscamos la igualdad con 1
        const duplicatedDigits=digits*2;
        if (duplicatedDigits>=10){
          return duplicatedDigits-9;
        }
        return duplicatedDigits;
      }
      return parseInt(digits);
      
    });
    console.log(cardArrayReverse);
    // 1º iteración: mult posiciones pares x2
    // map() solo se usa con arrays
    let finalSumResult=0; 
    cardArrayReverse.map(function (num) {
      finalSumResult=finalSumResult+num
      //finalSumResult+=num
    })
    console.log(finalSumResult);

    if (finalSumResult%10===0) {
      return true;
    } 
    return false;
  },
  
  //finalSum:function (cardArrayReverse) {
  //let cardDigitSum=cardArrayReverse.
    
  //},

  maskify: function() {
    let card=document.getElementById("cardNumber").value;
    
    card=card.split("")
    for (let index = 0; index < card.length-4; index++) {
      card[index]="#";
      
    }
    card=card.join("") //string
    console.log(card);

 
    document.getElementById("maskedNumber").innerText=card;
    //maskedNumber es mi boton guardar


    
  },
  //mena: "ayudaaaaa"
};


/*const ayuda=document.getElementById("cardNumber");
console.log(Object.values(ayuda));


const ayudaAgain=Array.from(document.getElementById("cardNumber"));
console.log(Object.values(ayudaAgain));

const ayudaAgainAgain=Object.values(document.getElementById("cardNumber"));
console.log(ayudaAgainAgain);

const card=document.getElementById("cardNumber").value;
console.log(card);*/

export default validator;
