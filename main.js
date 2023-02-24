window.onload = function() {
  fetch('https://script.google.com/macros/s/AKfycbzOrnK4MjzO4jDzDFtx9cCZPIaVM1LHhqsC_9AdzpjlTXHWon0rVJvYdSoDo-dL_sY2iA/exec')
  .then(function (response) {
    return json = response.json()
  }).then(function (json) {
    document.getElementById("date").innerText = '最終更新: ' + json[0].time;
  });
}
