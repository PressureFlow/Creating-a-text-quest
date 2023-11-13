const start = document.querySelector(".startBtn");

start.addEventListener('click', ()=> {
    start.style.display = "none";

    const title = document.createElement('h1');
    title.textContent = "Укажите свое имя"; 
    document.body.append(title);

    const inpName = document.createElement('input');
    const enterName = document.createElement('button');

    inpName.classList.add("inputName");
    enterName.classList.add("btninput");

    enterName.textContent = "Ввод";

    document.body.append(inpName);
    document.body.append(enterName);

    enterName.addEventListener('click', ()=> {
        let userName = inpName.value;
        console.log(userName);
    
    
        enterName.style.display = "none";
        inpName.style.display = "none";
    
        title.textContent = `Добро пожаловать ${userName} !`;
    
        const startPlay = document.createElement('button');
        startPlay.textContent = "Продолжить";
    
        startPlay.onclick = window.location = "FirstLevel.html";
    });
});
    

    

