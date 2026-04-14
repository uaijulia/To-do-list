function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  const ul = document.getElementById("taskList");
  ul.appendChild(li);

  input.value = "";
}