const container = document.querySelector('body');
    container.classList.remove('body');
    container.classList.add("container");
    
const titleOneGame = document.createElement('h2');
    titleOneGame.textContent = "5 уровень";
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


let mystery = document.createElement('h3');
    mystery.textContent = "Она может постареть всего за пару часов. Она приносит людям пользу, убивая при этом себя. Ветер и вода могут спасти её от гибели. Что это такое?";
    mystery.classList.add("mystery");
    document.body.append(mystery);

let mysteryLevel = document.createElement('h5');
    mysteryLevel.classList.add("mysteryLevel");
    mysteryLevel.textContent = "5 из 5";
    document.body.append(mysteryLevel);


var opened = 0;

function checkOpened(){
    if (opened == 6){
        mystery.style.display = "none";
        titleOneGame.textContent = "Поздравляю, вы прошли игру!";
        const goNextBtn = document.createElement('a');
        goNextBtn.classList.add("nextLevelButton", "fiveBtnLevel");
        goNextBtn.href = "start.html";
        goNextBtn.textContent = "Главное меню";
        goNextBtn.style.textDecoration = "none";
        document.body.append(goNextBtn);
    }
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if(event.key == 'с' && firstRectangle.textContent != 'С'){
        firstRectangle.textContent = 'С';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'в' && secondRectangle.textContent != 'В'){
        secondRectangle.textContent = 'В';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'е' && thirdRectangle.textContent != 'Е'){
        thirdRectangle.textContent = 'Е';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'ч' && fourRectangle.textContent != 'Ч'){
        fourRectangle.textContent = 'Ч';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'к' && fiveRectangle.textContent != 'К'){
        fiveRectangle.textContent = 'К';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'а' && sixRectangle.textContent != 'А'){
        sixRectangle.textContent = 'А';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
});