function changeBackgroundColor(e) {
  const textElement = document.getElementById("text");

  // チェックボックスの状態によって背景色を変更
  if (e.target.checked) {
    // トグルボタンがオンのときの処理
    textElement.style.backgroundColor = "red";
  } else {
    // トグルボタンがオフのときの処理
    textElement.style.backgroundColor = "";
  }
}