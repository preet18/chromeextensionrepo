const sitesInput = document.getElementById("sites");
const saveButton = document.getElementById("save");

// Load saved sites
chrome.storage.sync.get("allowedSites", (data) => {
  sitesInput.value = (data.allowedSites || []).join("\n");
});

// Save new sites
saveButton.addEventListener("click", () => {
  const sites = sitesInput.value.split("\n").map(site => site.trim()).filter(Boolean);
  chrome.storage.sync.set({ allowedSites: sites }, () => {
    alert("Saved!");
  });
});
