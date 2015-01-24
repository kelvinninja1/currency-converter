<!DOCTYPE html>
<html lang="bg">
    <head>
        <meta charset="UTF-8" />
        <title>Валутен Конвертор и Калкулатор</title>
        <meta name="description" content="Универсален валутен конвертор и калкулатор с отворен код, преобразуващ всички видове свободно конвертируеми една към друга световни валути." />
        <meta name="keywords" content="валутни курсове, конвертиране на валути, валута, валутни котировки, валутен конвертор, валутен калкулатор, обменни валутни курсове" />

        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/dropkick.css" />
        <link rel="stylesheet" href="css/tableStyle.css" />


        <?php include 'inc/head.html'; ?>

    </head>

<body>

    <header>
        <h1><a href="http://currency.superkalo.com">Валутен Конвертор и Калкулатор</a></h1>
        <h2>Актуални <strong>обменни валутни курсове</strong> | Преобразувай между <span id="numberOfCurrency">157</span> <strong>видове валути</strong>.</h2>
    </header>

    <?php include 'inc/nav.html'; ?>

    <section>
        <div id="homeLeft" class="left">
            <h3>Валутен калкулатор:</h3>

            <div id="calculatorCurrencyBoxContent" data-bind="foreach: calculationsArray">
                <div class="calculatorCurrencyBox">
                    <input type="text" data-bind="value: chosenCalculationValue, valueUpdate: 'afterkeydown'" />
                    <select data-bind="options: $root.allCurrencies, value: chosenCalculationCurrency, optionsText: 'currencyName'"></select>
                </div>
            </div>
            <div id="calculatorPlusOne" data-bind="click: addCalcunationBox, visible: calculationsArray().length < 5">
                <a href="javascript:;" id="add">+ Добави</a>
            </div>

            <div id="total">
                <h3 id="resultNumber" style="border: none; margin-top:10px; margin-right: 5px; float: left;">Резултат:</h3>
                <span data-bind="text: finalResult"></span>
                <!-- <input type="text" name="resultValueField" id="resultValueField" readonly="readonly" /> -->
                <select id="calculatorResultOption"></select>
            </div>
        </div>

        <div id="homeRight" class="right">
            <h3>Валутен конвертор:</h3>

            <select data-bind="options: allCurrencies, value: chosenTableCurrency, optionsText: 'currencyName', event:{ change: fillCurrencyExchangeTable }"></select>
            <p>Стойност на 1 <span data-bind="text: chosenTableCurrency"></span>:</p>

            <table id="headerTable" style="width: 100%; margin-right: 1px;"><tr><th>Стойност</th><th style="width: 31px;">Код</th><th>Парична единица</th></tr></table>
            <div id="currencyRates">
                <table id="currencyTable" >
                    <tbody data-bind="foreach: exchangeTableResults">
                        <tr>
                            <th data-bind="text: exchangeRate"></th>
                            <td data-bind="text: convertedCurrencyCode"></td>
                            <td data-bind="text: convertedCurrencyName"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>

    <?php include 'inc/footer.html' ?>

    <script src="lib/jquery/dist/jquery.js"></script>
    <script src="lib/knockout/dist/knockout.js"></script>
    <script src="js/jquery-ui.min.js"></script>

    <script src="js/money.js"></script>
    <!-- // <script src="js/jquery.dropkick-1.0.0.js"></script> -->
    <script src="js/script.js"></script>

</body>
</html>