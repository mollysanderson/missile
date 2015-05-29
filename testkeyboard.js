ThunderConnector = require('thunder-connector');

ThunderConnector.connect();


var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
if(key.name == "up"){
 stopTime = 10*22;
        setTimeout(function(){ThunderConnector.command('up');},0);
        setTimeout(function(){ThunderConnector.command('stop');},stopTime);

console.log('move up');
}

if(key.name == "down"){
 stopTime = 10*22;
        setTimeout(function(){ThunderConnector.command('down');},0);
        setTimeout(function(){ThunderConnector.command('stop');},stopTime);

console.log('move down');
}
if(key.name == "right"){
 stopTime = 10*22;
        setTimeout(function(){ThunderConnector.command('right');},0);
        setTimeout(function(){ThunderConnector.command('stop');},stopTime);

console.log('move right');
}
if(key.name == "left"){
 stopTime = 10*22;
        setTimeout(function(){ThunderConnector.command('left');},0);
        setTimeout(function(){ThunderConnector.command('stop');},stopTime);

console.log('move left');
}
if(key.name == "space"){

        setTimeout(function(){ThunderConnector.command('fire');},0);
        
console.log('fire two')
}
if(key.name == "v"){

        setTimeout(function(){ThunderConnector.command('fire');},0);
        setTimeout(function(){ThunderConnector.command('fire');},3500);
        
        
console.log('fire three')
}
if(key.name == "b"){

        setTimeout(function(){ThunderConnector.command('fire');},0);
        setTimeout(function(){ThunderConnector.command('fire');},3500);
        setTimeout(function(){ThunderConnector.command('fire');},7000);
        
        
console.log('fire four')
}
if(key.name == "n"){

        setTimeout(function(){ThunderConnector.command('fire');},0);
        setTimeout(function(){ThunderConnector.command('fire');},3500);
        setTimeout(function(){ThunderConnector.command('fire');},7000);
        setTimeout(function(){ThunderConnector.command('fire');},10500);
        
console.log('fire')
}
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();
