let status = prompt("is your task completed? (true/false)");

let isCompleted = status === "true"; 
if (isCompleted) {
    console.log(" You have completed your task.");
} else {
    console.log("Task is not completed yet. don't stop!");
}
