var my_store = {};

setInterval(console.log("hello from background page!"), 1000);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    console.log("Message received in background page: " + request);
    console.log("Message sender: " + sender);
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });