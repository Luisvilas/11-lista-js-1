/**** Escreva o código abaixo 👇******/
function somar(a,b){
    return a + b
}

somar(2,3)

function multiplicar(a,b){
    return a * b
}

multiplicar(2,3)

function subtrair(a,b){
    return a - b
}

subtrair(5,3)

function dividir(a,b){
  if (b === 0){
    return "Error"
  }else{
    return a / b
  }
    
  
}

dividir(6,3)

function calcularMedia(a,b,c,d){
  const media= (a + b + c + d)/4
  return media
}

calcularMedia(7,8,9,10)

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
