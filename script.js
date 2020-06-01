var rangeRed = document.querySelector('input#red'),
    valueRed = document.querySelector('span#valueRed');

var rangeGreen = document.querySelector('input#green'),
    valueGreen = document.querySelector('span#valueGreen');

var rangeBlue = document.querySelector('input#blue'),
    valueBlue = document.querySelector('span#valueBlue');

rangeRed.addEventListener('input', function () {
    valueRed.textContent = this.value;
});

rangeGreen.addEventListener('input', function () {
    valueGreen.textContent = this.value;
});

rangeBlue.addEventListener('input', function () {
    valueBlue.textContent = this.value;
});


function enviarDados() {
    let red = document.getElementById('red');
    console.log(red.value);
    let green = document.getElementById('green');
    console.log(green.value);
    let blue = document.getElementById('blue');
    console.log(blue.value);
    function mostrarResultado() {
        let valores = document.getElementsByClassName('valores')[0];
        valores.innerText = `${red.value},${green.value},${blue.value}`;
        let cor = document.getElementsByClassName('color')[0];
        cor.style.backgroundColor = `RGB(${red.value},${green.value},${blue.value})`
    }
    mostrarResultado();

    let bitsOne = red.value;
    let bitsTwo = green.value;
    let bitsThree = blue.value;

    let bitsOneH = 0;
    let bitsTwoH = 0;
    let bitsThreeH = 0;



    let resOne;
    let resOneT;
    let resOneTT;

    let resTwo;
    let resTwoT;
    let resTwoTT;

    let resThree;
    let resThreeT;
    let resThreeTT;

    function calc() {
        resOne = parseInt(bitsOne / 16); //pega o primeiro valor do termo
        resTwo = parseInt(bitsTwo / 16);
        resThree = parseInt(bitsThree / 16);
        if (resOneT == 0) {
            resOneT = 0;
        } else {
            resOneT = bitsOne % 16; // pega o segundo valor do termo
        }

        if (resTwoT == 0) {
            resTwoT = 0;
        } else {
            resTwoT = bitsTwo % 16;
        }

        if (resThreeT == 0) {
            resThreeT = 0;
        } else {
            resThreeT = bitsThree % 16;
        }
    }

    function numberToStringOne() {
        if (resThreeT >= 10 && resOneT <= 15) {
            resOneTT = resOneT.toString(16);
        } else {
            resOneTT = resOneT;
        }
    }

    function numberToStringTwo() {
        if (resThreeT >= 10 && resTwoT <= 15) {
            resTwoTT = resTwoT.toString(16);
        } else {
            resTwoTT = resTwoT;
        }
    }

    function numberToStringThree() {
        if (resThreeT >= 10 && resThreeT <= 15) {
            resThreeTT = resThreeT.toString(16);
        } else {
            resThreeTT = resThreeT;
        }
    }

    function getIntegerOne() {
        let convert = parseInt(bitsOne / 16);
        if (convert >= 10 && convert <= 15) {
            bitsOneH = convert.toString(16);
        } else {
            bitsOneH = convert;
        }
    }
    function getIntegerTwo() {
        let convert = parseInt(bitsTwo / 16);
        if (convert >= 10 && convert <= 15) {
            bitsTwoH = convert.toString(16);
        } else {
            bitsTwoH = convert;
        }
    }
    function getIntegerThree() {
        let convert = parseInt(bitsThree / 16);
        if (convert >= 10 && convert <= 15) {
            bitsThreeH = convert.toString(16);
        } else {
            bitsThreeH = convert;
        }
    }


    calc();
    numberToStringOne();
    numberToStringTwo();
    numberToStringThree();
    getIntegerOne();
    getIntegerTwo();
    getIntegerThree();

    console.log(`RGB(${bitsOne},${bitsTwo},${bitsThree})    ----- Red, Green, Blue`);
    console.log('#' + bitsOneH + resOneTT + bitsTwoH + resTwoTT + bitsThreeH + resThreeTT + '     ----- Hexadecimal');
    
    let resultado = document.getElementsByClassName('resultado')[0];
    resultado.innerHTML = `#${bitsOneH}${resOneTT}${bitsTwoH}${resTwoTT}${bitsThreeH}${resThreeTT}`
}


