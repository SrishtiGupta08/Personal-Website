const yearElement = document.getElementById('year');
const copyButton = document.getElementById('copy-contact');
const copyStatus = document.getElementById('copy-status');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const contactText = 'Email: srishti.profile@example.com | Phone: +91 1234567890';

    try {
      await navigator.clipboard.writeText(contactText);
      copyStatus.textContent = 'Contact info copied successfully.';
    } catch {
      copyStatus.textContent = 'Copy not available in this browser, but the contact details are visible above.';
    }
  });
}