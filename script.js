const c = document.getElementById("c");
const x = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

const colors = ["red", "green", "blue"];
const radii = [10, 20, 30];

for (let i = 0; i < 100; i++) {
  x.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  const r = radii[Math.floor(Math.random() * radii.length)];
  x.beginPath();
  x.arc(Math.random() * c.width, Math.random() * c.height, r, 0, Math.PI * 2);
  x.fill();
}