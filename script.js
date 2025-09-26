function openPDF(selectId) {
  let menu = document.getElementById(selectId);
  if (!menu) return;

  menu.addEventListener("change", function () {
    let pdfPath = this.value;
    if (pdfPath) {
      // Direct new tab open
      window.open(pdfPath, "_self");
    }
  });
}

// Attach listeners
openPDF("physicsMenu");
openPDF("mathsMenu");
openPDF("englishMenu");
openPDF("electronicsMenu");
openPDF("webdevMenu");
