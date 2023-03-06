import { createPicker } from 'picmo';

// https://stackoverflow.com/a/71336017
function copyToClipboard(textToCopy) {
  const el = document.createElement('textarea');
  el.value = textToCopy;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const rootElement = document.querySelector('#trigger');
const picker = createPicker({
  rootElement,
  autoFocus: 'search',
  initialCategory: 'recents'
});

picker.addEventListener('emoji:select', event => {
  copyToClipboard(event.emoji);
  window.close();
});
