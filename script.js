window.openWhatsapp = function(){
  const selecionarPais = document.getElementById("paisSelect").value;
  const phoneNumber = document.getElementById("NumeroInput").value;
  /* pegar + e o ID do pais, juntando com numero digitado */
  if(validatePhoneNumber(phoneNumber)){
    const numeroCompleto = `+${selecionarPais}${phoneNumber}`;
    
    alert(`O codigo de País (+${selecionarPais}) numero insirido é (${phoneNumber}). tudo fica: ${numeroCompleto}`)
  }
}

function validatePhoneNumber (phoneNumber){
  return /^\d+$/.test(phoneNumber);
}