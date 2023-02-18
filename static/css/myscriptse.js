function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }
// Function to open a popup
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
  }
  
  // Function to close a popup
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
  }
  
  // Close popups when the user clicks outside the content area
  window.onclick = function(event) {
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
      if (event.target == popups[i]) {
        popups[i].style.display = "none";
      }
    }
  }
    