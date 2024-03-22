const tasks = [
    "Coding",
    "Video Games",
    "Yoga",
    "Exercise",
    "Play Outsside",
    "Make music",
    "Reading",
    "YouTube Works",
    "Rubik's Cube",
    "Relax and unwind",
  ];
  
  const taskList = document.getElementById("task-list");
  const newTaskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task-btn");
  
  function renderTasks() {
    taskList.innerHTML = ""; // Clear existing tasks
    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `task-${index}`;
      checkbox.addEventListener("change", () => {
        listItem.classList.toggle("completed");
      });
  
      const taskText = document.createTextNode(task);
  
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      taskList.appendChild(listItem);
    });
  }
  
  addTaskButton.addEventListener("click", function () {
    const newTask = newTaskInput.value.trim();
    if (!newTask) return; // Don't add empty tasks
  
    tasks.push(newTask);
    newTaskInput.value = ""; // Clear input field
    renderTasks();
  });
  
  renderTasks(); // Render initial tasks
  