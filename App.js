

//======================== DRAG & DROP ==========================

const input = document.querySelector('.text-input');
const area  = document.querySelector('.areatext');
const addButton = document.getElementById('addbtn');
const listContainer = document.querySelector('.list_container');

// const editTask = function(event) {
//   var modalA = document.getElementById("myModalA");
//   var spanA = document.getElementsByClassName("closeA")[0];
//   var editButtonA = document.getElementById('editbtnA');
//   var cancelA = document.getElementById('cancelbtnA');
//   const titleA = document.querySelector('#input-areaA');
//  const descriptionA = document.querySelector('#textA');

// modalA.style.display = 'block';
// // console.log(event.target.parentNode.parentNode);
//   let parent = event.target.parentNode.parentNode;
//   let title = parent.firstChild;
//   // console.log(title.nextElementSibling);
//   let description =  title.nextElementSibling;
//   titleA.value = title.innerText;
//   descriptionA.value = description.innerText;

//   //  const editData = function(descriptionA, titleA, title, description, event) {
//   //   description.innerText = descriptionA.value;
//   //   title.innerText = titleA.value;
//   // }
// }

// const editData = function(event) {
//   // description.innerText = descriptionA.value;
//   // title.innerText = titleA.value;
//   // console.log(event.target.parentNode.parentNode.firstElementChild.lastElementChild.value);
//   let data = saveData(event);
//   console.log(data[1][0].innerText);
//   console.log(data[0][0].innerText);
// }
// const saveData = function(event) {
//   let  taskData = [];
//   let  areaData = [];
//   let taskTitle = event.target.parentNode.parentNode.firstElementChild.lastElementChild.value;
//   let areaDescription = event.target.parentNode.parentNode.firstElementChild.lastElementChild.value;
//    const Tasks = document.querySelectorAll('.todo_card .task');
//   const Areas = document.querySelectorAll('.todo_card .area');
//   for (let i = 0; i < Tasks.length; i++) {
//     const Task = Tasks[i];
//     if (taskTitle == Task.innerText) {
//       taskData.push(Task);
//     }
//   }
//   for (let i = 0; i < Areas.length; i++) {
//     const area = Areas[i];
//     if (areaDescription == area.innerText) {
//       areaData.push(area);
//     }
//   }
//   return [taskData, areaData];
// }


// const editTodo = function(editTask) {
//   const todoCard = document.querySelectorAll('.todo_card');
//   const Tasks = document.querySelectorAll('.todo_card .task');
//   const Areas = document.querySelectorAll('.todo_card .area');
//   const editIcons = document.querySelectorAll('#editIcon');
 
//   console.log(todoCard);
//   console.log(Tasks);
//   console.log(Areas);
//   console.log(editIcons);
// }

addButton.addEventListener('click', ()=> {
  
    let string = "";
    const div = document.createElement('div');
    div.innerHTML = `<div class='task'>${input.value}</div> 
    <div class='area'>${area.value}</div>` 
    div.classList.add('todo_card');
    div.classList.add('draggable');
    div.setAttribute('draggable', true);
    div.addEventListener('dragstart', ()=> {
      setTimeout(() => {
        div.classList.add('dragging');
      }, 0);   
    });
    div.addEventListener('dragend', ()=> {
      setTimeout(() => {
        div.classList.remove('dragging');
      }, 0);
    });
      listContainer.appendChild(div);
      editTodo();
});



const listBox = document.querySelectorAll('.list_container');

listBox.forEach((list) => {
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingEle = document.querySelector('.dragging');
    list.appendChild(draggingEle);
  })
  list.addEventListener('dragenter', (e) => {
  })
  list.addEventListener('dragleave', (e) => {
  })
  list.addEventListener('drop', (e) => {
  })
})

// =========== MODAL BOX ===================

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var myBtn = document.getElementById("btn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var cancel = document.getElementById('cancelbtn');

const title = document.querySelector('#input-area');
const description = document.querySelector('#text');
 
// When the user clicks the button, open the modal 
myBtn.onclick = function() {
  title.value = '';
  description.value = '';
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// when the user click on add button create card or close the modal
addButton.onclick = function() {
  modal.style.display = "none";
}
//When the user clicks on cancel, close the modal
cancel.onclick = function() {
  modal.style.display = "none";
}
