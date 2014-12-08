#Index

**Modules**

* [$.microObserver](#$.module_microObserver)

**Members**

* [on](#on)
* [off](#off)
* [send](#send)
 
<a name="$.module_microObserver"></a>
#$.microObserver
Export to Jquery object

**Example**  
```js
var observer = $.microObserver.get("test-cafej");

var dog = {
  wou: function(text) {
    observer.send("wou", text);
  }
}

observer.on("wou", function(text) {
  $("#man").text(text);
});
```

<a name="on"></a>
#on
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
#off
Unregister event by notify

**Params**

- notify `string` - Name of the notification  
- handler <code>[handler](#MicroObserver..handler)</code> - Handler of the notification  

**Example**  
```js
MicroObserver.off("Say text", handler)
```

<a name="send"></a>
#send
Send will send event by notify

**Params**

- notify `string` - Name of the notification  
- ...arguments `any` - is passed to registered {MicroObserver~handler}  

**Example**  
```js
MicroObserver.send("Say text", "tell me", "something", "to someone")
```

