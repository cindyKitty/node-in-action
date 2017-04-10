var http =require('http')

http
  .createServer(function (req, res) {//创建服务器
  	res.writeHead(200, {'Content-Type':'text/plain'})
  	res.write('Hello Nodejs')
  	res.end()
  })
  .listen(2017)