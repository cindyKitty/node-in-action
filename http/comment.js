var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '一起期待下一期的课程',
	'cid': 10002
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: 'course/docomment',
	method: 'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Connection':'keep-alive',
'Content-Length':postData.length, //当前提交的数据的字符长度，服务器端会对该长度做校验，看提交的长度跟实际的长度是否一致，如果不一致可能请求会被拒绝掉
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'CNZZDATA1261110065=472021695-1488512251-http%253A%252F%252Fwww.imooc.com%252F%7C1488512251; Hm_lvt_c1c5f01e0fc4d75fd5cbb16f2e713d56=1488517040; imooc_uuid=4ad24e04-9356-49a0-852e-9c2dcf746069; imooc_isnew_ct=1489724561; PHPSESSID=h0q1cpqt2861ucnhag9164n7c7; mc_channel=banner; mc_marking=18dd20a2a135892a038a3edb06684f99; cninfo=banner-18dd20a2a135892a038a3edb06684f99; loginstate=1; apsid=liM2EzYjc1MzkxNDZmNmQ0MTdkYjIyMjVjYTFjMjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjg3Nzg3NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzYWdhanlAMTYzLmNvbQAAAAAAAAAAAAAAAAAAAAAAADlmNDRmOTI2MGEyZDBhOTAzZTU5ZTQzMzUxMjQ4OWQx3O7lWNzu5Vg%3DMD; last_login_username=sagajy%40163.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1489724570,1489731507,1490151749,1491463331; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1491540178; imooc_isnew=2; cvde=58e5ec9bba607-236',
'Host':'www.imooc.com',
'Origin':'http://www.imooc.com',
'Referer':'http://www.imooc.com/video/8837',
'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
'X-Requested-With':'XMLHttpRequest'
	} 
}


var req = http.request(options, function (res) {
	// 请求建立连接后的状态码
	console.log('Status:' + res.statusCode)
	console.log('headers:' + JSON.stringify(res.headers))
    // 在接受数据的时候node是以流的形式发上来的，所以会触发data事件
	res.on('data', function (chunk) {
		// 接受数据
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
    // 当数据接收完毕，网络连接关闭会触发end时间
	res.on('end', function () {
		console.log('评论完毕！')
	})
    // 如果请求挂了或异常会抛出error事件
	res.on('error', function(e){
		console.log('Error:' + e.message)
	})
})
// 将要提交的数据写入到请求体中
req.write(postData)
// 最后需要手动结束请求
req.end()