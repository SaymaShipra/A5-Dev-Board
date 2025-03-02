const colors = [
  "#ffffff",
  "#1e1e1e",
  "#fdf1f1",
  "#fef9c3",
  "#d1fae5",
  "#f3f4f6",
  "#e28743",
  "#eab676",
  "#eeeee4",
  "#eee4e9",
  "#e4e4ee",
  "##3D739A",
  "#423D9A",
  "#7CA6EC",
  "#f5bde6",
  "#960cef",
];

document.getElementById("theme-btn").onclick = function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
};
