let tasks = [];
function addTask() {
  let input = document.getElementById("taskInput");
  let taskName = input.value.trim();

  if (taskName === "") {
    alert("Please write a task, Sumeya!");
    return; 
  }

  let newTask = {
    name: taskName,
    completed: false,
  };

  tasks.push(newTask);

  input.value = ""; 
  showTasks(); 
}

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = ""; 

  if (tasks.length === 0) {
    list.innerHTML = "<li>No tasks yet, Sumeya! 😊</li>";
    return;
  }

  tasks.forEach((task, index) => {
    let item = document.createElement("li");
    item.innerHTML = getTaskText(index, task);
    item.onclick = () => markAsDone(index);


    if (task.completed) {
      item.classList.add("done");
    }

    list.appendChild(item);
  });
}

function getTaskText(index, task) {
  return `${index + 1}. ${task.name} - ${
    task.completed ? "✅ Done" : "❌ Not Done"
  }`;
}

function markAsDone(index) {
  tasks[index].completed = !tasks[index].completed; 
  showTasks(); 
}
