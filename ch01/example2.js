//page 17 비동기로 파일 읽기 

// load http module
// http 모듈 로드
var http = require('http');
var fs = require('fs');

// create http server
// http 서버 생성
http.createServer(function (req, res) {

   // open and read in helloworld.js
   // helloworld.js 열고 읽기
   fs.readFile('helloworld.js', 'utf8', function(err, data) {

      res.writeHead(200, {'Content-Type': 'text/plain'});
      if (err)
         res.write('Could not find or open file for reading\n');
      else

         // if no error, write JS file to client
         // 오류가 없으면 JS 파일을 클라이언트에게 쓰기
         res.write(data);
      res.end();
     });
}).listen(8124, function() { console.log('bound to port 8124');});

console.log('Server running on 8124/');
