'use strict';

import { EmojiButton } from '@joeattardi/emoji-button';

// The copy text input.
const copyPlugin = {
    render(picker) {
        const input = document.createElement('input');
        input.id = 'output';
        input.placeholder = 'Copy from here';

        return input;
    }
};

// Make ESC close the whole popup.
document.onkeydown = function(e) {
    if (!e) e = window.event;

    if (e.keyCode == '27' || e.charCode == '27') {
        window.close();
    }
}

const picker = new EmojiButton({
    autoHide: false,
    initialCategory: 'recents',
    plugins: [copyPlugin],
    theme: 'auto',
});

picker.on('emoji', selection => {
    output.value += selection.emoji;
    output.select();
    document.execCommand('copy');
});

setTimeout(() => {
    const trigger = document.querySelector('#trigger');
    picker.showPicker(trigger);
}, 0);
