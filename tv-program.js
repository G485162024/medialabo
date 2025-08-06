// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  const key = Object.keys(data.list).find(k => Array.isArray(data.list[k]));
  if (!key) {
    console.log('print: 番組データがありません');
    return;
  }
  const arr = data.list[key];
  for (let i = 0; i < Math.min(arr.length, 2); i++) {
    const item = arr[i];
    console.log(item.start_time);
    console.log(item.end_time);
    console.log(item.title);
    console.log(item.subtitle);
    console.log(item.act);
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const prev = document.getElementById('result');
  if (prev) prev.remove();

  const container = document.createElement('div');
  container.id = 'result';
  document.body.appendChild(container);

  const serviceKey = Object.keys(data.list).find(k => Array.isArray(data.list[k]));
  const items = serviceKey ? data.list[serviceKey] : [];



  items.forEach((item, idx) => {
    const fs = document.createElement('fieldset');
    const lg = document.createElement('legend');
    lg.textContent = `検索結果 ${idx + 1} 件目`;
    fs.appendChild(lg);

    const toLoc = s => new Date(s).toLocaleString();
    [
      ['開始時刻', toLoc(item.start_time)],
      ['終了時刻', toLoc(item.end_time)],
      ['タイトル', item.title],
      ['サブタイトル', item.subtitle],
      ['出演者', item.act || '記載なし']
    ].forEach(([lbl, txt]) => {
      const p = document.createElement('p');
      p.textContent = `${lbl}: ${txt}`;
      fs.appendChild(p);
    });

    container.appendChild(fs);
  });
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (!btn) {
    console.error('ボタン #btn が見つかりません');
    return;
  }
  btn.addEventListener('click', sendRequest);
});

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const channels = Array.from(document.querySelectorAll('input[name="channel"]:checked')).map(el => el.value);
  const genres   = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(el => el.value);

  let service = channels[0];
  if (service === 'g2') service = 'e1';

  const genre = genres[0];
  const url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service}-${genre}-j.json`;

  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.error('JSON parse error:', e);
      return;
    }
  }
  console.log('service keys:', Object.keys(data.list));

  print(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.error('通信エラー:', err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること