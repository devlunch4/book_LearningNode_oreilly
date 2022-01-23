var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

// connect to server 
// 서버로 연결
client.connect ('8124','localhost', function () {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

// prepare for input from terminal
// 터미널로부터 입력준비
process.stdin.resume();

// when receive data, send to server
// 데이터를 입력 받으면 서버로 전송
process.stdin.on('data', function (data) {
   client.write(data);
});

// when receive data back, print to console
// 데이터를 수시하면 콘솔로 출력
client.on('data',function(data) {
    console.log(data);
});

// when server closed
// 서버가 닫히는 경우
client.on('close',function() {
    console.log('connection is closed');
});

// 에러. nvm 17이 필요한것 같다.