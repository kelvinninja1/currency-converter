var KK = {
	onlyNumbers: function(){
		if(isNaN($("#calculatorCurrencyBoxValue1").val()-0)) {
			return false;
		}
	}
};

//alert('Възникна проблем с извличането на емисията с обновени валутни курсове.');


function ExchangeRatesViewModel() {
	var self = this;

	self.allCurrencies = [
	    { currencyCode: "BGN", currencyName: "Български лев", exchangeRate: ko.observable(0) },
	    { currencyCode: "EUR", currencyName: "Евро", exchangeRate: ko.observable(0) },
	    { currencyCode: "USD", currencyName: "Американски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "JPY", currencyName: "Японската йена", exchangeRate: ko.observable(0) },
	    { currencyCode: "GBP", currencyName: "Британската лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "CHF", currencyName: "Швейцарски франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "AUD", currencyName: "Австралийски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "CAD", currencyName: "Канадски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "SEK", currencyName: "Шведска крона", exchangeRate: ko.observable(0) },
	    { currencyCode: "HKD", currencyName: "Хонгконгски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "NOK", currencyName: "Норвежка крона", exchangeRate: ko.observable(0) },
	    { currencyCode: "AED", currencyName: "Обединените арабски емирства дирхам", exchangeRate: ko.observable(0) },
	    { currencyCode: "AFN", currencyName: "Афганистански афган", exchangeRate: ko.observable(0) },
	    { currencyCode: "ALL", currencyName: "Албански лек", exchangeRate: ko.observable(0) },
	    { currencyCode: "AMD", currencyName: "Арменски драм", exchangeRate: ko.observable(0) },
	    { currencyCode: "ANG", currencyName: "Холандски Антилски гулден", exchangeRate: ko.observable(0) },
	    { currencyCode: "AOA", currencyName: "Анголска кванза", exchangeRate: ko.observable(0) },
	    { currencyCode: "ARS", currencyName: "Аржентинско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "AWG", currencyName: "Арубски флорин", exchangeRate: ko.observable(0) },
	    { currencyCode: "AZN", currencyName: "Азербайджански манат", exchangeRate: ko.observable(0) },
	    { currencyCode: "BAM", currencyName: "Босна и Херцеговина - Конвертабилна марка", exchangeRate: ko.observable(0) },
	    { currencyCode: "BBD", currencyName: "Барбейдоски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "BDT", currencyName: "Бангладешска така", exchangeRate: ko.observable(0) },
	    { currencyCode: "BHD", currencyName: "Бахрейнски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "BIF", currencyName: "Бурундийски франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "BMD", currencyName: "Бермудски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "BND", currencyName: "Брунейски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "BOB", currencyName: "Боливийско боливиано", exchangeRate: ko.observable(0) },
	    { currencyCode: "BRL", currencyName: "Бразилски реал", exchangeRate: ko.observable(0) },
	    { currencyCode: "BSD", currencyName: "Бахамски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "BTN", currencyName: "Бутански нгултрум", exchangeRate: ko.observable(0) },
	    { currencyCode: "BWP", currencyName: "Ботсванска пула", exchangeRate: ko.observable(0) },
	    { currencyCode: "BYR", currencyName: "Беларуска рубла", exchangeRate: ko.observable(0) },
	    { currencyCode: "BZD", currencyName: "Белизийски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "CDF", currencyName: "Конгоански франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "CLF", currencyName: "Чилийска единица (UF)", exchangeRate: ko.observable(0) },
	    { currencyCode: "CLP", currencyName: "Чилийско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "CNY", currencyName: "Китайски ренминби юан", exchangeRate: ko.observable(0) },
	    { currencyCode: "COP", currencyName: "Колумбийско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "CRC", currencyName: "Костарикански колон", exchangeRate: ko.observable(0) },
	    { currencyCode: "CUP", currencyName: "Кубинско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "CVE", currencyName: "Кабоверденско ескудо", exchangeRate: ko.observable(0) },
	    { currencyCode: "CZK", currencyName: "Чешка крона", exchangeRate: ko.observable(0) },
	    { currencyCode: "DJF", currencyName: "Джибутски франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "DKK", currencyName: "Датска крона", exchangeRate: ko.observable(0) },
	    { currencyCode: "DOP", currencyName: "Доминиканско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "DZD", currencyName: "Алжирски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "EGP", currencyName: "Египетска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "ETB", currencyName: "Етиопски бир", exchangeRate: ko.observable(0) },
	    { currencyCode: "FJD", currencyName: "Фиджийски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "FKP", currencyName: "Фолкландска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "GEL", currencyName: "Грузинска лари", exchangeRate: ko.observable(0) },
	    { currencyCode: "GHS", currencyName: "Ганайски седи", exchangeRate: ko.observable(0) },
	    { currencyCode: "GIP", currencyName: "Гибралтарска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "GMD", currencyName: "Гамбийски даласи", exchangeRate: ko.observable(0) },
	    { currencyCode: "GNF", currencyName: "Гвинейски франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "GTQ", currencyName: "Гватемалски кетцал", exchangeRate: ko.observable(0) },
	    { currencyCode: "GYD", currencyName: "Гаянски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "HNL", currencyName: "Хондураска лемпра", exchangeRate: ko.observable(0) },
	    { currencyCode: "HRK", currencyName: "Хърватска куна", exchangeRate: ko.observable(0) },
	    { currencyCode: "HTG", currencyName: "Хаитянски гурд", exchangeRate: ko.observable(0) },
	    { currencyCode: "HUF", currencyName: "Унгарски форинт", exchangeRate: ko.observable(0) },
	    { currencyCode: "IDR", currencyName: "Индонезийска рупия", exchangeRate: ko.observable(0) },
	    { currencyCode: "ILS", currencyName: "Израелски шекел", exchangeRate: ko.observable(0) },
	    { currencyCode: "INR", currencyName: "Индийска рупия", exchangeRate: ko.observable(0) },
	    { currencyCode: "IQD", currencyName: "Иракски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "IRR", currencyName: "Ирански риал", exchangeRate: ko.observable(0) },
	    { currencyCode: "ISK", currencyName: "Исландска крона", exchangeRate: ko.observable(0) },
	    { currencyCode: "JMD", currencyName: "Ямайски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "JOD", currencyName: "Йордански динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "KES", currencyName: "Кенийски шилинг", exchangeRate: ko.observable(0) },
	    { currencyCode: "KGS", currencyName: "Киргизстански сум", exchangeRate: ko.observable(0) },
	    { currencyCode: "KHR", currencyName: "Камбоджански риел", exchangeRate: ko.observable(0) },
	    { currencyCode: "KMF", currencyName: "Коморийски франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "KPW", currencyName: "Севернокорейски вон", exchangeRate: ko.observable(0) },
	    { currencyCode: "KRW", currencyName: "Южнокорейски вон", exchangeRate: ko.observable(0) },
	    { currencyCode: "KWD", currencyName: "Кувейтски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "KZT", currencyName: "Казахстанско тенге", exchangeRate: ko.observable(0) },
	    { currencyCode: "LAK", currencyName: "Лаоски кип", exchangeRate: ko.observable(0) },
	    { currencyCode: "LBP", currencyName: "Ливанска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "LKR", currencyName: "Шриланкска рупия", exchangeRate: ko.observable(0) },
	    { currencyCode: "LRD", currencyName: "Либерийски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "LSL", currencyName: "Лесотско лоти", exchangeRate: ko.observable(0) },
	    { currencyCode: "LTL", currencyName: "Литовски литас", exchangeRate: ko.observable(0) },
	    { currencyCode: "LVL", currencyName: "Латвийски лат", exchangeRate: ko.observable(0) },
	    { currencyCode: "LYD", currencyName: "Либийски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "MAD", currencyName: "Марококански дирхам", exchangeRate: ko.observable(0) },
	    { currencyCode: "MDL", currencyName: "Молдовска лея", exchangeRate: ko.observable(0) },
	    { currencyCode: "MGA", currencyName: "Малагасийски ариари", exchangeRate: ko.observable(0) },
	    { currencyCode: "MKD", currencyName: "Македонски денар", exchangeRate: ko.observable(0) },
	    { currencyCode: "MMK", currencyName: "Мианмарски киат", exchangeRate: ko.observable(0) },
	    { currencyCode: "MNT", currencyName: "Монголски тугриг", exchangeRate: ko.observable(0) },
	    { currencyCode: "MOP", currencyName: "Макайска патака", exchangeRate: ko.observable(0) },
	    { currencyCode: "MRO", currencyName: "Мавританска угуйа", exchangeRate: ko.observable(0) },
	    { currencyCode: "MUR", currencyName: "Мавританска рупия", exchangeRate: ko.observable(0) },
	    { currencyCode: "MVR", currencyName: "Малдивска руфия", exchangeRate: ko.observable(0) },
	    { currencyCode: "MWK", currencyName: "Малавийска кауача", exchangeRate: ko.observable(0) },
	    { currencyCode: "MXN", currencyName: "Мексиканско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "MYR", currencyName: "Малайзийски рингит", exchangeRate: ko.observable(0) },
	    { currencyCode: "MZN", currencyName: "Мозамбикски метикал", exchangeRate: ko.observable(0) },
	    { currencyCode: "NAD", currencyName: "Намибийски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "NGN", currencyName: "Нигерийска найра", exchangeRate: ko.observable(0) },
	    { currencyCode: "NIO", currencyName: "Никарагска кордоба", exchangeRate: ko.observable(0) },
	    { currencyCode: "NPR", currencyName: "Непалски рупей", exchangeRate: ko.observable(0) },
	    { currencyCode: "NZD", currencyName: "Новозеландски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "OMR", currencyName: "Омански риал", exchangeRate: ko.observable(0) },
	    { currencyCode: "PAB", currencyName: "Панамска балбоа", exchangeRate: ko.observable(0) },
	    { currencyCode: "PEN", currencyName: "Нов перуански сол", exchangeRate: ko.observable(0) },
	    { currencyCode: "PGK", currencyName: "Папуа-новогвинейска кина", exchangeRate: ko.observable(0) },
	    { currencyCode: "PHP", currencyName: "Филипинско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "PKR", currencyName: "Пакистанска рупия", exchangeRate: ko.observable(0) },
	    { currencyCode: "PLN", currencyName: "Полска злота", exchangeRate: ko.observable(0) },
	    { currencyCode: "PYG", currencyName: "Парагвайски гуарани", exchangeRate: ko.observable(0) },
	    { currencyCode: "QAR", currencyName: "Катарски риал", exchangeRate: ko.observable(0) },
	    { currencyCode: "RON", currencyName: "Румънска лея", exchangeRate: ko.observable(0) },
	    { currencyCode: "RSD", currencyName: "Сръбски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "RUB", currencyName: "Руска рубла", exchangeRate: ko.observable(0) },
	    { currencyCode: "RWF", currencyName: "Руандийски франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "SAR", currencyName: "Саудитски риал", exchangeRate: ko.observable(0) },
	    { currencyCode: "SBD", currencyName: "Соломоновски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "SCR", currencyName: "Сейшелска рупия", exchangeRate: ko.observable(0) },
	    { currencyCode: "SDG", currencyName: "Суданска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "SGD", currencyName: "Сингапурски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "SHP", currencyName: "Паунд на остров Света Елена", exchangeRate: ko.observable(0) },
	    { currencyCode: "SLL", currencyName: "Сиералеонско леоне", exchangeRate: ko.observable(0) },
	    { currencyCode: "SOS", currencyName: "Сомалийски шилинг", exchangeRate: ko.observable(0) },
	    { currencyCode: "SRD", currencyName: "Суринамски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "STD", currencyName: "Сао Томе и Принсиписко добра", exchangeRate: ko.observable(0) },
	    { currencyCode: "SVC", currencyName: "Ел Салвадорски колон", exchangeRate: ko.observable(0) },
	    { currencyCode: "SYP", currencyName: "Сирийска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "SZL", currencyName: "Свазилендски лилангени", exchangeRate: ko.observable(0) },
	    { currencyCode: "THB", currencyName: "Тайландски бат", exchangeRate: ko.observable(0) },
	    { currencyCode: "TJS", currencyName: "Таджикски сомони", exchangeRate: ko.observable(0) },
	    { currencyCode: "TMT", currencyName: "Туркменски манат", exchangeRate: ko.observable(0) },
	    { currencyCode: "TND", currencyName: "Тунизийски динар", exchangeRate: ko.observable(0) },
	    { currencyCode: "TOP", currencyName: "Тонганска паанга", exchangeRate: ko.observable(0) },
	    { currencyCode: "TRY", currencyName: "Турска лира", exchangeRate: ko.observable(0) },
	    { currencyCode: "TTD", currencyName: "Тринидадски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "TWD", currencyName: "Нов Тайвански долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "TZS", currencyName: "Танзанийски шилинг", exchangeRate: ko.observable(0) },
	    { currencyCode: "UAH", currencyName: "Украинска гривна", exchangeRate: ko.observable(0) },
	    { currencyCode: "UGX", currencyName: "Угандийски шилинг", exchangeRate: ko.observable(0) },
	    { currencyCode: "UYU", currencyName: "Уругвайско песо", exchangeRate: ko.observable(0) },
	    { currencyCode: "UZS", currencyName: "Узбекистански Сум", exchangeRate: ko.observable(0) },
	    { currencyCode: "VEF", currencyName: "Венецуелски боливар", exchangeRate: ko.observable(0) },
	    { currencyCode: "VND", currencyName: "Виетнамски донг", exchangeRate: ko.observable(0) },
	    { currencyCode: "VUV", currencyName: "Вануатуанско вату", exchangeRate: ko.observable(0) },
	    { currencyCode: "WST", currencyName: "Самоанска тала", exchangeRate: ko.observable(0) },
	    { currencyCode: "XAF", currencyName: "Централноафрикански франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "XCD", currencyName: "Източно Карибски долар", exchangeRate: ko.observable(0) },
	    { currencyCode: "XDR", currencyName: "Специални права на тираж", exchangeRate: ko.observable(0) },
	    { currencyCode: "XOF", currencyName: "Западно Африкански франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "XPF", currencyName: "Френски тихоокеански франк", exchangeRate: ko.observable(0) },
	    { currencyCode: "YER", currencyName: "Йеменски риал", exchangeRate: ko.observable(0) },
	    { currencyCode: "ZAR", currencyName: "Южноафрикански ранд", exchangeRate: ko.observable(0) },
	    { currencyCode: "ZMK", currencyName: "Замбийска куача", exchangeRate: ko.observable(0) },
	    { currencyCode: "ZWL", currencyName: "Зимбабвийски долар", exchangeRate: ko.observable(0) }
	];

    //Table with convertion rates:
    self.chosenTableCurrency = ko.observable(self.allCurrencies[0].currencyCode);
    self.fillCurrencyExchangeTable = function(){
        for (var i = 0; i < self.allCurrencies.length; i++) {
            (function(i){
                $.ajax({
                    url: 'http://rate-exchange.appspot.com/currency?from=' + self.chosenTableCurrency() + '&to=' + self.allCurrencies[i].currencyCode,
                    dataType:'jsonp',
                    success: function(data){
                        //console.log("1 " + data.to + " is " + data.rate + " " + data.from);
                        self.allCurrencies[i].exchangeRate(data.rate);
                    },
                    error: function(){
                        console.log('Problem :(');
                    }
                });
            })(i);
        }
    };
    self.fillCurrencyExchangeTable();


    //Currency Calculator:
    self.calculationFinalCurrency = ko.observable(self.allCurrencies[0].currencyCode);
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
    self.finalResult = ko.observable(0);
    self.calculateFinalResult = ko.computed(function(){
    	var promises = [];
    	var grandTotal = 0;
    	for (var i = 0; i < self.calculationsArray().length; i++) {
            var request = $.ajax({
                url: 'http://rate-exchange.appspot.com/currency?from=' + self.calculationsArray()[i].chosenCalculationCurrency() + '&to=' + self.calculationFinalCurrency() + "&q=" + self.calculationsArray()[i].chosenCalculationValue(),
                dataType:'jsonp',
                success: function(data){
                    grandTotal += data.v;
                },
                error: function() {
                    console.log('Problem :(');
                }
            });
            promises.push(request);
        }

        $.when.apply(null, promises).done(function(){
		    self.finalResult(parseFloat(grandTotal));
		});
    });
}

ko.applyBindings(new ExchangeRatesViewModel());