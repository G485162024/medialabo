function changeDom() {
    //ヨットを追加
    let l = document.createElement('li'); 
    let u = document.querySelector('ul#kazoeuta'); 
    u.insertAdjacentElement('beforeend', l); 
    l.textContent = 'ヨット';
    //ブルームーンを追加 
    let i = document.querySelector('img#bluemoon'); 
    i.setAttribute('src', 'bluemoon.jpg');
    //大学のリンクを追加 
    let a = document.createElement('a'); 
    a.textContent = '拓殖大学HP'; 
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); 
    let p = document.querySelector('p#takudai'); 
    p.insertAdjacentElement('afterend', a);

    //もちを削除
    l = document.querySelector('li#mochi'); 
    l.remove(); 
    //kassanを削除
    u = document.querySelector('li#kassen'); 
    //光の三元色追加
    u = document.createElement('ul');
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '赤';
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
}

    //イベントハンドラの登録
    let b = document.querySelector('button#henkou');
    b.addEventListener('click', changeDom);
