document.getElementById("addTaskButton").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        const taskList = document.getElementById("taskList");
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
});

document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addTaskButton").click();
    }
});
