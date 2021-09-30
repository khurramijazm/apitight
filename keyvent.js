/* 
 * Author : khurram ijaz
 */

var eventEmitter=require('events').EventEmitter;function Event(){eventEmitter.call(this);this.setMaxListeners(5000)};
require('util').inherits(Event, eventEmitter);Event.prototype.emitEvent = function(a,b){this.emit(a,b)};module["exports"]=new Event();

