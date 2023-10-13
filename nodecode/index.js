var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {
console.log('Ik kom uit Amsterdam!');
}
var myEventHandlerTwee = function () {
console.log('Ik kom uit Amsterdam!');
}
var myEventHandlerDrie = function () {
console.log('Ik kom uit Amsterdam!');
}
eventEmitter.on('amsterdam', myEventHandler);
eventEmitter.emit('amsterdam');