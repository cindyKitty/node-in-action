/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 11:23:53
 * @version $Id$
 */

// import TopClient from 'node-taobao-topclient';
TopClient = require('node-taobao-topclient').default;

var client = new TopClient({
  appkey: '23268704',
  appsecret: '9558d0fe7bddb5f387bcc266399a3235',
  REST_URL: 'http://gw.api.taobao.com/router/rest'
});
/**
 * [taobao.mixnick.get 将用户名转换成混淆后的值]
 * @type {String}
 */
client.execute('taobao.mixnick.get', {
  nick: 'sagajy'
})
/**
 * [taobao.weitao.feed.isrelation 是否关注]
 * @type {String}
 * @return {0}[未关注] {2}[已关注]
 */
client.execute('taobao.weitao.feed.isrelation', {
  fans_nick: 's01NiCh7dqntWRiWiusA9WJqnlOOkEfOG4XR+quRuqD7a8=',
  seller_nick: '化氏旗舰店'
})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.error(err);
});