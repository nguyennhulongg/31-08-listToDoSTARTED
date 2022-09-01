const addWorks = document.querySelector('.texts');
const textToDo = document.getElementById('something');  
const addSomethingToDo = document.getElementById('add');
const listToDo = document.querySelector('.list-to-do');
const dataStorage = localStorage.getItem('data');
const toDoDatas = dataStorage ? JSON.parse(dataStorage) : [];

function getSomeThingToDo(e) {
    const inputToDo = textToDo.value;
    if (!inputToDo) return;
    e.preventDefault();
    const saveSomethingToDo = {
        toDoData: inputToDo,
        id: Math.floor(Math.random() * 1000)
    };

    toDoDatas.push(saveSomethingToDo);
    addWorks.reset()
    
    localStorage.setItem('data', JSON.stringify(toDoDatas));
    showListToDo();
}

function showListToDo() {
    listToDo.innerHTML = toDoDatas.map((data) => {
        return`
        <li>
            <label>${data.toDoData}</label>
            <i class="fa-solid fa-trash" style="float:right;" onclick="abc()" ></i>
        </li>
        `
    }).join('')
}

showListToDo();

addSomethingToDo.addEventListener('click', getSomeThingToDo);

