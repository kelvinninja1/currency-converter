<!DOCTYPE html>
<html lang="bg">
    <head>
        <meta charset="UTF-8" />
        <title>Валутен Конвертор и Калкулатор</title>
        <meta name="description" content="Универсален валутен конвертор и калкулатор с отворен код, преобразуващ всички видове свободно конвертируеми една към друга световни валути." />
        <meta name="keywords" content="валутни курсове, конвертиране на валути, валута, валутни котировки, валутен конвертор, валутен калкулатор, обменни валутни курсове" />

        <link rel="stylesheet" href="css/style.css" />

        <?php include 'inc/head.html'; ?>

    </head>

<body>

    <header>
        <h1><a href="http://currency.superkalo.com">Валутен Конвертор и Калкулатор</a></h1>
        <h2>Обменни валутни курсове | Преобразувай между
        <span class="currencies-count" data-bind="text: allCurrencies.length"></span>
        видове валути.</h2>
    </header>

    <section>
        <div class="calculator">
            <h3>Валутен калкулатор:</h3>

            <div class="calculator-boxes-wrapper" data-bind="foreach: calculationsArray">
                <div class="calculator-box">
                    <input type="text" pattern="\d+(\.\d{2})?" data-bind="value: chosenCalculationValue, valueUpdate: 'afterkeydown'" />
                    <select data-bind="options: $root.allCurrencies, value: chosenCalculationCurrency, optionsValue: 'currencyCode', optionsText: 'currencyName'"></select>
                </div>
            </div>

            <button class="calculator-add-box" data-bind="click: addCalcunationBox, visible: calculationsArray().length < 5">+ Добави</button>

            <div class="calculator-total">
                Резултат:
                <span data-bind="text: finalResult"></span>
                <select id="calculatorResultOption" data-bind="options: allCurrencies, value: calculationFinalCurrency, optionsValue: 'currencyCode', optionsText: 'currencyName'"></select>
            </div>
        </div>

        <div class="currency-rates">
            <h3>Валутен конвертор:</h3>
            <select data-bind="options: allCurrencies, value: chosenTableCurrency, optionsValue: 'currencyCode', optionsText: 'currencyName', event:{ change: fillCurrencyExchangeTable }"></select>
            <p>Стойност на 1<span data-bind="text: chosenTableCurrency"></span>:</p>

            <table class="currency-rates-table">
                <thead>
                    <tr>
                        <th>Стойност</th>
                        <th>Код</th>
                        <th>Парична единица</th>
                    </tr>
                </thead>
                <tbody data-bind="foreach: allCurrencies">
                    <tr>
                        <th data-bind="text: exchangeRate"></th>
                        <td data-bind="text: currencyCode"></td>
                        <td data-bind="text: currencyName"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <?php include 'inc/footer.html' ?>

    <script src="lib/jquery/dist/jquery.js"></script>
    <script src="lib/knockout/dist/knockout.js"></script>

    <script src="js/script.js"></script>

</body>
</html>