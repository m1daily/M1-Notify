window.onload = function() {
  fetch("https://script.google.com/macros/s/AKfycbwEd1JUn4d1d_rkfoId7Q-oG6Ns8OyryWIrYEEXEgG7v9QFvFI7O6FjYStfOnlabbf5gA/exec")
  .then(function (response) {
    return json = response.json() // responseをjsonに変換
  }).then(function (json) {
    // 最終更新埋め込み
    document.getElementById("date").innerText = "最終更新: " + json[0].time;  // 最終更新日時を表示
    // 画像の埋め込み
    document.getElementById("img").setAttribute("src", json[0].url);
    // 月間予定の埋め込み
    const month = json[0].month.split('\n');
    for (let i = 0; i < month.length; i++) {
      let news = month[i];
      if (news[0].match(/\d/) == null) {
        news = '&nbsp;&nbsp;&nbsp;&nbsp;' + news;
      }
      let li = document.createElement('li');
      li.innerHTML = news;
      document.getElementById("month-list").appendChild(li);
    }
  });
}
