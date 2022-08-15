import Store from "../js/store.js";

export default function fetchTodo(listTodo) {
  let html = "";
  listTodo.forEach((todo) => {
    html += `
    <li class="todo" id="${todo.id}">
        <div class="view">
            <input type="checkbox" class="toggle"/>
            <input type="text" readonly class="content" value="${todo.content}"/>
            <button class="delete">X</button>
        </div>
    </li>
    `;
  });

  const listTodoNode = document.querySelector(".todo-list");
  listTodoNode.innerHTML = html;

  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    const idTodo = Number(todo.id);
    const contentTodoInput = todo.querySelector(".content");
    contentTodoInput.addEventListener("dblclick", () => {
      contentTodoInput.removeAttribute("readonly");
      contentTodoInput.focus();
      let contentTodoValue = contentTodoInput.value;
      contentTodoInput.value = "";
      contentTodoInput.value = contentTodoValue;
      contentTodoInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
          Store.updateTodo(contentTodoInput, idTodo);
        }
      });
    });

    const deleteTodoBtn = todo.querySelector(".delete");

    deleteTodoBtn.addEventListener("click", () => {
      console.log("go here");
      Store.deleteTodo(idTodo);
    });
  });
}
