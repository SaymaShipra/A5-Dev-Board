let buttons = document.querySelectorAll(".complete-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    document.getElementById("task-count").innerText--;
    document.getElementById("completed-count").innerText++;

    // add activity history

    document.getElementById("history-log").innerHTML += `
    <p style=" background-color:#F4F7FF; padding:10px;border-radius:8px;">You have completed 
    <b>${this.closest(".task-card").querySelector("h1").innerText}</b> 
    at ${new Date().toLocaleTimeString()}</p><br>`;

    this.disabled = true;
  });
}
