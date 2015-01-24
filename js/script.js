var KK = {
	scrollToMainContent: function(speed){
		$('html, body').animate({
			scrollTop: $('section').offset().top
		}, speed);
	},

	calculateResult: function() {
		KK.scrollToMainContent(700);
		var finalResult = 0;

		for(i=0; i<KK.calculatorCurrencyBoxIndex; i++){
			var calcCurrencyBoxNumberValue = $("#calculatorCurrencyBoxValue" + (i+1)).val();
			var calcCurrencyBoxSelector = $("#calculatorCurrencyBoxSelector" + (i+1)).val();
			var calcCurrencyBoxResultSelector = $("#calculatorResultOption").val();
			finalResult += fx.convert(calcCurrencyBoxNumberValue, {from: calcCurrencyBoxSelector, to: calcCurrencyBoxResultSelector});
		}
		if (isNaN(finalResult)) {
			$("#resultValueField").css({"color": "red"});
			$("#resultValueField").val("Въведи коректни стойности!");
			if($("#dk_container_calculatorResultOption").css("display") !== "none"){
				$("#dk_container_calculatorResultOption").fadeOut(function(){
					$("#resultValueField").animate({"width": "270px"});
				});
				$("#resultValueField").effect("highlight", {"color": "red"}, 200);
			} else{
				$("#resultValueField").effect("highlight", {"color": "red"}, 200);
			}
		} else{
			if($("#dk_container_calculatorResultOption").css("display") === "none") {
				$("#resultValueField").animate({"color": "#3EC3FF"});
				$("#resultValueField").animate({"width": "145px"}, function(){
					$("#dk_container_calculatorResultOption").fadeIn();
				});
			}
			$("#resultValueField").val(Math.round(finalResult*100)/100);
			$("#resultValueField").effect("highlight", {"color": "#FFFF66"}, 200);
			$('#resultNumber').animate({"color": "#C6C6C6"}, 150, function(){
				$('#resultNumber').animate({"color": "#111"}, 500)
			});
		}
	},

	onlyNumbers: function(){
		if(isNaN($("#calculatorCurrencyBoxValue1").val()-0)) {
			return false;
		}
	},

	loadCurrencyRatesInDiv: function(value) {
		$("#currencyRates").fadeOut(600, function(){
			//Remove any old html elements in the div:
			$("#currencyRates").html("");

			//Show new results in the div:


			$("#currencyRates").append("<table id='currencyTable'>");
			if(typeof(value) === "undefined"){
				value = $('#selectFrom').val();
			}
			for (i in KK.currencyRatesObject) {
				var result = fx.convert(1, {from: value, to: i}).toFixed(2);
				$("#currencyTable").append("<tr><th style='text-align: right; font-weight: bold;'>" + result + "</th><td>" + i + "</td><td>" + KK.currencyRatesObject[i] + "</td></tr>");

				//TODO: add to array

			}
			$("#currencyRates").append("</table>");


			$("#currencyRates").show("slide", { direction: "up"}, 500);
		});
	},

	loadCurrencyRatesInOptionBox: function() {
		var countCurrency = 0;
		//Load Every single Currency Rate in right OptionBox:
		for (i in KK.currencyRatesObject) {
			$('#selectFrom').append('<option value="' + i + '">' + i + '</option>');
			$('#calculatorResultOption').append('<option value="' + i + '">' + i + '</option>');
			countCurrency++;
		}
		$("#numberOfCurrency").html(countCurrency).animate({"font-size": "140%"});
		//If you pick different option:
		$('#selectFrom').dropkick({
			change: function (value, label) {
				KK.loadCurrencyRatesInDiv(value);
				KK.scrollToMainContent(1000);
			}
		});
		$('#calculatorResultOption').dropkick({
			change: function (value, label) {
				KK.calculateResult();
			}
		});
		//Fire the results in the #currencyRates div:
		KK.loadCurrencyRatesInDiv();
	},

	addOneCalculatorCurrencyBox: function(oneMoreBoxId, fillSelectorCurrencyId){
		$("#calculatorCurrencyBoxContent").append('<div class="calculatorCurrencyBox" id="calculatorCurrencyBox' + oneMoreBoxId + '"><input id="' + oneMoreBoxId + '" type="text" name="currencyBox" style="float: left;" /><select id="' + fillSelectorCurrencyId + '"></select></div>');
		for (i in KK.currencyRatesObject) {
			$('#' + fillSelectorCurrencyId).append('<option value="' + i + '">' + i + '</option>');
		}
		$('#' + fillSelectorCurrencyId).val("USD");
		$('#' + fillSelectorCurrencyId).dropkick({
			change: function (value, label) {
				KK.calculateResult();
			}
		});
	},

	calculatorCurrencyBoxIndex: 0,

	setUpCurrencyBoxes: function() {
		KK.addOneCalculatorCurrencyBox("calculatorCurrencyBoxValue1", "calculatorCurrencyBoxSelector1");
		KK.calculatorCurrencyBoxIndex = 1;
		$("#calculatorCurrencyBoxValue1").keyup(function(){
			KK.onlyNumbers();
			KK.calculateResult();
		});
		//Add one more on click:
		var clickIndex = 1;
		$("#calculatorPlusOne").click(function(){
			if(clickIndex == 1) {
				KK.addOneCalculatorCurrencyBox("calculatorCurrencyBoxValue2", "calculatorCurrencyBoxSelector2");
				$("#calculatorCurrencyBoxValue2").keyup(function(){
					KK.calculateResult();
				});
				clickIndex++;
				KK.calculatorCurrencyBoxIndex++;
			} else if (clickIndex == 2){
				KK.addOneCalculatorCurrencyBox("calculatorCurrencyBoxValue3", "calculatorCurrencyBoxSelector3");
				$("#calculatorCurrencyBoxValue3").keyup(function(){
					KK.calculateResult();
				});
				clickIndex++;
				KK.calculatorCurrencyBoxIndex++;
			} else if (clickIndex == 3){
				KK.addOneCalculatorCurrencyBox("calculatorCurrencyBoxValue4", "calculatorCurrencyBoxSelector4");
				$("#calculatorCurrencyBoxValue4").keyup(function(){
					KK.calculateResult();
				});
				clickIndex++;
				KK.calculatorCurrencyBoxIndex++;
			} else if (clickIndex == 4){
				KK.addOneCalculatorCurrencyBox("calculatorCurrencyBoxValue5", "calculatorCurrencyBoxSelector5");
				$("#calculatorCurrencyBoxValue5").keyup(function(){
					KK.calculateResult();
				});
				KK.calculatorCurrencyBoxIndex++;
				$("#calculatorPlusOne").fadeOut();
			}
			return false;

		});

		KK.loadCurrencyRatesInOptionBox();

	},

	loadExchangeRatesData: function(data) {
		$.ajax({
			url: 'http://openexchangerates.org/api/latest.json?app_id=31d99f88fd2c4b5bb43b22a0c398db73',
			dataType:'jsonp',
			success: function(data) {
				if ( typeof fx !== "undefined" && fx.rates ) {


					fx.rates = data.rates;
					fx.base = data.base;
					//Start the big loading of Currency Rates:
					KK.setUpCurrencyBoxes();
				} else {
					// If not, apply to fxSetup global:
					var fxSetup = {
						rates : data.rates,
						base : data.base
					}
				}
			},
			error: function() {
				alert('Възникна проблем с извличането на емисията с обновени валутни курсове.');
			}
		});
	}
};


function ExchangeRatesViewModel() {
	var self = this;

	self.allCurrencies = [
		{ currencyCode: "BGN", currencyName: "Български лев" },
		{ currencyCode: "EUR", currencyName: "Евро" },
		{ currencyCode: "USD", currencyName: "Американски долар" },
		{ currencyCode: "JPY", currencyName: "Японската йена" },
		{ currencyCode: "GBP", currencyName: "Британската лира" },
		{ currencyCode: "CHF", currencyName: "Швейцарски франк" },
		{ currencyCode: "AUD", currencyName: "Австралийски долар" }
        /*
		{ currencyCode: "CAD", currencyName: "Канадски долар" },
		{ currencyCode: "SEK", currencyName: "Шведска крона" },
		{ currencyCode: "HKD", currencyName: "Хонгконгски долар" },
		{ currencyCode: "NOK", currencyName: "Норвежка крона" },
		{ currencyCode: "AED", currencyName: "Обединените арабски емирства дирхам" },
		{ currencyCode: "AFN", currencyName: "Афганистански афган" },
		{ currencyCode: "ALL", currencyName: "Албански лек" },
		{ currencyCode: "AMD", currencyName: "Арменски драм" },
		{ currencyCode: "ANG", currencyName: "Холандски Антилски гулден" },
		{ currencyCode: "AOA", currencyName: "Анголска кванза" },
		{ currencyCode: "ARS", currencyName: "Аржентинско песо" },
		{ currencyCode: "AWG", currencyName: "Арубски флорин" },
		{ currencyCode: "AZN", currencyName: "Азербайджански манат" },
		{ currencyCode: "BAM", currencyName: "Босна и Херцеговина - Конвертабилна марка" },
		{ currencyCode: "BBD", currencyName: "Барбейдоски долар" },
		{ currencyCode: "BDT", currencyName: "Бангладешска така" },
		{ currencyCode: "BHD", currencyName: "Бахрейнски динар" },
		{ currencyCode: "BIF", currencyName: "Бурундийски франк" },
		{ currencyCode: "BMD", currencyName: "Бермудски долар" },
		{ currencyCode: "BND", currencyName: "Брунейски долар" },
		{ currencyCode: "BOB", currencyName: "Боливийско боливиано" },
		{ currencyCode: "BRL", currencyName: "Бразилски реал" },
		{ currencyCode: "BSD", currencyName: "Бахамски долар" },
		{ currencyCode: "BTN", currencyName: "Бутански нгултрум" },
		{ currencyCode: "BWP", currencyName: "Ботсванска пула" },
		{ currencyCode: "BYR", currencyName: "Беларуска рубла" },
		{ currencyCode: "BZD", currencyName: "Белизийски долар" },
		{ currencyCode: "CDF", currencyName: "Конгоански франк" },
		{ currencyCode: "CLF", currencyName: "Чилийска единица (UF)" },
		{ currencyCode: "CLP", currencyName: "Чилийско песо" },
		{ currencyCode: "CNY", currencyName: "Китайски ренминби юан" },
		{ currencyCode: "COP", currencyName: "Колумбийско песо" },
		{ currencyCode: "CRC", currencyName: "Костарикански колон" },
		{ currencyCode: "CUP", currencyName: "Кубинско песо" },
		{ currencyCode: "CVE", currencyName: "Кабоверденско ескудо" },
		{ currencyCode: "CZK", currencyName: "Чешка крона" },
		{ currencyCode: "DJF", currencyName: "Джибутски франк" },
		{ currencyCode: "DKK", currencyName: "Датска крона" },
		{ currencyCode: "DOP", currencyName: "Доминиканско песо" },
		{ currencyCode: "DZD", currencyName: "Алжирски динар" },
		{ currencyCode: "EGP", currencyName: "Египетска лира" },
		{ currencyCode: "ETB", currencyName: "Етиопски бир" },
		{ currencyCode: "FJD", currencyName: "Фиджийски долар" },
		{ currencyCode: "FKP", currencyName: "Фолкландска лира" },
		{ currencyCode: "GEL", currencyName: "Грузинска лари" },
		{ currencyCode: "GHS", currencyName: "Ганайски седи" },
		{ currencyCode: "GIP", currencyName: "Гибралтарска лира" },
		{ currencyCode: "GMD", currencyName: "Гамбийски даласи" },
		{ currencyCode: "GNF", currencyName: "Гвинейски франк" },
		{ currencyCode: "GTQ", currencyName: "Гватемалски кетцал" },
		{ currencyCode: "GYD", currencyName: "Гаянски долар" },
		{ currencyCode: "HNL", currencyName: "Хондураска лемпра" },
		{ currencyCode: "HRK", currencyName: "Хърватска куна" },
		{ currencyCode: "HTG", currencyName: "Хаитянски гурд" },
		{ currencyCode: "HUF", currencyName: "Унгарски форинт" },
		{ currencyCode: "IDR", currencyName: "Индонезийска рупия" },
		{ currencyCode: "ILS", currencyName: "Израелски шекел" },
		{ currencyCode: "INR", currencyName: "Индийска рупия" },
		{ currencyCode: "IQD", currencyName: "Иракски динар" },
		{ currencyCode: "IRR", currencyName: "Ирански риал" },
		{ currencyCode: "ISK", currencyName: "Исландска крона" },
		{ currencyCode: "JMD", currencyName: "Ямайски долар" },
		{ currencyCode: "JOD", currencyName: "Йордански динар" },
		{ currencyCode: "KES", currencyName: "Кенийски шилинг" },
		{ currencyCode: "KGS", currencyName: "Киргизстански сум" },
		{ currencyCode: "KHR", currencyName: "Камбоджански риел" },
		{ currencyCode: "KMF", currencyName: "Коморийски франк" },
		{ currencyCode: "KPW", currencyName: "Севернокорейски вон" },
		{ currencyCode: "KRW", currencyName: "Южнокорейски вон" },
		{ currencyCode: "KWD", currencyName: "Кувейтски динар" },
		{ currencyCode: "KZT", currencyName: "Казахстанско тенге" },
		{ currencyCode: "LAK", currencyName: "Лаоски кип" },
		{ currencyCode: "LBP", currencyName: "Ливанска лира" },
		{ currencyCode: "LKR", currencyName: "Шриланкска рупия" },
		{ currencyCode: "LRD", currencyName: "Либерийски долар" },
		{ currencyCode: "LSL", currencyName: "Лесотско лоти" },
		{ currencyCode: "LTL", currencyName: "Литовски литас" },
		{ currencyCode: "LVL", currencyName: "Латвийски лат" },
		{ currencyCode: "LYD", currencyName: "Либийски динар" },
		{ currencyCode: "MAD", currencyName: "Марококански дирхам" },
		{ currencyCode: "MDL", currencyName: "Молдовска лея" },
		{ currencyCode: "MGA", currencyName: "Малагасийски ариари" },
		{ currencyCode: "MKD", currencyName: "Македонски денар" },
		{ currencyCode: "MMK", currencyName: "Мианмарски киат" },
		{ currencyCode: "MNT", currencyName: "Монголски тугриг" },
		{ currencyCode: "MOP", currencyName: "Макайска патака" },
		{ currencyCode: "MRO", currencyName: "Мавританска угуйа" },
		{ currencyCode: "MUR", currencyName: "Мавританска рупия" },
		{ currencyCode: "MVR", currencyName: "Малдивска руфия" },
		{ currencyCode: "MWK", currencyName: "Малавийска кауача" },
		{ currencyCode: "MXN", currencyName: "Мексиканско песо" },
		{ currencyCode: "MYR", currencyName: "Малайзийски рингит" },
		{ currencyCode: "MZN", currencyName: "Мозамбикски метикал" },
		{ currencyCode: "NAD", currencyName: "Намибийски долар" },
		{ currencyCode: "NGN", currencyName: "Нигерийска найра" },
		{ currencyCode: "NIO", currencyName: "Никарагска кордоба" },
		{ currencyCode: "NPR", currencyName: "Непалски рупей" },
		{ currencyCode: "NZD", currencyName: "Новозеландски долар" },
		{ currencyCode: "OMR", currencyName: "Омански риал" },
		{ currencyCode: "PAB", currencyName: "Панамска балбоа" },
		{ currencyCode: "PEN", currencyName: "Нов перуански сол" },
		{ currencyCode: "PGK", currencyName: "Папуа-новогвинейска кина" },
		{ currencyCode: "PHP", currencyName: "Филипинско песо" },
		{ currencyCode: "PKR", currencyName: "Пакистанска рупия" },
		{ currencyCode: "PLN", currencyName: "Полска злота" },
		{ currencyCode: "PYG", currencyName: "Парагвайски гуарани" },
		{ currencyCode: "QAR", currencyName: "Катарски риал" },
		{ currencyCode: "RON", currencyName: "Румънска лея" },
		{ currencyCode: "RSD", currencyName: "Сръбски динар" },
		{ currencyCode: "RUB", currencyName: "Руска рубла" },
		{ currencyCode: "RWF", currencyName: "Руандийски франк" },
		{ currencyCode: "SAR", currencyName: "Саудитски риал" },
		{ currencyCode: "SBD", currencyName: "Соломоновски долар" },
		{ currencyCode: "SCR", currencyName: "Сейшелска рупия" },
		{ currencyCode: "SDG", currencyName: "Суданска лира" },
		{ currencyCode: "SGD", currencyName: "Сингапурски долар" },
		{ currencyCode: "SHP", currencyName: "Паунд на остров Света Елена" },
		{ currencyCode: "SLL", currencyName: "Сиералеонско леоне" },
		{ currencyCode: "SOS", currencyName: "Сомалийски шилинг" },
		{ currencyCode: "SRD", currencyName: "Суринамски долар" },
		{ currencyCode: "STD", currencyName: "Сао Томе и Принсиписко добра" },
		{ currencyCode: "SVC", currencyName: "Ел Салвадорски колон" },
		{ currencyCode: "SYP", currencyName: "Сирийска лира" },
		{ currencyCode: "SZL", currencyName: "Свазилендски лилангени" },
		{ currencyCode: "THB", currencyName: "Тайландски бат" },
		{ currencyCode: "TJS", currencyName: "Таджикски сомони" },
		{ currencyCode: "TMT", currencyName: "Туркменски манат" },
		{ currencyCode: "TND", currencyName: "Тунизийски динар" },
		{ currencyCode: "TOP", currencyName: "Тонганска паанга" },
		{ currencyCode: "TRY", currencyName: "Турска лира" },
		{ currencyCode: "TTD", currencyName: "Тринидадски долар" },
		{ currencyCode: "TWD", currencyName: "Нов Тайвански долар" },
		{ currencyCode: "TZS", currencyName: "Танзанийски шилинг" },
		{ currencyCode: "UAH", currencyName: "Украинска гривна" },
		{ currencyCode: "UGX", currencyName: "Угандийски шилинг" },
		{ currencyCode: "UYU", currencyName: "Уругвайско песо" },
		{ currencyCode: "UZS", currencyName: "Узбекистански Сум" },
		{ currencyCode: "VEF", currencyName: "Венецуелски боливар" },
		{ currencyCode: "VND", currencyName: "Виетнамски донг" },
		{ currencyCode: "VUV", currencyName: "Вануатуанско вату" },
		{ currencyCode: "WST", currencyName: "Самоанска тала" },
		{ currencyCode: "XAF", currencyName: "Централноафрикански франк" },
		{ currencyCode: "XCD", currencyName: "Източно Карибски долар" },
		{ currencyCode: "XDR", currencyName: "Специални права на тираж" },
		{ currencyCode: "XOF", currencyName: "Западно Африкански франк" },
		{ currencyCode: "XPF", currencyName: "Френски тихоокеански франк" },
		{ currencyCode: "YER", currencyName: "Йеменски риал" },
		{ currencyCode: "ZAR", currencyName: "Южноафрикански ранд" },
		{ currencyCode: "ZMK", currencyName: "Замбийска куача" },
		{ currencyCode: "ZWL", currencyName: "Зимбабвийски долар" }
        */
	];


    //Table with convertion rates:
    self.chosenTableCurrency = ko.observable('BGN');
    self.exchangeTableResults = ko.observableArray();
    self.fillCurrencyExchangeTable = function(view, b){
        self.exchangeTableResults.removeAll();
        for (var i = 0; i < self.allCurrencies.length; i++) {
            (function (i) {
                $.ajax({
                    url: 'http://rate-exchange.appspot.com/currency?from=' + self.allCurrencies[i].currencyCode + '&to=' + self.chosenTableCurrency(),
                    dataType:'jsonp',
                    success: function(data) {
                        //console.log("1 " + data.to + " is " + data.rate + " " + data.from);
                        self.exchangeTableResults.push({
                            convertedCurrencyCode: data.from,
                            convertedCurrencyName: self.allCurrencies[i].currencyName,
                            exchangeRate: data.rate
                        });
                    },
                    error: function() {
                        console.log('Problem :(');
                    }
                });
            })(i);
        }
    };
    self.fillCurrencyExchangeTable();


    //Currency Calculator:
    self.CalculationBox = function(value, code){
        this.chosenCalculationValue = ko.observable(value);
        this.chosenCalculationCurrency = ko.observable(code);
    }
    self.calculationsArray = ko.observableArray([
        new self.CalculationBox(1, 'BGN')
    ]);
    self.addCalcunationBox = function(){
        self.calculationsArray.push(new self.CalculationBox(1, 'BGN'));
    };
    self.finalResult = ko.computed(function(){
        var total = 0;
        for (var i = 0; i < self.calculationsArray().length; i++) {
            total += parseFloat(self.calculationsArray()[i].chosenCalculationValue());
            console.log(self.calculationsArray()[i].chosenCalculationCurrency().currencyCode);
        }
        return total;
    });



}

ko.applyBindings(new ExchangeRatesViewModel());


$(document).ready(function () {
	//KK.loadExchangeRatesData();
});