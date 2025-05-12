// クリックイベント
const btn = document.getElementById("clickBtn");
const text = document.getElementById("clickText");

btn.addEventListener("click", () => {
    text.textContent = "クリックされました！";
})

// ループ処理とDOM追加
const fruits =["りんご", "バナナ", "みかん"];
const list = document.getElementById("fruitList");

fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
});
