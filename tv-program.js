// project.js（修正版）
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('sendRequest');
  btn.addEventListener('click', sendRequest);
});

// showError, finish はそのまま
function showError(err) {
  console.error(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}

// レスポンス成功時の処理：既存結果削除 → printDom 呼び出し
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);
  console.log(data);
}

// チェックボックス選択をもとに URL を構築し、Ajax 通信
function sendRequest() {
  const channels = Array.from(document.querySelectorAll('input[name="channel"]:checked'))
                        .map(e => e.value);
  const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
                      .map(e => e.value);

  if (channels.length === 0 || genres.length === 0) {
    alert('チャンネルとジャンルを最低1つずつ選んでください');
    return;
  }

  // 今のところ最初の組み合わせで1回だけ実行
  const service = channels[0];
  const genre = genres[0];
  const url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service}-${genre}-j.json`;

  console.log('Request URL:', url);
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 検索結果を DOM に出力 (課題5-1 の printDom と同じ内容)
function printDom(data) {
  const old = document.getElementById('result');
  if (old) old.remove();

  const result = document.createElement('div');
  result.id = 'result';
  document.body.appendChild(result);

  const count = data.list.g1.length;
  const h3 = document.createElement('h3');
  h3.textContent = `検索結果は ${count} 件`;
  result.appendChild(h3);

  data.list.g1.forEach((item, index) => {
    const fs = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = `検索結果 ${index + 1} 件目`;
    fs.appendChild(legend);

    function addLine(label, text) {
      const p = document.createElement('p');
      p.textContent = `${label}: ${text}`;
      fs.appendChild(p);
    }

    const toLocalString = s => new Date(s).toLocaleString();

    addLine('開始時刻', toLocalString(item.start_time));
    addLine('終了時刻', toLocalString(item.end_time));
    addLine('タイトル', item.title);
    addLine('サブタイトル', item.subtitle);
    addLine('出演者', item.act || '記載なし');

    result.appendChild(fs);
  });
}
