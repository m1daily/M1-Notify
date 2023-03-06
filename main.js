window.onload = function() {
  fetch("https://script.google.com/macros/s/AKfycbx20U86JWkQKGZYBbAPD3itodnAFxp-yMBb2d-g7Eig_mJFM9we6icr1OlgI7TI6TZHiw/exec")
  .then(function (response) {
    return json = response.json() // responseをjsonに変換
  }).then(function (json) {
    // 最終更新埋め込み
    document.getElementById("date").innerText = "最終更新: " + json[0].time;  // 最終更新日時を表示
    // 画像の埋め込み
    document.getElementById("img").setAttribute("src", json[0].url);
  });
}
