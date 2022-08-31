const addWorks = document.querySelector('.texts');
const textToDo = document.getElementById('something');  
const addSomethingToDo = document.getElementById('add');
const listToDo = document.querySelector('.list-to-do');
const toDoDatas = [];

function getSomeThingToDo(e) {
    const inputToDo = textToDo.value;
    e.preventDefault();
    const saveSomethingToDo = {
        toDoData: inputToDo
    };
    toDoDatas.push(saveSomethingToDo);
    showListToDo(toDoDatas, listToDo);
    addWorks.reset()
}

function showListToDo(items = [], showDatas) {
    showDatas.innerHTML = items.map((item) => {
        return`
        <li>
            <label>${item.toDoData}</label>
            <i class="fa-solid fa-trash" style="float:right;"></i>
        </li>
        `
    }).join('')
}

addSomethingToDo.addEventListener('click', getSomeThingToDo);

