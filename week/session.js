/**
 * 会话
 */
let http = require('http');
let queryString = require('querystring');
let uuid = require('uuid');

http.createServer((req, res) => {
  let SESSION_ID = 'connect.id';
  let sessions = {};

  let cookie = req.headers['cookie'];
  let cookieObj = queryString.parse(cookie);
  if (cookieObj[SESSION_ID]) {
    let sessionObj = sessions[cookieObj[SESSION_ID]];
    if (sessionObj) {
      sessionObj.money -= 10;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('欢迎你，老顾客，你的会员卡内还有' + sessionObj.money + '元');
    }

  }
  let sessionId = uuid.v4();
  sessions[sessionId] = {money: 100};
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', SESSION_ID + '=' + sessionId);
  res.end('欢迎光临，100元会员卡已赠送');
}).listen(8080);