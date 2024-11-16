function calculateOperations() {
    // Проверка на ненулевые значения
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 0 || num2 === 0) {
        alert("Числа не должны быть равны нулю.");
        return;
    }

    // Вычисление модулей чисел
    let absNum1 = Math.abs(num1);
    let absNum2 = Math.abs(num2);

    // Вычисление суммы, разности, произведения и частного модулей
    let sum = absNum1 + absNum2;
    let difference = absNum1 - absNum2;
    let product = absNum1 * absNum2;
    let quotient = absNum1 / absNum2;

    // Вывод
    document.getElementById("result1_sum_abs").innerText = `Сумма модулей: ${sum}`;
    document.getElementById("result1_difference_abs").innerText = `Разность модулей: ${difference}`;
    document.getElementById("result1_product_abs").innerText = `Произведение модулей: ${product}`;
    document.getElementById("result1_quotient_abs").innerText = `Частное модулей: ${quotient}`;
}
