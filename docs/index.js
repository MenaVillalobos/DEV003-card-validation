import validator from "./validator.js";

console.log(validator);

validator.maskify()

//console.log(validator.mena)

//document.getElementById("maskify").addEventListener("submit",isValid);

function handleSubmit(e) { //Para evitar que se refresque la página
  e.preventDefault();
  isValid();
  validator.maskify();
}

//document.getElementById("maskify").addEventListener("submit",validator.maskify);
document.getElementById("formContainer").addEventListener("submit",handleSubmit);
//document.getElementById("formContainer").addEventListener("submit",handleSubmit);


document.getElementById("cardNumber").addEventListener("input",showCard);
function showCard(event){
  let inputCardNumber=event.target.value;
  
  inputCardNumber=inputCardNumber.replace(/[^0-9]+/g, "");
  console.log(inputCardNumber);

  document.getElementById("cardNumber").value=inputCardNumber;

  console.log(event.target.value);
  document.getElementById("maskedNumber").innerText=inputCardNumber;
  //maskedNumber es mi boton guardar

}

function isValid(){ //Cambiar handleValidate por isValid porque así pide la descripción
  
  const showIfIsValid=validator.validateCard();
  let message="";
  let backgroundColor="";
  let border="";
  console.log(showIfIsValid);

  
  const validCard=document.getElementById("validOrInvalid");
  if (showIfIsValid) {
    message=" ✅ ¡Tarjeta válida! 🥳"
    backgroundColor="#8af293"
    border="2px solid #0d7504"
  
  } else{
    message="🚫 Lo sentimos, tu tarjeta no es válida 😢"
    backgroundColor="#f2988a"
    border="2px solid #9e1b06"
  }

  validCard.innerText=message;
  validCard.style.backgroundColor=backgroundColor;
  validCard.style.display="block";
  validCard.style.border=border;
}





