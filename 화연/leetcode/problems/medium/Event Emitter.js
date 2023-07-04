/**
 * https://leetcode.com/problems/event-emitter/description/
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(event, cb) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(cb);

    return {
      unsubscribe: () => {
        if(this.events[event] !== undefined && this.events[event].includes(cb)) {
          const idx = this.events[event].indexOf(cb);
          if(idx > -1) this.events[event].splice(idx, 1);
        } else {
          delete this.events[event];
        }
      }
    };
  }

  emit(event, args = []) {
    const targets = this.events[event];
    if(targets) {
      return targets.map(target => target(...args));
    } else {
      return [];
    }
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */