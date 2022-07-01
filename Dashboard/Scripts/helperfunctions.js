const defaultCountrySymbol = COUNTRY_SYMBOL.India;
const DefaultCurrency = CURRENCY.Rupees
const defaultStyle = FORMAT.Number.Style.Numeric;

function fn_getIntlFormatter(countrySymbol, obj) {
    if (obj) {
        return new Intl.NumberFormat(countrySymbol, obj);
    }
    return new Intl.NumberFormat(countrySymbol, obj)
}

function fn_getCurrencyFormater(CountrySymbol, Currency) {
    let obj = {
        style: format.Number.Style.Currency,
        currency: Currency
    }
    return fn_getIntlFormatter(CountrySymbol, obj);
};

Intl.NumberFormat.prototype.getCurrencyValue = function (val, isExcludeSymbol) {
    try {
        return this.format(val).substr(isExcludeSymbol ? 1 : 0, val.length);
    }
    catch (err) {
        return this.format(val);
    }
}

function fn_tickerformat(obj, val) {
    if (obj && val && Number.isNaN(Number.parseInt(val)) == false) {
        var formater = fn_getIntlFormatter(COUNTRY_SYMBOL.India)

        let counts = setInterval(updated);
        let upto = 0;

        function updated() {
            obj.innerHTML = formater.format(++upto);
            if (upto >= Number.parseInt(val)) {
                clearInterval(counts);
            }
        }
    }
    else {
        obj.innerHTML = val;
    }
}