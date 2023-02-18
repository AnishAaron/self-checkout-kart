const generateBillButton = document.getElementById("generate-bill");
const downloadBillLink = document.getElementById("download-bill");

generateBillButton.addEventListener("click", () => {
  // Replace this with your PDF generation code
  const billContent = "This is a sample bill content.";

  // Display the generated bill in the bill display div
  const billDisplay = document.querySelector(".bill-display");
  billDisplay.textContent = billContent;

  // Enable the download bill link with the PDF data
  const pdfData = "data:application/pdf;base64," + btoa(billContent);
  downloadBillLink.href = pdfData;
  downloadBillLink.setAttribute("download", "bill.pdf");
  downloadBillLink.style.display = "block";
});
