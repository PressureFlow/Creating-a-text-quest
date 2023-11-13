const container = document.querySelector('body');
    container.classList.remove('body');
    container.classList.add("container");
    
const titleOneGame = document.createElement('h2');
    titleOneGame.textContent = "2 уровень";
    titleOneGame.classList.add("secondTitle", "titleLevel");;
    document.body.append(titleOneGame);


const firstRectangle = document.createElement('button');
    firstRectangle.classList.add("first","rectangle");
    document.body.append(firstRectangle);

const secondRectangle = document.createElement('button');
    secondRectangle.classList.add("second","rectangle");
    document.body.append(secondRectangle);

const thirdRectangle = document.createElement('button');
    thirdRectangle.classList.add("third","rectangle");
    document.body.append(thirdRectangle);

const fourRectangle = document.createElement('button');
    fourRectangle.classList.add("four","rectangle");
    document.body.append(fourRectangle);

const fiveRectangle = document.createElement('button');
    fiveRectangle.classList.add("five","rectangle");
    document.body.append(fiveRectangle);

const sixRectangle = document.createElement('button');
    sixRectangle.classList.add("six","rectangle");
    document.body.append(sixRectangle);

const sevenRectangle = document.createElement('button');
    sevenRectangle.classList.add("seven","rectangle");
    document.body.append(sevenRectangle);

let mystery = document.createElement('h3');
    mystery.textContent = "В углу сито, не руками вито.";
    mystery.classList.add("mystery");
    document.body.append(mystery);

let mysteryLevel = document.createElement('h5');
    mysteryLevel.classList.add("mysteryLevel");
    mysteryLevel.textContent = "2 из 5";
    document.body.append(mysteryLevel);


var opened = 0;

function checkOpened(){
    if (opened == 7){
        mystery.style.display = "none";
        titleOneGame.textContent = "Вы молодцы, можно переходить на другой уровень";
        const goNextBtn = document.createElement('a');
        goNextBtn.classList.add("nextLevelButton", "secondBtnLevel");
        goNextBtn.href = "thirdLevel.html";
        goNextBtn.textContent = "Идти дальше";
        goNextBtn.style.textDecoration = "none";
        document.body.append(goNextBtn);
    }
}



    document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if(event.key == 'п' && firstRectangle.textContent != 'П'){
        firstRectangle.textContent = 'П';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'а' && secondRectangle.textContent != 'А'){
        secondRectangle.textContent = 'А';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'у' && thirdRectangle.textContent != 'У'){
        thirdRectangle.textContent = 'У';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'т' && fourRectangle.textContent != 'Т'){
        fourRectangle.textContent = 'Т';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'и' && fiveRectangle.textContent != 'И'){
        fiveRectangle.textContent = 'И';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'н' && sixRectangle.textContent != 'Н'){
        sixRectangle.textContent = 'Н';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'а' && sevenRectangle.textContent != 'А'){
        sevenRectangle.textContent = 'А';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }


});

