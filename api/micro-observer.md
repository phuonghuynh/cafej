<a name="module_micro-observer"></a>
#micro-observer
Observer Pattern javascript implementation [Observer](http://en.wikipedia.org/wiki/Observer_pattern)

**Members**

* [micro-observer](#module_micro-observer)
  * [micro-observer~on(notify, handler, able)](#module_micro-observer..on)
  * [micro-observer~off(notify, handler)](#module_micro-observer..off)
  * [micro-observer~send(notify, ...arguments)](#module_micro-observer..send)
  * [class: micro-observer~MicroObserver](#module_micro-observer..MicroObserver)

<a name="module_micro-observer..on"></a>
##micro-observer~on(notify, handler, able)
Register event by notify

**Params**

- notify `string` - name of the notification  
- handler <code>[handler](#MicroObserver..handler)</code> - handler of the notification  
- able <code>[able](#MicroObserver..able)</code> - able to receive notification  

**Scope**: inner function of [micro-observer](#module_micro-observer)  
**Example**  
```js
MicroObserver.on("Say text", handler, able)
```

<a name="module_micro-observer..off"></a>
##micro-observer~off(notify, handler)
Unregister event by notify

**Params**

- notify `string` - Name of the notification  
- handler <code>[handler](#MicroObserver..handler)</code> - Handler of the notification  

**Scope**: inner function of [micro-observer](#module_micro-observer)  
**Example**  
```js
MicroObserver.off("Say text", handler)
```

<a name="module_micro-observer..send"></a>
##micro-observer~send(notify, ...arguments)
Send will send event by notify

**Params**

- notify `string` - Name of the notification  
- ...arguments `any` - is passed to registered {MicroObserver~handler}  

**Scope**: inner function of [micro-observer](#module_micro-observer)  
**Example**  
```js
MicroObserver.send("Say text", "tell me", "something", "to someone")
```

<a name="module_micro-observer..MicroObserver"></a>
##class: micro-observer~MicroObserver
**Members**

* [class: micro-observer~MicroObserver](#module_micro-observer..MicroObserver)

