'use strict';

import { EmojiButton } from '@joeattardi/emoji-button';

const picker = new EmojiButton({
    autoHide: false,
    showPreview: false,
});
const trigger = document.querySelector('#emoji-trigger');

picker.on('emoji', selection => {
  // handle the selected emoji here
  console.log(selection.emoji);
});

// This fixes some display issue I was having.
setTimeout(() => {
    picker.showPicker(trigger);
}, 1);
