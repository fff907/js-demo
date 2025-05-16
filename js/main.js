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

// フェードアニメーション
const fadeToggleBtn = document.getElementById("fadeToggleBtn");
const fadeText = document.getElementById("fadeText");

fadeToggleBtn.addEventListener("click", () => {
  fadeText.classList.toggle("fade-hidden");
});

// イベントの無効化
const link = document.getElementById("linkPrevent");
const preventMessage = document.getElementById("preventMessage");

link.addEventListener("click", (e) => {
    e.preventDefault();
    preventMessage.textContent = "リンクは無効化されました！"
});

// 非同期データ取得(AJAX)
document.getElementById('loadUser').addEventListener('click', function () {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userHTML = `
        <p><strong>名前：</strong>${user.name.first} ${user.name.last}</p>
        <p><strong>メール：</strong>${user.email}</p>
        <img src="${user.picture.medium}" alt="ユーザー画像">
        `;
        document.getElementById('userInfo').innerHTML = userHTML;
    })
    .catch(error => {
        console.error('データの取得に失敗しました', error);
        document.getElementById('userInfo').textContent = 'ユーザー情報の取得に失敗しました。';

    });
});

// タブ切り替え
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabNumber = button.getAttribute('data-tab');

        // ボタンのactive切替
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // コンテンツの表示切替
        tabContents.forEach(content => {
            if (content.id === `tab-${tabNumber}`) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
});
