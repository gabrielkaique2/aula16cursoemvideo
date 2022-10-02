var userNumbers = [];

function adicionar(){

    //Não pode adicionar o mesmo número e NÃO pode adicionar vazio XXXXX

    var textAreaNumber = document.querySelector("input#numUser");
    var numUser = Number(textAreaNumber.value);
    var campoS = document.querySelector("select#valores");
    var el = document.createElement('option');

    if(userNumbers.indexOf(numUser) != -1){
        alert(`O valor ${userNumbers[userNumbers.indexOf(numUser)]} Já está na lista! Coloque outro!`)

    }else{

        if(numUser < 1 || numUser > 100){
        alert("O valor tem que ser entre 1 e 100")
        }else{
        userNumbers.push(numUser)
        el.text = `Valor ${numUser} adicionado`;
        campoS.appendChild(el)

        }
        }
        //console.log(numUser)
    //return userNumbers
}

    /* 1 - Mostrar total de números XXXXX
       2 - Mostrar o maior valor
       3 - Mostrar o menor valor
       4 - mostrar a soma dos valores XXXXXX
       5 - mostrar a média dos valores obs: mostrar somente 2 casas decimais!
    */
function calcula(){
    var total = userNumbers.length;
    var campoR = document.querySelector('section#formsection')
    var resp = document.createElement('p')

    resp.innerHTML = ''
    resp.innerHTML = `Você adicionou ${total} números <br> A soma dos seus números é ${somar()} <br>`
    campoR.appendChild(resp);
}

function somar(){
    var c = 0
   for(let pos = 0; pos < userNumbers.length ; pos++){
    c += userNumbers[pos]
   } return c;
}