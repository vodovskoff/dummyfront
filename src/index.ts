document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) {
        console.error('чет не то');
        return;
    }
    
    const appState = {
        user: "блаблаблаблалбалба",
        counter: 0,
    };

    const btnPrison: HTMLButtonElement = document.createElement('button');
    btnPrison.innerText = "Кто нажмет тот узник";
    btnPrison.addEventListener('click', function handlePrisonClick() {
        alert('Привет, узник!');
        
        document.cookie = `user=${appState.user}; path=/; max-age=3600`;
        
        const info: HTMLParagraphElement = document.createElement('p');
        info.innerText = "Ты узник!";
        app.appendChild(info);
        
        btnPrison.removeEventListener('click', handlePrisonClick);
    });
    app.appendChild(btnPrison);
    
    const input: HTMLInputElement = document.createElement('input');
    input.type = "text";
    input.placeholder = "Введите";
    app.appendChild(input);
    
    const display: HTMLParagraphElement = document.createElement('p');
    display.innerText = "тут твой текст будет узник";
    app.appendChild(display);

    input.addEventListener('input', () => {
        display.innerText = input.value;
    });
    
    const form: HTMLFormElement = document.createElement('form');
    form.innerHTML = `
        <input type="text" name="username" placeholder="Имя" required />
        <button type="submit">Отправить</button>
    `;
    app.appendChild(form);
    
    document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            display.innerText = "";
        }
    });
    
    app.addEventListener('mouseover', () => {
        console.log("Наведение на область приложения");
    });
});
