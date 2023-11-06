// Функция для отсчета времени и перенаправления на index.html
function startTimer() {
    let seconds = 60; // 60 секунд = 1 минута

    const timerElement = document.getElementById('timer');
    timerElement.textContent = `Redirecting in ${seconds} seconds`;

    const countdown = setInterval(function () {
        seconds--;
        timerElement.textContent = `Redirecting in ${seconds} seconds`;

        if (seconds === 0) {
            clearInterval(countdown); // Остановить таймер
            window.location.href = 'index.html'; // Перенаправить на index.html
        }
    }, 1000); // каждую секунду
}

// Вызываем функцию для начала отсчета времени
startTimer();

  // функция проверяет заполнены ли все поля в reg.html а также проверят совпадение паролей
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    var userName = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;
    var confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
  
    if (userName === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Fill in all the fields");
    } else if (password !== confirmPassword) {
      alert("Password mismatch");
    } else {
      // Form is valid, you can submit it here if needed
      document.getElementById("signup-form").submit();
    }
  });