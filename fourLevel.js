const container = document.querySelector('body');
    container.classList.remove('body');
    container.classList.add("container");
    
const titleOneGame = document.createElement('h2');
    titleOneGame.textContent = "4 уровень";
    titleOneGame.classList.add("firstTitle", "titleLevel");;
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
    mystery.textContent = "Что невозможно удержать и десяти минут, хотя оно легче пёрышка?";
    mystery.classList.add("mystery");
    document.body.append(mystery);

let mysteryLevel = document.createElement('h5');
    mysteryLevel.classList.add("mysteryLevel");
    mysteryLevel.textContent = "4 из 5";
    document.body.append(mysteryLevel);


var opened = 0;

function checkOpened(){
    if (opened == 7){
        mystery.style.display = "none";
        titleOneGame.textContent = "Вы молодцы, можно переходить на другой уровень";
        const goNextBtn = document.createElement('a');
        goNextBtn.classList.add("nextLevelButton", "fourBtnLevel");
        goNextBtn.href = "fiveLevel.html";
        goNextBtn.textContent = "Идти дальше";
        goNextBtn.style.textDecoration = "none";
        document.body.append(goNextBtn);
    }
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if(event.key == 'д' && firstRectangle.textContent != 'Д'){
        firstRectangle.textContent = 'Д';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'ы' && secondRectangle.textContent != 'Ы'){
        secondRectangle.textContent = 'Ы';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'х' && thirdRectangle.textContent != 'Х'){
        thirdRectangle.textContent = 'Х';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'а' && fourRectangle.textContent != 'А'){
        fourRectangle.textContent = 'А';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'н' && fiveRectangle.textContent != 'Н'){
        fiveRectangle.textContent = 'Н';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'и' && sixRectangle.textContent != 'И'){
        sixRectangle.textContent = 'И';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'е' && sevenRectangle.textContent != 'Е'){
        sevenRectangle.textContent = 'Е';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
});