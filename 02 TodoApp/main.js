const add_todo = document.querySelector("#add_todo");

add_todo.addEventListener('click', () => {
  const new_todo = document.createElement('div');

  new_todo.innerHTML = `
  <form class="todo-container">
      <div class="todo-content">
        <input type="checkbox">
        <input id="todo" class="todo-input" type="text" placeholder="할 일 작성!!!!!">
      </div>
      <div class="todo-modify">
        <img id="write" class="write" src="assets/icon/pencil.svg">
        <img class="delete" src="assets/icon/delete.svg">
      </div>
  </form>
  `;

  const add_loc = document.getElementById('add_loc');
  add_loc.appendChild(new_todo);
  console.log('추가');
})




// const write_todo = document.getElementById("#write");
// // let todo_input = document.getElementById("#todo");

//  write_todo.addEventListener('click', () => {
//    const new_todo = todo_input.value;
//    console.log(new_todo);
// })