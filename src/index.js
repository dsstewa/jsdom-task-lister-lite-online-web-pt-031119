document.addEventListener("DOMContentLoaded", () => {
  // your code here


//document.querySelector("#create-task-form").addEventListener("submit",function(event))


document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    let item = document.querySelector("#new-task-description").value
    document.getElementById("tasks").innerHTML += `<li>${item}</li>`;
    event.preventDefault();

}, false);





});
