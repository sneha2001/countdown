function countdown(number, callback) {
    if (number > 0) {
      setTimeout(function () {
        document.getElementById('countdown').innerText = number;
        countdown(number - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  
  countdown(10, function () {
    setTimeout(function () {
      document.getElementById('countdown').innerText = 'Happy Independence Day!';
    }, 1000);
  });
  