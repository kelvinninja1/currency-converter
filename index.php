<!DOCTYPE html>
<html lang="bg">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--[if IE]>
            <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <![endif]-->

        <title>Валутен Конвертор и Калкулатор</title>
        <meta name="description" content="Универсален валутен конвертор и калкулатор с отворен код, преобразуващ всички видове свободно конвертируеми една към друга световни валути." />
        <meta name="keywords" content="валутни курсове, конвертиране на валути, валута, валутни котировки, валутен конвертор, валутен калкулатор, обменни валутни курсове" />

        <link rel="stylesheet" href="lib/normalize.css/normalize.css" />
        <link rel="stylesheet" href="css/style.css" />

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
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

            <div class="calculator-boxes-holder" data-bind="foreach: calculationsArray">
                <div class="calculator-box">
                    <input type="number" data-bind="value: chosenCalculationValue, valueUpdate: 'afterkeydown', css: { error: KK.isNumbersOnly(chosenCalculationValue()) === false }" />
                    <select data-bind="options: $root.allCurrencies, value: chosenCalculationCurrency, optionsValue: 'currencyCode', optionsText: 'currencyName'"></select>
                </div>
            </div>

            <button class="calculator-add-box" data-bind="click: addCalcunationBox, visible: calculationsArray().length < 9">+ добави</button>

            <div class="calculator-total">
                Резултат:
                <span data-bind="text: finalResult, css: { calculating: isCalculating() }"></span>
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

    <footer>
        <img src="img/facebook.png" class="rotate" alt="Facebook Fan Page" />
        <p><strong>Валутните курсове се обновяват на всеки час</strong>. Всички<br />
        <strong>валутни преобразувания</strong> са на <strong>база курса на щатския долар</strong> (USD).</p>
        <p>
            <a href="http://superkalo.com" target="_blank">Калоян Косев</a>, 2012 - 1013 | 
            <a href="http://currency.superkalo.com">Начало</a> | 
            <a href="за-проекта-валутен-конвертор-и-калкулатор">За проекта</a> | 
            <a href="за-контакти">Контакти</a>
        </p>
    </footer>

    <script src="lib/jquery/dist/jquery.js"></script>
    <script src="lib/underscore/underscore.js"></script>
    <script src="lib/knockout/dist/knockout.js"></script>

    <script src="js/script.js"></script>

</body>
</html>