
var container = document.getElementById('container');
var time = document.getElementById('time');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
// 開始時間
var startTime;
// 停止時間
var stopTime = 0;
// タイムアウトID
var timeoutID;

// 時間を表示する関数

 function displayTime() {
 const currentTime = new Date(Date.now() - startTime + stopTime);
 const h = String(currentTime.getHours()-9).padStart(1, '0');
 const m = String(currentTime.getMinutes()).padStart(1, '0');
 const s = String(currentTime.getSeconds()).padStart(1, '0');
 const ms = String(currentTime.getMilliseconds()).padStart(1, '0');
 time.textContent = `${h}:${m}:${s}.${ms}`;
 timeoutID = setTimeout(displayTime, 10);
 }
 

 
 startButton.addEventListener('click', () => {
 startButton.disabled = true;
 stopButton.disabled = false;
 resetButton.disabled = true;
 startTime = Date.now();
 displayTime();
  });
 

 // ストップボタンがクリックされたら時間を止める
 
 stopButton.addEventListener('click', function() {
 startButton.disabled = false;
 stopButton.disabled = true;
 resetButton.disabled = false;
 clearTimeout(timeoutID);
 stopTime += (Date.now() - startTime);
 });
 

// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
startButton.disabled = false;
stopButton.disabled = true;
resetButton.disabled = true;
time.textContent = '0:0:0:0';
stopTime = 0;
});
