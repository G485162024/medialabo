// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.list.g1[0].start_time); 
  console.log(data.list.g1[0].end_time);
  console.log(data.list.g1[0].title);
  console.log(data.list.g1[0].subtitle);
  console.log(data.list.g1[0].act);
  console.log(data.list.g1[1].start_time); 
  console.log(data.list.g1[1].end_time);
  console.log(data.list.g1[1].title);
  console.log(data.list.g1[1].subtitle);
  console.log(data.list.g1[1].act);
}
function printDom() {
  
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

function printDom(data) {
  const old = document.getElementById('result');
  if (old) {
    old.remove();
  }
  
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

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/{service}-{genre}-j.json';

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}
// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    console.log(data);
    console.log(data.x);
    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

//怪しい所
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', sendRequest);
});

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

