'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var DESKTOP_OS = [
    'Windows 3.11',
    'Windows 95',
    'Windows 98',
    'Windows 2000',
    'Windows XP',
    'Windows Server 2003',
    'Windows Vista',
    'Windows 7',
    'Windows 8',
    'Windows 8.1',
    'Windows 10',
    'Windows ME',
    'Open BSD',
    'Sun OS',
    'Linux',
    'Mac OS',
    'QNX',
    'BeOS',
    'OS/2',
    'Chrome OS',
];
var MOBILE_OS = ['iOS', 'Android OS', 'BlackBerry OS', 'Windows Mobile', 'Amazon OS'];
var BROWSERS = {
    aol: 'AOL',
    edge: 'Edge',
    'edge-ios': 'Edge (iOS)',
    yandexbrowser: 'Yandex',
    kakaotalk: 'KKaoTalk',
    samsung: 'Samsung',
    silk: 'Silk',
    miui: 'MIUI',
    beaker: 'Beaker',
    'edge-chromium': 'Edge (Chromium)',
    chrome: 'Chrome',
    'chromium-webview': 'Chrome (webview)',
    phantomjs: 'PhantomJS',
    crios: 'Chrome (iOS)',
    firefox: 'Firefox',
    fxios: 'Firefox (iOS)',
    'opera-mini': 'Opera Mini',
    opera: 'Opera',
    ie: 'IE',
    bb10: 'BlackBerry 10',
    android: 'Android',
    ios: 'iOS',
    safari: 'Safari',
    facebook: 'Facebook',
    instagram: 'Instagram',
    'ios-webview': 'iOS (webview)',
    searchbot: 'Searchbot',
};

var STORE = {
    SESSION: "trc"
};

var PREFIX = {
    UUID: 'data-nooa-uuid',
    HOST: 'data-nooa-host',
    NO_TRACK: 'data-nooa-no-track',
    TAG: 'data-nooa-tag',
    TYPE: 'data-nooa-type',
};

var Config = /** @class */ (function () {
    function Config(_a) {
        var WebSiteUuid = _a.WebSiteUuid, Host = _a.Host, _b = _a.NoTrack, NoTrack = _b === void 0 ? false : _b;
        this.WebSiteUuid = WebSiteUuid;
        this.Host = Host;
        this.NoTrack = NoTrack;
    }
    Config.prototype.validateConfigs = function () {
        if (!this.WebSiteUuid) {
            throw new ValidationError("Empty web site uuid");
        }
        if (!this.Host) {
            throw new ValidationError("Empty server url");
        }
        return this;
    };
    return Config;
}());
function getDefaultConfigs() {
    var _a, _b, _c;
    var uuid = (_a = document.querySelector("script[" + PREFIX.UUID + "]")) === null || _a === void 0 ? void 0 : _a.getAttribute(PREFIX.UUID);
    var path = ((_b = document.querySelector("script[" + PREFIX.HOST + "]")) === null || _b === void 0 ? void 0 : _b.getAttribute(PREFIX.HOST)) || '';
    var noTrack = (_c = document.querySelector("script[" + PREFIX.NO_TRACK + "]")) === null || _c === void 0 ? void 0 : _c.getAttribute(PREFIX.NO_TRACK);
    return {
        WebSiteUuid: uuid || "",
        Host: new URL(path) || "",
        NoTrack: Boolean(noTrack),
    };
}
function newConfig(uuid, host, noTrack) {
    try {
        var _config = void 0;
        if (uuid && host) {
            _config = new Config({
                WebSiteUuid: uuid,
                Host: new URL(host),
                NoTrack: noTrack
            });
            _config.validateConfigs();
        }
        else {
            var defaults = getDefaultConfigs();
            _config = new Config(defaults).validateConfigs();
        }
        return _config;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}

/*
    All code below is created by https://github.com/DamonOehlman
*/
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FBAV\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}

var Agent = /** @class */ (function () {
    function Agent(device, os, browser) {
        this.device = device;
        this.os = os;
        this.browser = browser;
    }
    return Agent;
}());
function setDevice(os) {
    if (os) {
        if (MOBILE_OS.includes(os)) {
            return 'mobile';
        }
        if (DESKTOP_OS.includes(os)) {
            return 'desktop';
        }
    }
    return null;
}
function setOS(ua) {
    var os = detectOS(ua);
    return os;
}
function setBrowser(ua) {
    var browser = browserName(ua);
    return browser ? BROWSERS[browser] : '';
}
function createAgent(ua) {
    var os = setOS(ua);
    var browser = setBrowser(ua);
    var device = setDevice(os);
    return new Agent(device, os, browser);
}

var SessionStore = /** @class */ (function () {
    function SessionStore() {
    }
    SessionStore.setItem = function (key, data) {
        if (!key) {
            throw new ValidationError('Empty key of store item');
        }
        if (!data) {
            throw new ValidationError('Empty data of store item');
        }
        var storageValue = JSON.stringify(data);
        if (!storageValue) {
            throw new ValidationError("Invalid JSON data from " + key + " item");
        }
        sessionStorage.setItem(key, storageValue);
    };
    SessionStore.getItem = function (key) {
        if (!key) {
            throw new ValidationError('Empty key of store item');
        }
        var storeItem = sessionStorage.getItem(key);
        if (!storeItem) {
            throw new NotFoundError(key + " not found in store");
        }
        var item = JSON.parse(storeItem);
        return item;
    };
    SessionStore.removeItem = function (key) {
        if (!key) {
            throw new ValidationError('Empty key of store item');
        }
        sessionStorage.removeItem(key);
    };
    return SessionStore;
}());

var NooaSession = /** @class */ (function () {
    function NooaSession(ip, location, agent) {
        this.ip = ip;
        this.location = location;
        this.agent = agent;
    }
    return NooaSession;
}());
function convertTextToTrace(text) {
    if (!text) {
        throw new ValidationError("Empty trace text");
    }
    /*
      Split every line
    */
    var traceArray = text.split('\n');
    /*
      Convert To Key Value
    */
    var trace = new Map();
    traceArray.forEach(function (traceItem) {
        var _a = traceItem.split('='), key = _a[0], value = _a[1];
        /*
          Remove . from timestamp
        */
        if (key === 'ts') {
            value = value.replace('.', '');
        }
        trace.set(key, value);
    });
    return Object.fromEntries(trace);
}
function fetchTrace() {
    return __awaiter(this, void 0, void 0, function () {
        var resp, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://www.cloudflare.com/cdn-cgi/trace')];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.text()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createSession() {
    return __awaiter(this, void 0, void 0, function () {
        var text, trace, agent, visitor, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchTrace()];
                case 1:
                    text = _a.sent();
                    trace = convertTextToTrace(text);
                    agent = createAgent(navigator.userAgent);
                    visitor = new NooaSession(trace.ip, trace.loc, agent);
                    SessionStore.setItem(STORE.SESSION, visitor);
                    return [2 /*return*/, visitor];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, error_2];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getSessionInfo() {
    var session = SessionStore.getItem(STORE.SESSION);
    return session;
}

var NooaEvent = /** @class */ (function () {
    function NooaEvent(event_detail, page, type, tag) {
        this.event_detail = event_detail;
        this.page = page;
        this.type = type;
        this.tag = tag;
    }
    return NooaEvent;
}());
function createEvent(type, tag) {
    try {
        if (!type) {
            throw new ValidationError('Event type is required');
        }
        var session = getSessionInfo();
        var page = window.location.pathname;
        var event_1 = new NooaEvent(session, page, type, tag);
        return event_1;
    }
    catch (error) {
        return error;
    }
}

var EventRequest = /** @class */ (function () {
    function EventRequest(_a) {
        var websiteId = _a.websiteId, type = _a.type, page = _a.page, event_detail = _a.event_detail, tag = _a.tag;
        this.websiteId = websiteId;
        this.event_detail = event_detail;
        this.page = page;
        this.event_detail = event_detail;
        this.tag = tag;
        this.type = type;
    }
    return EventRequest;
}());
var Tracker = /** @class */ (function () {
    function Tracker(cnf) {
        this.eventItems = [];
        this.config = cnf;
        this.detectMutation();
    }
    Tracker.prototype.sendEvent = function (eventRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = this.config.Host;
                        endpoint.pathname = 'api/analytics/collect';
                        return [4 /*yield*/, fetch(endpoint.href, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(eventRequest)
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Tracker.prototype.trackEvent = function (type, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var request, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        request = new EventRequest(__assign({ websiteId: this.config.WebSiteUuid }, createEvent(type, tag)));
                        return [4 /*yield*/, this.sendEvent(request)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Tracker.prototype.trackEventItems = function () {
        var _this = this;
        var elements = document.querySelectorAll("*[" + PREFIX.TYPE + "]");
        var privateEventItems = [];
        elements.forEach(function (element) {
            var type = element.getAttribute(PREFIX.TYPE);
            var tag = element.getAttribute(PREFIX.TAG);
            var listener = function () { _this.trackEvent(type, tag); };
            element.addEventListener(type, listener, true);
            var eventItem = {
                type: type,
                tag: tag,
                listener: listener,
                element: element
            };
            privateEventItems.push(eventItem);
        });
        this.eventItems = privateEventItems;
    };
    Tracker.prototype.unTrackEventItems = function () {
        if (this.eventItems.length > 0) {
            return;
        }
        this.eventItems.forEach(function (item) {
            item.element.removeEventListener(item.type, item.listener, true);
        });
        this.eventItems = [];
    };
    Tracker.prototype.mutationCallback = function (mutationList, observer) {
        var _this = this;
        mutationList.forEach(function (record) {
            if (record.type === 'childList') {
                _this.unTrackEventItems();
                _this.trackEventItems();
            }
        });
    };
    Tracker.prototype.detectMutation = function () {
        var observerOptions = {
            childList: true
        };
        var observer = new MutationObserver(this.mutationCallback.bind(this));
        observer.observe(document.body, observerOptions);
        return this;
    };
    return Tracker;
}());

var Nooa = /** @class */ (function () {
    function Nooa() {
    }
    Object.defineProperty(Nooa.prototype, "config", {
        get: function () {
            if (!this.configuration) {
                throw new ValidationError('Empty configration');
            }
            return this.configuration;
        },
        set: function (cnf) {
            try {
                var WebSiteUuid = cnf.WebSiteUuid, Host = cnf.Host, NoTrack = cnf.NoTrack;
                var _config = newConfig(WebSiteUuid, Host.toString(), NoTrack);
                this.configuration = _config;
            }
            catch (error) {
                console.error(error);
            }
        },
        enumerable: false,
        configurable: true
    });
    Nooa.prototype.initializeTracker = function () {
        try {
            this.tracker = new Tracker(this.configuration);
            return this;
        }
        catch (error) {
            console.error(error);
        }
    };
    Nooa.prototype.trackView = function () {
        var _a, _b;
        if ((_a = this.configuration) === null || _a === void 0 ? void 0 : _a.NoTrack) {
            return this;
        }
        (_b = this.tracker) === null || _b === void 0 ? void 0 : _b.trackEvent("view");
        return this;
    };
    Nooa.prototype.track = function (type, tag) {
        var _a;
        (_a = this.tracker) === null || _a === void 0 ? void 0 : _a.trackEvent(type, tag);
    };
    Nooa.prototype.set = function (uuid, host, noTrack) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (uuid && host) {
                            this.config = newConfig(uuid, host, noTrack);
                        }
                        else {
                            this.config = newConfig();
                        }
                        return [4 /*yield*/, createSession()];
                    case 1:
                        _a.sent();
                        this.initializeTracker();
                        this.trackView();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Nooa;
}());

(function (window) {
    if (!window.nooa) {
        var nooa = new Nooa();
        nooa.set();
        window.nooa = nooa;
    }
})(window);
