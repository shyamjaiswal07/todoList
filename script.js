/** @format */

function addList(event) {
  event.preventDefault();
  window.history.back();

  let containner = document.querySelector(".todo-list");
  containner.classList.add("todo-item");
  let val = document.querySelector(".todo-input").value;
  if (val != "") {
    let task = document.createElement("li");
    task.textContent = document.querySelector(".todo-input").value;
    containner.appendChild(task);
    document.querySelector(".todo-input").value = "";

    //Complete Button ====>

    let completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("Complete"));
    containner.appendChild(completeButton);
    completeButton.classList.add("complete-btn");
    let flag = true;
    completeButton.addEventListener("click", function () {
      task.style.textDecoration = flag
        ? "line-through solid rgb(0, 0, 0)"
        : "none";
      flag = !flag;
    });

    // Delete Button ====>

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("trash-btn");
    deleteButton.appendChild(document.createTextNode("Delete"));
    containner.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      containner.removeChild(task);
      containner.removeChild(completeButton);
      containner.removeChild(deleteButton);
    });
  }
}
