document.addEventListener('DOMContentLoaded', function () {
  // ボタン要素を取得
  var alertButton = document.querySelector('button');

  // ボタンがクリックされた時の処理
  alertButton.addEventListener('click', function () {
    // ECMAScript 対応状況を確認し、alert を実行
    if (typeof ECMAScript === 'undefined') {
      alert('ECMAScript');
    } else {
      alert(ECMAScript);
    }
  });
});
