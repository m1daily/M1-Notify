window.onload = function() {
  fetch("https://script.google.com/macros/s/AKfycbx-b1ChwWgdUrcTi0EYVO06Bdhm4cv--GWlFqp0ir2enNBRduiI2SV2Z1FyK_2ro-lFOg/exec")
  .then(function (response) {
    return json = response.json() // responseをjsonに変換
  }).then(function (json) {
    // 月間予定の埋め込み
    const month = json[0].month.split('\n');
    for (let i = 0; i < month.length; i++) {
      let day = month[i].split(')');
      console.log(day.length)
      for (let j = 0; j < 2; j++) {
        document.getElementById("month-list").appendChild(document.createElement('tr')).setAttribute("id", i)
        let th = document.createElement('th');
        console.log(day[j])
        if (j == 0 || day.length > 2) {
          th.innerHTML = String(day[j] + ')');
        } else {
          th.innerHTML = String(day[j]);
        }
        document.getElementById(i).appendChild(th);
      }
    }
  });
}
