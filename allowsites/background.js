const allowedSites = ["example.com", "anotherexample.com"];

chrome.storage.sync.get("allowedSites", (data) => {
  const allowedSites = data.allowedSites || [];
  
  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      const url = new URL(details.url);
      if (!allowedSites.some(site => url.hostname.includes(site))) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
});
