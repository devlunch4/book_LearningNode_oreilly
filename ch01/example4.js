// 1-4 새로 만든 Node 애플리케이션을 2000번 호출하는 간단한 애플리케이션

var http = require('http');

//The url we want, plus the path and options we need
// 원하는 url과 필요한 경로 및 옵션
var options = {
   host: 'localhost',
   port: 8124,
   path: '/?file=secondary',
   method: 'GET'
};

var processPublicTimeline = function(response) {
   // finished? ok, write the data to a file
   // 종료? ok, 데이터를 파일에 쓴다
   console.log('finished request');
};

for (var i = 0; i < 2000; i++) {
   // make the request, and then end it, to close the connection
   // 요청을 보낸 후 종료하고 연결을 닫는다.
   http.request(options, processPublicTimeline).end();
}
