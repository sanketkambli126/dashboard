var STYLESHEET = document.styleSheets[0]; const THREEDOTS = '...'; // to make continuation of Word if it exceeds the value
const valueType = { string: "string", number: "number", percentage: "percentage", currency: "currency" };
const FORMAT = { number: { style: { numeric: 'number', currency: 'currency', percentage: 'percentage' } } }; Object.freeze(FORMAT);
const CURRENCY = { rupees: "", euro: "", pounds: "", dollars: "USD" }; Object.freeze(CURRENCY);
const COUNTRY_SYMBOL = { INDIA: "hi-IN", US: "en-US" }; Object.freeze(COUNTRY_SYMBOL);
const COMPLETE_COLOUR = "green", PENDING_COLOR = "red", COMPLETE_COLOR_CLASS = "green-pos", PENDING_COLOR_CLASS = "red-neg";
const PARAM_ACTION = { append: 1, override: 2 }; Object.freeze(PARAM_ACTION);
const LOADER = `<div class="loader loader--style1" title="0"> <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"> <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" /> <path fill="#378" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"> <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite" /></path></svg></div>`
const KPI_CRADS_FUNCTIONS =
    {
        container: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }],

        cardValue: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }],

        cardText: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }],

        cardProgressValue: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }]
    }
const SIMPLE_CRADS_FUNCTIONS =
    {
        container: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }],

        cardValue: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }],

        cardText: [{
            fnClick: 'click',
            fnBlur: 'blur',
            fnDblClick: 'dblclick',
            fnFocusIn: 'focusin',
            fnFocusOut: 'focusout',
            fnFocus: 'focus',
            fnKeyDown: 'keydown',
            fnKeyup: 'keyup',
            fnKeyPress: 'keypress',
            fnMouseOver: 'mouseover'
        }]
    }
const FILTER_OPTION =
{
    filterCannel: [{
        fnClick: 'click',
        fnBlur: 'blur',
        fnDblClick: 'dblclick',
        fnFocusIn: 'focusin',
        fnFocusOut: 'focusout',
        fnFocus: 'focus',
        fnKeyDown: 'keydown',
        fnKeyup: 'keyup',
        fnKeyPress: 'keypress',
        fnMouseOver: 'mouseover'
    }]
}
const defaultCountrySymbol = COUNTRY_SYMBOL.INDIA;
const DefaultCurrency = CURRENCY.rupees
const defaultStyle = FORMAT.number.style.numeric;
// Prototyping Convert to Boolean Method on String Object
String.prototype.convertStringToBool = function () {
    inputString = this || "";
    inputString = inputString.toLowerCase();

    switch (inputString) {
        case "1":
        case "true":
        case "yes":
        case "y":
        case 1:
        case true:
            return true;
            break;

        default: return false;
    }
}

function fn_getIntlFormatter(countrySymbol, obj) {
    return new Intl.NumberFormat(countrySymbol, obj)
}

function fn_getCurrencyFormater(CountrySymbol, Currency) {
    let obj = { style: format.Number.Style.Currency, currency: Currency }; return fn_getIntlFormatter(CountrySymbol, obj);
};

Intl.NumberFormat.prototype.getCurrencyValue = function (val, isExcludeSymbol) {
    try { return this.format(val).substr(isExcludeSymbol ? 1 : 0, val.length); } catch (err) { return this.format(val); }
}

function fn_tickerformat(obj, val, style, locale, currency, useThousandSeperator) {
    switch (style) {
        case valueType.string:
            setInnerHTMLValue(obj, val);
            break;
        case valueType.number:
            if (typeof val != "number") setInnerHTMLValue(obj, val)
            else {
                formatter = useThousandSeperator ? new Intl.NumberFormat("en-US") : undefined;
                applyTickerFormat(formatter);
            }
            break;
        case valueType.percentage:

            if (typeof val != "number") setInnerHTMLValue(obj, val)
            else {
                var option = {
                    style: 'percent',
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0
                };
                var formatter = new Intl.NumberFormat("en-US", option);
                applyTickerFormat(formatter);
            }
            break;
        case valueType.currency:
            if (typeof val != "number") setInnerHTMLValue(obj, val)
            else {
                formatter = new Intl.NumberFormat(locale || "hi-IN", {
                    style: 'currency',
                    currency: currency || "INR",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0
                })
                applyTickerFormat(formatter);
            }
            break;
        default:
            osetInnerHTMLValue(obj, val);
            break

    }

    function setInnerHTMLValue(obj, val) {
        obj.innerHTML = val;
    }

    function applyTickerFormat(formatter) {
        let counts = setInterval(updated);
        valFunc = getValue(formatter)
        let upto = 0;
        let incrementer = val > 100 ? Math.ceil(val / 100) : 1;
        function updated() {
            finalVal = upto < val ? upto : val;
            obj.innerHTML = valFunc(style == valueType.percentage ? finalVal / 100 : finalVal);
            if (upto >= Number.parseInt(val)) {
                clearInterval(counts);
            }
            upto += incrementer;
        }
    }
}

function fnSetValue(obj, val, style, locale, currency, useThousandSeperator) {
    switch (style) {
        case valueType.string:
            setInnerHTMLValue(obj, val);
            break;
        case valueType.number:
            if (typeof val != "number") setInnerHTMLValue(obj, val)
            else {
                formatter = useThousandSeperator ? new Intl.NumberFormat("en-US") : undefined;
                applyTickerFormat(formatter);
            }
            break;
        case valueType.percentage:

            if (typeof val != "number") setInnerHTMLValue(obj, val)
            else {
                var option = {
                    style: 'percent',
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0
                };
                var formatter = new Intl.NumberFormat("en-US", option);
                applyTickerFormat(formatter);
            }
            break;
        case valueType.currency:
            if (typeof val != "number") setInnerHTMLValue(obj, val)
            else {
                formatter = new Intl.NumberFormat(locale || "hi-IN", {
                    style: 'currency',
                    currency: currency || "INR",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0
                })
                applyTickerFormat(formatter);
            }
            break;
        default:
            osetInnerHTMLValue(obj, val);
            break

    }

    function setInnerHTMLValue(obj, val) {
        obj.innerHTML = val;
    }

    function applyTickerFormat(formatter) {
        valFunc = getValue(formatter)
        obj.innerHTML = valFunc(style == valueType.percentage ? val / 100 : val);
    }
}

function getValue(formatter) {
    function returnValue(val) { return formatter.format(val); }
    function returnSimpleValue(val) { return val; }
    return formatter ? returnValue : returnSimpleValue;
}



function generateLightColorRgb() {
    const red = Math.floor((1 + Math.random()) * 256 / 2);
    const green = Math.floor((1 + Math.random()) * 256 / 2);
    const blue = Math.floor((1 + Math.random()) * 256 / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

/// Convert all Elements in the list to Lower case
function listToLowerList(list) {
    // Checking if list element has values
    if (list && Array.isArray(list) && list.join("").length > 0) {
        // convert list to lower case list
        return list.map(function (e) { return e.toLowerCase() })
    }
    // returing empty list if there is no element in list
    return [];
}

/// Get Value From Object on the basis of key (Non-case Sensitive)
function getValueFromObject(actualObject, key, defaultValue) {
    // checking object and key is valid
    if (actualObject && key) {
        // retriving all the keys from object
        let keys = actualObject ? Object.keys(actualObject) : [];
        // converting the list to lower case
        let lowerKeys = listToLowerList(keys);

        // retriving value from object
        return actualObject[keys[lowerKeys.indexOf(key.toLowerCase())]];
    }
    // Retrurning undefined value if Invalid inputs
    return defaultValue || undefined;
}

function createHtmlElement(tagName) {
    // Checking if Valid value for tag
    if (tagName && typeof tagName == 'string') {
        // returning new HTML element
        return document.createElement(tagName);
    }
    return null;
}

function createElementNS(tagName) {
    namespaceURI = "http://www.w3.org/2000/svg"
    return document.createElementNS(namespaceURI, tagName);
}

function addClassListToHtmlElement(HTMLElement, classList) {
    // appending classlist to HTML Element
    if ((classList && Array.isArray(classList) && classList.join("").length > 0) && (HTMLElement)) {
        classList.forEach(function (c) { HTMLElement.classList.add(c) })
    }
}

function appendElements(parentElement, childElement) {
    // Appending Child Elements to Parent Object
    if (childElement && parentElement) {
        parentElement.appendChild(childElement);
    }
}

function appendUrlParameter(url, param, value, action, seprator) {
    action = action || PARAM_ACTION.override;
    seprator = seprator || ",";
    if (url && param && value) {
        const parser = new URL(url, window.location.href);
        const isParamPresent = parser.searchParams.has(param);
        if (!isParamPresent) {
            setNewParam(parser, param, value)
        }
        else {
            switch (action) {
                case PARAM_ACTION.append:
                    const value = parser.searchParams.get(param);
                    let arr = value.split(seprator) || [];
                    if (!arr.includes(value)) {
                        arr.push(value)
                    }
                    setNewParam(parser, param, arr.join(','));
                    break;
                case PARAM_ACTION.override:
                    setNewParam(parser, param, value);
                    break;
                default:
                    break;
            }
        }
        return parser.href;
    }
    return url;

    function setNewParam(par, p, v) {
        par.searchParams.set(p, v);
    }
}

function getMeasuredTextWidth(text, font) {
    var ctx = document.createElement('canvas').getContext('2d')
    ctx.font = font || ctx.font;
    return ctx.measureText(text).width;
}


function getWidthCalculatedText(text, maxWidth, font) {

    totalwidth = getMeasuredTextWidth(text, font);
    let dotwidth = getMeasuredTextWidth(THREEDOTS, font);
    if (maxWidth >= totalwidth)
        return text;
    else {
        let newtext = "";
        let i = 0
        for (let c of text) {
            newtext += c;
            totalwidth = getMeasuredTextWidth(newtext, font);
            if ((totalwidth + dotwidth) >= (maxWidth) && (i != text.length && (totalwidth > maxWidth || dotwidth < getMeasuredTextWidth(text.substr(i, text.length - i), font)))) {
                return newtext + (newtext == text ? "" : THREEDOTS);
            }
            i++;
        }
        return newtext;
    }
}

////////  Common Object all the other objects will going to get inherit from this object /////////
function dashboardItems() {
    // creating a common data object
    this.$data;
    // creating a common Ajax call for Pagination
    /**
        Input Obj = { pageLength , PageNo, url, method, isAsync, successfunc, data }
    **/
    let globalObject = this;
    this.$Ajax = function (requestObject) {
        try {
            // Appending Page length and PageNo to data
            if (requestObject) {

                let data = getValueFromObject(requestObject, "data") || {} // taking out data from obj
                //Retrive all the extra Parameters for request Object

                let paramList = getValueFromObject(requestObject, "params");
                // Retriving Method of Ajax from request object
                var method = getValueFromObject(requestObject, "method") || 'GET';
                // Retriving URL from request Object
                var url = getValueFromObject(requestObject, "url");
                // Checking if Param list is having Params
                if (paramList) {
                    for (let param in paramList) {
                        // Swicth on method if need to append the extra params to url or data
                        switch (method.toLowerCase()) {
                            case "post":
                                data[param["key"]] = param["value"];
                                break;
                            case "get":
                            default:
                                url = appendUrlParameter(url, param["key"], param["value"]);
                        }
                    }
                }
                let isAsync = (getValueFromObject(requestObject, "isAsync", "true")).toString().convertStringToBool();
                // creating http object
                $.ajax({
                    url: url,
                    method: method,
                    data: data,
                    isAsync: isAsync,
                    success: function (response) {
                        getValueFromObject(requestObject, "success")(response);
                        getValueFromObject(requestObject, "resolve")();
                    },
                    error: function (x, status, error) {
                        getValueFromObject(requestObject, "resolve")();
                    }
                });
            }
            else {
                // throws error is paramter is not present
                throw Error("Cannot make Ajax as No Inputs are Provided")
            }
        }
        catch (Err) {
            getValueFromObject(requestObject, 'resolve')();
        }
    }

    this.$applyfilter = function (_data, func) {
        if (_data && Array.isArray(_data)) {
            return _data.filter(func);
        }
    }

}

function addLoader() {
    var loader = createHtmlElement('div');
    addClassListToHtmlElement(loader, ['card-container']);

    var loaderitem = createHtmlElement('div');
    addClassListToHtmlElement(loaderitem, ['card-item']);
    loaderitem.innerHTML = LOADER;

    loader.appendChild(loaderitem)
    return loader;
}

/////////////////////////////////////////////////// KPI card //////////////////////////////////////////////////////////////

function KPICard(inputObject) {
    // Inheriting Parent
    dashboardItems.call(this);
    let globalKPIObject = this;

    this.$data = {}
    this.$selectorElement = getValueFromObject(inputObject, "selector")

    let cardDefinition = getValueFromObject(inputObject, "cardDefinition");
    let cardValueOptions = getValueFromObject(inputObject, "valueOption");
    let cardContainerOptions = getValueFromObject(inputObject, "containerOption");
    let cardTextOptions = getValueFromObject(inputObject, "textOption");
    let KPIOptions = getValueFromObject(inputObject, "keyProgessOption")
    let url = getValueFromObject(inputObject, "url");
    let method = getValueFromObject(inputObject, "method", "GET");
    let requestData = getValueFromObject(inputObject, "requestData", {});

    function drawCard(_data, _CardDefinition, cardElement) {
        cardContainer = createCardContainer(_data, _CardDefinition, cardElement); cardItem = createCardItem(_data, _CardDefinition, cardContainer); spanValue = createCardValue(_data, _CardDefinition, cardItem); spanText = createCardText(_data, _CardDefinition, cardItem); cardProgress = createCardProgress(_data, _CardDefinition, cardElement);
    }
    function createCardContainer(_data, _CardDefinition, cardElement) {
        var cardContainer = createHtmlElement('div'); addClassListToHtmlElement(cardContainer, ['card-container']); appendElements(cardElement, cardContainer)
        globalKPIObject.$selectorElement.innerHTML = cardContainer;
        if (cardContainerOptions) {
            const classNames = cardContainerOptions["className"] ? cardContainerOptions["className"] : "";
            let classNamesList = classNames.split(" "); if (classNamesList && classNamesList["length"] > 0) addClassListToHtmlElement(cardContainer, classNamesList)
            if (cardContainerOptions["id"]) cardContainer.id = cardContainerOptions["id"];
            assingCardContainerEvents(cardContainer)
            function assingCardContainerEvents(container_obj) {
                Object.keys(KPI_CRADS_FUNCTIONS.container[0]).filter(function (e) { return Object.keys(cardContainerOptions).includes(e); }).forEach(function (e) {
                    container_obj.addEventListener(KPI_CRADS_FUNCTIONS.container[0][e], function (event) {
                        cardContainerOptions[e](_data);
                        event.stopPropagation();
                    })
                });
            }
        }
        return cardContainer;
    }
    function createCardItem(_data, _CardDefinition, cardContainer) {
        var cardItem = createHtmlElement('div'); addClassListToHtmlElement(cardItem, ['card-item']); appendElements(cardContainer, cardItem); return cardItem;

    }
    function createCardValue(_data, _CardDefinition, cardItem) {
        var spanValue = createHtmlElement('span'); addClassListToHtmlElement(spanValue, ['card-value']); appendElements(cardItem, spanValue);
        if (cardValueOptions) {
            const classNames = cardValueOptions["className"] ? cardValueOptions["className"] : "";
            let classNamesList = classNames.split(" ");
            if (classNamesList && classNamesList["length"] > 0) addClassListToHtmlElement(spanValue, classNamesList)
            if (cardValueOptions["id"]) spanValue.id = cardValueOptions["id"];
            assingCardValueEvents(spanValue)
        }
        if (cardValueOptions && Object.keys(cardValueOptions).includes('applyTickerFormat') && cardValueOptions["applyTickerFormat"] == true) fn_tickerformat(spanValue, _data[_CardDefinition.value], cardValueOptions["valueType"] || (typeof _data[_CardDefinition.value]), cardValueOptions["countrySymbol"], cardValueOptions["currency"], cardValueOptions["useThousandSeperator"]);
        else {
            fnSetValue(spanValue, _data[_CardDefinition.value], cardValueOptions["valueType"] || (typeof _data[_CardDefinition.value]), cardValueOptions["countrySymbol"], cardValueOptions["currency"], cardValueOptions["useThousandSeperator"]);
        }
        function assingCardValueEvents(span_value_object) {
            Object.keys(KPI_CRADS_FUNCTIONS.cardValue[0]).filter(function (e) { return Object.keys(cardValueOptions).includes(e); }).forEach(function (e) {
                span_value_object.addEventListener(KPI_CRADS_FUNCTIONS.cardValue[0][e], function (event) {
                    cardValueOptions[e](_data, spanValue, _data[_CardDefinition.value]);
                    event.stopPropagation();
                })
            });
        }
        return spanValue;
    }
    function createCardText(_data, _CardDefinition, cardItem) {
        var spanHeading = createHtmlElement('span'); addClassListToHtmlElement(spanHeading, ['card-text']); appendElements(cardItem, spanHeading)
        spanHeading.innerHTML = _data[_CardDefinition.title] || "";
        if (cardTextOptions) {
            const classNames = cardTextOptions["className"] ? cardTextOptions["className"] : "";
            let classNamesList = classNames.split(" ");
            if (classNamesList && classNamesList["length"] > 0) addClassListToHtmlElement(spanHeading, classNamesList)
            assingCardTextEvents(spanHeading)
            function assingCardTextEvents(span_heading_object) {
                Object.keys(KPI_CRADS_FUNCTIONS.cardText[0]).filter(function (e) { return Object.keys(cardTextOptions).includes(e); }).forEach(function (e) {
                    span_value_object.addEventListener(KPI_CRADS_FUNCTIONS.cardText[0][e], function (event) {
                        cardTextOptions[e](_data, spanHeading, _data[_CardDefinition.title]);
                        event.stopPropagation();
                    })
                });
            }
        }
        return spanHeading;
    }
    function createCardProgress(_data, _CardDefinition, card) {
        var cardProgress = createHtmlElement('div'); addClassListToHtmlElement(cardProgress, ['card-progress']); appendElements(card, cardProgress)
        let KPIDefinition = _CardDefinition["KPI"];
        let KPIValues = _data[KPIDefinition];
        if (KPIValues && Array.isArray(KPIValues)) {
            if (KPIValues["length"] && KPIValues["length"] > 0) {
                const totalValue = KPIValues.map(function (e) { return Number.parseFloat(e.value); }).reduce(function (val1, val2) { return val1 + val2 })
                KPIValues.forEach(function (e) { e.$widthPercent = (Number.parseFloat(e.value) * 100) / totalValue; })
                KPIValues.forEach(function (e, idx) {
                    let KPIObject = getKPIIndicator(e.$widthPercent, e.value);
                    let classNames = e["className"] ? e["className"] : "";
                    let classNamesList = classNames.split(" ");
                    if (classNamesList && classNamesList["length"] > 0) { addClassListToHtmlElement(KPIObject, classNamesList) }
                    if (e["id"]) { KPIObject.id = e["id"]; }
                    if (KPIOptions) {
                        assignProgressEvents(KPIObject, KPIOptions, _data, e, e.value, idx);
                    }
                    cardProgress.appendChild(KPIObject);
                })

                function assignProgressEvents(KPIObject, optionObject, _data, KPIValue, value, index) {
                    Object.keys(KPI_CRADS_FUNCTIONS.cardProgressValue[0]).filter(function (e) { return Object.keys(optionObject).includes(e); }).forEach(function (e) {
                        KPIObject.addEventListener(KPI_CRADS_FUNCTIONS.cardProgressValue[0][e], function (event) {
                            optionObject[e](_data, KPIValue, value, index);
                            event.stopPropagation();
                        })
                    });
                }
            }
            function getKPIIndicator(width, value) {
                let KPI = createHtmlElement('span');
                KPI.style.width = width + "%";
                KPI.title = value;
                return KPI;
            }
        }
        else {
            throw Error("KPIs are not defined as expected")
        }
        return cardProgress;
    }

    this.$drawcards = function () {

        var card = createHtmlElement('div')
        addClassListToHtmlElement(card, ["card"])

        globalKPIObject.$selectorElement.html(card)
        if (url) {
            let loader = addLoader();
            card.appendChild(loader);
            let p = new Promise(function (resolve) {
                let success = function (response) {
                    if (response && response.data) {
                        globalKPIObject.$data = response.data;
                    }
                    else {
                        globalKPIObject.$data = response;
                    }
                }
                globalKPIObject.$Ajax(
                    {
                        url: url,
                        method: method,
                        data: requestData,
                        isAsync: true,
                        resolve: resolve,
                        success: success
                    })
            }).then(function () {
                loader.remove();
                drawCard(globalKPIObject.$data, cardDefinition, card);
            })
        }
        else {
            globalKPIObject.$data = getValueFromObject(inputObject, "data");
            drawCard(globalKPIObject.$data, cardDefinition, card);
        }
    }
}
//Making default values as read only
Object.defineProperty(KPICard, "defaultvalues", { "writable": false });
//Making default values as read only
Object.freeze(KPICard.defaultvalues);
// PrototTyping cardview Parent to DashboardViews
KPICard.prototype = Object.create(dashboardItems.prototype);
// Prototyping cardview constructor to cardview only so that instance can be create by using new cardview
KPICard.prototype.constructor = KPICard;

//// ProtoTyping cardgroup on Jquery Element
jQuery.prototype.KPICard = function (inputObject) {
    inputObject = inputObject || {};
    inputObject["selector"] = this;
    let objKPICard = new KPICard(inputObject);
    objKPICard.$drawcards()
    return objKPICard;
}


///////////////////////////////////////////////////////// card /////////////////////////////////////////////////////////////////////////

function SimpleCard(inputObject) {
    // Inheriting Parent
    dashboardItems.call(this);
    let globalKPIObject = this;

    this.$data = {}
    this.$selectorElement = getValueFromObject(inputObject, "selector")

    let cardDefinition = getValueFromObject(inputObject, "cardDefinition");
    let cardValueOptions = getValueFromObject(inputObject, "valueOption");
    let cardContainerOptions = getValueFromObject(inputObject, "containerOption");
    let cardTextOptions = getValueFromObject(inputObject, "textOption");
    let KPIOptions = getValueFromObject(inputObject, "keyProgessOption")
    let url = getValueFromObject(inputObject, "url");
    let method = getValueFromObject(inputObject, "method", "GET");
    let requestData = getValueFromObject(inputObject, "requestData", {});

    function drawCard(_data, _CardDefinition, cardElement) {
        cardContainer = createCardContainer(_data, _CardDefinition, cardElement); cardItem = createCardItem(_data, _CardDefinition, cardContainer); spanValue = createCardValue(_data, _CardDefinition, cardItem); spanText = createCardText(_data, _CardDefinition, cardItem);
    }
    function createCardContainer(_data, _CardDefinition, cardElement) {
        var cardContainer = createHtmlElement('div'); addClassListToHtmlElement(cardContainer, ['card-container']); appendElements(cardElement, cardContainer)
        globalKPIObject.$selectorElement.innerHTML = cardContainer;
        if (cardContainerOptions) {
            const classNames = cardContainerOptions["className"] ? cardContainerOptions["className"] : "";
            let classNamesList = classNames.split(" "); if (classNamesList && classNamesList["length"] > 0) addClassListToHtmlElement(cardContainer, classNamesList)
            if (cardContainerOptions["id"]) cardContainer.id = cardContainerOptions["id"];
            assingCardContainerEvents(cardContainer)
            function assingCardContainerEvents(container_obj) {
                Object.keys(KPI_CRADS_FUNCTIONS.container[0]).filter(function (e) { return Object.keys(cardContainerOptions).includes(e); }).forEach(function (e) {
                    container_obj.addEventListener(KPI_CRADS_FUNCTIONS.container[0][e], function (event) {
                        cardContainerOptions[e](_data);
                        event.stopPropagation();
                    })
                });
            }
        }
        return cardContainer;
    }
    function createCardItem(_data, _CardDefinition, cardContainer) {
        var cardItem = createHtmlElement('div'); addClassListToHtmlElement(cardItem, ['card-item']); appendElements(cardContainer, cardItem); return cardItem;

    }
    function createCardValue(_data, _CardDefinition, cardItem) {
        var spanValue = createHtmlElement('span'); addClassListToHtmlElement(spanValue, ['card-value']); appendElements(cardItem, spanValue);
        if (cardValueOptions) {
            const classNames = cardValueOptions["className"] ? cardValueOptions["className"] : "";
            let classNamesList = classNames.split(" ");
            if (classNamesList && classNamesList["length"] > 0) addClassListToHtmlElement(spanValue, classNamesList)
            if (cardValueOptions["id"]) spanValue.id = cardValueOptions["id"];
            assingCardValueEvents(spanValue)
        }
        if (cardValueOptions && Object.keys(cardValueOptions).includes('applyTickerFormat') && cardValueOptions["applyTickerFormat"] == true) fn_tickerformat(spanValue, _data[_CardDefinition.value], cardValueOptions["valueType"] || (typeof _data[_CardDefinition.value]), cardValueOptions["countrySymbol"], cardValueOptions["currency"], cardValueOptions["useThousandSeperator"]);
        else {
            fnSetValue(spanValue, _data[_CardDefinition.value], cardValueOptions["valueType"] || (typeof _data[_CardDefinition.value]), cardValueOptions["countrySymbol"], cardValueOptions["currency"], cardValueOptions["useThousandSeperator"]);
        }
        function assingCardValueEvents(span_value_object) {
            Object.keys(KPI_CRADS_FUNCTIONS.cardValue[0]).filter(function (e) { return Object.keys(cardValueOptions).includes(e); }).forEach(function (e) {
                span_value_object.addEventListener(KPI_CRADS_FUNCTIONS.cardValue[0][e], function (event) {
                    cardValueOptions[e](_data, spanValue, _data[_CardDefinition.value]);
                    event.stopPropagation();
                })
            });
        }
        return spanValue;
    }
    function createCardText(_data, _CardDefinition, cardItem) {
        var spanHeading = createHtmlElement('span'); addClassListToHtmlElement(spanHeading, ['card-text']); appendElements(cardItem, spanHeading)
        spanHeading.innerHTML = _data[_CardDefinition.title] || "";
        if (cardTextOptions) {
            const classNames = cardTextOptions["className"] ? cardTextOptions["className"] : "";
            let classNamesList = classNames.split(" ");
            if (classNamesList && classNamesList["length"] > 0) addClassListToHtmlElement(spanHeading, classNamesList)
            assingCardTextEvents(spanHeading)
            function assingCardTextEvents(span_heading_object) {
                Object.keys(KPI_CRADS_FUNCTIONS.cardText[0]).filter(function (e) { return Object.keys(cardTextOptions).includes(e); }).forEach(function (e) {
                    span_value_object.addEventListener(KPI_CRADS_FUNCTIONS.cardText[0][e], function (event) {
                        cardTextOptions[e](_data, spanHeading, _data[_CardDefinition.title]);
                        event.stopPropagation();
                    })
                });
            }
        }
        return spanHeading;
    }

    this.$drawcards = function () {

        var card = createHtmlElement('div')
        addClassListToHtmlElement(card, ["card"])

        globalKPIObject.$selectorElement.html(card)
        if (url) {
            let loader = addLoader();
            card.appendChild(loader);
            let p = new Promise(function (resolve) {
                let success = function (response) {
                    if (response && response.data) {
                        globalKPIObject.$data = response.data;
                    }
                    else {
                        globalKPIObject.$data = response;
                    }
                }
                globalKPIObject.$Ajax(
                    {
                        url: url,
                        method: method,
                        data: requestData,
                        isAsync: true,
                        resolve: resolve,
                        success: success
                    })
            }).then(function () {
                loader.remove();
                drawCard(globalKPIObject.$data, cardDefinition, card);
            })
        }
        else {
            globalKPIObject.$data = getValueFromObject(inputObject, "data");
            drawCard(globalKPIObject.$data, cardDefinition, card);
        }
    }
}
//Making default values as read only
Object.defineProperty(SimpleCard, "defaultvalues", { "writable": false });
//Making default values as read only
Object.freeze(SimpleCard.defaultvalues);
// PrototTyping cardview Parent to DashboardViews
SimpleCard.prototype = Object.create(dashboardItems.prototype);
// Prototyping cardview constructor to cardview only so that instance can be create by using new cardview
SimpleCard.prototype.constructor = SimpleCard;

//// ProtoTyping cardgroup on Jquery Element
jQuery.prototype.SimpleCard = function (inputObject) {
    inputObject = inputObject || {};
    inputObject["selector"] = this;
    let objCard = new SimpleCard(inputObject);
    objCard.$drawcards(objCard.$data, objCard.$cardDefinition)
    return objCard;
}

////////////////////////////////////////////////////  filter ///////////////////////////////////////////////////////////
let piFilterChangeEvent = new CustomEvent('Pi.Filter.Change');

function Filter(inputObject) {
    this.$returnObj = {}
    let preselectedData = getValueFromObject(inputObject, 'data');
    this.userData = getValueFromObject(inputObject, "userData");
    this.$selectorElement = getValueFromObject(inputObject, "selector")
    let globalFilter = this;
    this.$content = {};
    let filterslist = [];

    this.$createFilter = function () {
        let filterElement = createFilterElement();
        globalFilter.$content.filter = filterElement;
        globalFilter.$selectorElement.html(filterElement);
        filterItems = createFilterItems();
        globalFilter.$content.items = filterItems;
        filterCannel = createFilterCannel();
        globalFilter.$content.cannel = filterCannel;
        appendElements(filterElement, filterItems);
        appendElements(filterElement, filterCannel);
        createFilterElements();
    }
    this.val = function () {
        return Object.assign(globalFilter.$returnObj, globalFilter.userData);
    }

    function createFilterElement() {
        let filterElement = createHtmlElement('div'); addClassListToHtmlElement(filterElement, ['filter']);
        return filterElement;
    }
    function createFilterItems() {
        let filterItems = createHtmlElement('div'); addClassListToHtmlElement(filterItems, ['filter-items']);
        filterItems.addEventListener('drop', function (event) {
            event.preventDefault();
            if (event.dataTransfer.getData("value")) {
                var transferData = JSON.parse(event.dataTransfer.getData("value"));
                createFilterItem(transferData.key, transferData.data, transferData.displayText, transferData.isList, transferData.append);
            }
        })
        filterItems.addEventListener('dragover', function (event) {
            event.preventDefault();
        })

        return filterItems;
    }
    function createFilterCannel() {
        let filterCannel = createHtmlElement('div');
        addClassListToHtmlElement(filterCannel, ['filter-cannel']);
        let filterCannelOptions = getValueFromObject(inputObject, "filterOption");
        let spanText = createHtmlElement('span'); addClassListToHtmlElement(spanText, ['filter-text']); spanText.innerHTML = "Filtes";
        let img = createHtmlElement('img'); addClassListToHtmlElement(img, ['filter-icon']); img.src = "/assets/image/Filter_Icon.png";
        appendElements(filterCannel, spanText); appendElements(filterCannel, img);
        if (filterCannelOptions) {
            const classNames = filterCannelOptions["className"] ? filterCannelOptions["className"] : "";
            let classNamesList = classNames.split(" ");
            if (classNamesList && classNamesList["length"] > 0) { addClassListToHtmlElement(filterCannel, classNamesList) }
            if (filterCannelOptions["id"]) { filterCannel.id = filterCannelOptions["id"]; }
            assingFilterCannelEvents()
        }
        return filterCannel;

        function assingFilterCannelEvents() {
            Object.keys(FILTER_OPTION.filterCannel[0]).filter(function (e) { return Object.keys(filterCannelOptions).includes(e); }).forEach(function (e) {
                filterCannel.addEventListener(FILTER_OPTION.filterCannel[0][e], function (event) {
                    filterCannelOptions[e]();
                    event.stopPropagation();
                })
            });
        }
    }

    function createFilterElements() {
        if (preselectedData) {
            for(let d of Object.keys(preselectedData)) {
                let data = preselectedData[d];
                if (typeof data === "object" && data["length"] && data["length"] > 0) { if (data.length) { for(x of data) { createFilterItem(d, x.value, x.displayText, true, true); } } }
                else { createFilterItem(d, data.value, data.displayText, false, false); }
            }
        }
    }
    function removeFilterelements(key, data, thisElement) {
        thisElement.remove();
        filterslist = filterslist.filter(function (e) { return (e.key == key && e.data == data) == false });
        var value = globalFilter.$returnObj[key];
        if (typeof value == "object") {
            value = value.filter(function (e) { return e != data });
            if (value.length) {
                globalFilter.$returnObj[key] = value;
            }
            else {
                delete globalFilter.$returnObj[key];
            }
        }
        else {
            delete globalFilter.$returnObj[key];
        }
        document.dispatchEvent(piFilterChangeEvent);
    }
    function createFilterItem(key, data, displayText, isList, append) {
        if (filterslist.length == 0 || filterslist.filter(function (e) { return e.data == data && e.key == key }).length == 0) {

            let filterItem = createHtmlElement('div'); addClassListToHtmlElement(filterItem, ['filter-item']);
            let spanText = createHtmlElement('span'); spanText.innerHTML = getWidthCalculatedText(displayText, 110, "bold 14px sans-seriff"); spanText.title = displayText;
            let closeText = createHtmlElement('span'); closeText.innerHTML = "X";
            addClassListToHtmlElement(closeText, ['filter-item-close'])
            closeText.addEventListener('click', function () {
                removeFilterelements(key, data, filterItem);
            });
            globalFilter.$content.items.appendChild(filterItem);
            appendElements(filterItem, spanText);
            appendElements(filterItem, closeText);
            filterslist.push({ data: data, key: key, displayText: displayText });
            if (Object.keys(globalFilter.$returnObj).includes(key)) {
                let _data = globalFilter.$returnObj[key]
                if (typeof _data == "object" || isList)
                    if (append)
                        _data.push(data)
                    else _data = [data]
                else _data = data;
                globalFilter.$returnObj[key] = _data;
            }
            else {
                let _data = isList ? [data] : data;
                globalFilter.$returnObj[key] = _data;
            }
            document.dispatchEvent(piFilterChangeEvent);
        }
    }

    this.setValue = function (key, data, displayText, isList, append) {
        if (typeof data == "object") {
            throw Error("Only primitive types are allowed")
        }
        createFilterItem(key, data, displayText, isList, append);
    }
}

jQuery.prototype.Filter = function (inputObject) {
    inputObject = inputObject || {};
    inputObject["selector"] = this;
    let objfilter = new Filter(inputObject);
    objfilter.$createFilter();
    return objfilter;
}


//////////////////////////////////////////////////// Bar ///////////////////////////////////////////////////////////////

function BarGraph(inputObject) {
    // Inheriting Parent
    dashboardItems.call(this);
    // Fetching the Title of Graph
    const title = getValueFromObject(inputObject, "title");
    // Fetching Values
    const Values = getValueFromObject(inputObject, "value");
    // Selector Element
    this.$selectorElement = getValueFromObject(inputObject, "selector")
    // assigning this to global and object
    globalBarObject = this;

    // draw Bar fuction defined
    this.$drawBar = function () {
        drawBar(title, Values);
    }

    function drawBar(title, values) {
        // Created a Wrapper Div whise height will be 100% and Width will get Dynamically Calculated
        let wrapperDiv = createHtmlElement('div'); wrapperDiv.style.height = "100%"
        // From the Value Calculation the Width in Pixels
        const spaceBetween = 15; // assigning a static value for space between objects
        const barWidth = 40; // assigning static bar width
        // Calculating Width on the basis of number of bars will gonna create in pixels
        const calculatedWidth = calcWidth(Values, spaceBetween, barWidth);
        // Assigning width of parent div in pixels
        const widthOfParentInDiv = globalBarObject.$selectorElement.width();
        // Assigning height of Parent Div in pixels
        const heightOfParentDiv = globalBarObject.$selectorElement.height();
        // setting Wrapper div Width if Default width is lower than width required
        wrapperDiv.style.width = globalBarObject.$selectorElement.width() > calculatedWidth ? "100%" : (calculatedWidth + "px"); //wrapperDiv.style.overflowX = "overlay";
        // appending wrapperDiv to selector element
        globalBarObject.$selectorElement.html(wrapperDiv);

        //// Creating Loader Element and appending to Wrapper Div
        //loaderdiv = createHtmlElement('div'); addClassListToHtmlElement(loaderdiv, ['bar-loader-div']); let loader = addLoader(); appendElements(loaderdiv, loader); appendElements(wrapperDiv, loaderdiv);
        //// Removing Loader
        //loaderdiv.remove();

        // Creating Main Svg Element Keepig it's width and height 100 %
        let mainSVGDiv = createElementNS('svg'); appendElements(wrapperDiv, mainSVGDiv); mainSVGDiv.setAttribute("height", "100%"); mainSVGDiv.setAttribute("width", "100%");
        //Declaring an Empty List to Retrieve Y values from Value
        var Yvalues = [];
        if (values) {
            // Assigning Y Values to array
            Yvalues = values.map(function (e) { return e.yValue; })
            // Finding Max Value from Y to Create Point on Y axis
            const maxValue = Yvalues.reduce(function (a, b) { return Math.max(a, b) });
            // Checkin
            let eachTick = (maxValue <= Math.pow(10, (maxValue.toString().length - 1)) ? Math.pow(10, (maxValue.toString().length - 1)) : Math.pow(10, (maxValue.toString().length))) / 10;
            const lastTickPoint = calcLastPoint(eachTick, maxValue);
            eachTick = lastTickPoint / 10;
            const minValue = Yvalues.reduce(function (a, b) { return Math.min(a, b) });
            const neweachTickPoint = eachTick;
            const YTicks = getYtick(neweachTickPoint, lastTickPoint);
            const XTicks = values.map(function (e) { return e.xLabel });
            let fontSize = (((heightOfParentDiv - (15 * YTicks.length)) / YTicks.length));
            fontSize = fontSize > 14 ? 14 : fontSize;
            fontSize = fontSize < 7 ? 7 : fontSize;

            const YTickWidths = YTicks.map(function (e) { return getMeasuredTextWidth(e, fontSize + 'px sans-seriff') });
            const maxYTickwidth = Math.ceil(YTickWidths.reduce(function (a, b) { return Math.max(a, b); }))

            const YTickoffset = Math.ceil(maxYTickwidth / (widthOfParentInDiv / 100));
            const Xtickoffset = Math.ceil(fontSize / (heightOfParentDiv / 100));

            const xoffset = 1;
            const Yoffset = 1;

            YtickTotalPercent = (100 - (Yoffset))
            XTickTotalPercent = (100 - (xoffset))

            let Yaxis = createElementNS('line'); mainSVGDiv.appendChild(Yaxis); Yaxis.setAttribute("x1", (xoffset + (YTickoffset)) + "%"); Yaxis.setAttribute("y1", Yoffset + "%"); Yaxis.setAttribute("x2", (xoffset + (YTickoffset)) + "%"); Yaxis.setAttribute("y2", (YtickTotalPercent - Xtickoffset) + "%"); Yaxis.setAttribute("stroke", "black"); Yaxis.setAttribute("stroke-width", "2px;")
            let Xaxis = createElementNS('line'); mainSVGDiv.appendChild(Xaxis); Xaxis.setAttribute("x1", (xoffset + (YTickoffset)) + "%"); Xaxis.setAttribute("y1", (YtickTotalPercent - Xtickoffset) + "%"); Xaxis.setAttribute("x2", (XTickTotalPercent - YTickoffset) + "%"); Xaxis.setAttribute("y2", (YtickTotalPercent - Xtickoffset) + "%"); Xaxis.setAttribute("stroke", "black"); Xaxis.setAttribute("stroke-width", "2px;")

            YTicksReverse = Array.from(YTicks);
            YTicksReverse.reverse();

            eachTickPercent = YtickTotalPercent / YTicks.length
            let ypoint = Yoffset;
            let xpoint = xoffset;
            let yTicks_Positions = [];
            for(let y of YTicksReverse)
            {
                let text = createElementNS('text'); appendElements(mainSVGDiv, text); text.setAttribute("x", xpoint + "%"); text.setAttribute("y", (ypoint + 2) + "%"); text.innerHTML = addTrailingSpaceToReachWidth(y, maxYTickwidth, fontSize + 'px sans-seriff'); text.style.fontSize = fontSize + "px"; text.style.paddingTop = "5px;"
                yTicks_Positions.push({ Y: y, Position: (ypoint + 2) })
                ypoint = ypoint + (eachTickPercent);
            }
            const onePointPercent = eachTickPercent / neweachTickPoint;
            let xRect = xoffset + (YTickoffset);
            const widthPercent = ((((YtickTotalPercent - (Xtickoffset * 2)) - (xoffset + (YTickoffset))) / Yvalues.length) * 35 / 100)
            const offsetPercent = ((((YtickTotalPercent - (Xtickoffset * 2)) - (xoffset + (YTickoffset))) / Yvalues.length) * 65 / 100) / 2;
            color = generateLightColorRgb();
            for(let Y of Yvalues)
            {
                upperposition = getUpperPosition(Y, yTicks_Positions, yTicks_Positions[0]);
                let upperPositionValue = upperposition.Position;
                let UpperPositionYValue = upperposition.Y;
                while (UpperPositionYValue > Y) {
                    upperPositionValue += onePointPercent; // adding this will make height smaller
                    UpperPositionYValue -= 1;
                }
                xRect += offsetPercent;
                upperPositionValue = upperPositionValue > (YtickTotalPercent - Xtickoffset) ? ((YtickTotalPercent - Xtickoffset) - 0.5) : upperPositionValue;
                let rect = createElementNS('rect'); appendElements(mainSVGDiv, rect); rect.setAttribute("x", xRect + "%"); rect.setAttribute("y", upperPositionValue + "%"); rect.setAttribute("width", widthPercent + "%"); rect.setAttribute("height", ((YtickTotalPercent - Xtickoffset) - upperPositionValue) + "%"); rect.setAttribute("fill", color);
                xRect += (widthPercent + offsetPercent);
            }
        }

        function addTrailingSpaceToReachWidth(text, widthToReach, font) {
            let initialwidth = Math.ceil(getMeasuredTextWidth(text, font));
            if (initialwidth == widthToReach) {
                return text;
            }
            else {
                while (initialwidth < widthToReach) {
                    text = "&nbsp;" + text;
                    initialwidth = Math.ceil(getMeasuredTextWidth(text, font));
                }
                return text;
            }
        }

        function getUpperPosition(Y, yTicks_Positions, previousTopPosition) {
            let newArr = Array.from(yTicks_Positions)
            return ((!newArr) || (!newArr.length) || Y > newArr[0].Y) ? previousTopPosition : getUpperPosition(Y, newArr.slice(1), newArr[0])
        }

    }

    function calcWidth(xvalues, spaceBetween, barWidth) {
        if (xvalues) {
            return xvalues.map(function (e) { return (spaceBetween + barWidth) }).reduce(function (val1, val2) { return val1 + val2; })
        }
        return 0;
    }

    function getYtick(startPoint, endPoint) {
        let list = [];
        let increment = startPoint;
        while (startPoint <= endPoint) {
            list.push(startPoint);
            startPoint = startPoint + increment;
        }
        return list;
    }

    function setNeweachPoint(newEachPoint, minValue) {
        return (newEachPoint * 10 / 100) > minValue ? setNeweachPoint(newEachPoint / 2, minValue) : newEachPoint;
    }

    function calcLastPoint(eachpoint, maxValue) {
        inncrementValue = eachpoint;
        while (eachpoint < maxValue) {
            eachpoint = eachpoint + inncrementValue;
        }
        if ((maxValue * 100 / eachpoint) < 80) {
            return calcLastPoint(Math.ceil(maxValue / 10), maxValue);
        }
        else {
            return eachpoint;
        }
    }
}

BarGraph.prototype = Object.create(dashboardItems.prototype);
// Prototyping cardview constructor to cardview only so that instance can be create by using new cardview
BarGraph.prototype.constructor = BarGraph;

//// ProtoTyping cardgroup on Jquery Element
jQuery.prototype.BarGraph = function (inputObject) {
    inputObject = inputObject || {};
    inputObject["selector"] = this;
    let objBar = new BarGraph(inputObject);
    objBar.$drawBar();
    return objBar;
}

///////////////////////////////////////////////// Stacked  Bar //////////////////////////////////////////////////////////

function StackBarGraph(inputObject) {
    // Inheriting Parent
    dashboardItems.call(this);
    // Fetching the Title of Graph
    const title = getValueFromObject(inputObject, "title");
    // Fetching Values
    const Values = getValueFromObject(inputObject, "value");
    // Selector Element
    this.$selectorElement = getValueFromObject(inputObject, "selector")
    // assigning this to global and object
    globalBarObject = this;

    // draw Bar fuction defined
    this.$drawBar = function () {
        drawBar(title, Values);
    }

    function drawBar(title, values) {
        // Created a Wrapper Div whise height will be 100% and Width will get Dynamically Calculated
        let wrapperDiv = createHtmlElement('div'); wrapperDiv.style.height = "100%"
        // From the Value Calculation the Width in Pixels
        const spaceBetween = 15; // assigning a static value for space between objects
        const barWidth = 40; // assigning static bar width
        // Calculating Width on the basis of number of bars will gonna create in pixels
        const calculatedWidth = calcWidth(Values, spaceBetween, barWidth);
        // Assigning width of parent div in pixels
        const widthOfParentInDiv = globalBarObject.$selectorElement.width();
        // Assigning height of Parent Div in pixels
        const heightOfParentDiv = globalBarObject.$selectorElement.height();
        // setting Wrapper div Width if Default width is lower than width required
        wrapperDiv.style.width = globalBarObject.$selectorElement.width() > calculatedWidth ? "100%" : (calculatedWidth + "px"); //wrapperDiv.style.overflowX = "overlay";
        // appending wrapperDiv to selector element
        globalBarObject.$selectorElement.html(wrapperDiv);

        //// Creating Loader Element and appending to Wrapper Div
        //loaderdiv = createHtmlElement('div'); addClassListToHtmlElement(loaderdiv, ['bar-loader-div']); let loader = addLoader(); appendElements(loaderdiv, loader); appendElements(wrapperDiv, loaderdiv);
        //// Removing Loader
        //loaderdiv.remove();

        // Creating Main Svg Element Keepig it's width and height 100 %
        let mainSVGDiv = createElementNS('svg'); appendElements(wrapperDiv, mainSVGDiv); mainSVGDiv.setAttribute("height", "100%"); mainSVGDiv.setAttribute("width", "100%");
        //Declaring an Empty List to Retrieve Y values from Value
        var Yvalues = [];
        if (values) {
            // Assigning Y Values to array
            Yvalues = values.map(function (e) { return e.yValue })
            // Finding Max Value from Y to Create Point on Y axis
            YValuesSum = Yvalues.map(function (e) {
                return e.reduce(function (a, b) { return a + b; });
            });
            const maxValue = YValuesSum.reduce(function (a, b) {
                return Math.max(a, b)
            });
            // Checkin
            let eachTick = (maxValue <= Math.pow(10, (maxValue.toString().length - 1)) ? Math.pow(10, (maxValue.toString().length - 1)) : Math.pow(10, (maxValue.toString().length))) / 10;
            const lastTickPoint = calcLastPoint(eachTick, maxValue);
            eachTick = lastTickPoint / 10;
            const minValue = YValuesSum.reduce(function (a, b) { return Math.min(a, b) });
            const neweachTickPoint = eachTick;
            const YTicks = getYtick(neweachTickPoint, lastTickPoint);
            const XTicks = values.map(function (e) { return e.xLabel });
            let fontSize = (((heightOfParentDiv - (15 * YTicks.length)) / YTicks.length));
            fontSize = fontSize > 14 ? 14 : fontSize;
            fontSize = fontSize < 7 ? 7 : fontSize;

            const YTickWidths = YTicks.map(function (e) { return getMeasuredTextWidth(e, fontSize + 'px sans-seriff') });
            const maxYTickwidth = Math.ceil(YTickWidths.reduce(function (a, b) { return Math.max(a, b); }))

            const YTickoffset = Math.ceil(maxYTickwidth / (widthOfParentInDiv / 100));
            const Xtickoffset = Math.ceil(fontSize / (heightOfParentDiv / 100));

            const xoffset = 1;
            const Yoffset = 1;

            YtickTotalPercent = (100 - (Yoffset))
            XTickTotalPercent = (100 - (xoffset))

            let Yaxis = createElementNS('line'); mainSVGDiv.appendChild(Yaxis); Yaxis.setAttribute("x1", (xoffset + (YTickoffset)) + "%"); Yaxis.setAttribute("y1", Yoffset + "%"); Yaxis.setAttribute("x2", (xoffset + (YTickoffset)) + "%"); Yaxis.setAttribute("y2", (YtickTotalPercent - Xtickoffset) + "%"); Yaxis.setAttribute("stroke", "black"); Yaxis.setAttribute("stroke-width", "2px;")
            let Xaxis = createElementNS('line'); mainSVGDiv.appendChild(Xaxis); Xaxis.setAttribute("x1", (xoffset + (YTickoffset)) + "%"); Xaxis.setAttribute("y1", (YtickTotalPercent - Xtickoffset) + "%"); Xaxis.setAttribute("x2", (XTickTotalPercent - YTickoffset) + "%"); Xaxis.setAttribute("y2", (YtickTotalPercent - Xtickoffset) + "%"); Xaxis.setAttribute("stroke", "black"); Xaxis.setAttribute("stroke-width", "2px;")

            YTicksReverse = Array.from(YTicks);
            YTicksReverse.reverse();

            eachTickPercent = YtickTotalPercent / YTicks.length
            let ypoint = Yoffset;
            let xpoint = xoffset;
            let yTicks_Positions = [];
            for(let y of YTicksReverse)
            {
                let text = createElementNS('text'); appendElements(mainSVGDiv, text); text.setAttribute("x", xpoint + "%"); text.setAttribute("y", (ypoint + 2) + "%"); text.innerHTML = addTrailingSpaceToReachWidth(y, maxYTickwidth, fontSize + 'px sans-seriff'); text.style.fontSize = fontSize + "px"; text.style.paddingTop = "5px;"
                yTicks_Positions.push({ Y: y, Position: (ypoint + 2) })
                ypoint = ypoint + (eachTickPercent);
            }
            const onePointPercent = eachTickPercent / neweachTickPoint;
            let xRect = xoffset + (YTickoffset);
            const widthPercent = ((((YtickTotalPercent - (Xtickoffset * 2)) - (xoffset + (YTickoffset))) / Yvalues.length) * 60 / 100)
            const offsetPercent = ((((YtickTotalPercent - (Xtickoffset * 2)) - (xoffset + (YTickoffset))) / Yvalues.length) * 40 / 100) / 2;
            const maxStacks = Yvalues.map(function (e) { return e.length }).reduce(function (a, b) { return Math.max(a, b) });
            colors = [];
            for (let i = 0; i < maxStacks; i++) {
                colors.push(generateLightColorRgb());
            }
            for (let Y in Yvalues) {
                upperposition = getUpperPosition(YValuesSum[Y], yTicks_Positions, yTicks_Positions[0]);
                let upperPositionValue = upperposition.Position;
                let UpperPositionYValue = upperposition.Y;
                while (UpperPositionYValue > YValuesSum[Y]) {
                    upperPositionValue += onePointPercent; // adding this will make height smaller
                    UpperPositionYValue -= 1;
                }
                xRect += offsetPercent;
                upperPositionValue = upperPositionValue > (YtickTotalPercent - Xtickoffset) ? ((YtickTotalPercent - Xtickoffset) - 0.5) : upperPositionValue;
                yValue = upperPositionValue;
                totalCValue = ((YtickTotalPercent - Xtickoffset) - upperPositionValue);
                Yvalues[Y].forEach(function (e, idx) {
                    height = ((totalCValue * (e * 100 / YValuesSum[Y])) / 100)
                    fnCreateStackedRectangle(yValue, height, colors[idx])
                    yValue = yValue + height;
                })


                function fnCreateStackedRectangle(yValue, _height, color) {
                    xRect
                    widthPercent
                    let rect = createElementNS('rect'); appendElements(mainSVGDiv, rect); rect.setAttribute("x", xRect + "%"); rect.setAttribute("y", yValue + "%"); rect.setAttribute("width", widthPercent + "%"); rect.setAttribute("height", _height + "%"); rect.setAttribute("fill", color);
                }
                xRect += (widthPercent + offsetPercent);
            }
        }

        function addTrailingSpaceToReachWidth(text, widthToReach, font) {
            let initialwidth = Math.ceil(getMeasuredTextWidth(text, font));
            if (initialwidth == widthToReach) {
                return text;
            }
            else {
                while (initialwidth < widthToReach) {
                    text = "&nbsp;" + text;
                    initialwidth = Math.ceil(getMeasuredTextWidth(text, font));
                }
                return text;
            }
        }

        function getUpperPosition(Y, yTicks_Positions, previousTopPosition) {
            let newArr = Array.from(yTicks_Positions)
            return ((!newArr) || (!newArr.length) || Y > newArr[0].Y) ? previousTopPosition : getUpperPosition(Y, newArr.slice(1), newArr[0])
        }

        function calcWidth(xvalues, spaceBetween, barWidth) {
            if (xvalues) {
                return xvalues.map(function (e) { return (spaceBetween + barWidth) }).reduce(function (val1, val2) { return val1 + val2; })
            }
            return 0;
        }

        function getYtick(startPoint, endPoint) {
            let list = [];
            let increment = startPoint;
            while (startPoint <= endPoint) {
                list.push(startPoint);
                startPoint = startPoint + increment;
            }
            return list;
        }

        function setNeweachPoint(newEachPoint, minValue) {
            return (newEachPoint * 10 / 100) > minValue ? setNeweachPoint(newEachPoint / 2, minValue) : newEachPoint;
        }

        function calcLastPoint(eachpoint, maxValue) {
            inncrementValue = eachpoint;
            while (eachpoint < maxValue) {
                eachpoint = eachpoint + inncrementValue;
            }
            if ((maxValue * 100 / eachpoint) < 80) {
                return calcLastPoint(Math.ceil(maxValue / 10), maxValue);
            }
            else {
                return eachpoint;
            }
        }
    }
}

StackBarGraph.prototype = Object.create(dashboardItems.prototype);
// Prototyping cardview constructor to cardview only so that instance can be create by using new cardview
StackBarGraph.prototype.constructor = StackBarGraph;

//// ProtoTyping cardgroup on Jquery Element
jQuery.prototype.StackBarGraph = function (inputObject) {
    inputObject = inputObject || {};
    inputObject["selector"] = this;
    let objBar = new StackBarGraph(inputObject);
    objBar.$drawBar();
    return objBar;
}


//////////////////////////////////////////////// Grouped Bar Graph /////////////////////////////////////////////////////////

function GroupBarGraph(inputObject) {
    // Inheriting Parent
    dashboardItems.call(this);
    // Fetching the Title of Graph
    const title = getValueFromObject(inputObject, "title");
    // Fetching Values
    const Values = getValueFromObject(inputObject, "value");
    // Selector Element
    this.$selectorElement = getValueFromObject(inputObject, "selector")
    // assigning this to global and object
    globalBarObject = this;

    // draw Bar fuction defined
    this.$drawBar = function () {
        drawBar(title, Values);
    }

    function drawBar(title, values) {
        // Created a Wrapper Div whise height will be 100% and Width will get Dynamically Calculated
        let wrapperDiv = createHtmlElement('div'); wrapperDiv.style.height = "100%"
        // From the Value Calculation the Width in Pixels
        const spaceBetween = 15; // assigning a static value for space between objects
        const barWidth = 40; // assigning static bar width
        // Calculating Width on the basis of number of bars will gonna create in pixels
        var Yvalues = [];
        Yvalues = values.map(function (e) { return e.yValue })
        const calculatedWidth = calcWidth(Yvalues, spaceBetween, barWidth);
        // Assigning width of parent div in pixels
        const widthOfParentInDiv = globalBarObject.$selectorElement.width();
        // Assigning height of Parent Div in pixels
        const heightOfParentDiv = globalBarObject.$selectorElement.height();
        // setting Wrapper div Width if Default width is lower than width required
        wrapperDiv.style.width = globalBarObject.$selectorElement.width() > calculatedWidth ? "100%" : (calculatedWidth + "px"); //wrapperDiv.style.overflowX = "overlay";
        // appending wrapperDiv to selector element
        globalBarObject.$selectorElement.html(wrapperDiv);

        //// Creating Loader Element and appending to Wrapper Div
        //loaderdiv = createHtmlElement('div'); addClassListToHtmlElement(loaderdiv, ['bar-loader-div']); let loader = addLoader(); appendElements(loaderdiv, loader); appendElements(wrapperDiv, loaderdiv);
        //// Removing Loader
        //loaderdiv.remove();

        // Creating Main Svg Element Keepig it's width and height 100 %
        let mainSVGDiv = createElementNS('svg'); appendElements(wrapperDiv, mainSVGDiv); mainSVGDiv.setAttribute("height", "100%"); mainSVGDiv.setAttribute("width", "100%");
        //Declaring an Empty List to Retrieve Y values from Value

        if (values) {
            // Finding Max Value from Y to Create Point on Y axis
            YValuesMax = Yvalues.map(function (e) {
                return e.reduce(function (a, b) { return Math.max(a, b); });
            });
            const maxValue = YValuesMax.reduce(function (a, b) {
                return Math.max(a, b)
            });
            // Checkin
            let eachTick = (maxValue <= Math.pow(10, (maxValue.toString().length - 1)) ? Math.pow(10, (maxValue.toString().length - 1)) : Math.pow(10, (maxValue.toString().length))) / 10;
            const lastTickPoint = calcLastPoint(eachTick, maxValue);
            eachTick = lastTickPoint / 10;
            const minValue = YValuesMax.reduce(function (a, b) { return Math.min(a, b) });
            const neweachTickPoint = eachTick;
            const YTicks = getYtick(neweachTickPoint, lastTickPoint);
            const XTicks = values.map(function (e) { return e.xLabel });
            let fontSize = (((heightOfParentDiv - (15 * YTicks.length)) / YTicks.length));
            fontSize = fontSize > 14 ? 14 : fontSize;
            fontSize = fontSize < 7 ? 7 : fontSize;

            const YTickWidths = YTicks.map(function (e) { return getMeasuredTextWidth(e, fontSize + 'px sans-seriff') });
            const maxYTickwidth = Math.ceil(YTickWidths.reduce(function (a, b) { return Math.max(a, b); }))

            const YTickoffset = Math.ceil(maxYTickwidth / (widthOfParentInDiv / 100));
            const Xtickoffset = Math.ceil(fontSize / (heightOfParentDiv / 100));

            const xoffset = 1;
            const Yoffset = 1;

            YtickTotalPercent = (100 - (Yoffset))
            XTickTotalPercent = (100 - (xoffset))

            let Yaxis = createElementNS('line'); mainSVGDiv.appendChild(Yaxis); Yaxis.setAttribute("x1", (xoffset + (YTickoffset)) + "%"); Yaxis.setAttribute("y1", Yoffset + "%"); Yaxis.setAttribute("x2", (xoffset + (YTickoffset)) + "%"); Yaxis.setAttribute("y2", (YtickTotalPercent - Xtickoffset) + "%"); Yaxis.setAttribute("stroke", "black"); Yaxis.setAttribute("stroke-width", "2px;")
            let Xaxis = createElementNS('line'); mainSVGDiv.appendChild(Xaxis); Xaxis.setAttribute("x1", (xoffset + (YTickoffset)) + "%"); Xaxis.setAttribute("y1", (YtickTotalPercent - Xtickoffset) + "%"); Xaxis.setAttribute("x2", (XTickTotalPercent - YTickoffset) + "%"); Xaxis.setAttribute("y2", (YtickTotalPercent - Xtickoffset) + "%"); Xaxis.setAttribute("stroke", "black"); Xaxis.setAttribute("stroke-width", "2px;")

            YTicksReverse = Array.from(YTicks);
            YTicksReverse.reverse();

            eachTickPercent = YtickTotalPercent / YTicks.length
            let ypoint = Yoffset;
            let xpoint = xoffset;
            let yTicks_Positions = [];
            for(let y of YTicksReverse)
            {
                let text = createElementNS('text'); appendElements(mainSVGDiv, text); text.setAttribute("x", xpoint + "%"); text.setAttribute("y", (ypoint + 2) + "%"); text.innerHTML = addTrailingSpaceToReachWidth(y, maxYTickwidth, fontSize + 'px sans-seriff'); text.style.fontSize = fontSize + "px"; text.style.paddingTop = "5px;"
                yTicks_Positions.push({ Y: y, Position: (ypoint + 2) })
                ypoint = ypoint + (eachTickPercent);
            }
            const onePointPercent = eachTickPercent / neweachTickPoint;
            let xRect = xoffset + (YTickoffset);
            const widthPercent = ((((YtickTotalPercent - (Xtickoffset * 2)) - (xoffset + (YTickoffset))) / Yvalues.map(function (e) { return e.length }).reduce(function (val1, val2) { return val1 + val2; })) * 60 / 100)
            const offsetPercent = ((((YtickTotalPercent - (Xtickoffset * 2)) - (xoffset + (YTickoffset))) / Yvalues.length) * 40 / 100) / 2;
            const maxStacks = Yvalues.map(function (e) { return e.length }).reduce(function (a, b) { return Math.max(a, b) });
            colors = [];
            for (let i = 0; i < maxStacks; i++) {
                colors.push(generateLightColorRgb());
            }
            for (let Y in Yvalues) {
                xRect += offsetPercent;
                for (let i = 0; i < Yvalues[Y].length; i++) {
                    color = colors[i];
                    upperposition = getUpperPosition(Yvalues[Y][i], yTicks_Positions, yTicks_Positions[0]);
                    let upperPositionValue = upperposition.Position;
                    let UpperPositionYValue = upperposition.Y;
                    while (UpperPositionYValue > Yvalues[Y][i]) {
                        upperPositionValue += onePointPercent; // adding this will make height smaller
                        UpperPositionYValue -= 1;
                    }
                    upperPositionValue = upperPositionValue > (YtickTotalPercent - Xtickoffset) ? ((YtickTotalPercent - Xtickoffset) - 0.5) : upperPositionValue;
                    let rect = createElementNS('rect'); appendElements(mainSVGDiv, rect); rect.setAttribute("x", xRect + "%"); rect.setAttribute("y", upperPositionValue + "%"); rect.setAttribute("width", widthPercent + "%"); rect.setAttribute("height", ((YtickTotalPercent - Xtickoffset) - upperPositionValue) + "%"); rect.setAttribute("fill", color);
                    xRect += (widthPercent);
                }
                xRect += (offsetPercent);
            }
        }

        function addTrailingSpaceToReachWidth(text, widthToReach, font) {
            let initialwidth = Math.ceil(getMeasuredTextWidth(text, font));
            if (initialwidth == widthToReach) {
                return text;
            }
            else {
                while (initialwidth < widthToReach) {
                    text = "&nbsp;" + text;
                    initialwidth = Math.ceil(getMeasuredTextWidth(text, font));
                }
                return text;
            }
        }

        function getUpperPosition(Y, yTicks_Positions, previousTopPosition) {
            let newArr = Array.from(yTicks_Positions)
            return ((!newArr) || (!newArr.length) || Y > newArr[0].Y) ? previousTopPosition : getUpperPosition(Y, newArr.slice(1), newArr[0])
        }

        function calcWidth(Yvalues, spaceBetween, barWidth) {
            if (Yvalues) {
                return Yvalues.map(function (e) {
                    return e.map(function (f) {
                        return barWidth;
                    }).reduce(function (val1, val2) {
                        return val1 + val2
                    })
                }).map(function (x) {
                    return x + spaceBetween
                }).reduce(function (val1, val2) {
                    return val1 + val2
                })
            }
            return 0;
        }

        function getYtick(startPoint, endPoint) {
            let list = [];
            let increment = startPoint;
            while (startPoint <= endPoint) {
                list.push(startPoint);
                startPoint = startPoint + increment;
            }
            return list;
        }

        function setNeweachPoint(newEachPoint, minValue) {
            return (newEachPoint * 10 / 100) > minValue ? setNeweachPoint(newEachPoint / 2, minValue) : newEachPoint;
        }

        function calcLastPoint(eachpoint, maxValue) {
            inncrementValue = eachpoint;
            while (eachpoint < maxValue) {
                eachpoint = eachpoint + inncrementValue;
            }
            if ((maxValue * 100 / eachpoint) < 80) {
                return calcLastPoint(Math.ceil(maxValue / 10), maxValue);
            }
            else {
                return eachpoint;
            }
        }
    }
}

GroupBarGraph.prototype = Object.create(dashboardItems.prototype);
// Prototyping cardview constructor to cardview only so that instance can be create by using new cardview
GroupBarGraph.prototype.constructor = GroupBarGraph;

//// ProtoTyping cardgroup on Jquery Element
jQuery.prototype.GroupBarGraph = function (inputObject) {
    inputObject = inputObject || {};
    inputObject["selector"] = this;
    let objBar = new GroupBarGraph(inputObject);
    objBar.$drawBar();
    return objBar;
}