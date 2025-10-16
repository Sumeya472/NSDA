let tasks = [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const message = document.getElementById("message");

button.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
function addTask() {
  const taskName = input.value.trim();

  if (taskName === "") {
    showMessage("Please type something, Sumeya!", "error");
    return;
  }

  tasks.push(taskName);
  showTasks();
  showMessage("🎉 Task added successfully!", "success");
  input.value = "";
}

function showTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    list.appendChild(li);
  });
}

function showMessage(text, type) {
  message.textContent = text;
  message.classList.add("show");
  message.style.backgroundColor = type === "success" ? "#dfffd8" : "#ffd6d6";
  message.style.color = type === "success" ? "#2f8f2f" : "#b80000";

  setTimeout(() => {
    message.classList.remove("show");
  }, 2000);
}
