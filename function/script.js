// Функция для обновления итоговой суммы
function updateTotalPrice() {
    const cartItemsList = document.getElementById("cart-items");
    const cartItems = cartItemsList.getElementsByTagName("li");

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const itemText = cartItems[i].textContent;
        const itemPrice = parseFloat(itemText.match(/\$\d+\.\d{2}/)[0].replace("$", ""));
        totalPrice += itemPrice;
    }

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Обработчик для кнопки "Добавить в корзину"
function addToCart(itemName, itemPrice) {
    // Создаем элемент для добавления в корзину
    const cartItem = document.createElement("li");
    cartItem.textContent = `${itemName} - $${itemPrice}`;

    // Добавляем элемент в список выбранных товаров
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.appendChild(cartItem);

    // Обновляем итоговую сумму после добавления товара
    updateTotalPrice();

    // Показываем модальное окно
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "block";
}

// Функция для очистки корзины
function clearCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ""; // Очищаем список выбранных товаров

    // Обновляем итоговую сумму после очистки корзины
    updateTotalPrice();
}

// Функция для добавления товара(закрывает окно, чтобы можно было добавить новый товар)
function addModal() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";

    // Обновляем итоговую сумму после очистки корзины
    updateTotalPrice();
}

// Функция для закрытия окна
function closeCartModal() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none"; // закрывает окно

    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ""; // Очищаем список выбранных товаров
}


// Обработчик для кнопки "Оформить заказ"
function confirmOrder() {
    // Получаем значения полей
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var creditCard = document.getElementById("credit-card").value;
    
    // Проверяем, что все поля заполнены
    if (email === "" || address === "" ||  creditCard === "") {
        // Отображаем модальное окно с сообщением
        alert("Fill in all the fields");
    } else {
        // Показываем модальное окно подтверждения заказа
        const confirmModal = document.getElementById("confirm-modal");
        confirmModal.style.display = "block";
    }

    // Обновляем итоговую сумму в модальном окне подтверждения
    const totalPriceElement = document.getElementById("confirm-total-price");
    const cartTotalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = cartTotalPriceElement.textContent;
    closeCartModal();
}

// Обработчик для кнопки "Подтвердить"
function placeOrder() {
    // Показываем модальное окно благодарности
    const thankYouModal = document.getElementById("thank-you-modal");
    thankYouModal.style.display = "block";
    
}

// Обработчик для кнопки "Отмена"
function cancelOrder() {
    const cartModal = document.getElementById("confirm-modal");
    cartModal.style.display = "none"; // закрывает окно
    
}

// Закрыть все окна
function closeAllModals() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.style.display = "none";
    });
    clearCart();
}

// Generate random data
function generateData() {
    const data = [];
    for (let i = 0; i < 5; i++) {
        data.push(Math.floor(Math.random() * 100));
    }
    return data;
}

// Line Chart
const lineChartCtx = document.getElementById('line-chart').getContext('2d');
const lineChart = new Chart(lineChartCtx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
            label: 'Website Traffic',
            data: generateData(),
            borderColor: 'blue',
            fill: false,
        }],
    },
});

// Bar Chart
const barChartCtx = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: {
        labels: ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'],
        datasets: [{
            label: 'Page Views',
            data: generateData(),
            backgroundColor: 'green',
        }],
    },
});

// Pie Chart
const pieChartCtx = document.getElementById('pie-chart').getContext('2d');
const pieChart = new Chart(pieChartCtx, {
    type: 'pie',
    data: {
        labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
        datasets: [{
            data: generateData(),
            backgroundColor: ['red', 'blue', 'green', 'yellow'],
        }],
    },
});
