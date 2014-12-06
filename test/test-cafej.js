var observer = $.microObserver.get("test-cafej");

var dog = {
  wou: function(text) {
    observer.send("wou", text);
  }
}

observer.on("wou", function(text) {
  $("#man").text(text);
});