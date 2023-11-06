
// функция проверяет заполнены ли все поля в login.html
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
  
    if (userName === "" || password === "") {
      alert("Fill in all the fields");
    } else {
      this.submit(); // Отправляем форму, если все поля заполнены
    }
  });
  