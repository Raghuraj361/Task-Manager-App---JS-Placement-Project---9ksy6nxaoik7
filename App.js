let taskHeading = document.querySelector(".task-heading");
let input = document.querySelector(".add-input");
let button = document.querySelector(".add-btn");
const containerList = document.querySelector(".container-list");
const modle_container = document.querySelector('.modle-container');

input.setAttribute("placeholder", "Please Enter Task");


function addTask() {
    if(input.value === "") {
        alert("please enter task");
    }
    else {
    let inputValue = input.value;

    const openList = document.createElement('div');
    openList.classList = "container-list1-item";
    const nameOfTask = document.createElement('h4');
    nameOfTask.innerText = inputValue;
    const descriptionOfTask = document.createElement('p');
    descriptionOfTask.classList = "description";
    // const desDiv = document.createElement('div');
    // desDiv.classList = "desc-div";
    // desDiv.appendChild(descriptionOfTask);

    const deleteTask = document.createElement('button');
    deleteTask.classList = "delete";
    deleteTask.innerText = "";
    const itemColor = document.createElement('div');
    itemColor.classList.add('item-color');
    openList.appendChild(itemColor);
    // const descBtn = document.createElement('div');
    // descBtn.classList.add('desc-btn');
    // // add paragraph using modal
    // descriptionOfTask.appendChild(descBtn);
    // descBtn.addEventListener('click', function () {
    //     openList.remove();
    // });



    openList.append(nameOfTask, descriptionOfTask, deleteTask)
    containerList.appendChild(openList);

    deleteTask.addEventListener('click', (e) => {
        e.stopPropagation()
        openList.remove();
    })
    editModel(openList, nameOfTask, descriptionOfTask);
    input.value = null;

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

function editModel(div, ip, des) {
    div.addEventListener('dblclick', (e) => {
        e.stopPropagation()
        const storeDiv = document.createElement('div');
        storeDiv.classList = "modle-container-style"
        const taskLable = document.createElement('lable');
        taskLable.innerText = "Task Name";
        const descriptionLable = document.createElement('lable');
        descriptionLable.innerText = "Description";

        const inputTask = document.createElement('input');
        inputTask.classList = "editInput";
        inputTask.setAttribute('id', 'edit1');
        inputTask.setAttribute('type', 'text');
        inputTask.value = ip.innerText;

        const textArea = document.createElement('textarea');
        textArea.classList = "editInput"
        textArea.setAttribute('cols', '5');
        textArea.setAttribute('rows', '5');
        textArea.value = des.innerText;

        const divButton = document.createElement('div');
        divButton.classList = "buttonDiv";

        const saveBtn = document.createElement('button');
        saveBtn.classList = "saveButton"
        saveBtn.innerText = 'save';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList = "deleteButton"
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
   

button.addEventListener('click', addTask)

