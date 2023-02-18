const form = document.getElementById("scan-form");
const objectNameInput = document.getElementById("object-name");
const startScanButton = document.getElementById("start-scan");

objectNameInput.addEventListener("input", () => {
  if (objectNameInput.value) {
    startScanButton.removeAttribute("disabled");
  } else {
    startScanButton.setAttribute("disabled", true);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const objectName = objectNameInput.value;
  // Do something with the object name, such as starting the scanning process
  window.location.href = "scanning-page.html";
});
