import { createPicker, NativeRenderer } from 'picmo';
import { TwemojiRenderer } from '@picmo/renderer-twemoji';

// https://stackoverflow.com/a/71336017
function copyToClipboard(textToCopy) {
  const el = document.createElement('textarea');
  el.value = textToCopy;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function main(items) {
    let renderer;
    if (items.style === 'native') {
        renderer = new NativeRenderer();
    } else {
        renderer = new TwemojiRenderer();
    }

    const rootElement = document.querySelector('#trigger');
    const picker = createPicker({
        rootElement,
        autoFocus: 'search',
        initialCategory: 'recents',
        renderer,
    });

    picker.addEventListener('emoji:select', event => {
        copyToClipboard(event.emoji);
        window.close();
    });
}

chrome.storage.local.get(null, main);
