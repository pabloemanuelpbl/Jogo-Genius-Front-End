//variaveis iniciais
let passos = []     //lista das 
let chances = 0
let estagio = [1, 1] //level
let recorde = 0
let n = 2


//  puchando elementos    [blue, yellow, red, green]
let blue = document.querySelector('.divBlue')
let yellow = document.querySelector('.divYellow')
let red = document.querySelector('.divRed')
let green = document.querySelector('.divGreen')
let level = document.querySelector('.level')
let execAviso = document.querySelector('.executando')
let vida = document.querySelector('.vida')
let record = document.querySelector('.record')
let button = document.querySelector('.buttonStart')

//event listener
blue.addEventListener('click', ()=>mudarCor(blue, 500, 1))
yellow.addEventListener('click', ()=>mudarCor(yellow, 500, 2))
red.addEventListener('click', ()=>mudarCor(red, 500, 3))
green.addEventListener('click', ()=>mudarCor(green, 500, 4))

//  randomico de 1 a 4
function randomico(){
    return (Math.random()*(4-1)+1).toFixed()
}
// validação
function validar(retorno) {
    if (+retorno == +passos[0]){
        console.log('acertou miseravel!')
        passos.shift()
        if (passos.length === 0){
            window.alert('Proximo')
            --n
            if(n===0){
                estagio.push(1)
                level.innerHTML = 'Level: '+(estagio.length-1);
                n=2
            }
            button.hidden = false;
        }
    } else {
        window.alert('errou -1 vida!')
        --chances
        vida.innerText = chances;
        button.hidden = false
    }
    if(chances == 0){
        window.alert('Fim de Jogo!!')
        if(estagio.length>recorde){
            recorde = estagio.length
            record.innerText = recorde-1
            button.hidden = false
            estagio = [1, 1]
            n = 2
            button.innerText = 'Reiniciar'
        }
    }
}

//animação de click
function mudarCor(elemento, time, retorno){  //elemento, tempo de opacidade
    elemento.classList.add('selected')
    setTimeout(()=>elemento.classList.remove('selected'), time)
    if (chances>0){
        if(retorno){    //para o click
            validar(retorno)
        }
    } else {
        window.alert('aperte start para inicia nova partida!')
        n = 2
    }
    
}

 
//  timeout
const start = async () => {
    let randNum;
    chances==0?chances=3:null;
    button.hidden = true
    vida.innerText = chances
    passos = []
    execAviso.innerText = 'em execução...'
    level.innerHTML = 'Level: '+(estagio.length-1);
    for (const item of estagio) {
      await new Promise(r => setTimeout(r, 2000));  //tempo entre a passagem 
      randNum = randomico();
      //console.log(randNum) //para debugar os numeros
      passos.push(randNum);   
      switch(+randNum){
          case 1:
              mudarCor(blue, 1200)   //tempo para retornar cor
              break;
          case 2:
              mudarCor(yellow, 1200)
              break;
          case 3:
              mudarCor(red, 1200)
              break;
          case 4:
              mudarCor(green, 500)
              break;
          default:
              console.warn('[!] ouve um erro')
              break;
      }
    }
    execAviso.innerText = 'resolva!'
    //console.log(passos) //para debugar respostas
}

function hacking(){
    this.res = []
    passos.map((val)=>{
        switch(+val){
            case 1:
                this.res.push('blue')
                break;
            case 2:
                this.res.push('yellow')
                break;
            case 3:
                this.res.push('red')
                break;
            case 4:
                this.res.push('green')
                break;
            default:
                console.warn('[!] ouve um erro')
                break;
        }
        
    })
    console.log(this.res)
}






