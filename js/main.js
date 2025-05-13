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

// CSSスタイルの変更
const colorBtn = document.getElementById("changeColorBtn");
const colorText = document.getElementById("colorText");

colorBtn.addEventListener("click", () =>{
    colorText.style.color = "red";
});

// 要素の削除
const removeBtn = document.getElementById("removeBtn");
const removeList = document.getElementById("removeList");

removeBtn.addEventListener("click", () => {
    const lastItem =removeList.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
});

// クラスの追加／削除
const classBtn = document.getElementById("classBtn");
const classTarget = document.getElementById("classTarget");

classBtn.addEventListener("click", () => {
    classTarget.classList.toggle("highlight");
});

// 入力値の取得
const nameInput = document.getElementById("nameInput");
const showNameBtn = document.getElementById("showNameBtn");
const outputText = document.getElementById("outputText");

showNameBtn.addEventListener("click", () => {
    const value = nameInput.value;
    outputText.textContent = `こんにちは、${value}さん！`;
});
