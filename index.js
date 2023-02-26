{
  /*async function fetchData() {

}
// Add a listener on all requests
browser.webRequest.onBeforeRequest.addListener(
    requestDetails => {
      // Fetch the requested URL using browser fetch API
      return fetch(requestDetails.url).then((response) => {
        // Read response body 
        return response.text().then((data) => {
          if (hasMaliciousLinkOrCode(data)) {
            alert("This page contains malicious code or phishing links!");
          }
        });
      });
    },
    {urls: ["<all_urls>"]},
    ["blocking"]);
  
// Function to check if page has malicious link/code
function hasMaliciousLinkOrCode(sourceCode) {
  // TODO: Implement logic to search for malicious code here
} */
}

var timewastingWebsites = ["https://facebook.com", "https://twitter.com", "https://netflix.com"];

var timeLimit = 30; //minutes

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    for (var i = 0; i < timewastingWebsites.length; i++) {
      var website = timewastingWebsites[i];
      if (tab.url.indexOf(website) !== -1) {
        setTimeout(function () {
          chome.tabs.remove(tabId);
        }, timeLimit * 60 * 60 * 1000);
      }
    }
  }
});
