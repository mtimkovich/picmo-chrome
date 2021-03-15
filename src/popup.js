'use strict';

import { EmojiButton } from '@joeattardi/emoji-button';

function createPicker(items) {
    // The copy text input field.
    const copyPlugin = {
        render(picker) {
            const input = document.createElement('input');
            input.id = 'output';
            input.placeholder = 'Copy from here';

            return input;
        }
    };

    const picker = new EmojiButton({
        autoHide: items.autoHide,
        initialCategory: 'recents',
        plugins: [copyPlugin],
        style: items.style,
        theme: 'auto',
    });

    picker.on('emoji', selection => {
        output.value += selection.emoji;
        output.select();
        document.execCommand('copy');
    });

    picker.on('hidden', () => {
        window.close();
    });

    const trigger = document.querySelector('#trigger');
    picker.showPicker(trigger);
}

// Make ESC close the whole popup.
document.onkeydown = function(e) {
    if (!e) e = window.event;

    if (e.keyCode == '27' || e.charCode == '27') {
        window.close();
    }
}

chrome.storage.local.get(null, createPicker);
