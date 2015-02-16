var ValidationHelper = {
	isNumbersOnly: function(value){
		//Matching Floating Point Numbers with a Regular Expression
		var isNum = /[-+]?[0-9]*\.?[0-9]+/;
		if (isNum.test(value)) {
			return true;
		}
		return false;
	}
};

function ExchangeRatesViewModel() {
	var self = this;

	self.allCurrencies = [
	    { currencyCode: "BGN", currencyName: "Български лев", exchangeRate: ko.observable('-') },
	    { currencyCode: "EUR", currencyName: "Евро", exchangeRate: ko.observable('-') },
	    { currencyCode: "USD", currencyName: "Американски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "JPY", currencyName: "Японската йена", exchangeRate: ko.observable('-') },
	    { currencyCode: "GBP", currencyName: "Британската лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "CHF", currencyName: "Швейцарски франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "AUD", currencyName: "Австралийски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "CAD", currencyName: "Канадски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "SEK", currencyName: "Шведска крона", exchangeRate: ko.observable('-') },
	    { currencyCode: "HKD", currencyName: "Хонгконгски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "NOK", currencyName: "Норвежка крона", exchangeRate: ko.observable('-') },
	    { currencyCode: "AED", currencyName: "Обединените арабски емирства дирхам", exchangeRate: ko.observable('-') },
	    { currencyCode: "AFN", currencyName: "Афганистански афган", exchangeRate: ko.observable('-') },
	    { currencyCode: "ALL", currencyName: "Албански лек", exchangeRate: ko.observable('-') },
	    { currencyCode: "AMD", currencyName: "Арменски драм", exchangeRate: ko.observable('-') },
	    { currencyCode: "ANG", currencyName: "Холандски Антилски гулден", exchangeRate: ko.observable('-') },
	    { currencyCode: "AOA", currencyName: "Анголска кванза", exchangeRate: ko.observable('-') },
	    { currencyCode: "ARS", currencyName: "Аржентинско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "AWG", currencyName: "Арубски флорин", exchangeRate: ko.observable('-') },
	    { currencyCode: "AZN", currencyName: "Азербайджански манат", exchangeRate: ko.observable('-') },
	    { currencyCode: "BAM", currencyName: "Босна и Херцеговина - Конвертабилна марка", exchangeRate: ko.observable('-') },
	    { currencyCode: "BBD", currencyName: "Барбейдоски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "BDT", currencyName: "Бангладешска така", exchangeRate: ko.observable('-') },
	    { currencyCode: "BHD", currencyName: "Бахрейнски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "BIF", currencyName: "Бурундийски франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "BMD", currencyName: "Бермудски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "BND", currencyName: "Брунейски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "BOB", currencyName: "Боливийско боливиано", exchangeRate: ko.observable('-') },
	    { currencyCode: "BRL", currencyName: "Бразилски реал", exchangeRate: ko.observable('-') },
	    { currencyCode: "BSD", currencyName: "Бахамски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "BTN", currencyName: "Бутански нгултрум", exchangeRate: ko.observable('-') },
	    { currencyCode: "BWP", currencyName: "Ботсванска пула", exchangeRate: ko.observable('-') },
	    { currencyCode: "BYR", currencyName: "Беларуска рубла", exchangeRate: ko.observable('-') },
	    { currencyCode: "BZD", currencyName: "Белизийски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "CDF", currencyName: "Конгоански франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "CLF", currencyName: "Чилийска единица (UF)", exchangeRate: ko.observable('-') },
	    { currencyCode: "CLP", currencyName: "Чилийско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "CNY", currencyName: "Китайски ренминби юан", exchangeRate: ko.observable('-') },
	    { currencyCode: "COP", currencyName: "Колумбийско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "CRC", currencyName: "Костарикански колон", exchangeRate: ko.observable('-') },
	    { currencyCode: "CUP", currencyName: "Кубинско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "CVE", currencyName: "Кабоверденско ескудо", exchangeRate: ko.observable('-') },
	    { currencyCode: "CZK", currencyName: "Чешка крона", exchangeRate: ko.observable('-') },
	    { currencyCode: "DJF", currencyName: "Джибутски франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "DKK", currencyName: "Датска крона", exchangeRate: ko.observable('-') },
	    { currencyCode: "DOP", currencyName: "Доминиканско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "DZD", currencyName: "Алжирски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "EGP", currencyName: "Египетска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "ETB", currencyName: "Етиопски бир", exchangeRate: ko.observable('-') },
	    { currencyCode: "FJD", currencyName: "Фиджийски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "FKP", currencyName: "Фолкландска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "GEL", currencyName: "Грузинска лари", exchangeRate: ko.observable('-') },
	    { currencyCode: "GHS", currencyName: "Ганайски седи", exchangeRate: ko.observable('-') },
	    { currencyCode: "GIP", currencyName: "Гибралтарска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "GMD", currencyName: "Гамбийски даласи", exchangeRate: ko.observable('-') },
	    { currencyCode: "GNF", currencyName: "Гвинейски франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "GTQ", currencyName: "Гватемалски кетцал", exchangeRate: ko.observable('-') },
	    { currencyCode: "GYD", currencyName: "Гаянски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "HNL", currencyName: "Хондураска лемпра", exchangeRate: ko.observable('-') },
	    { currencyCode: "HRK", currencyName: "Хърватска куна", exchangeRate: ko.observable('-') },
	    { currencyCode: "HTG", currencyName: "Хаитянски гурд", exchangeRate: ko.observable('-') },
	    { currencyCode: "HUF", currencyName: "Унгарски форинт", exchangeRate: ko.observable('-') },
	    { currencyCode: "IDR", currencyName: "Индонезийска рупия", exchangeRate: ko.observable('-') },
	    { currencyCode: "ILS", currencyName: "Израелски шекел", exchangeRate: ko.observable('-') },
	    { currencyCode: "INR", currencyName: "Индийска рупия", exchangeRate: ko.observable('-') },
	    { currencyCode: "IQD", currencyName: "Иракски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "IRR", currencyName: "Ирански риал", exchangeRate: ko.observable('-') },
	    { currencyCode: "ISK", currencyName: "Исландска крона", exchangeRate: ko.observable('-') },
	    { currencyCode: "JMD", currencyName: "Ямайски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "JOD", currencyName: "Йордански динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "KES", currencyName: "Кенийски шилинг", exchangeRate: ko.observable('-') },
	    { currencyCode: "KGS", currencyName: "Киргизстански сум", exchangeRate: ko.observable('-') },
	    { currencyCode: "KHR", currencyName: "Камбоджански риел", exchangeRate: ko.observable('-') },
	    { currencyCode: "KMF", currencyName: "Коморийски франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "KPW", currencyName: "Севернокорейски вон", exchangeRate: ko.observable('-') },
	    { currencyCode: "KRW", currencyName: "Южнокорейски вон", exchangeRate: ko.observable('-') },
	    { currencyCode: "KWD", currencyName: "Кувейтски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "KZT", currencyName: "Казахстанско тенге", exchangeRate: ko.observable('-') },
	    { currencyCode: "LAK", currencyName: "Лаоски кип", exchangeRate: ko.observable('-') },
	    { currencyCode: "LBP", currencyName: "Ливанска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "LKR", currencyName: "Шриланкска рупия", exchangeRate: ko.observable('-') },
	    { currencyCode: "LRD", currencyName: "Либерийски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "LSL", currencyName: "Лесотско лоти", exchangeRate: ko.observable('-') },
	    { currencyCode: "LTL", currencyName: "Литовски литас", exchangeRate: ko.observable('-') },
	    { currencyCode: "LVL", currencyName: "Латвийски лат", exchangeRate: ko.observable('-') },
	    { currencyCode: "LYD", currencyName: "Либийски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "MAD", currencyName: "Марококански дирхам", exchangeRate: ko.observable('-') },
	    { currencyCode: "MDL", currencyName: "Молдовска лея", exchangeRate: ko.observable('-') },
	    { currencyCode: "MGA", currencyName: "Малагасийски ариари", exchangeRate: ko.observable('-') },
	    { currencyCode: "MKD", currencyName: "Македонски денар", exchangeRate: ko.observable('-') },
	    { currencyCode: "MMK", currencyName: "Мианмарски киат", exchangeRate: ko.observable('-') },
	    { currencyCode: "MNT", currencyName: "Монголски тугриг", exchangeRate: ko.observable('-') },
	    { currencyCode: "MOP", currencyName: "Макайска патака", exchangeRate: ko.observable('-') },
	    { currencyCode: "MRO", currencyName: "Мавританска угуйа", exchangeRate: ko.observable('-') },
	    { currencyCode: "MUR", currencyName: "Мавританска рупия", exchangeRate: ko.observable('-') },
	    { currencyCode: "MVR", currencyName: "Малдивска руфия", exchangeRate: ko.observable('-') },
	    { currencyCode: "MWK", currencyName: "Малавийска кауача", exchangeRate: ko.observable('-') },
	    { currencyCode: "MXN", currencyName: "Мексиканско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "MYR", currencyName: "Малайзийски рингит", exchangeRate: ko.observable('-') },
	    { currencyCode: "MZN", currencyName: "Мозамбикски метикал", exchangeRate: ko.observable('-') },
	    { currencyCode: "NAD", currencyName: "Намибийски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "NGN", currencyName: "Нигерийска найра", exchangeRate: ko.observable('-') },
	    { currencyCode: "NIO", currencyName: "Никарагска кордоба", exchangeRate: ko.observable('-') },
	    { currencyCode: "NPR", currencyName: "Непалски рупей", exchangeRate: ko.observable('-') },
	    { currencyCode: "NZD", currencyName: "Новозеландски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "OMR", currencyName: "Омански риал", exchangeRate: ko.observable('-') },
	    { currencyCode: "PAB", currencyName: "Панамска балбоа", exchangeRate: ko.observable('-') },
	    { currencyCode: "PEN", currencyName: "Нов перуански сол", exchangeRate: ko.observable('-') },
	    { currencyCode: "PGK", currencyName: "Папуа-новогвинейска кина", exchangeRate: ko.observable('-') },
	    { currencyCode: "PHP", currencyName: "Филипинско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "PKR", currencyName: "Пакистанска рупия", exchangeRate: ko.observable('-') },
	    { currencyCode: "PLN", currencyName: "Полска злота", exchangeRate: ko.observable('-') },
	    { currencyCode: "PYG", currencyName: "Парагвайски гуарани", exchangeRate: ko.observable('-') },
	    { currencyCode: "QAR", currencyName: "Катарски риал", exchangeRate: ko.observable('-') },
	    { currencyCode: "RON", currencyName: "Румънска лея", exchangeRate: ko.observable('-') },
	    { currencyCode: "RSD", currencyName: "Сръбски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "RUB", currencyName: "Руска рубла", exchangeRate: ko.observable('-') },
	    { currencyCode: "RWF", currencyName: "Руандийски франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "SAR", currencyName: "Саудитски риал", exchangeRate: ko.observable('-') },
	    { currencyCode: "SBD", currencyName: "Соломоновски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "SCR", currencyName: "Сейшелска рупия", exchangeRate: ko.observable('-') },
	    { currencyCode: "SDG", currencyName: "Суданска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "SGD", currencyName: "Сингапурски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "SHP", currencyName: "Паунд на остров Света Елена", exchangeRate: ko.observable('-') },
	    { currencyCode: "SLL", currencyName: "Сиералеонско леоне", exchangeRate: ko.observable('-') },
	    { currencyCode: "SOS", currencyName: "Сомалийски шилинг", exchangeRate: ko.observable('-') },
	    { currencyCode: "SRD", currencyName: "Суринамски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "STD", currencyName: "Сао Томе и Принсиписко добра", exchangeRate: ko.observable('-') },
	    { currencyCode: "SVC", currencyName: "Ел Салвадорски колон", exchangeRate: ko.observable('-') },
	    { currencyCode: "SYP", currencyName: "Сирийска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "SZL", currencyName: "Свазилендски лилангени", exchangeRate: ko.observable('-') },
	    { currencyCode: "THB", currencyName: "Тайландски бат", exchangeRate: ko.observable('-') },
	    { currencyCode: "TJS", currencyName: "Таджикски сомони", exchangeRate: ko.observable('-') },
	    { currencyCode: "TMT", currencyName: "Туркменски манат", exchangeRate: ko.observable('-') },
	    { currencyCode: "TND", currencyName: "Тунизийски динар", exchangeRate: ko.observable('-') },
	    { currencyCode: "TOP", currencyName: "Тонганска паанга", exchangeRate: ko.observable('-') },
	    { currencyCode: "TRY", currencyName: "Турска лира", exchangeRate: ko.observable('-') },
	    { currencyCode: "TTD", currencyName: "Тринидадски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "TWD", currencyName: "Нов Тайвански долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "TZS", currencyName: "Танзанийски шилинг", exchangeRate: ko.observable('-') },
	    { currencyCode: "UAH", currencyName: "Украинска гривна", exchangeRate: ko.observable('-') },
	    { currencyCode: "UGX", currencyName: "Угандийски шилинг", exchangeRate: ko.observable('-') },
	    { currencyCode: "UYU", currencyName: "Уругвайско песо", exchangeRate: ko.observable('-') },
	    { currencyCode: "UZS", currencyName: "Узбекистански Сум", exchangeRate: ko.observable('-') },
	    { currencyCode: "VEF", currencyName: "Венецуелски боливар", exchangeRate: ko.observable('-') },
	    { currencyCode: "VND", currencyName: "Виетнамски донг", exchangeRate: ko.observable('-') },
	    { currencyCode: "VUV", currencyName: "Вануатуанско вату", exchangeRate: ko.observable('-') },
	    { currencyCode: "WST", currencyName: "Самоанска тала", exchangeRate: ko.observable('-') },
	    { currencyCode: "XAF", currencyName: "Централноафрикански франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "XCD", currencyName: "Източно Карибски долар", exchangeRate: ko.observable('-') },
	    { currencyCode: "XDR", currencyName: "Специални права на тираж", exchangeRate: ko.observable('-') },
	    { currencyCode: "XOF", currencyName: "Западно Африкански франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "XPF", currencyName: "Френски тихоокеански франк", exchangeRate: ko.observable('-') },
	    { currencyCode: "YER", currencyName: "Йеменски риал", exchangeRate: ko.observable('-') },
	    { currencyCode: "ZAR", currencyName: "Южноафрикански ранд", exchangeRate: ko.observable('-') },
	    { currencyCode: "ZMK", currencyName: "Замбийска куача", exchangeRate: ko.observable('-') }
	];

	self.formatOptionLabel = function(item){
		return item.currencyName + ' (' + item.currencyCode + ')';
	};

    //Currency Calculator:
    self.isCalculating = ko.observable(true);
    self.calculationFinalCurrency = ko.observable(self.allCurrencies[0].currencyCode);
    self.CalculationBox = function(value, code){
        this.chosenCalculationValue = ko.observable(value);
        this.chosenCalculationCurrency = ko.observable(code);
    };
    self.calculationsArray = ko.observableArray([
        new self.CalculationBox(1, 'USD'),
        new self.CalculationBox(2, 'EUR')
    ]);
    self.addCalcunationBox = function(){
        self.calculationsArray.push(new self.CalculationBox(1, 'BGN'));
    };
    self.finalResult = ko.observable('-');
    self.calculateFinalResult = ko.computed(function(){
    	self.isCalculating(true);
    	var promises = [];
    	var grandTotal = 0;
    	var convertableValue;
    	for (var i = 0; i < self.calculationsArray().length; i++) {
    		convertableValue = self.calculationsArray()[i].chosenCalculationValue();
    		if (ValidationHelper.isNumbersOnly(convertableValue)) {
    			var request = $.ajax({
	                url: 'http://rate-exchange.appspot.com/currency?from=' + self.calculationsArray()[i].chosenCalculationCurrency() + '&to=' + self.calculationFinalCurrency() + "&q=" + convertableValue,
	                dataType:'jsonp',
	                success: function(data){
	                    grandTotal += data.v;
	                },
	                error: function() {
	                    console.log('Problem :(');
	                }
	            });
	            promises.push(request);
    		} else {
    			self.finalResult(":(");
    			return;
    		}
        }

        $.when.apply(null, promises).done(function(){
		    self.finalResult(parseFloat(grandTotal).toFixed(2));
		    self.isCalculating(false);
		});
    });


    //Table with convertion rates:
    self.chosenTableCurrency = self.allCurrencies[0].currencyCode;
    self.fillCurrencyExchangeTable = function(){
    	//Clear the current currency rates:
    	for (var m = 0; i < self.allCurrencies.length; m++) {
    		self.allCurrencies[m].exchangeRate("-");
    	}

        for (var i = 0; i < self.allCurrencies.length; i++) {
            (function(i){
                $.ajax({
                    url: 'http://rate-exchange.appspot.com/currency?from=' + self.chosenTableCurrency + '&to=' + self.allCurrencies[i].currencyCode,
                    dataType:'jsonp',
                    success: function(data){
                        //console.log("1 " + data.to + " is " + data.rate + " " + data.from);
                        self.allCurrencies[i].exchangeRate(data.rate);
                    },
                    error: function(){
                        console.log(':(');
                    }
                });
            })(i);
        }
    };
    self.fillCurrencyExchangeTable();
}

ko.applyBindings(new ExchangeRatesViewModel());