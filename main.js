window.onload = function() {
  fetch(process.env.GAS_URL)
  .then(function (response) {
    return json = response.json() // responseをjsonに変換
  }).then(function (json) {
    document.getElementById("date").innerText = '最終更新: ' + json[0].time;  // 最終更新日時を表示

    const id = String(json[1].url)
    .replace("https://i.imgur.com/", "")
    .replace(".jpg", "")
    .replace(".png", "")
    .replace(".jpeg", "");  // imgurのID取得

    document.getElementById("img").setAttribute("class", "imgur-embed-pub")
    document.getElementById("img").setAttribute("data-id", id);
    document.getElementById("img_js").setAttribute("src", "//s.imgur.com/min/embed.js");

    const script = document.createElement('script');
    script.src = "//s.imgur.com/min/embed.js"; //ファイルパス
    document.head.appendChild(script); //<head>に生成
  });
}
