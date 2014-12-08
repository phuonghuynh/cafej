#MicroObserver

Observer Pattern javascript implementation [Observer](http://en.wikipedia.org/wiki/Observer_pattern)

##Methods

###on

Register event by notify

**Params**:  
*   notify _String_

    Name of the notification
*   handler _Function_

    Handler of the notification
*   able _Function_

    Able to receive notification
 - return undefined or true - handler is invoked when notification coming
 - return false - handler is not invoked when notification coming

####Example

 MicroObserver.on("Say text", handler, able)

###off

Unregister event by notify

**Params**:  
*   notify _String_

    - Name of the notification
*   handler _Function_

    - Handler of the notification

####Example

 MicroObserver.off("Say text", handler)

###send

Send will send event by notify

**Params**:  
*   notify _String_

    - Name of the notification
*   arguments _*_

    is passed to registered handler

####Example

 MicroObserver.send("Say text", "tell me", "something", "to someone")

