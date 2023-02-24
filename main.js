window.onload = function() {
  fetch('https://script.google.com/macros/s/AKfycbxapSGVuHxmsMJtsdOiiWAT2xNnCr8YpCKa3pKTo_YMnHmdoYfZkBqhe2sEM-54JjonPA/exec')
  .then(function (response) {
    return json = response.json() // responseをjsonに変換
  }).then(function (json) {
    document.getElementById("date").innerText = '最終更新: ' + json[0].time;  // 最終更新日時を表示

    // imgurのID取得
    const id = String(json[1].url)
    .replace("https://i.imgur.com/", "")
    .replace(".jpg", "")
    .replace(".png", "")
    .replace(".jpeg", "");

    // imgurの埋め込み
    document.getElementById("img").setAttribute("class", "imgur-embed-pub")
    document.getElementById("img").setAttribute("data-id", id);
    document.getElementById("img_js").setAttribute("src", "//s.imgur.com/min/embed.js");

    // imgurのjsの読み込み
    const script = document.createElement('script');
    script.src = "//s.imgur.com/min/embed.js"; //ファイルパス
    document.head.appendChild(script); //<head>に生成
  });
}
