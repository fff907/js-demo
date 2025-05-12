const btn = document.getElementById("clickBtn");
const text = document.getElementById("clickText");

btn.addEventListener("click", () => {
    text.textContent = "クリックされました！";
})