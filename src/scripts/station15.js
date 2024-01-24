function displayList() {
  // fruits内のp要素を取得
  var fruitsContainer = document.getElementById("fruits");
  var fruitItems = fruitsContainer.getElementsByTagName("p");

  // 新しいul要素を作成
  var newList = document.createElement("ul");

  // 各p要素をli要素に変換してul要素に追加
  for (var i = 0; i < fruitItems.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = fruitItems[i].textContent;
    newList.appendChild(listItem);
  }

  // fruits内を空にする
  fruitsContainer.innerHTML = "";

  // fruits内に新しいul要素を追加
  fruitsContainer.appendChild(newList);
}
