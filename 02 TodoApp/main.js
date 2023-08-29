const add_todo = document.querySelector(".add-todo"); // 새로운 TODO 추가하기 버튼
const add_loc = document.querySelector(".todo-list"); // 추가할 위치

let todo_list = [];

add_todo.addEventListener('click', () => { // 새로운 TODO 추가
  let new_todo = document.createElement('form');

  new_todo.setAttribute("class", "todo-container");
  new_todo.innerHTML = `
    <div class="todo-content">
      <input type="checkbox">
      <input class="input" type="text" placeholder="할 일 작성!!!!!">
    </div>
    <div class="todo-modify">
      <img class="write" src="assets/icon/pencil.svg">
      <img class="delete" src="assets/icon/delete.svg">
    </div>
  `;
  const todo_input = new_todo.querySelector(".input") // 긱 TODO별 id 설정 - input
  const todo_write = new_todo.querySelector(".write") // 긱 TODO별 id 설정 - write
  const todo_delete = new_todo.querySelector(".delete") // 긱 TODO별 id 설정 - delete
  todo_input.id = todo_list.length + 1;
  todo_write.id = todo_list.length + 1;
  todo_delete.id = todo_list.length + 1;

  add_loc.appendChild(new_todo);
})

add_loc.addEventListener('click', (event) => { // TODO 내용 삭제

  if(event.target.className === 'delete'){
    console.log('hello');
    const remove_todo = event.target.parentNode.parentNode;
    console.log(remove_todo);
    remove_todo.remove();
  }
})