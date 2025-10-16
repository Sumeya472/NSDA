const tasks = [
  "Pray Fajr on time ",
  "Read Quran (at least 1 page) ",
  "Do morning Dhikr ",
  "go to mesjid",
  "Pray Dhuhr, Asr, Maghrib, Isha ",
  "Reflect on your day before sleeping ",
];

const taskList = document.getElementById("taskList");

for (let i = 0; i < tasks.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = tasks[i];
  taskList.appendChild(listItem);
}
