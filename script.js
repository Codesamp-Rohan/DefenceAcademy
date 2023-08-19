const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

window.addEventListener("mousemove", (e) => {
  setTimeout(() => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }, 100);
});

window.addEventListener("mousemove", (e) => {
  setTimeout(() => {
    cursor2.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
  }, 200);
});
