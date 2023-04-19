window.onload = function() {
  fetch("https://script.google.com/macros/s/AKfycbx-b1ChwWgdUrcTi0EYVO06Bdhm4cv--GWlFqp0ir2enNBRduiI2SV2Z1FyK_2ro-lFOg/exec")
  .then(function (response) {
    return json = response.json() // responseをjsonに変換
  }).then(function (json) {
    // 最終更新埋め込み
    document.getElementById("date").innerText = "最終更新: " + json[0].time;  // 最終更新日時を表示
    // 画像の埋め込み
    document.getElementById("img").setAttribute("src", json[0].url);
  });
}
