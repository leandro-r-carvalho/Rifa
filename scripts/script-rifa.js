/* Mudar a quantidade de divs apresentadas no grid */
const qtdeNum = document.getElementById('txtqtdeNum');
const divRes = document.querySelector(".numerosRifa");

/* Mostrar o numero de sorteios escolhido */
const qtdeSorteio = document.getElementById('txtqtdeSorteio');
const gerarBtn = document.querySelector("#gerar");

/* Variaveis das divs */
const n1 = document.querySelector(".num1");
const n2 = document.querySelector(".num2");
const n3 = document.querySelector(".num3");

function quantidadeSorteio() {
    /* Deixando as bolinhas do sorteio visivel */
    switch (Number(qtdeSorteio.value)) {
        case 1:
            alert (`Numero de sorteio escolhido foi, ${qtdeSorteio.value}`);
            n1.style.display = "block";
            break;
        case 2:
            alert (`Numero de sorteio escolhido foi, ${qtdeSorteio.value}`);
            n1.style.display = "block";
            n2.style.display = "block";
            break;
        case 3:
            alert (`Numero de sorteio escolhido foi, ${qtdeSorteio.value}`);
            n1.style.display = "block";
            n2.style.display = "block";
            n3.style.display = "block";
            break;
        default:
            alert (`Numero de sorteio indefinido...`);
    }

    /* aumentando a div de acordo com o numero de bolinhas */
    /* Até 40 cabe no tamanho da div criada */
    /*
    < 40 = 500px 
    50 = 700px
    60 = 800px
    70 = 900px
    80 = 1000px
    90 = 1100px
    100 =  1200px
    */
    switch (Number(qtdeNum.value)) {
        case 50:
            divRes.style.height = "700px";
            break;
        case 60:
            divRes.style.height = "800px";
            break;
        case 70:
            divRes.style.height = "900px";
            break;
        case 80:
            divRes.style.height = "1000px";
            break;
        case 90:
            divRes.style.height = "1100px";
            break;
        case 100:
            divRes.style.height = "1200px";
            break;
    }

    /* Criando as bolinhas dentro da div */
        for (let c =1; c <= Number(qtdeNum.value); c++) {
            var divPar = document.createElement("div");
            var divImpar = document.createElement("div");
            if (c % 2 == 0) {
                divPar.innerHTML += `${c} `
                document.getElementById("numerosRifa").appendChild(divPar)
                divPar.classList.add("num");
                divPar.id = "numPar";
            } else {
                divImpar.innerHTML += `${c} `
                document.getElementById("numerosRifa").appendChild(divImpar)              
                divImpar.classList.add("num");
                divImpar.id = "numImpar";
            }
        }
}

gerarBtn.addEventListener("click", quantidadeSorteio);

/* Sorteio*/
const numbers = document.querySelectorAll("#number");
const sorteioBtn = document.querySelector("#sortear");

function generateNumbers() {
    const result = [];

    while (result.length < 3) {
        const number = Math.floor(Math.random() * (Number(qtdeNum.value) - 1 + 1)) + 1;

        if(!result.includes(number)) {
            result.push(number);
        } 
    }

    for (let i =0; i < numbers.length; i++) {
        numbers[i].textContent = result[i];
    }
}

sorteioBtn.addEventListener("click", generateNumbers);