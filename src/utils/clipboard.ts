export default function copyToClipboard(selector) {
  var copyText = document.querySelector(selector);
  copyText.select();
  document.execCommand("copy"); // deprecated, use Clipboard API instead. https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
}

// document.querySelector("#copy").addEventListener("click", copy);
