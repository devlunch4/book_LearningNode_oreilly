// http module load - http 모듈 로드
var http = require('http');

// http server create - http 서버 생성
http.createServer(function (req, res) {
    // content Header - 컨텐츠 헤ej
    res.writeHead(200, { 'content-type': 'text/pain' });
    // Write a message and send a signal that communication is complete - 메시지를 쓰고 통신이 완료되었다는 신호를 보냄
    res.end("Hello, World!\n");
}).listen(8124);
console.log('Server running on 8124');
