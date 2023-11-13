
    alert("Вы точно хотите приступить к игре?");
    
    const container = document.querySelector('body');
    container.classList.remove('body');
    container.classList.add("container");

    
    const titleOneGame = document.createElement('h2');
    titleOneGame.textContent = "1 уровень";
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

    let mystery = document.createElement('h3');
    mystery.textContent = "Живет в норке, грызет корки. Короткие ножки, боится кошки.";
    mystery.classList.add("mystery");
    document.body.append(mystery);

    let mysteryLevel = document.createElement('h5');
    mysteryLevel.classList.add("mysteryLevel");
    mysteryLevel.textContent = "1 из 5";
    document.body.append(mysteryLevel);


    
    var opened = 0;

    function checkOpened(){
        if (opened == 4){
            mystery.style.display = "none";
            titleOneGame.textContent = "Вы молодцы, можно переходить на другой уровень";
            const goNextBtn = document.createElement('a');
            goNextBtn.classList.add("nextLevelButton");
            goNextBtn.href = "Second.html";
            goNextBtn.textContent = "Идти дальше";
            goNextBtn.style.textDecoration = "none";
            document.body.append(goNextBtn);
        }
    }



    document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if(event.key == 'м' && firstRectangle.textContent != 'М'){
        firstRectangle.textContent = 'М';
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
    else if(event.key == 'ш' && thirdRectangle.textContent != 'Ш'){
        thirdRectangle.textContent = 'Ш';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }
    else if(event.key == 'ь' && fourRectangle.textContent != 'Ь'){
        fourRectangle.textContent = 'Ь';
        opened += 1;
        console.log('Угадано ' + opened + " буквы");
        checkOpened();
    }});

                                              








