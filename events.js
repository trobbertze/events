Events = function() {
  if ( arguments.callee._singletonInstance ) {
    return arguments.callee._singletonInstance;
  }

  _Events = function() {
    this.events = [];
  };

  _Events.prototype.constructor = Events;
  _Events.prototype.emit = function(name, obj) {
    _.each(this.events, function(evt){
      if(evt.name === name) {
      evt.callback(evt);
      }
    });
  };
  _Events.prototype.on = function(name, callback) {
    this.events.push({
      name: name,
      callback: callback
    });
  };
  arguments.callee._singletonInstance = new _Events();
};

Events();
