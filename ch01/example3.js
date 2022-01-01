// 1-3 일련의 숫자와 파일 내용을 출력하는 새로운 서비스

var http = require('http');
var fs = require('fs');

// write out numbers
// 숫자 작성
function writeNumbers(res) {

  var counter = 0;

  // increment global, write to client
  // 숫자 증가하며 작성
  for (var i = 0; i<100; i++) {
    counter++;
    res.write(counter.toString() + '\n');
   }
}

// create http server/
// http 서버 생성
http.createServer(function (req, res) {

   var query = require('url').parse(req.url).query;
   var app = require('querystring').parse(query).file + ".txt";

   // content header
   // 컨텐츠 헤더
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // write out numbers
   // 숫자를 쓴다
   writeNumbers(res);

   // timer to open file and read contents
   // 파일을 열고 내용을 읽기 위한 타이머
   setTimeout(function() {

      console.log('opening ' + app);
      // open and read in file contents
      // 파일 내용을 열고 읽기
      fs.readFile(app, 'utf8', function(err, data) {
         if (err)
            res.write('Could not find or open file for reading\n');
         else {
            res.write(data);
         }
         // reponse is done
         // 응답 완료
         res.end();
      });
   },2000);
}).listen(8124);

console.log('Server running at 8124/');



// CMD > node node .\example3.js
// browser > http://localhost:8124/?file=main