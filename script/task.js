let buttons = document.querySelectorAll(".complete-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let taskCount = document.getElementById("task-count").innerText;
    let convertedTaskCount = parseInt(taskCount);

    let completeCount = document.getElementById("completed-count").innerText;
    let convertedCompleteCount = parseInt(completeCount);

    convertedTaskCount -= 1;
    convertedCompleteCount += 1;

    document.getElementById("task-count").innerText = convertedTaskCount;
    document.getElementById("completed-count").innerText =
      convertedCompleteCount;

    // add activity history

    document.getElementById("history-log").innerHTML += `
    <p style=" background-color:#F4F7FF; padding:10px;border-radius:8px;">You have completed
    <b>${this.closest(".task-card").querySelector("h1").innerText}</b>
    at ${new Date().toLocaleTimeString()}</p><br>`;
    
// add alert
    alert("Board updated Successfully");
    if (document.getElementById("task-count").innerText == "0") {
      alert("Congrats!!!You have completed all the current task");
    }
    this.disabled = true;
  });
}
