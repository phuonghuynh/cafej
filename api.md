#Index

**Classes**

* [class: MicroObserver](#MicroObserver)
  * [callback: MicroObserver~handler](#MicroObserver..handler)
  * [callback: MicroObserver~able](#MicroObserver..able)

**Functions**

* [on(notify, handler, able)](#on)
* [off(notify, handler)](#off)
* [send(notify, ...arguments)](#send)
 
<a name="MicroObserver"></a>
#class: MicroObserver
**Members**

* [class: MicroObserver](#MicroObserver)
  * [callback: MicroObserver~handler](#MicroObserver..handler)
  * [callback: MicroObserver~able](#MicroObserver..able)

<a name="MicroObserver..handler"></a>
##callback: MicroObserver~handler
Handler of the notification

**Params**

- ... `any`  

**Scope**: inner typedef of [MicroObserver](#MicroObserver)  
**Type**: `function`  
<a name="MicroObserver..able"></a>
##callback: MicroObserver~able
Able to receive notification

**Scope**: inner typedef of [MicroObserver](#MicroObserver)  
**Type**: `function`  
**Returns**: `undefined` | `true` - handler is invoked when notification coming <br/>`false` - handler is not invoked when notification coming  
<a name="on"></a>
#on(notify, handler, able)
Register event by notify

**Params**

- notify `string` - name of the notification  
- handler <code>[handler](#MicroObserver..handler)</code> - handler of the notification  
- able <code>[able](#MicroObserver..able)</code> - able to receive notification  

**Example**  
```js
MicroObserver.on("Say text", handler, able)
```

<a name="off"></a>
#off(notify, handler)
Unregister event by notify

**Params**

- notify `string` - Name of the notification  
- handler <code>[handler](#MicroObserver..handler)</code> - Handler of the notification  

**Example**  
```js
MicroObserver.off("Say text", handler)
```

<a name="send"></a>
#send(notify, ...arguments)
Send will send event by notify

**Params**

- notify `string` - Name of the notification  
- ...arguments `any` - is passed to registered {MicroObserver~handler}  

**Example**  
```js
MicroObserver.send("Say text", "tell me", "something", "to someone")
```

