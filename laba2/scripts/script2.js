function calculateSumAndProductOfDigits() {
    number = Number(document.getElementById("num3").value);
    // Проверка, что число трехзначное
    if (Math.abs(number) < 100 || Math.abs(number) > 999) {
        alert("Введите трехзначное число.");
        return;
    }
    
    // Преобразуем число в строку для извлечения цифр
    let digits = String(Math.abs(number));


    // Извлекаем цифры
    let digit1 = Number(digits[0]);
    let digit2 = Number(digits[1]);
    let digit3 = Number(digits[2]);

    // Вычисляем сумму и произведение цифр
    let sum = digit1 + digit2 + digit3;
    let product = digit1 * digit2 * digit3;

    // Вывод
    document.getElementById("result2_sum").innerText = `Сумма цифр: ${sum}`;
    document.getElementById("result2_product").innerText = `Произведение цифр: ${product}`;
}
