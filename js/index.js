const note = document.querySelectorAll(".note");
const container = document.querySelector(".container");
const field = document.querySelector(".field");
const input = document.getElementById("noteId");
const button = document.querySelector(".button");
const del = document.querySelectorAll(".del");


const createNote = () => {
  const div = document.createElement("div"); //создаем div
  div.setAttribute("class", "note");
  div.innerText = input.value;
  if(div.innerText !==''){
    field.appendChild(div)
  } else{
    alert('Add Note')
  };
  //Добавляю кнопку "Изменить"
  const btn = document.createElement("button");
  btn.setAttribute("class", "edit");
  // btn.textContent = "Edit";
  btn.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
  div.appendChild(btn);
  //Добавляю кнопку "Удалить"
  const del = document.createElement("button");
  del.setAttribute("class", "del");
  // del.textContent = "Delete";
  del.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
  div.appendChild(del);
  console.log("Note has been created");
  input.value = "";
  editNote();
  
  
  del.onclick = () =>{
    
    del.parentElement.remove()
  }
};

//Редактирование заметки
const editNote = () => {
  const edit = document.querySelectorAll(".edit");

  edit.forEach((el) => {
    el.onclick = () => {
      input.value = el.previousSibling.nodeValue;
      button.innerText = "Edit";
      button.classList.add("editable");
      button.classList.remove("button");
      el.classList.add("editing");
    };
  });
};

const editNote2 = () => {
  const buttonEd = document.querySelector(".editable");
  const fieldEdit = document.querySelector(".editing");
  fieldEdit.previousSibling.nodeValue = input.value;
  input.value = '';
  button.classList.remove("editable");
  button.classList.add("button");
  fieldEdit.classList.remove('editing');
  button.innerText = "Add";
};

button.onclick = () => {
  if (button.className === "button") {
    createNote();
  } else if (button.className === "editable") {
    editNote2();
  }
};
