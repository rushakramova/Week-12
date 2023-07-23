//Определение кнопки отправки
const button = document.querySelector("button");

const form = document.querySelector("form");

//Получение скрытого имени
const showName = document.getElementById("yes");

//Определение события по нажатию кнопки
function addChat(event) {

    //Получение имени пользователя
    const username = document.querySelector("#username").value;

    //Функция приведение к верному регистру имени пользователя
    const rightName = (name) => {
        if (showName.checked && name.length !== 0) {
            const checkedName = name.toLowerCase();
            result = checkedName[0].toUpperCase() + checkedName.substring(1);
            return result;
        } else {
            result = "Username";
            return result;
        }
    };

    //Присвоение правильного значения имени
    nameInfo = rightName(username);

    //Получение введенной ссылки аватара
    const img = document.querySelector("#link").value;

    //Получение комментария
    const textarea = document.querySelector("#textarea").value;

    //Очищение комментария от стоп-слов
    const clearComment = (text) => {
        text = text.replace(/viagra/i, '***');
        text = text.replace(/xxx/i, '***');
        return text;
    };

    //Присвоение правильного значения комментарию
    const checkedComment = clearComment(textarea);

    //Переменная-родитель для создания дива
    const mainDiv = document.querySelector('.container__user__info');

    //Добавление даты и времени
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const date = `${now.getDate()}`.padStart(2, 0);
    const hours = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    const seconds = `${now.getSeconds()}`.padStart(2, 0);
    const showDate = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    //Создание дива-родителя для аватара, имени и времени
    const div = document.createElement('div');
    div.className = 'container__chat__div';
    mainDiv.appendChild(div);

    //Массив из изображений
    const arrImg = ["assets/images/img1.jpg", "assets/images/img2.jpg", "assets/images/img3.jpg", "assets/images/img4.jpg", "assets/images/img5.jpg", "assets/images/img6.jpg", "assets/images/img7.jpg", "assets/images/img8.jpg", "assets/images/img9.jpg", "assets/images/img10.jpg"];


    //Создание тега img с ссылкой на аватар
    const avatar = new Image();
    avatar.className = 'container__chat__image';
    if (img.length !== 0) {
        avatar.src = img;
    } else {
        position = Math.floor(Math.random() * (arrImg.length));
        avatar.src = arrImg[position];
    };

    //Создание тега имени со значением имени 
    const name = document.createElement('p');
    name.textContent = nameInfo;
    name.className = 'container__chat__name';

    //Создание тега даты со значением даты публикации
    const dateWindow = document.createElement('p');
    dateWindow.textContent = showDate;
    dateWindow.className = 'container__date';

    //Добавление элементов аватара, имени и даты в родительский див
    div.append(avatar, name, dateWindow);

    //Создание окна комментария
    let comment = document.createElement('p');
    comment.textContent = checkedComment;
    comment.className = 'container__chat__comment';
    mainDiv.appendChild(comment);

    //Удаление введенной информации из формы
    form.reset();
}

//Cоздание события при клике на кнопку
button.addEventListener('click', addChat);
