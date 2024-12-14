const allowedSites = ["example.com", "anotherexample.com"]; // Replace with your allowed sites

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    if (!allowedSites.some(site => url.hostname.includes(site))) {
      return { cancel: true }; // Block the site
    }
  },
  { urls: ["<all_urls>"] }, // Apply to all URLs
  ["blocking"]
);
