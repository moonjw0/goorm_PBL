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
  todo_input.id = todo_list.length; // id 0번부터 시작

  todo_list.push('');
  add_loc.appendChild(new_todo);
})


add_loc.addEventListener('click', (event) => { // TODO 내용 추가 + localStorage 저장
  if(event.target.className === 'write'){
    const todo_input = event.target.parentNode.previousElementSibling.querySelector(".input"); // write 버튼과 같은 영역의 input 값
    if(todo_input){
      const inputvalue = todo_input.value; 
      const inputid = todo_input.id;

      localStorage.setItem(inputid, inputvalue);
      todo_list[inputid] = inputvalue; 
    }
  }
})


add_loc.addEventListener('click', (event) => { // TODO 내용 삭제 + localStorage 삭제
  if(event.target.className === 'delete'){
    const remove_todo = event.target.parentNode.parentNode;
    const todo_input = event.target.parentNode.previousElementSibling.querySelector(".input");
    const inputid = todo_input.id;

    remove_todo.remove();
    localStorage.removeItem('inputid');
    // todo_list.splice(inputid, 1);
    // splice 쓰려면 inputid 값 바꾸는 법 필요
    delete todo_list[inputid];
    console.log(todo_list);
  }
})