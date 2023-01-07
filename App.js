let taskHeading = document.querySelector(".task-heading");
let input = document.querySelector(".add-input");
let button = document.querySelector(".add-btn");
const containerList = document.querySelector(".container-list");
const modle_container = document.querySelector('.modle-container');

input.setAttribute("placeholder", "Please Enter Task");

button.addEventListener('click', addTask)
function addTask() {
    if(input.value === "") {
        alert("please enter task");
    }
    else {
    let inputValue = input.value;
    // i create a card div 
    const openList = document.createElement('div');
    openList.classList = "container-list1-item";
    // i create a name 
    const nameOfTask = document.createElement('h4');
    nameOfTask.innerText = inputValue;
    // i create a card description(paragraph)
    const descriptionOfTask = document.createElement('p');
    descriptionOfTask.classList = "description";
    // i create a card delete btn
    const deleteTask = document.createElement('button');
    deleteTask.classList = "delete";
    deleteTask.innerText = "";
    // i create a bar line 
    const itemColor = document.createElement('div');
    itemColor.classList.add('item-color');
    openList.appendChild(itemColor);
    
    openList.append(nameOfTask, descriptionOfTask, deleteTask)
    containerList.appendChild(openList);

    // I have created a function to remove the card
    deleteTask.addEventListener('click', (e) => {
        e.stopPropagation()
        openList.remove();
    })
    editModel(openList, nameOfTask, descriptionOfTask);
    input.value = null;
    // drag & drop functionality
    openList.setAttribute("draggable", "true");
    openList.addEventListener('dragstart', () => {
        openList.classList.add('dragging');
    });
    openList.addEventListener('dragend', () => {
        openList.classList.remove('dragging');
    });
    const listcontainer = document.querySelectorAll('.container-list');
    listcontainer.forEach((list) => {
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingElm = document.querySelector('.dragging');
            list.appendChild(draggingElm);
        })
    })
}
}

// i create a modal functionality
function editModel(div, ip, des) {
    div.addEventListener('dblclick', (e) => {
        e.stopPropagation()

        // store div
        const storeDiv = document.createElement('div');
        storeDiv.classList = "modle-container-style"
        // input lable
        const taskLable = document.createElement('lable');
        taskLable.innerText = "Task Name";
        // description lable
        const descriptionLable = document.createElement('lable');
        descriptionLable.innerText = "Description";
        // i create a modal input
        const inputTask = document.createElement('input');
        inputTask.classList = "editInput";
        inputTask.setAttribute('id', 'edit1');
        inputTask.setAttribute('type', 'text');
        inputTask.value = ip.innerText;
        // i create a modal textarea
        const textArea = document.createElement('textarea');
        textArea.classList = "editInput"
        textArea.setAttribute('cols', '5');
        textArea.setAttribute('rows', '5');
        textArea.value = des.innerText;
        // i create a save, clese btn div
        const divButton = document.createElement('div');
        divButton.classList = "buttonDiv";
        // i create a save btn
        const saveBtn = document.createElement('button');
        saveBtn.classList = "saveButton"
        saveBtn.innerText = 'save';
        // i create a close btn
        const deleteBtn = document.createElement('button');
        deleteBtn.classList = "closeButton"
        deleteBtn.innerText = 'close';

        divButton.appendChild(saveBtn);
        divButton.appendChild(deleteBtn);
        storeDiv.append(taskLable, inputTask, descriptionLable, textArea, divButton)
        modle_container.appendChild(storeDiv)

        saveTheEditedValue(saveBtn, ip, des, storeDiv, inputTask, textArea, "save");
        saveTheEditedValue(deleteBtn, ip, des, storeDiv, inputTask, textArea, "close")
        console.log(div.childNodes);
    })
}
 
function saveTheEditedValue(btnFun, child, des, mainDiv, input1, input2, condition) {
    btnFun.addEventListener('click', (e) => {
        e.stopPropagation();
        if (condition === "save") {
            child = input1.value;
            des.innerText = input2.value;
            mainDiv.remove();
        } else {
            mainDiv.remove();
        }

    })
}
