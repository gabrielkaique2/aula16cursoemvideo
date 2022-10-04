var userNumbers = [];

function adicionar(){
    var textAreaNumber = document.querySelector("input#numUser");
    var numUser = Number(textAreaNumber.value);
    var campoS = document.querySelector("select#valores");
    var el = document.createElement('option');
    let cR = document.querySelector('div#resp')

    if(userNumbers.indexOf(numUser) != -1){
        alert(`O valor ${userNumbers[userNumbers.indexOf(numUser)]} Já está na lista! Coloque outro!`)

    }else{

        if(numUser < 1 || numUser > 100){
        alert("O valor tem que ser entre 1 e 100")
        }else{
        userNumbers.push(numUser)
        el.text = `Valor ${numUser} adicionado`;
        campoS.appendChild(el)
        cR.innerHTML = ''

        }
        }
    textAreaNumber.value = '';
    textAreaNumber.focus();
}

function calcula(){
    var total = userNumbers.length;
    var campoR = document.querySelector('div#resp')
    var resp = document.createElement('p')
    
    if(total == 0){
        alert('[ERRO] Insira pelo menos 1 elemento na lista')
    }else{
        resp.innerHTML = ''
        resp.innerHTML = `Você adicionou ${total} números <br> A soma dos seus números é ${somar()} <br> A média dos valores é ${media()} <br> O maior valor da lista é ${maiorMenor('b')} <br> O menor valor da lista é ${maiorMenor('a')}`
        campoR.appendChild(resp);    
    }

}

function somar(){
    var c = 0
   for(let pos = 0; pos < userNumbers.length ; pos++){
    c += userNumbers[pos]
   } return c;
}

function media(){
    var medUserNumbers = somar()/userNumbers.length
    return parseFloat(medUserNumbers).toFixed(2);
}

function maiorMenor(opt){
    userNumbers.sort(function ordena(a,b){return a-b;});

    var menorValor = Number(userNumbers[0]);
    var maiorValor = Number(userNumbers[userNumbers.length-1]);

    if (opt == 'a'){
        return menorValor;
    }else if(opt == 'b'){
        return maiorValor;
    }
}