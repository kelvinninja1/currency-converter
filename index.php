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

        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css" />
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
                    <input type="number" data-bind="value: chosenCalculationValue, valueUpdate: 'afterkeydown', css: { error: ValidationHelper.isNumbersOnly(chosenCalculationValue()) === false }" />
                    <select data-bind="options: $root.allCurrencies, value: chosenCalculationCurrency, optionsValue: 'currencyCode', optionsText: $root.formatOptionLabel"></select>
                </div>
            </div>

            <button class="calculator-add-box" data-bind="click: addCalcunationBox, visible: calculationsArray().length < 9">+ добави</button>

            <div class="calculator-total">
                Резултат:
                <span data-bind="text: finalResult, css: { calculating: isCalculating() }"></span>
                <select id="calculatorResultOption" data-bind="options: allCurrencies, value: calculationFinalCurrency, optionsValue: 'currencyCode', optionsText: formatOptionLabel"></select>
            </div>
        </div>

        <div class="currency-rates">
            <h3>Валутен конвертор:</h3>
            <div class="text-wrapper">Стойност на единица:
                <select data-bind="options: allCurrencies, value: chosenTableCurrency, optionsValue: 'currencyCode', optionsText: formatOptionLabel, event:{ change: fillCurrencyExchangeTable }"></select>
            </div>

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
        <p><strong>Валутните курсове се обновяват на всеки 10 минути</strong>. Всички<br />
        <strong>валутни преобразувания</strong> се извличат от Google чрез <a href="http://rate-exchange.appspot.com/" target="_blank">Rate Exchange API</a>.</p>
        <p>
            <a href="http://superkalo.com" target="_blank">Калоян Косев</a>, 2012 - <?= date('Y'); ?> | <a href="mailto:currency@superkalo.com" target="_blank">currency@superkalo.com</a>
        </p>
    </footer>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min.js"></script>
    <script src="js/script.js"></script>

</body>
</html>