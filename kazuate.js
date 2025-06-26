// ランダムな答えを生成
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数
let kaisu = 0;
let gameOver = false;

// ボタンにイベントハンドラを設定
let button = document.querySelector('#kaito');
button.addEventListener('click', hantei);

// 判定関数
function hantei() {
  if (gameOver || kaisu >= 4) {
    document.querySelector('#result').textContent = `答えは ${kotae} でした。すでにゲームは終わっています`;
    return;
  }

  // 回数を1増やす
  kaisu++;
  document.querySelector('#kaisu').textContent = kaisu;

  // 入力値を取得して整数に変換
  let input = document.querySelector('#yoso');
  let yoso = parseInt(input.value, 10);

  // 入力値を表示
  document.querySelector('#answer').textContent = yoso;

  // 判定と出力
  let result = document.querySelector('#result');
  if (yoso === kotae) {
    result.textContent = '正解です．おめでとう!';
    gameOver = true;
  } else if (kaisu >= 3) {
    result.textContent = `まちがい。残念でした答えは ${kotae} です。`;
    gameOver = true;
  } else if (yoso < kotae) {
    result.textContent = 'まちがい。答えはもっと大きいですよ';
  } else {
    result.textContent = 'まちがい。答えはもっと小さいですよ';
  }
}
